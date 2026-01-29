// app/profile/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="section-title mb-8">プロフィール</h1>

        {/* 写真＋氏名＋簡単な経歴（左寄せ） */}
        <div className="card card-pad mb-10">
          <div className="flex items-start gap-6">
            {/* プロフィール写真 */}
            <Image
              src="/profile1.jpg"
              alt="プロフィール写真"
              width={140}
              height={140}
              className="rounded-full object-cover shadow-sm ring-1 ring-gray-200"
              priority
            />

            {/* 氏名・簡単な経歴 */}
            <div className="min-w-0">
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-1">
                上尾 治正
              </p>

              <p className="note-text">
                博士（薬学）／臨床薬理・薬物動態（PK/PD）解析
                <br />
                製薬企業にて前臨床から早期臨床までの薬物動態・薬力学解析に従事
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  アカデミア向け
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  非臨床・臨床
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  Rで解析
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 冒頭：アカデミア向け宣言（文章を少し読みやすく整形） */}
        <p className="lead mb-4">
          京都大学大学院にて薬物動態分野の博士号を取得後、国内製薬企業で約 20 年間、創薬に携わってきました。
          その中で、前臨床薬物動態試験と臨床薬物動態解析をそれぞれ数年間担当しました。
          現在は
          <span className="font-semibold">大学・研究機関の研究室（アカデミア）</span>
          を主な対象として、非臨床・臨床データの薬物動態／薬力学（PK/PD）解析と、研究結果の解釈・整理
          （論文化を見据えた図表作成を含む）を支援しています。
        </p>

        {/* 「部門横断」：表現を少しだけ自然に（誤解を減らす） */}
        <p className="body-text mb-4">
          企業では創薬研究所や臨床開発部門に加えて、社内の複数部門と横断的に関わる立場も経験しました。そのため、研究室内の視点にとどまらず、
          <span className="font-semibold">研究現場にある前提や制約（時間・予算・体制など）</span>
          を意識しながら、現実的な進め方を一緒に整理することを大切にしています。
        </p>

        {/* Rの明示 */}
        <p className="body-text mb-8">
          解析は原則として <span className="font-semibold">R</span> を用いて実施し、
          再現性を重視しながら、研究目的に沿った形でデータを整理・解釈します。
        </p>

        <div className="divider" />

        {/* 経歴 */}
        <h2 className="sub-title mb-4">これまでの経験</h2>

        <p className="body-text mb-4">
          製薬企業では、前臨床から早期臨床における PK 解析、PK/PD 解析、探索的な母集団解析に従事してきました。
          非臨床薬物動態試験および臨床試験の双方を数年間担当し、それぞれの段階において、複数の化合物を対象とした
          データの解析・解釈および試験計画（解析計画）の作成を経験しました。
        </p>

        <p className="body-text mb-6">
          複数の早期臨床試験においては、試験計画（解析計画）の検討、中間解析（探索的解析）、最終解析計画の策定、
          外部パートナーとの協働による解析業務を経験しました。統計解析担当・データマネジメント担当とも連携しながら、
          臨床薬理の立場から <span className="font-semibold">結果の解釈と考察の整理</span> を行ってきました。
        </p>

        {/* M&S（「検討中」表現をさらに誤解が少ない形に） */}
        <p className="note-text mb-10">
          ※将来的には、非臨床・臨床データをより統合的に捉えるモデリング＆シミュレーション（M&amp;S）に関する支援についても、
          ニーズや準備状況に応じて提供範囲の拡大を検討しています（現時点では提供内容を限定しています）。
        </p>

        <div className="divider" />

        {/* 想い */}
        <h2 className="sub-title mb-4">このサービスを始めた理由</h2>

        <p className="body-text mb-3">
          これまでの経験のなかで、解析のノウハウがないことで研究の可能性が十分に広げられていないアカデミアの研究室が多いことを、
          <span className="font-semibold">肌で感じてきました</span>。
        </p>
        <p className="body-text mb-3">
          データはあるのに活かしきれない。解析方法やツールの制約によって、得られるはずの示唆や解釈が限られてしまう――
          そうした状況が、研究の進み方を難しくすることがあります。
        </p>
        <p className="body-text mb-6">
          研究者の方々が本来持っているアイデアや情熱が、解析のハードルによって制限されてしまうのは非常にもったいないと感じています。
          そこで、解析の側面から研究を支え、研究の可能性を少しでも広げることに加え、
          <span className="font-semibold">日本のアカデミア研究の発展に少しでも貢献したい</span>
          という思いで、本サービスを立ち上げました。
        </p>

        <div className="divider" />

        {/* 経歴の概要 */}
        <h2 className="sub-title mb-4">経歴の概要</h2>
        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>薬物動態分野の博士号（PhD）取得</li>
            <li>前臨床〜早期臨床における PK/PD 解析および結果解釈の実務経験</li>
            <li>Rなどの解析ソフトウェアを用いた解析・図表作成、探索的母集団解析の経験</li>
            <li>非臨床・臨床データを横断した解析と、結果の考察整理の支援</li>
            <li>研究所・臨床開発部門など、複数部門と連携した業務経験を通じた俯瞰的な視点</li>
          </ul>
        </div>

        {/* 進め方（対応スタイル） */}
        <h2 className="sub-title mb-4">進め方（対応スタイル）</h2>
        <p className="body-text mb-10">
          研究目的や背景を丁寧に伺いながら、必要な解析を一緒に検討します。解析内容とスケジュールは事前にすり合わせのうえ、
          <span className="font-semibold">無理のない進行計画</span>
          のもとで段階的に解析を進め、進捗を共有しながら研究が前に進むためのサポートを行います。研究の期限（学会・投稿）や、
          利用できるリソース（時間・予算・人員）に応じて、
          <span className="font-semibold">「今あるデータでどこまで言えるか」</span>
          を一緒に整理することも大切にしています。
        </p>

        {/* メッセージ */}
        <div className="card card-pad">
          <p className="body-text">
            詳細な解析内容や対応可能な業務については、サービスページにてご紹介しています。
            まずは研究の状況（データの種類、研究目的、希望するアウトプット）を共有いただければ、
            実現可能な進め方をご提案します。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="btn-secondary">
              提供サービスを見る
            </Link>
            <Link href="/contact" className="btn-primary">
              お問い合わせ（相談する）
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
