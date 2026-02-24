import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <aside className="w-64 bg-gray-900 text-white p-6">
            <h2 className="text-2xl font-bold mb-8">Email SaaS</h2>
            <nav className="space-y-4">
              <Link href="/" className="block hover:text-blue-400">Dashboard</Link>
              <Link href="/campaigns/create" className="block hover:text-blue-400">Create Campaign</Link>
            </nav>
          </aside>
          <main className="flex-1 p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}