import Document ,{ Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

export default class extends Document{
  static getInitialProps({renderPage}) {
    return {
      ...renderPage(),
      styles:flush()
    }
  }
  render() {
    return (
      <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
        <title>HNPWA witgh NextJs</title>
      </Head>
      <body>
          <Main />
          <NextScript />
      </body>
      </html>
    )
  }
}