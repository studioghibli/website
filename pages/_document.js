import Document, { Head, Html, Main, NextScript } from 'next/document';

/*
 * Exists for one reason: `lang` on <html>. The old site set it from a useEffect
 * in index.js, so it was absent from the server HTML — screen readers got an
 * unlabelled document until hydration, and there was a dead `isMounted` helper
 * propping the effect up (C8, D5).
 *
 * No viewport meta here: Next injects one, and declaring it in _document's
 * <Head> logs a warning.
 */
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
