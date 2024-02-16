/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "GuitarLA - NextJS",
    description: "Guitars, sale guitars, market place guitars, nextjs app.",
};

export default function RootLayout({ children }) {
    return (
		<html lang="es-AR">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
