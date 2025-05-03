import './globals.css';
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Carla Schedule",
    description: "Les matchs de Carla.",
    icons: {
        icon: "/favicon.ico", 
        shortcut: "/favicon.ico", 
        apple: "/apple-touch-icon.png", 
    },
    openGraph: {
      title: "Carla Schedule",
      description: "Le calendrier de Carla.",
      url: "https://carla-schedule.vercel.app/",
      siteName: "Carla Schedule",
      images: [
        {
          url: "https://carla-schedule.vercel.app/preview.jpg", // Mets une image propre ici !
          width: 1200,
          height: 630,
          alt: "Carla Schedule",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image", 
      title: "Carla Schedule",
      description: "Les matchs de Carla.",
      images: ["https://carla-schedule.vercel.app/preview.jpg"], // Même image que Open Graph
    },
  };
  



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="fr">
          <body className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
          <header className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-8 text-4xl font-extrabold text-center shadow-md">
    MATCH DE CARLA
</header>
              <main className="container mx-auto mt-4">{children}</main>
              <Analytics />
          </body>
      </html>
  );
}
