export default function Services() {
  return (
    <main className="min-h-screen p-10 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">提供サービス</h1>

      <p className="mb-4 leading-relaxed">
        本サイトでは、臨床薬理・薬物動態分野での経験と
        PK/PD解析・Rによるデータ解析の知見を活かし、
        大学・医療機関などの研究におけるデータ解析をサポートします。
        まずは PK/PD 解析を中心とした比較的シンプルな案件から
        対応していく予定です。
      </p>

      <h2 className="text-xl font-semibold mb-3">現在対応を想定している内容</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          PK解析（非コンパートメント解析：
          AUC・Cmax・Tmax・t<sub>1/2</sub> などの算出と濃度–時間プロット）
        </li>
        <li>
          簡易な PK/PD・曝露反応解析
          （Emax, IC50 などの非線形回帰モデルを用いた解析）
        </li>
        <li>
          R を用いた記述統計・グラフ作成・基本的な群間比較
          <span className="text-xs text-gray-500">
            （内容を確認したうえで対応可能な範囲で実施）
          </span>
        </li>
        <li>
          学会発表・論文投稿に向けた図表作成支援と、
          解析結果の整理に関する簡単な助言
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">発展的なサービス（準備中／応相談）</h2>
      <p className="mb-2 text-sm text-gray-700 leading-relaxed">
        PopPK 解析や、より複雑な PK/PD モデリング・シミュレーションなど、
        高度なモデリング＆シミュレーション業務については、
        内容を拝見したうえで対応可否を個別にご相談させていただきます。
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-6 text-sm text-gray-700">
        <li>母集団 PK 解析（PopPK）</li>
        <li>PK/PD モデリングおよびシミュレーション</li>
      </ul>

      <p className="mt-8 text-xs text-gray-500 leading-relaxed">
        ※上記は現時点での想定内容であり、サービス内容や表現は今後見直す予定です。
        実際のご依頼については、研究内容・データ構造を確認したうえで、
        対応可能な範囲で柔軟に検討いたします。
      </p>
    </main>
  );
}

