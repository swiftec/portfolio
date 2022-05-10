import React from "react";
import {PageContextProvider} from "./usePageContext";
import type {PageContext} from "./types";
import {theme} from "../styles/theme";
import {Link} from "./Link";
import {ChakraProvider} from "@chakra-ui/react";
import {globalTheme} from "../styles/global.theme";
import {Global} from "@emotion/react";
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar";

export {PageShell};

function PageShell({
                       children,
                       pageContext,
                   }: {
    children: React.ReactNode;
    pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <Global styles={globalTheme} />
      <ChakraProvider resetCSS theme={theme}>
        <PageContextProvider pageContext={pageContext}>
          <Layout>
            <Sidebar>
              <Link className="navitem" href="/">
                Home
              </Link>
              <Link className="navitem" href="/about">
                About
              </Link>
            </Sidebar>
            <Content>{children}</Content>
          </Layout>
        </PageContextProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
