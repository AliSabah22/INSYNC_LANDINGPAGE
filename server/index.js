const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://insyncproductions.com', 'https://www.insyncproductions.com']
    : ['http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/insync', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Lead Schema
const leadSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  company: String,
  industry: String,
  budget: String,
  projectType: String,
  timeline: String,
  description: String,
  leadMagnet: String,
  newsletter: { type: Boolean, default: true },
  strategyCall: { type: Boolean, default: true },
  source: String,
  utmData: {
    utm_source: String,
    utm_medium: String,
    utm_campaign: String,
    utm_term: String,
    utm_content: String
  },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'converted'], default: 'new' },
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);

// Analytics Schema
const analyticsSchema = new mongoose.Schema({
  page: String,
  action: String,
  userId: String,
  sessionId: String,
  timestamp: { type: Date, default: Date.now },
  userAgent: String,
  ip: String,
  referrer: String,
  utmData: {
    utm_source: String,
    utm_medium: String,
    utm_campaign: String,
    utm_term: String,
    utm_content: String
  }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Submit lead
app.post('/api/leads', async (req, res) => {
  try {
    const leadData = {
      ...req.body,
      source: req.headers.referer || 'direct',
      utmData: {
        utm_source: req.query.utm_source || req.body.utm_source,
        utm_medium: req.query.utm_medium || req.body.utm_medium,
        utm_campaign: req.query.utm_campaign || req.body.utm_campaign,
        utm_term: req.query.utm_term || req.body.utm_term,
        utm_content: req.query.utm_content || req.body.utm_content
      }
    };

    const lead = new Lead(leadData);
    await lead.save();

    // Track analytics
    const analytics = new Analytics({
      page: 'lead-form',
      action: 'form-submit',
      sessionId: req.body.sessionId,
      userAgent: req.headers['user-agent'],
      ip: req.ip,
      referrer: req.headers.referer,
      utmData: leadData.utmData
    });
    await analytics.save();

    // Send email notification (implement with your email service)
    // await sendLeadNotification(lead);

    res.status(201).json({ 
      success: true, 
      message: 'Lead submitted successfully',
      leadId: lead._id 
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting lead' 
    });
  }
});

// Get leads (admin only - implement authentication)
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ success: false, message: 'Error fetching leads' });
  }
});

// Track page view
app.post('/api/analytics/pageview', async (req, res) => {
  try {
    const analytics = new Analytics({
      page: req.body.page,
      action: 'pageview',
      sessionId: req.body.sessionId,
      userAgent: req.headers['user-agent'],
      ip: req.ip,
      referrer: req.headers.referer,
      utmData: req.body.utmData
    });
    await analytics.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ success: false });
  }
});

// Track conversion
app.post('/api/analytics/conversion', async (req, res) => {
  try {
    const analytics = new Analytics({
      page: req.body.page,
      action: 'conversion',
      sessionId: req.body.sessionId,
      userAgent: req.headers['user-agent'],
      ip: req.ip,
      referrer: req.headers.referer,
      utmData: req.body.utmData
    });
    await analytics.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ success: false });
  }
});

// Get analytics summary (admin only)
app.get('/api/analytics/summary', async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const totalPageviews = await Analytics.countDocuments({ action: 'pageview' });
    const totalConversions = await Analytics.countDocuments({ action: 'conversion' });
    
    const conversionRate = totalPageviews > 0 ? (totalConversions / totalPageviews * 100).toFixed(2) : 0;
    
    res.json({
      success: true,
      summary: {
        totalLeads,
        totalPageviews,
        totalConversions,
        conversionRate: `${conversionRate}%`
      }
    });
  } catch (error) {
    console.error('Analytics summary error:', error);
    res.status(500).json({ success: false, message: 'Error fetching analytics' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
