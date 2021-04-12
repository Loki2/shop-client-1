// import App from 'next/app'
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layouts";
import { ApolloProvider } from "@apollo/react-hooks";
import AuthProvider from "../contexts/AuthProvider";
import apolloClient from "../apollo/apolloClient";
import cookie from "cookie";
import { QUERY_USER } from "../graphql/User";
import "../styles/global.scss";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
// import dotenv from "dotenv";
// dotenv.config();
const Backend_uri = process.env.BACKEND_URI

// function MyApp({ Component, pageProps, apollo }) {
//   return (
//    <ApolloProvider client={apollo}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//    </ApolloProvider>
//   )
// }

function App({ Component, pageProps, apollo, user }) {
  return (
    <ApolloProvider client={apollo}>
      <AuthProvider userData={user}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  );
}

App.getInitialProps = async ({ ctx, router }) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  if (process.browser) {
    return __NEXT_DATA__.props.pageProps;
  }

  //console.log('Router -->', router)

  const { headers } = ctx.req;
  const cookies = headers && cookie.parse(headers.cookie || "");
  const token = cookies && cookies.jwtToken;

  if (!token) {
    if (
      router.pathname === "/admin" ||
      router.pathname === "/admin/products" ||
      router.pathname === "/admin/products/create" ||
      router.pathname === "/admin/products/ProductInfo" ||
      router.pathname === "/admin/profiles" ||
      router.pathname === "/admin/banks" ||
      router.pathname === "/admin/sale" ||
      router.pathname === "/admin/brands" ||
      router.pathname === "/Categories" ||
      router.pathname === "/admin/orders" ||
      router.pathname === "/Checkout" ||
      router.pathname === "/Carts"
    ) {
      //Use OR To Protected more Routers
      ctx.res.writeHead(302, { Location: "/Signin" }); //302 Redirect Route code
      ctx.res.end();
    }
    //Add More Protected route here
    return null;
  }
  //"http://localhost:5002/graphql"
  //"http://192.168.100.14:5002/graphql"
  const response = await fetch(`${Backend_uri}`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}` || "",
    },
    body: JSON.stringify(QUERY_USER),
  });
  //console.log("response data:", response);
  if (response.ok) {
    const result = await response.json();
    return { user: result.data.user };
    //console.log('User Info -->',  result)
  } else {
    if (router.pathname === "/Carts") {
      ctx.res.writeHead(302, { Location: "/Signin" }); //302 Redirect Route code
      ctx.res.end();
    }
    //Add More Protected route here
    return null;
  }
  console.log(ctx.req.headers);
};

export default apolloClient(App);
