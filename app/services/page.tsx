// app/services/page.tsx
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="section-title mb-8">提供サービス</h1>

        {/* 基本方針 */}
        <div className="card card-pad mb-10">
          <p className="lead mb-4">
            大学・研究機関の研究室（アカデミア）を主な対象として、薬物動態（PK）・薬力学（PD）データの活用に関する
            論点整理、解析方針の整理、データ解析、図表作成を支援します。
          </p>

          <p className="body-text mb-4">
            「PKデータを測定する前に、何を考えておくべきか整理したい」
            「データはあるが、どのように解析・解釈すべきか迷っている」
            「論文や学会発表に向けて、結果を分かりやすくまとめたい」といった段階からご相談いただけます。
          </p>

          <p className="body-text">
            本サービスでは、試験設計そのものを包括的に請け負うのではなく、
            PK/PD解析や結果解釈の観点から、測定前・解析前に確認しておくべき論点を整理し、
            研究目的に沿ったデータ活用を支援します。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              お問い合わせ（相談する）
            </Link>
            <Link href="/profile" className="btn-secondary">
              プロフィールを見る
            </Link>
          </div>
        </div>

        {/* 相談できる段階 */}
        <h2 className="sub-title mb-4">相談できる段階</h2>
        <div className="card card-pad mb-10">
          <p className="body-text mb-4">
            PK/PD解析では、測定後に解析を行うだけでなく、
            測定前・解析前の段階で「どのような目的でデータを取得するのか」
            「取得したデータをどのように解釈するのか」を整理しておくことが重要です。
          </p>

          <ul className="list-standard">
            <li>PKデータを取得する意義を整理したい段階</li>
            <li>測定前に、解析・解釈で問題になりやすい点を確認したい段階</li>
            <li>すでに濃度データや薬効データがあり、解析方法を検討している段階</li>
            <li>論文・学会発表に向けて、図表や考察を整理したい段階</li>
          </ul>

          <p className="note-text mt-4">
            ※測定業務そのものや、試験設計全体の代行は対象外です。解析・解釈を見据えた論点整理として対応します。
          </p>
        </div>

        {/* 現在対応している内容 */}
        <h2 className="sub-title mb-4">現在対応している内容</h2>
        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>
              測定前・解析前の論点整理
              <span className="note-text">
                （PKデータ取得の目的、確認したい仮説、解析で見たい指標の整理など）
              </span>
            </li>
            <li>
              薬物動態解析
              <span className="note-text">
                （AUC・Cmax・Tmax・t
                <sub>1/2</sub> などの算出、濃度–時間プロットの作成）
              </span>
            </li>
            <li>
              簡易なPK/PD・曝露–反応解析
              <span className="note-text">
                （薬効データと濃度データの関係整理、Emax・IC50などを用いた探索的解析）
              </span>
            </li>
            <li>
              Rを用いたデータ整理・可視化
              <span className="note-text">（記述統計、グラフ作成、基本的な比較解析）</span>
            </li>
            <li>論文投稿・学会発表を見据えた図表作成と、解析結果の解釈・考察整理の支援</li>
          </ul>
        </div>

        {/* Rについて */}
        <h2 className="sub-title mb-4">解析に使用するソフトウェアについて</h2>
        <div className="card card-pad mb-10">
          <p className="body-text mb-3">
            本サービスで行う解析は、原則として <span className="font-semibold">R</span> を用いて実施します。
          </p>
          <p className="body-text">
            Rはオープンソースの統計解析環境であり、大学・研究機関でも導入しやすいことが特徴です。
            特定の商用ソフトに依存しないため、解析手順を確認しやすく、
            <span className="font-semibold">透明性と再現性を重視した解析</span>を行いやすい利点があります。
          </p>
        </div>

        {/* NCAについて */}
        <h2 className="sub-title mb-4">Non-Compartmental Analysis（NCA）について</h2>
        <div className="card card-pad mb-10">
          <p className="body-text mb-3">
            NCAは、投与後に測定した濃度データをもとに、薬物が体内でどの程度吸収され、
            どのくらいの時間存在するのかを<span className="font-semibold">比較的シンプルな方法で整理する</span>解析手法です。
          </p>
          <p className="body-text mb-3">
            特定の数理モデルを仮定せず、実測データを直接用いて、AUC（曝露量）、Cmax（最大濃度）、
            Tmax（最大濃度到達時間）、半減期（t<sub>1/2</sub>）などの指標を算出します。
          </p>
          <p className="body-text">
            「まずデータの全体像を把握したい」「投与条件や群間で違いがありそうかを整理したい」といった目的に適しており、
            非臨床・臨床のどちらのデータでも入口として活用しやすい解析です。
          </p>
        </div>

        {/* 進め方 */}
        <h2 className="sub-title mb-4">進め方（例）</h2>
        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>研究目的・背景・確認したい仮説を確認</li>
            <li>PK/PDデータで何を明らかにしたいのかを整理</li>
            <li>測定前・解析前に確認しておくべき論点を整理</li>
            <li>データ構造（測定時点、欠測、単位、ID、群情報など）を確認</li>
            <li>Rを用いた解析・図表作成</li>
            <li>解析結果の共有と、論文・学会発表を見据えた解釈の整理</li>
          </ul>
        </div>

        {/* 納品物 */}
        <h2 className="sub-title mb-4">納品物の例</h2>
        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>測定前・解析前に確認すべき論点をまとめた簡潔な相談メモ</li>
            <li>解析結果の図表（濃度–時間プロット、PKパラメータ一覧、曝露–反応プロットなど）</li>
            <li>主要な解析結果と解釈をまとめた解析メモ</li>
            <li>
              再現性を担保したRスクリプト
              <span className="note-text">（ご希望に応じてオプション対応）</span>
            </li>
          </ul>
        </div>

        {/* 対応しやすい相談例 */}
        <h2 className="sub-title mb-4">対応しやすい相談例</h2>
        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>薬効試験に血中濃度データを加える意味を整理したい</li>
            <li>PKデータを測定する前に、解析で困りやすい点を確認したい</li>
            <li>投与量や投与条件の違いを、AUCやCmaxで比較したい</li>
            <li>薬効データだけでは解釈しにくい結果を、曝露量との関係から整理したい</li>
            <li>論文・学会発表用に、解析結果を分かりやすい図表にしたい</li>
          </ul>
        </div>

        {/* 発展的内容 */}
        <h2 className="sub-title mb-4">発展的な解析について（将来的な提供を検討中）</h2>
        <div className="card card-pad mb-10">
          <p className="body-text mb-4">
            将来的には、非臨床・臨床データをより統合的に捉えるために、
            母集団解析やPK/PDモデリング・シミュレーション（M&amp;S）の考え方を取り入れた解析支援の提供も検討しています。
          </p>

          <ul className="list-standard">
            <li>探索的な母集団PK解析（PopPK）の考え方</li>
            <li>PK/PDモデリング・シミュレーション（M&amp;S）の考え方を用いた検討</li>
          </ul>

          <p className="note-text mt-4">
            ※現時点では、上記の内容は「提供を検討している領域」としての記載です。
            具体的な実施内容は、準備状況に応じて段階的に整理していきます。
          </p>
        </div>

        {/* 料金セクション */}
        <h2 className="sub-title mb-4">料金について（目安）</h2>
        <div className="card card-pad mb-10">
          <p className="body-text">
            相談内容、データ量、解析の複雑さ、必要なアウトプットにより作業量が変わるため、
            料金は一律ではなく、内容を伺ったうえで個別にご相談しています。
          </p>

          <p className="body-text mt-3">
            目安としては、比較的シンプルな論点整理、PK解析、図表作成の場合、
            <span className="font-semibold">数万円程度から</span>
            の範囲で対応可能なケースを想定しています。
          </p>

          <p className="note-text mt-4">
            ※正式な金額は、研究目的・データ構造・アウトプット（論文／学会発表等）を確認したうえでお見積りします。
          </p>
        </div>

        {/* 注意書き */}
        <div className="card card-pad mb-10">
          <h2 className="sub-title mb-4">ご相談にあたって</h2>
          <p className="body-text mb-3">
            本サービスは、研究目的に沿ったデータ活用・解析・解釈整理を支援するものです。
            研究の最終的な判断、実験計画の決定、論文内容の責任は、研究実施者・研究機関に帰属します。
          </p>
          <p className="body-text">
            また、現在は個人での対応となるため、内容や時期によっては対応可能な範囲を相談させていただく場合があります。
          </p>
        </div>

        <p className="note-text">
          ※上記は現時点での想定内容です。実際のご依頼については、研究内容やデータ構造を確認したうえで、
          対応可能な範囲を個別にご相談させていただきます。
        </p>
      </section>
    </main>
  );
}