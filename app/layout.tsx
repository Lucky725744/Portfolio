import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Kundan Mishra | Full Stack Developer',
  description: 'Full Stack Developer specializing in Laravel, Vue.js, PHP, and modern web technologies. Building scalable web applications and robust database solutions.',
  generator: 'next.js',
  authors: [{ name: 'Kundan Mishra' }],
  keywords: [
    'Kundan Mishra',
    'Full Stack Developer',
    'Laravel',
    'Vue.js',
    'PHP',
    'Web Developer',
    'Portfolio',
  ],
  openGraph: {
    title: 'Kundan Mishra | Full Stack Developer',
    description: 'Full Stack Developer specializing in Laravel, Vue.js, PHP, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
