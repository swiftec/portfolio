import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { theme } from "./theme/global";
import { Link } from "./Link";
import { ChakraProvider } from "@chakra-ui/react";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <PageContextProvider pageContext={pageContext}>
          <Layout>
            <Sidebar>
              <Logo />
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

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
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

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
