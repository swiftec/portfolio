import React from "react";
import {PageContextProvider} from "./usePageContext";
import type {PageContext} from "./types";
import {theme} from "../styles/theme";
import {ChakraProvider} from "@chakra-ui/react";
import {globalTheme} from "../styles/global.theme";
import {Global} from "@emotion/react";
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar";
import NavItem from "../components/NavItem";
import Content from "../components/Content";
import {FiHome} from "react-icons/fi";
import {BsPerson} from "react-icons/all";

export {PageShell};

function PageShell({children, pageContext,}: {
    children: React.ReactNode;
    pageContext: PageContext;
}) {
    return (
        <React.StrictMode>
            <Global styles={globalTheme}/>
            <ChakraProvider resetCSS theme={theme}>
                <PageContextProvider pageContext={pageContext}>
                    <Layout>
                        <Sidebar>
                            <NavItem href="/" name="Home" icon={FiHome}/>
                            <NavItem href="/about" name="About" icon={BsPerson}/>
                        </Sidebar>
                        <Content>{children}</Content>
                    </Layout>
                </PageContextProvider>
            </ChakraProvider>
        </React.StrictMode>
    );
}

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