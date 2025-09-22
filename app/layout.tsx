import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'INSYNC - Premium Content Creation & Lead Generation',
  description: 'Scale your business with our proven content creation and lead generation strategies. From YouTube mastery to full-service content production, we help entrepreneurs generate qualified leads and scale to $1M+/Year.',
  keywords: 'content creation, lead generation, video production, YouTube marketing, content strategy, business growth',
  authors: [{ name: 'INSYNC Productions' }],
  creator: 'INSYNC Productions',
  publisher: 'INSYNC Productions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://insyncproductions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'INSYNC - Premium Content Creation & Lead Generation',
    description: 'Scale your business with our proven content creation and lead generation strategies. Generate qualified leads and scale to $1M+/Year.',
    url: 'https://insyncproductions.com',
    siteName: 'INSYNC Productions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INSYNC - Content Creation & Lead Generation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INSYNC - Premium Content Creation & Lead Generation',
    description: 'Scale your business with our proven content creation and lead generation strategies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1f2937',
                color: '#fff',
                border: '1px solid #374151',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
