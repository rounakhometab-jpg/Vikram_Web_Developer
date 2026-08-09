import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VIKRAM WEB DEV — Freelance Web Designer & Developer',
  description: 'Personal portfolio website for Vikram Web Dev. Modern, responsive, and interactive websites built to make your brand stand out.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="bg-[#0A0C10] text-white antialiased selection:bg-[#FF3D00] selection:text-white">
        {children}
      </body>
    </html>
  );
}

