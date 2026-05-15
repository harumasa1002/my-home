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
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 md:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <Image
                  src="/profile2.jpg"
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

                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mt-2">
                    研究データを、論文として「伝わる形」に。
                  </h1>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-2">
                    アカデミア向けに、非臨床〜早期臨床データの{" "}
                    <span className="font-semibold text-gray-900">PK/PD解析</span>、
                    <span className="font-semibold text-gray-900">図表作成</span>、
                    <span className="font-semibold text-gray-900">
                      試験実施前・測定前のデータ取得方針の整理
                    </span>
                    を支援します。
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
                      博士（薬学）
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                      非臨床〜早期臨床
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                      Rで再現可能な解析
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                      試験実施前の論点整理
                    </span>
                  </div>
                </div>
              </div>

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
                ※データが未整理でも問題ありません。研究目的、予定している試験内容、
                取得済みまたは取得予定のデータ形式（Excel/CSVなど）を共有いただければ、
                解析に向けた進め方を一緒に整理します。
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              大学・研究機関の研究室（アカデミア）を主な対象として、非臨床・早期臨床データの
              薬物動態／薬力学（PK/PD）解析、結果の解釈整理、論文化を見据えた図表作成を支援します。
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              データはあるのに活かしきれない。薬物濃度や薬効データを取得しても、
              どのように整理し、どの指標を見て、どこまで解釈してよいのか判断に迷う。
              そのような場面では、解析の専門知識が研究の進み方に大きく影響します。
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              本サービスでは、PK/PD解析そのものに加えて、試験実施前・測定前の段階で
              「解析に必要なデータは何か」「どのような測定項目や採血時点を考慮すべきか」
              「どのような図表や解釈につなげられそうか」を一緒に整理し、
              研究成果を伝わりやすい形にまとめることを目指します。
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
                <li>
                  PK/PD解析を取り入れたいが、研究室内に解析のノウハウがない
                </li>
                <li>
                  薬物濃度や薬効指標のデータを取得したが、どのように解釈すべきか迷っている
                </li>
                <li>
                  試験実施前に、PK/PD解析を見据えてどのようなデータを取得すべきか整理したい
                </li>
                <li>
                  測定項目、採血時点、薬効指標、背景情報など、解析に必要なデータを事前に確認したい
                </li>
                <li>
                  学会発表や論文投稿に向けて、解析結果の整理や図表作成を進めたい
                </li>
                <li>
                  解析結果の妥当性や解釈を、専門的な観点から確認してほしい
                </li>
              </ul>
            </div>

            {/* サービス概要 */}
            <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                提供していること（概要）
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-base text-gray-800 mb-6">
                <li>
                  臨床データの薬物動態解析（Non-Compartmental Analysis）および探索的PK/PD解析
                </li>
                <li>
                  非臨床データの薬物動態解析およびPK/PD関係の整理
                </li>
                <li>
                  Rを用いたデータ整理・可視化（記述統計、グラフ作成、基本的な比較）
                </li>
                <li>
                  論文・学会発表を見据えた図表作成、結果の解釈・考察整理のサポート
                </li>
                <li>
                  試験実施前・測定前の論点整理
                  （取得すべきデータ、測定項目、採血時点、薬効指標、図表化の方向性の確認）
                </li>
              </ul>

              <p className="text-sm text-gray-600 leading-relaxed">
                ※本サービスは、研究計画や試験デザイン全体を包括的に設計するものではなく、
                PK/PD解析を見据えて、試験実施前に整理しておくべきデータ、
                測定項目、採血時点、薬効指標、解析方針、結果の見せ方を確認する支援を中心に行います。
                <br />
                ※解析内容と進行スケジュールは事前にすり合わせのうえ、
                研究の進行に合わせて段階的に対応します。
              </p>
            </div>
          </section>

          {/* 追加：試験実施前から相談できることを明示 */}
          <section className="bg-blue-50 border border-blue-100 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              試験実施前の段階からご相談いただけます
            </h2>

            <p className="text-base text-gray-800 leading-relaxed">
              すでにデータがそろっている場合だけでなく、これから試験や測定を検討している段階でも、
              「PK/PD解析に必要なデータは何か」「どの時点で採血・測定すべきか」
              「どの薬効指標や背景情報を整理しておくべきか」といった点を一緒に確認できます。
            </p>

            <p className="text-sm text-gray-700 leading-relaxed mt-4">
              まずは、研究目的、予定している試験内容、取得済みまたは取得予定のデータ、
              困っている点を簡単に共有ください。解析として対応できる範囲と、
              進め方の候補をご提案します。
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
              >
                相談内容を送る
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}