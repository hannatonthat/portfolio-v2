import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Theme from "@components/Theme";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Hanna Ton That's Portfolio",
  description: "About me, work experience, projects, and contact info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${openSans.className} max-w-screen-md mx-auto px-4 bg-black text-white`}
      >
        <Theme>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}