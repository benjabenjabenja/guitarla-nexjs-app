import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {    
    return (
        <Html>
            <Head>
                <meta name='description' content='GuitarLA - Sale guitars and a music blog' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' />
            </Head>
            <body lang='es-AR'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}