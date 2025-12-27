import Layout from "@/components/layout/Layout";
import { PostsContextProvider } from "@/contexts/Posts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostsContextProvider>
  );
}
