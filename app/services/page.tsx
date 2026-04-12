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
            大学・研究機関の研究室（アカデミア）を主な対象として、非臨床・臨床データの薬物動態／薬力学（PK/PD）解析と、
            解析結果の解釈・整理を支援します。
          </p>

          <p className="body-text mb-4">
            「データはあるが、どのように解析・解釈すべきか迷っている」「論文や学会発表に向けて、結果を整理したい」といった状況に対して、
            研究目的に沿った解析方針の整理から、実装・図表作成までを段階的に進めます。
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

        {/* Rについて */}
        <h2 className="sub-title mb-4">解析に使用するソフトウェアについて</h2>
        <div className="card card-pad mb-10">
          <p className="body-text mb-3">
            本サービスで行う解析は、原則として <span className="font-semibold">R</span> を用いて実施します。
          </p>
          <p className="body-text mb-3">
            R はオープンソースの統計解析環境であり、大学・研究機関を中心に広く利用されています。
            特定の商用ソフトに依存しないため、研究室側でも同じ解析環境を再現しやすく、
            <span className="font-semibold">解析結果の透明性と再現性を重視した整理</span>が可能です。
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

        {/* 現在対応している内容 */}
        <h2 className="sub-title mb-4">現在対応している内容</h2>
        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>
              薬物動態解析（AUC・Cmax・Tmax・t
              <sub>1/2</sub> などの算出、濃度–時間プロットの作成）
            </li>
            <li>簡易な PK/PD・曝露–反応解析（Emax、IC50 などのモデルを用いた探索的解析）</li>
            <li>
              R を用いたデータ整理・可視化{" "}
              <span className="note-text">（記述統計、グラフ作成、基本的な比較解析）</span>
            </li>
            <li>論文投稿・学会発表を見据えた図表作成と、解析結果の解釈・考察整理の支援</li>
          </ul>
        </div>

        {/* 進め方 */}
        <h2 className="sub-title mb-4">進め方（例）</h2>
        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>研究目的・アウトカム・解析のゴールを確認</li>
            <li>データ構造（測定時点、欠測、単位、ID 等）を確認し、解析方針を整理</li>
            <li>R を用いた解析・図表作成（必要に応じて追加解析を相談）</li>
            <li>解析結果の共有と解釈の整理</li>
          </ul>
        </div>

        {/* 納品物 */}
        <h2 className="sub-title mb-4">納品物の例</h2>
        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>解析結果の図表（濃度–時間プロット、PK パラメータ一覧など）</li>
            <li>主要な解析結果と解釈をまとめた簡潔な解析メモ</li>
            <li>
              再現性を担保した R スクリプト{" "}
              <span className="note-text">（ご希望に応じてオプション対応）</span>
            </li>
          </ul>
        </div>

        {/* 発展的内容（検討中に留める） */}
        <h2 className="sub-title mb-4">発展的な解析について（将来的な提供を検討中）</h2>
        <div className="card card-pad mb-10">
          <p className="body-text mb-4">
            将来的には、非臨床・臨床データをより統合的に捉えるために、母集団解析や PK/PD モデリング・シミュレーション（M&amp;S）の考え方を
            取り入れた解析支援の提供も検討しています。現在は、個別の解析結果を丁寧に解釈・整理することを主な支援内容としています。
          </p>

          <ul className="list-standard">
            <li>探索的な母集団 PK 解析（PopPK）の考え方</li>
            <li>PK/PD モデリング・シミュレーション（M&amp;S）の考え方を用いた検討</li>
          </ul>

          <p className="note-text mt-4">
            ※現時点では、上記の内容は「提供を検討している領域」としての記載です。具体的な実施内容は、準備状況に応じて段階的に整理していきます。
          </p>
        </div>

        {/* 料金セクション */}
        <h2 className="sub-title mb-4">料金について（目安）</h2>
        <div className="card card-pad mb-10">
          <p className="body-text">
            解析内容やデータ量、研究の進行状況により必要な作業は異なるため、料金は一律ではなく、内容を伺ったうえで個別にご相談しています。
          </p>

          <p className="body-text mt-3">
            目安としては、比較的シンプルな PK 解析や図表作成の場合、
            <span className="font-semibold">数万円程度から</span>
            の範囲で対応可能なケースを想定しています。研究費の規模や目的に応じて、無理のない範囲で対応方法をご提案します。
          </p>

          <p className="note-text mt-4">
            ※正式な金額は、研究目的・データ構造・アウトプット（論文／学会発表等）を確認したうえでお見積りします。
          </p>
        </div>

        <p className="note-text">
          ※上記は現時点での想定内容です。実際のご依頼については、研究内容やデータ構造を確認したうえで、対応可能な範囲を個別にご相談させていただきます。
        </p>
      </section>
    </main>
  );
}
