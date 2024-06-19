import Hero from "@/components/helper/hero";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <title>MUDDUSSIR RAZA | Portfolio</title>
      </Head>
      <div className="dark:bg-[#030014] dark:overflow-y-hidden dark:overflow-x-hidden">
        <div className="h-20 w-full">
          <Navbar />
        </div>
        <div className="absolute top-0 right-0 left-0 mx-auto w-[900px] max-[960px]:w-[750px] max-[730px]:w-[550px] max-[550px]:w-[450px] h-[342px] max-[960px]:h-[298px] max-[730px]:h-[239px] max-[550px]:h-[212px] z-0">
          <Hero />
        </div>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
