// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          臨床薬理・PK/PD解析で、研究の可能性を広げる。
        </h1>

        <p className="text-base md:text-lg leading-relaxed mb-3">
          製薬企業およびアカデミアでの経験をもとに、臨床薬理・薬物動態分野の
          データ解析を支援する個人サイトです。PK/PD解析や R によるデータ解析を通じて、
          研究がより良い方向へ前進することを目指しています。
        </p>

        {/* あなたの想い（短い要約版） */}
        <p className="text-sm md:text-base leading-relaxed mb-6 text-gray-700">
          これまでの経験のなかで、
          <span className="font-semibold">
            解析の専門家がいないことで研究の可能性が十分に広げられていない研究室
          </span>
          を多く見てきました。そうした研究のポテンシャルを、解析の側面から少しでも
          引き出したいという思いで、このサービスを始めています。
        </p>

        {/* CTA ボタン */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            提供サービスを見る
          </Link>
          <Link
            href="/profile"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100"
          >
            プロフィールを見る
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-transparent px-5 py-2.5 text-sm font-medium text-blue-700 hover:underline"
          >
            お問い合わせ
          </Link>
        </div>

        {/* ターゲット */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">このような方を想定しています</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
            <li>PK/PD解析が必要だが、研究室内に解析のノウハウが少ない</li>
            <li>薬物濃度データを取得したが、どのように解析すべきか迷っている</li>
            <li>学会発表や論文投稿に向けて、図表や解析内容を整理したい</li>
            <li>AIや統計ソフトだけでは不安で、専門家の視点から確認してほしい</li>
          </ul>
        </section>

        {/* サービス概要 */}
        <section>
          <h2 className="text-xl font-semibold mb-3">提供していること（概要）</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-3">
            <li>臨床試験・研究データの PK 解析（NCA）</li>
            <li>Emax・IC50 などを用いた簡易な PK/PD・曝露反応解析</li>
            <li>R を用いた記述統計・グラフ作成・基本的な群間比較（応相談）</li>
            <li>学会発表・論文投稿に向けた図表作成や結果整理のサポート</li>
          </ul>
          <p className="text-xs text-gray-500 leading-relaxed">
            ※サービス内容は現時点での想定であり、今後見直し・拡充していく予定です。
            具体的なご相談内容に応じて、対応可能な範囲を個別にご提案いたします。
          </p>
        </section>
      </section>
    </main>
  );
}
