// app/profile/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="section-title mb-8">プロフィール</h1>

        {/* 写真＋氏名＋簡単な経歴 */}
        <div className="card card-pad mb-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Image
              src="/profile2.jpg"
              alt="プロフィール写真"
              width={140}
              height={140}
              className="rounded-full object-cover shadow-sm ring-1 ring-gray-200"
              priority
            />

            <div className="min-w-0">
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-1">
                上尾 治正
              </p>

              <p className="note-text">
                博士（薬学）／臨床薬理・薬物動態（PK/PD）解析
                <br />
                製薬企業にて、前臨床から早期臨床までの薬物動態・薬力学解析に従事
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  アカデミア向け
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  PK・PK/PD解析
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  測定前・解析前相談
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  Rで解析
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 冒頭 */}
        <p className="lead mb-4">
          京都大学大学院にて薬物動態分野の博士号を取得後、国内製薬企業で約20年間、
          創薬研究および臨床開発に関わってきました。
        </p>

        <p className="body-text mb-4">
          その中で、前臨床薬物動態試験、臨床薬物動態解析、PK/PD解析、早期臨床試験における
          解析方針の検討や結果解釈に携わってきました。
        </p>

        <p className="body-text mb-8">
          現在は、
          <span className="font-semibold">大学・研究機関の研究室（アカデミア）</span>
          を主な対象として、薬物濃度データや薬効データを研究目的に沿って整理し、
          PK・PK/PDの視点から解析・解釈する支援を行っています。
        </p>

        <div className="divider" />

        {/* 支援の考え方 */}
        <h2 className="sub-title mb-4">大切にしていること</h2>

        <p className="body-text mb-4">
          PK/PD解析では、測定後にデータを解析するだけでなく、
          測定前・解析前の段階で
          <span className="font-semibold">
            研究目的、評価項目、測定時点、群構成、解析方針
          </span>
          を整理しておくことが重要です。
        </p>

        <p className="body-text mb-4">
          たとえば、どの時点で血中濃度を測定するか、薬効データや安全性データとどのように対応づけるか、
          どのような図表や比較を想定するかによって、解析後に得られる解釈のしやすさは大きく変わります。
        </p>

        <p className="body-text mb-4">
          私自身、製薬企業での業務において、取得済みデータの解析だけでなく、
          試験目的に応じた評価項目、測定時点、解析方針の検討にも携わってきました。
          その経験を活かし、研究目的に沿ったデータ取得と解析の進め方を、
          事前相談の段階から一緒に整理します。
        </p>

        <p className="body-text mb-8">
          解析は原則として <span className="font-semibold">R</span> を用いて実施し、
          再現性を意識しながら、研究目的に沿った図表作成や結果の整理を行います。
        </p>

        <div className="divider" />

        {/* これまでの経験 */}
        <h2 className="sub-title mb-4">これまでの経験</h2>

        <p className="body-text mb-4">
          製薬企業では、前臨床から早期臨床におけるPK解析、PK/PD解析、探索的な母集団解析に
          従事してきました。非臨床薬物動態試験および臨床試験の双方を担当し、
          複数の化合物を対象に、データの解析・解釈および解析計画の検討を経験しました。
        </p>

        <p className="body-text mb-4">
          また、試験目的に応じて、どのような評価項目を設定するか、どの時点でデータを取得するか、
          PKデータと薬効・安全性データをどのように関連づけて考えるかといった、
          解析を見据えた試験計画上の論点整理にも携わってきました。
        </p>

        <p className="body-text mb-4">
          早期臨床試験では、試験計画や解析方針の検討、中間解析、最終解析に向けた整理、
          外部パートナーとの協働による解析業務にも関わってきました。
        </p>

        <p className="body-text mb-8">
          また、統計解析担当、データマネジメント担当、臨床開発担当など複数の関係者と連携しながら、
          臨床薬理の立場から
          <span className="font-semibold">結果の解釈と考察の整理</span>
          を行ってきました。
        </p>

        <div className="divider" />

        {/* このサービスを始めた理由 */}
        <h2 className="sub-title mb-4">このサービスを始めた理由</h2>

        <p className="body-text mb-4">
          アカデミアの研究では、優れたアイデアや貴重なデータがあっても、
          解析方法やデータ整理のノウハウが不足しているために、
          研究成果として十分に活かしきれない場面があると感じています。
        </p>

        <p className="body-text mb-4">
          特にPKやPK/PD解析は、薬効や安全性の結果を解釈するうえで有用である一方、
          研究室内に専門的な解析経験がない場合、どのようなデータを準備し、
          どのような解析方針を立てればよいか分かりにくい領域でもあります。
        </p>

        <p className="body-text mb-8">
          そのような研究に対して、測定前・解析前の段階から伴走し、
          データから得られる示唆を整理することで、研究の可能性を少しでも広げることに
          貢献したいと考えています。
        </p>

        <div className="divider" />

        {/* 経歴の概要 */}
        <h2 className="sub-title mb-4">経歴の概要</h2>

        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>薬物動態分野の博士号（PhD）取得</li>
            <li>製薬企業における前臨床〜早期臨床の薬物動態・臨床薬理業務経験</li>
            <li>PK解析、PK/PD解析、探索的母集団解析の実務経験</li>
            <li>試験目的に応じた評価項目、測定時点、解析方針の検討経験</li>
            <li>Rなどを用いた解析、図表作成、結果整理の経験</li>
            <li>非臨床・臨床データを踏まえた結果解釈と考察整理の経験</li>
            <li>研究所・臨床開発部門・統計解析部門など、複数部門と連携した業務経験</li>
          </ul>
        </div>

        {/* 対応スタイル */}
        <h2 className="sub-title mb-4">対応スタイル</h2>

        <p className="body-text mb-4">
          ご相談では、まず研究目的やデータの状況を伺い、解析の目的を整理するところから始めます。
          解析方針がまだ明確でない場合でも、データの種類、測定時点、評価項目、研究のゴールを確認しながら、
          どのような進め方が現実的かを一緒に検討します。
        </p>

        <p className="body-text mb-4">
          すでに取得済みのデータに対する解析だけでなく、これから測定を予定している段階で、
          PK/PD解析を見据えてどのような情報を整理しておくべきか、
          どのようなデータ構造にしておくと解析しやすいかといった事前相談にも対応します。
        </p>

        <p className="body-text mb-10">
          学会発表、論文投稿、追加実験の検討など、研究の状況に応じて、
          <span className="font-semibold">必要な解析、図表、説明の粒度</span>
          を整理し、無理のない形で研究が前に進むよう支援します。
        </p>

        {/* メッセージ */}
        <div className="card card-pad">
          <p className="body-text">
            詳細な解析内容や対応可能な業務については、サービスページにてご紹介しています。
            まずは研究の状況、データの種類、相談したい内容を共有いただければ、
            対応可能な範囲や進め方を確認いたします。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="btn-secondary">
              提供サービスを見る
            </Link>
            <Link href="/contact" className="btn-primary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}