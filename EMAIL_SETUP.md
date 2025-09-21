# Email Setup Instructions

## Overview
The free strategy form now sends email notifications to `insyncsocial27@gmail.com` when users submit the form.

## Setup Required

### 1. Create Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration for Form Submissions
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail Configuration
To use Gmail for sending emails, you need to:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled
   - Go to "App passwords" section
   - Generate a new app password for "Mail"
   - Use this app password (not your regular Gmail password) in `EMAIL_PASS`

### 3. Update Environment Variables
Replace the placeholder values in `.env.local`:
- `EMAIL_USER`: Your Gmail address (the one you'll send emails from)
- `EMAIL_PASS`: The app password you generated

## Email Format
When someone submits the form, you'll receive an email with this format:

```
Subject: New Strategy Form Submission from [User's Name]

Name: [user's name]
Email: [user's email]
Type of business: [user's selected type of business]
Niche/industry: [user's niche/industry]
Additional notes: [user's additional notes]
```

## Testing
1. Start your development server: `npm run dev`
2. Navigate to `/free-strategy`
3. Fill out and submit the form
4. Check your email at `insyncsocial27@gmail.com`

## Troubleshooting
- Make sure `.env.local` is in your `.gitignore` file
- Verify your Gmail app password is correct
- Check the console for any error messages
- Ensure 2-factor authentication is enabled on your Google account
