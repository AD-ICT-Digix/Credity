import { Layout, Navigator } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Navigator>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Navigator>
  );
}

export default MyApp;
