/* eslint-disable @next/next/no-page-custom-font */
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "GuitarLA - NextJS",
    description: "Guitars, sale guitars, market place guitars, nextjs app",
};

export default function RootLayout({ children }) {
    return (
		<html lang="es-AR">
            <body className={font.className}>{children}</body>
        </html>
    );
}
