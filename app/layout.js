export const metadata = {
  title: "Ladla Tea - Coming Soon",
  description: "Premium handcrafted tea. Coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}