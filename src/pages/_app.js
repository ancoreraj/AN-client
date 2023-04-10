// import '../styles/globals.css'
import Head from "next/head"
import styles from "./../styles/all.scss"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ProSidebarProvider } from 'react-pro-sidebar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
      <ProSidebarProvider>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <Component {...pageProps} />
      </GoogleOAuthProvider>
      </ProSidebarProvider>
    </>
  )
}
