// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen p-10 bg-gray-50 text-gray-800">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>

        <p className="mb-6 leading-relaxed">
          解析に関するご相談・質問などがありましたら、こちらのフォームよりお問い合わせください。
          現時点ではフォーム送信のみ可能です（メール送信機能は後日追加予定）。
        </p>

        {submitted ? (
          <div className="p-6 bg-green-100 border border-green-300 rounded-md">
            <p className="text-green-800 font-semibold">
              送信が完了しました。内容を確認次第ご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-md shadow-sm border"
          >
            {/* 名前 */}
            <div>
              <label className="block mb-1 font-semibold">お名前</label>
              <input
                type="text"
                required
                className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="山田太郎"
              />
            </div>

            {/* メール */}
            <div>
              <label className="block mb-1 font-semibold">メールアドレス</label>
              <input
                type="email"
                required
                className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="example@example.com"
              />
            </div>

            {/* 内容 */}
            <div>
              <label className="block mb-1 font-semibold">お問い合わせ内容</label>
              <textarea
                required
                rows={6}
                className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="お問い合わせ内容をご記入ください"
              ></textarea>
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md"
            >
              送信
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

