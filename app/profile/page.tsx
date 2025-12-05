// app/profile/page.tsx
export default function Profile() {
  return (
    <main className="min-h-screen p-10 bg-gray-50 text-gray-800">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">プロフィール</h1>

        {/* 自己紹介 */}
        <p className="mb-4 leading-relaxed">
          製薬企業およびアカデミアでの経験をもとに、
          臨床薬理・薬物動態分野のデータ解析を支援する個人サイトです。
          臨床試験や研究で得られたデータに対して、
          PK/PD解析や R による統計解析を用いながら、
          研究がより良い方向へ前進するお手伝いをすることを目指しています。
        </p>

        {/* 想い */}
        <h2 className="text-xl font-semibold mt-8 mb-3">このサービスを始めた理由</h2>
        <p className="mb-3 leading-relaxed">
          大学院で薬物動態学の研究に携わり、その後 20 年以上、
          製薬企業で臨床薬理・PK/PD 解析に取り組んできました。
          そのなかで強く感じてきたのは、
          <span className="font-semibold">
            「解析の専門家がいないことで、研究の可能性が十分に広げられていない研究室が多い」
          </span>
          という現実です。
        </p>
        <p className="mb-3 leading-relaxed">
          データはあるのに活かしきれない。
          解析方法やツールの制約によって、得られるはずの示唆や解釈が
          限られてしまう──そうした場面をこれまで何度も目にしてきました。
        </p>
        <p className="mb-6 leading-relaxed">
          研究者の方々が本来持っているアイデアや情熱が、
          解析のハードルによって制限されてしまうのは非常にもったいないと感じています。
          そこで、
          <span className="font-semibold">
            解析の側面から研究を支え、研究の可能性を少しでも広げること
          </span>
          を目的として、本サービスを立ち上げました。
        </p>

        {/* 経歴の概要 */}
        <h2 className="text-xl font-semibold mb-3">経歴の概要</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>薬物動態分野の博士号（PhD）取得</li>
          <li>製薬企業での臨床開発業務および PK/PD 解析の実務経験</li>
          <li>非線形モデルや曝露反応解析などを含む臨床薬理解析の経験</li>
        </ul>

        {/* メッセージ */}
        <p className="text-sm text-gray-600 leading-relaxed">
          研究目的や背景を丁寧に伺いながら、
          必要な解析を一緒に検討し、研究が前に進むためのサポートをしていきたいと考えています。
          詳細な経歴やこれまでのプロジェクト実績については、
          サイトの整備に合わせて順次追記していく予定です。
        </p>
      </section>
    </main>
  );
}


