import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion, Spring } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Loader from "@/common/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const { locale = 'en', route} = useRouter();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // const transitionSpringPhysics: Spring = {
  //   type: "spring",
  //   mass: 0.2,
  //   damping: 10,
  //   stiffness: 80,
  // };

  // const transitionColor = "#000000";
  
  return loading ? (
    <Loader />
  ) : (
    <div>
      <AnimatePresence mode="wait">
        <motion.div key={route}>
          {/* <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              height: "100vh",
              left: 0,
              zIndex: 1000,
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              height: "100vh",
              right: 0,
              zIndex: 1000,
            }}
            transition={transitionSpringPhysics}
            initial={{ width: "100vw" }}
            animate={{ width: "0vw", transition: { delay: 0.1 } }}
          /> */}
          <NextIntlClientProvider
            locale={locale}
            timeZone="Europe/Vienna"
            messages={pageProps.messages}
          >
            <ThemeProvider enableSystem={true} attribute="class">
              <Component {...pageProps} />
            </ThemeProvider>
          </NextIntlClientProvider>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
