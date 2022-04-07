import { Layout } from "common";
import 'common/style/globals.css'

function MyApp({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp