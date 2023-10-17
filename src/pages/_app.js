import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div className="wrapper">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
);

export default MyApp;
