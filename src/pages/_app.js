// pages/_app.js

import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/MINE_LOGO.png" sizes="any"/>
        <title>
          Your Website Name
        </title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
