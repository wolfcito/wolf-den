import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitializer = `(() => {
  const storageKey = "wolf-den-theme";
  const root = document.documentElement;
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") {
      root.dataset.theme = stored;
      return;
    }
  } catch (error) {
    console.warn("Theme storage unavailable", error);
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = prefersDark ? "dark" : "light";
})();`;

export const metadata: Metadata = {
  title: "Wolf Den",
  description: "Control center for the Wolf Den builder collective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Single+Ink:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: theme bootstrap */}
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
        {children}
      </body>
    </html>
  );
}
