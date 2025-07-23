import React, { useState } from "react";

// 分頁標籤
const tabs = [
  { key: "script", label: "測試腳本管理" },
  { key: "run", label: "自動化測試執行" },
  { key: "score", label: "回覆準確度評分" },
  { key: "report", label: "測試報告生成" },
  { key: "feedback", label: "用戶回饋收集" },
  { key: "stat", label: "回饋數據統計" },
  { key: "tag", label: "問題分類標記" },
];

// F1 測試腳本管理
function ScriptManager() {
  return (
    <div>
      <h3>腳本列表</h3>
      <button>新增腳本</button>
      <button>批量匯入</button>
      <table border="1" cellPadding="8" style={{ margin: "16px 0", width: "100%" }}>
        <thead>
          <tr>
            <th>名稱</th>
            <th>類型</th>
            <th>版本</th>
            <th>狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>歡迎語腳本</td>
            <td>FAQ</td>
            <td>v1.2</td>
            <td>啟用</td>
            <td>
              <button>編輯</button>
              <button>刪除</button>
              <button>歷史</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h4>腳本編輯器（即時預覽）</h4>
        <textarea rows={4} style={{ width: "100%" }} placeholder="編輯腳本內容..." />
        <div style={{ marginTop: 8 }}>
          <button>儲存</button>
          <button>複製</button>
          <button>復原</button>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <h4>批量匯入</h4>
        <input type="file" />
        <button>下載範本</button>
      </div>
    </div>
  );
}

// F2 自動化測試執行
function TestRunner() {
  return (
    <div>
      <h3>測試腳本選擇與執行</h3>
      <select>
        <option>歡迎語腳本</option>
        <option>常見問題腳本</option>
      </select>
      <button>執行</button>
      <button>排程設定</button>
      <div style={{ marginTop: 16 }}>
        <h4>執行狀態</h4>
        <div>進度條/狀態標籤（執行中...）</div>
        <button>暫停</button>
        <button>停止</button>
        <button>重新啟動</button>
      </div>
      <div style={{ marginTop: 16 }}>
        <h4>排程設定</h4>
        <input type="text" placeholder="Cron 表達式" />
        <button>儲存排程</button>
      </div>
    </div>
  );
}

// F3 回覆準確度評分
function ScorePanel() {
  return (
    <div>
      <h3>評分總覽</h3>
      <div>分數：<span style={{ fontSize: 24, color: "#22c55e" }}>92</span> / 100</div>
      <h4>比對算法</h4>
      <ul>
        <li>餘弦相似度</li>
        <li>Levenshtein Distance</li>
        <li>BLEU Score</li>
        <li>語意相似度</li>
      </ul>
      <h4>評分細節</h4>
      <ul>
        <li>關鍵詞匹配：30%</li>
        <li>語意相似度：50%</li>
        <li>結構完整性：20%</li>
      </ul>
      <h4>自訂規則</h4>
      <input type="text" placeholder="設定關鍵詞/正則/權重" style={{ width: 300 }} />
    </div>
  );
}

// F4 測試報告生成
function ReportPanel() {
  return (
    <div>
      <h3>測試報告摘要</h3>
      <div>總測試：100 組，通過率：92%，平均分：91.5</div>
      <h4>錯誤清單</h4>
      <table border="1" cellPadding="6" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>問題</th>
            <th>錯誤類型</th>
            <th>建議</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI 回答不完整</td>
            <td>結構不全</td>
            <td>補充完整資訊</td>
          </tr>
        </tbody>
      </table>
      <h4>統計圖表</h4>
      <div>（長條圖/圓餅圖/折線圖 佔位）</div>
      <button>匯出 HTML</button>
      <button>匯出 PDF</button>
      <button>匯出 Excel</button>
    </div>
  );
}

// F5 用戶回饋收集
function FeedbackPanel() {
  const [feedback, setFeedback] = useState(null);
  return (
    <div>
      <h3>用戶回饋</h3>
      <button
        style={{
          background: feedback === "good" ? "#22c55e" : "#f1f5f9",
          color: feedback === "good" ? "#fff" : "#22c55e",
          border: "none",
          borderRadius: 4,
          padding: "8px 24px",
          marginRight: 8,
        }}
        onClick={() => setFeedback("good")}
      >
        滿意
      </button>
      <button
        style={{
          background: feedback === "bad" ? "#ef4444" : "#f1f5f9",
          color: feedback === "bad" ? "#fff" : "#ef4444",
          border: "none",
          borderRadius: 4,
          padding: "8px 24px",
        }}
        onClick={() => setFeedback("bad")}
      >
        不滿意
      </button>
      <div style={{ marginTop: 16 }}>
        <input type="text" placeholder="可選填文字回饋" style={{ width: 300 }} />
        <select>
          <option>問題分類標籤</option>
          <option>知識缺失</option>
          <option>語意誤解</option>
        </select>
      </div>
      {feedback && (
        <div style={{ marginTop: 16, color: "#2563eb" }}>
          感謝您的回饋！
        </div>
      )}
    </div>
  );
}

// F6 回饋數據統計
function StatPanel() {
  return (
    <div>
      <h3>回饋數據統計</h3>
      <div>滿意度：80%　不滿意：20%</div>
      <div>（折線圖/圓餅圖/長條圖/熱力圖 佔位）</div>
      <div>
        <label>時間範圍：</label>
        <input type="date" /> ~ <input type="date" />
        <button>篩選</button>
        <button>匯出 CSV</button>
      </div>
    </div>
  );
}

// F7 問題分類標記
function TagPanel() {
  return (
    <div>
      <h3>問題分類標記</h3>
      <table border="1" cellPadding="6" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>問題</th>
            <th>分類</th>
            <th>標籤</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI 回答不完整</td>
            <td>回答品質</td>
            <td>
              <select>
                <option>不完整</option>
                <option>過於簡短</option>
                <option>語意誤解</option>
              </select>
            </td>
            <td>
              <button>調整</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: 16 }}>
        <button>批量標記</button>
        <button>新增自訂標籤</button>
      </div>
      <div style={{ marginTop: 16 }}>
        <h4>優化建議</h4>
        <ul>
          <li>補充訓練數據</li>
          <li>調整模型參數</li>
        </ul>
      </div>
    </div>
  );
}

// 分頁對應元件
const featurePanels = {
  script: <ScriptManager />,
  run: <TestRunner />,
  score: <ScorePanel />,
  report: <ReportPanel />,
  feedback: <FeedbackPanel />,
  stat: <StatPanel />,
  tag: <TagPanel />,
};

export default function MaiAgentTestAutomation() {
  const [activeTab, setActiveTab] = useState("script");
  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: 24, minHeight: 600 }}>
      {/* 分頁列 */}
      <div style={{ display: "flex", borderBottom: "1px solid #e5e7eb", marginBottom: 24 }}>
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: "10px 24px",
              cursor: "pointer",
              color: activeTab === tab.key ? "#2563eb" : "#64748b",
              borderBottom: activeTab === tab.key ? "2px solid #2563eb" : "none",
              fontWeight: activeTab === tab.key ? 700 : 400,
              marginRight: 8,
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {/* 分頁內容 */}
      <div>
        {featurePanels[activeTab]}
      </div>
    </div>
  );
}
