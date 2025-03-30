export function Button({ children, ...props }) {
  return <button {...props} style={{ padding: "10px", borderRadius: "6px", backgroundColor: "#0070f3", color: "#fff" }}>{children}</button>;
}