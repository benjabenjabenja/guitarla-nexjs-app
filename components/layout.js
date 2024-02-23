import Head from "next/head";
import React from "react";

const Layout = ({children, title, description}) => {
    return (
        <>
            <Head>
                <title>{`${title} - Nextjs app`}</title>
                <meta name="description" content={description} />
            </Head>
            <h2>Desde layout principal</h2>
            <main className="layout-principal">
                {children}
            </main>
        </>
    );
};

export default Layout;
