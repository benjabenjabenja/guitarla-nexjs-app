import Head from "next/head";
import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({children, title, description}) => {
    return (
        <>
            <Head>
                <title>{`${title} - Nextjs app`}</title>
                <meta name="description" content={description} />
            </Head>

            <Header />
            <main className="layout-principal">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
