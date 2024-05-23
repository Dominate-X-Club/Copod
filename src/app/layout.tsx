import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const url = process.env.DEPLOYMENT_URL;

export const metadata: Metadata = {
  title: "Copod: Managed Podcast Studios in Delhi NCR",
  description: "Go from zero to 1st  podcast & beyond 🚀 with copod's Ready to Shoot, Hospitality Centric Managed Podcast Studio.",
  openGraph: {
      type: "website",
       url: url,
       title: "Copod: Managed Postcast Studios in Delhi NCR",
       description: "Go from zero to 1st  podcast & beyond 🚀 with copod's Ready to Shoot, Hospitality Centric Managed Podcast Studio.",
       siteName: "Copod",
       images: [{
         url: `${url}/meta/copod_meta_shot.webp`,
         secureUrl: `${url}/meta/copod_meta_shot.webp`,
         width: 1200,
         height: 627,
         alt: 'Podcast like billionares. Invite friends and start talking. It\'s that easy with copod\'s managed podcast studios in Delhi NCR.'
       }],
     }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet"></link>
        
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className} style={{fontFamily:"DM Sans"}}>{children}</body>
    </html >
  );
}
