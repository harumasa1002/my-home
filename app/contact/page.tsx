// app/contact/page.tsx
export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="section-title mb-8">お問い合わせ</h1>

        <p className="lead mb-4">
          研究内容やデータの状況に関するご相談は、下記のメールアドレスまでご連絡ください。
          解析の可否や進め方について、内容を確認のうえ対応可能な範囲でお返事いたします。
        </p>

        <p className="body-text mb-10">
          この段階で研究内容や解析方針が固まっていなくても問題ありません。
          「まずは状況を共有したい」といったご相談でも構いません。
        </p>

        {/* メールアドレス表示 */}
        <div className="card card-pad mb-10">
          <p className="note-text mb-2">連絡先メールアドレス</p>
          <p className="font-mono text-gray-900 text-base break-all">
            haru.pharma.phd@gmail.com
          </p>
          <p className="note-text mt-3">
            ※上記アドレスをコピーしてご連絡ください。
          </p>
        </div>

        {/* ガイド */}
        <h2 className="sub-title mb-3">お問い合わせの際は、以下の点を分かる範囲でお知らせください。
すべてを記載いただく必要はありません。</h2>

        <div className="card card-pad">
          <ul className="list-standard">
            <li>研究・プロジェクトの概要（研究分野、テーマ、目的（論文化／探索的解析 など））</li>
            <li>ご相談内容（解析のご相談、データ整理、結果解釈など（（具体的でなくても構いません）））</li>
            <li>データの状況（データの種類・規模（例：臨床PKデータ、例数など））</li>
            <li>ご希望の時期（ご希望のスケジュールや目安の期限）</li>
            <li>ご所属（任意）（大学・研究機関名、研究室名など）</li>            
          </ul>

          <p className="note-text mt-6">
            ※研究データの共有方法や機密性について配慮が必要な場合は、その旨も併せてお知らせください。
          </p>
        </div>
      </section>
    </main>
  );
}
