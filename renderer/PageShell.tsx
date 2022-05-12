import React from "react";
import {PageContextProvider} from "./usePageContext";
import type {PageContext} from "./types";
import {theme} from "../styles/theme";
import {ChakraProvider} from "@chakra-ui/react";
import {globalTheme} from "../styles/global.theme";
import {Global} from "@emotion/react";
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

interface PageShellProps {
  children: React.ReactNode;
  pageContext: PageContext;
}

function PageShell({children, pageContext}: PageShellProps) {
  return (
    <React.StrictMode>
      <Global styles={globalTheme}/>
      <ChakraProvider
        resetCSS
        theme={theme}>
        <PageContextProvider pageContext={pageContext}>
          <Layout>
            <Sidebar/>
            <Content>{children}</Content>
          </Layout>
        </PageContextProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default PageShell

//    {
//         name: 'Home',
//
//         icon: FiHome
//     },
//     { name: 'Trending', icon: FiTrendingUp },
//     { name: 'Explore', icon: FiCompass },
//     { name: 'Favourites', icon: FiStar },
//     { name: 'Settings', icon: FiSettings },
// <Link className="navitem" href="/">
//     Home
// </Link>
// <Link className="navitem" href="/about">
//     About
// </Link>