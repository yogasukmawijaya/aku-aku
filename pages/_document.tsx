import * as React from "react";
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface MyDocumentProps {
  // tslint:disable-next-line:no-any
  styleTags: any;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    // const page = {};
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    console.log(page);
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}