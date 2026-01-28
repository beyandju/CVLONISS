import "./globals.css";

export const metadata = {
  title: "Les Jolies Colonies de Vacances",
  description: "Colonies de vacances – Côte d’Ivoire, Afrique & Europe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

