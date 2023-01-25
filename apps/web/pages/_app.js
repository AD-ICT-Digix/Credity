import { Layout, Navigator } from '../components';
import '../styles/globals.css';
import { API, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

Auth.configure({
  identityPoolId: "eu-west-1:7d8d1ae9-7e22-4d8e-a40e-12133d8f4db0",
  region: "eu-west-1",
  userPoolId: "eu-west-1_lPwBdbSuG",
  userPoolWebClientId: "4c6s6lo0sb50qmug1os8c61s1t",
});

API.configure({
  endpoints: [
    {
      name: "APIGateway",
      endpoint: "https://api.credity.nahnova.tech",
    },
  ],
});

function MyApp({ Component, pageProps, signOut, user }) {
  return (
    <Navigator user={user.username} signOut={signOut}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Navigator>
  );
}

export default withAuthenticator(MyApp)