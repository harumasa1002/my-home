// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "くすりとデータの個人解析サービス",
  description:
    "臨床薬理・PK/PD解析とRによるデータ解析を提供する研究者向けサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
     <body className={`${inter.className} bg-gray-50`}>
        {/* Header */}
        <header className="fixed inset-x-0 top-0 z-50 bg-white border-b shadow-md">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            {/* 左側：サイトタイトル */}
            <div className="font-semibold text-lg">
              <Link href="/">くすりとデータの個人サイト</Link>
            </div>

            {/* 右側：ナビ */}
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
              <Link href="/profile" className="hover:text-blue-600">
                Profile
              </Link>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen pt-20">{children}</main>

        {/* Footer（必要なら後で編集） */}
        <footer className="mt-10 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} くすりとデータの個人サイト
        </footer>
      </body>
    </html>
  );
}
