//src\app\layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Realtime Monitor",
  description: "Real-Time SaaS Monitoring Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white transition">

            {/* Sidebar */}
            <aside className="w-64 border-r border-gray-200 dark:border-gray-800 p-6 hidden md:block">
              <h2 className="text-xl font-bold mb-8">Realtime Monitor</h2>

              <nav className="space-y-4 text-sm">
                <Link href="/dashboard" className="block hover:opacity-70">
                  Dashboard
                </Link>
                <Link href="/incidents" className="block hover:opacity-70">
                  Incidents
                </Link>
              </nav>
            </aside>

            {/* Main Area */}
            <div className="flex-1 flex flex-col">

              {/* Topbar */}
              <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-lg font-semibold">
                  SaaS Monitoring Platform
                </h1>
                <ThemeToggle />
              </header>

              {/* Content */}
              <main className="flex-1 p-6">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}