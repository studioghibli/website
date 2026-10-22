import Document, { Head, Html, Main, NextScript } from 'next/document';

/* Custom Document setting lang="en". */
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
