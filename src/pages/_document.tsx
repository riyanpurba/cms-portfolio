import { Html, Head, Main, NextScript } from "next/document";
import { GetStaticPropsContext } from "next";

const Document = ({locale}: GetStaticPropsContext) => {
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;