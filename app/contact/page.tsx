// app/contact/page.tsx

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="section-title mb-8">お問い合わせ</h1>

        <p className="lead mb-4">
          PK解析、PK/PD解析、薬物濃度データの整理、解析前の論点整理などに関するご相談は、
          下記のメールアドレスまでご連絡ください。
        </p>

        <p className="body-text mb-4">
          研究内容やデータの状況を確認したうえで、対応可能な範囲や進め方についてお返事いたします。
          この段階で解析方針が明確に決まっていなくても問題ありません。
        </p>

        <p className="body-text mb-10">
          「測定前にどのようなデータを整理しておくべきか相談したい」
          「取得済みデータをどのように解析すればよいか確認したい」
          といった段階のご相談でも構いません。
        </p>

        {/* メールアドレス表示 */}
        <div className="card card-pad mb-10">
          <p className="note-text mb-2">連絡先メールアドレス</p>

          <p className="font-mono text-gray-900 text-base break-all">
            contact@harupharma.com
          </p>

          <p className="note-text mt-3">
            ※上記アドレスをコピーしてご連絡ください。
          </p>
        </div>

        {/* お問い合わせ内容 */}
        <h2 className="sub-title mb-3">
          お問い合わせの際にお知らせいただきたい内容
        </h2>

        <p className="body-text mb-4">
          以下の点を、分かる範囲でお知らせください。
          すべてを記載いただく必要はありません。
        </p>

        <div className="card card-pad mb-10">
          <ul className="list-standard">
            <li>
              研究・プロジェクトの概要
              <br />
              <span className="text-sm text-gray-600">
                例：研究分野、テーマ、目的、論文化を想定しているか、探索的解析か など
              </span>
            </li>

            <li>
              ご相談内容
              <br />
              <span className="text-sm text-gray-600">
                例：PK解析、PK/PD解析、データ整理、解析方針の相談、結果解釈 など
              </span>
            </li>

            <li>
              データの状況
              <br />
              <span className="text-sm text-gray-600">
                例：測定前／測定中／測定済み、データの種類、例数、測定時点、群構成 など
              </span>
            </li>

            <li>
              ご希望の時期
              <br />
              <span className="text-sm text-gray-600">
                例：相談したい時期、解析結果が必要な時期、論文投稿や学会発表の予定 など
              </span>
            </li>

            <li>
              ご所属
              <br />
              <span className="text-sm text-gray-600">
                例：大学・研究機関名、研究室名など。任意で構いません。
              </span>
            </li>
          </ul>

          <p className="note-text mt-6">
            ※研究データの共有方法や機密性について配慮が必要な場合は、その旨も併せてお知らせください。
          </p>
        </div>

        {/* 注意事項 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="sub-title mb-3">ご相談にあたって</h2>

          <p className="body-text mb-3">
            初回のご連絡では、詳細な生データをお送りいただく必要はありません。
            まずは研究の概要、データの種類、相談したい内容を簡単にお知らせください。
          </p>

          <p className="body-text">
            内容を確認したうえで、必要に応じてオンラインでの打ち合わせや、
            解析に必要な情報の整理についてご案内します。
          </p>
        </div>
      </section>
    </main>
  );
}