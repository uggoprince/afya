// import localFont from "next/font/local";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Roboto({
  subsets: ['latin', 'latin-ext', 'greek', 'cyrillic'], // Specify subsets for optimal loading
  weight: ['100', '300', '400', '500', '700', '900'],      // Set specific weight(s)
  style: 'normal',    // Optional: specify style if needed
});

export const metadata = {
  title: "AFYA",
  description: "Connecting physicians to patients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased relative overflow-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
