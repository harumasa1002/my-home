// app/page.tsx
import Link from "next/link";
import Image from "next/image";

const NOTE_MAGAZINE_URL =
  "https://note.com/clin_data_analy/m/mc3b430dfae55";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <div className="space-y-12">
          {/* Hero */}
          <header className="space-y-5">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <Image
                  src="/profile2.jpg"
                  alt="プロフィール写真"
                  width={96}
                  height={96}
                  className="rounded-xl object-cover ring-1 ring-gray-200"
                  priority
                />

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 md:text-sm">
                    Drug Development Data Analysis / PK/PD Support for Academia
                  </p>

                  <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                    研究データを、論文として「伝わる形」に。
                  </h1>

                  <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
                    アカデミア向けに、非臨床〜早期臨床データの{" "}
                    <span className="font-semibold text-gray-900">
                      PK/PD解析
                    </span>
                    、
                    <span className="font-semibold text-gray-900">
                      図表作成
                    </span>
                    、
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

              <div className="flex flex-wrap items-center gap-3 pt-5 md:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                >
                  お問い合わせ（相談する）
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-blue-900 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
                >
                  提供サービスを見る
                </Link>

                <Link
                  href="/profile"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100"
                >
                  プロフィールを見る
                </Link>
              </div>

              <div className="pt-3">
                <a
                  href={NOTE_MAGAZINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline"
                >
                  記事シリーズを読む
                  <span className="ml-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>

              <p className="pt-3 text-xs leading-relaxed text-gray-500">
                ※データが未整理でも問題ありません。研究目的、予定している試験内容、
                取得済みまたは取得予定のデータ形式（Excel/CSVなど）を共有いただければ、
                解析に向けた進め方を一緒に整理します。
              </p>
            </div>

            <p className="text-base leading-relaxed text-gray-800 md:text-lg">
              大学・研究機関の研究室（アカデミア）を主な対象として、
              非臨床・早期臨床データの薬物動態／薬力学（PK/PD）解析、
              結果の解釈整理、論文化を見据えた図表作成を支援します。
            </p>

            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              データはあるのに活かしきれない。薬物濃度や薬効データを取得しても、
              どのように整理し、どの指標を見て、
              どこまで解釈してよいのか判断に迷う。
              そのような場面では、解析の専門知識が研究の進み方に大きく影響します。
            </p>

            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              本サービスでは、PK/PD解析そのものに加えて、
              試験実施前・測定前の段階で
              「解析に必要なデータは何か」
              「どのような測定項目や採血時点を考慮すべきか」
              「どのような図表や解釈につなげられそうか」
              を一緒に整理し、研究成果を伝わりやすい形にまとめることを目指します。
            </p>
          </header>

          {/* 2カラム（想定／概要） */}
          <section className="grid gap-6 md:grid-cols-2">
            {/* ターゲット */}
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                このような方を想定しています
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-base text-gray-800">
                <li>
                  PK/PD解析を取り入れたいが、研究室内に解析のノウハウがない
                </li>
                <li>
                  薬物濃度や薬効指標のデータを取得したが、
                  どのように解釈すべきか迷っている
                </li>
                <li>
                  試験実施前に、PK/PD解析を見据えて
                  どのようなデータを取得すべきか整理したい
                </li>
                <li>
                  測定項目、採血時点、薬効指標、背景情報など、
                  解析に必要なデータを事前に確認したい
                </li>
                <li>
                  学会発表や論文投稿に向けて、
                  解析結果の整理や図表作成を進めたい
                </li>
                <li>
                  解析結果の妥当性や解釈を、
                  専門的な観点から確認してほしい
                </li>
              </ul>
            </div>

            {/* サービス概要 */}
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                提供していること（概要）
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-6 text-base text-gray-800">
                <li>
                  臨床データの薬物動態解析
                  （Non-Compartmental Analysis）および探索的PK/PD解析
                </li>
                <li>
                  非臨床データの薬物動態解析およびPK/PD関係の整理
                </li>
                <li>
                  Rを用いたデータ整理・可視化
                  （記述統計、グラフ作成、基本的な比較）
                </li>
                <li>
                  論文・学会発表を見据えた図表作成、
                  結果の解釈・考察整理のサポート
                </li>
                <li>
                  試験実施前・測定前の論点整理
                  （取得すべきデータ、測定項目、採血時点、薬効指標、
                  図表化の方向性の確認）
                </li>
              </ul>

              <p className="text-sm leading-relaxed text-gray-600">
                ※本サービスは、研究計画や試験デザイン全体を包括的に設計するものではなく、
                PK/PD解析を見据えて、試験実施前に整理しておくべきデータ、
                測定項目、採血時点、薬効指標、解析方針、
                結果の見せ方を確認する支援を中心に行います。
                <br />
                ※解析内容と進行スケジュールは事前にすり合わせのうえ、
                研究の進行に合わせて段階的に対応します。
              </p>
            </div>
          </section>

          {/* 試験実施前から相談できること */}
          <section className="rounded-xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              試験実施前の段階からご相談いただけます
            </h2>

            <p className="text-base leading-relaxed text-gray-800">
              すでにデータがそろっている場合だけでなく、
              これから試験や測定を検討している段階でも、
              「PK/PD解析に必要なデータは何か」
              「どの時点で採血・測定すべきか」
              「どの薬効指標や背景情報を整理しておくべきか」
              といった点を一緒に確認できます。
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              まずは、研究目的、予定している試験内容、
              取得済みまたは取得予定のデータ、
              困っている点を簡単に共有ください。
              解析として対応できる範囲と、進め方の候補をご提案します。
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
              >
                相談内容を送る
              </Link>
            </div>
          </section>

          {/* 記事シリーズ */}
          <section className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_18rem] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  Articles
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-gray-900">
                  研究者のためのPK/PD解析入門
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                  PK/PD解析の基本から、データ取得前に整理すべきこと、
                  Rを用いた解析、解析レポートの活用まで、
                  PK/PD解析を研究に役立てるための考え方を、
                  アカデミアの研究者向けに解説しています。
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  薬物動態解析を研究に取り入れたい方や、
                  取得した薬物濃度・薬効データをどのように整理し、
                  解釈すればよいか知りたい方に向けた記事シリーズです。
                </p>

                <div className="mt-6">
                  <a
                    href={NOTE_MAGAZINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                  >
                    記事シリーズを読む
                    <span className="ml-1" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              <a
                href={NOTE_MAGAZINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg border border-gray-100 bg-gray-50 transition-shadow hover:shadow-md"
                aria-label="「研究者のためのPK/PD解析入門」を開く"
              >
                <Image
                  src="/pkpd-magazine.png"
                  alt="研究者のためのPK/PD解析入門"
                  width={1920}
                  height={1006}
                  className="h-auto w-full"
                />
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}