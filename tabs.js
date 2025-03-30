import React from "react";

export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabsList({ children }) {
  return <div style={{ display: "flex", gap: "8px" }}>{children}</div>;
}

export function TabsTrigger({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "6px 12px", cursor: "pointer" }}>
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div style={{ marginTop: 16 }}>{children}</div>;
}
