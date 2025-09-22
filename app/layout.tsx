import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/next'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'INSYNC Productions - Video Marketing Agency Mississauga | GTA Content Creation',
  description: 'Leading video production and content marketing agency in Mississauga, Ontario. Serving GTA businesses with YouTube marketing, social media content, and lead generation strategies. Scale your business with proven content creation.',
  keywords: 'video production Mississauga, content marketing GTA, YouTube marketing Toronto, social media agency Ontario, video marketing agency Mississauga, content creation Toronto, lead generation GTA, video production Brampton, content marketing Vaughan, digital marketing Mississauga',
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
    title: 'INSYNC Productions - Video Marketing Agency Mississauga | GTA Content Creation',
    description: 'Leading video production and content marketing agency in Mississauga, Ontario. Serving GTA businesses with proven content creation and lead generation strategies.',
    url: 'https://insyncproductions.com',
    siteName: 'INSYNC Productions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INSYNC Productions - Video Marketing Agency Mississauga GTA',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INSYNC Productions - Video Marketing Agency Mississauga | GTA Content Creation',
    description: 'Leading video production and content marketing agency in Mississauga, Ontario. Serving GTA businesses.',
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
        <StructuredData />
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
        <Analytics />
      </body>
    </html>
  )
}
