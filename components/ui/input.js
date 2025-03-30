export function Input({ type = "text", ...props }) {
  return <input type={type} {...props} style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />;
}