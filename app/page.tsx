// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="space-y-12">
          {/* Hero */}
          <header className="space-y-5">
            {/* 追加：顔写真＋一言メッセージ（上部で目を止める） */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 md:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* 顔写真：/public/profile.jpg を置いてください */}
                {/* もし画像がまだ無い場合は、この Image ブロックを一旦コメントアウトしてください */}
                <Image
                  src="/profile1.jpg"
                  alt="プロフィール写真"
                  width={96}
                  height={96}
                  className="rounded-xl object-cover ring-1 ring-gray-200"
                  priority
                />

                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-blue-700">
                    Drug Development Data Analysis / PK・PK/PD Support for Academia
                  </p>

                  {/* 目を引く“短い”メッセージ（大きく） */}
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mt-2">
                    研究データを、論文として「伝わる形」に。
                  </h1>

                  {/* 一文で価値を言い切る（長文は下に回す） */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-2">
                    アカデミア向けに、非臨床〜早期臨床データの{" "}
                    <span className="font-semibold text-gray-900">PK/PD解析</span> と{" "}
                    <span className="font-semibold text-gray-900">図表作成・解釈整理</span>
                    まで伴走します。
                  </p>

                  {/* 信頼バッジ（色を増やさず“それっぽく”） */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
                      博士（薬学）
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                      前臨床〜早期臨床
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                      Rで再現可能な解析
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                      守秘・丁寧に伴走
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA（カード内に入れると押されやすい） */}
              <div className="flex flex-wrap gap-3 md:gap-4 items-center pt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
                >
                  お問い合わせ（相談する）
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-blue-900 px-5 py-2.5 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 transition-colors"
                >
                  提供サービスを見る
                </Link>

                <Link
                  href="/profile"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 transition-colors"
                >
                  プロフィールを見る
                </Link>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed pt-3">
                ※データが未整理でも問題ありません。研究目的とデータ形式（Excel/CSV）だけでも共有いただければ、進め方をご提案します。
              </p>
            </div>

            {/* 既存の説明文（ここから下は“詳しい人向け”でOK） */}
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              大学・研究機関の研究室（アカデミア）を主な対象として、非臨床・臨床データの薬物動態／薬力学（PK/PD）
              解析と、結果の解釈・整理（論文化を見据えた図表作成を含む）を支援します。
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              データはあるのに活かしきれない。解析方法やツールの制約によって、得られるはずの示唆や解釈が限られてしまう-
              国内のアカデミアがそうした状況にあることをこれまで強く感じてきました。
              研究者の方々が本来持っているアイデアや情熱が、解析のハードルによって制限されてしまうのは非常にもったいないと感じています。
              そこで、解析の側面から研究を支え、研究の可能性を少しでも広げることを目的として、本サービスを立ち上げました。
            </p>
          </header>

          {/* 2カラム（想定／概要） */}
          <section className="grid gap-6 md:grid-cols-2">
            {/* ターゲット */}
            <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                このような方を想定しています
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
                <li>PK/PD解析を試してみたいが、研究室内に解析のノウハウがない</li>
                <li>薬物濃度や薬効指標のデータを取得したが、どのように解釈すべきか迷っている</li>
                <li>学会発表や論文投稿に向けて、解析結果の整理や図表作成を進めたい</li>
                <li>解析結果の妥当性や解釈を、専門的な観点から確認してほしい</li>
              </ul>
            </div>

            {/* サービス概要 */}
            <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                提供していること（概要）
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-base text-gray-800 mb-6">
                <li>臨床データの薬物動態解析（Non-Compartmental Analysis）および探索的 PK/PD 解析</li>
                <li>非臨床データの薬物動態解析および PK/PD 関係の整理</li>
                <li>R を用いたデータ整理・可視化（記述統計、グラフ作成、基本的な比較）</li>
                <li>論文・学会発表を見据えた図表作成、結果の解釈・考察整理のサポート</li>
              </ul>

              <p className="text-sm text-gray-600 leading-relaxed">
                ※解析内容と進行スケジュールは事前にすり合わせのうえ、研究の進行に合わせて段階的に対応します。
                <br />
                ※将来的には、非臨床・臨床データを統合的に扱うモデリング＆シミュレーション（M&amp;S）の考え方を用いた
                解析支援の提供も検討しています。
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
