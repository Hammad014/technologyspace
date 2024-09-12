import localFont from "next/font/local";
import "./globals.css";

// Font setup (no changes needed here)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata export (changed from TypeScript-specific export)
export const metadata = {
  title: 'TechSpace Blog',
  description: 'Explore the latest topics on IT, IoT, and more!',
};

// Main layout component (removed TypeScript type annotations)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
