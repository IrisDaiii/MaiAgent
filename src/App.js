import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import MaiAgentTestAutomation from "./MaiAgentTestAutomation";

const platforms = [
  { type: "網頁", name: "MaiAgent 客服 AI 助理" },
  { type: "內部", name: "MaiAgent 客服 AI 助理" },
  { type: "API", name: "MaiAgent 客服 AI 助理" },
  { type: "網頁", name: "Test" },
];

const featureList = [
  { key: "script", label: "測試腳本管理" },
  { key: "run", label: "自動化測試執行" },
  { key: "score", label: "回覆準確度評分" },
  { key: "report", label: "測試報告生成" },
  { key: "feedback", label: "用戶回饋收集" },
  { key: "stat", label: "回饋數據統計" },
  { key: "tag", label: "問題分類標記" },
];

const menuItems = [
  { key: "reply", label: "回覆品質控管", icon: "💡" },
  { key: "automation", label: "自動化測試功能", icon: "🧪" },
  { key: "webhook", label: "Webhook", icon: "🔗" },
  { key: "stat", label: "使用分析", icon: "📊" },
];

function App() {
  const [selectedMenu, setSelectedMenu] = useState("reply");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Noto Sans TC, sans-serif", background: "#f5f6fa" }}>
      {/* 左側選單 */}
      <aside style={{ width: 200, background: "#fff", borderRight: "1px solid #e5e7eb" }}>
        {menuItems.map(item => (
          <div
            key={item.key}
            style={{
              padding: "12px 24px",
              color: selectedMenu === item.key ? "#2563eb" : "#64748b",
              background: selectedMenu === item.key ? "#e6f0ff" : "transparent",
              fontWeight: selectedMenu === item.key ? 700 : 400,
              cursor: "pointer"
            }}
            onClick={() => setSelectedMenu(item.key)}
          >
            <span style={{ marginRight: 8 }}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </aside>
      {/* 主內容區 */}
      <main style={{ flex: 1, background: "#f8f9fb", padding: 32 }}>
        {selectedMenu === "automation" ? (
          <MaiAgentTestAutomation />
        ) : selectedMenu === "reply" ? (
          <div>回覆品質控管頁面（可自訂內容）</div>
        ) : selectedMenu === "webhook" ? (
          <div>Webhook 頁面（可自訂內容）</div>
        ) : selectedMenu === "stat" ? (
          <div>使用分析頁面（可自訂內容）</div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
