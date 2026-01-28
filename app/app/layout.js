export const metadata = {
  title: "Les Jolies Colonies de Vacances",
  description: "Colonies de vacances éducatives et ludiques"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
