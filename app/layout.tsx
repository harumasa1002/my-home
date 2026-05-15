// app/layout.tsx
"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "提供サービス" },
  { href: "/profile", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Header */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-4 py-3">
            {/* 左側：サイト名 */}
            <Link
              href="/"
              className="min-w-0 group flex items-baseline gap-2 hover:opacity-90 transition-opacity"
              aria-label="トップへ"
            >
              <span className="font-semibold tracking-tight text-gray-900">
                くすりとデータ
              </span>
              <span className="hidden sm:inline text-sm text-gray-500">
                アカデミア向け PK/PD 解析・データ活用支援
              </span>
            </Link>

            {/* 右側：ナビ（現在ページ表示あり） */}
            <nav className="flex items-center gap-4 sm:gap-6 text-sm">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative py-2 transition-colors",
                      isActive
                        ? "text-blue-700 font-medium"
                        : "text-gray-700 hover:text-blue-700",
                    ].join(" ")}
                  >
                    {item.label}
                    {/* 下線（アクティブ時のみ表示） */}
                    <span
                      className={[
                        "absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full transition-opacity",
                        isActive ? "bg-blue-700 opacity-100" : "opacity-0",
                      ].join(" ")}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen pt-16">
          {/* 固定ヘッダー下での余白を少しだけ整える */}
          <div className="h-2" />
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-14 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-xs text-gray-500 space-y-2">
            <p>© {new Date().getFullYear()} くすりとデータ</p>
            <p className="text-[11px] text-gray-500">
              ※本サイトは大学・研究機関の研究室（アカデミア）向けの解析支援情報を掲載しています。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
