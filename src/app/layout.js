import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata = {
  title: "Hanna Ton That's Portfolio",
  description: "About me, work experience, projects, and contact info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
