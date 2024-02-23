import Layout from '@/components/layout';
import Link from 'next/link';

export const metadata = {
    title: "home - NextJS",
    description: "Guitars, sale guitars, market place guitars, nextjs app.",
};

export default function Home() {
    return (
        <Layout>  
            <h1 className="title-app">hola mundo nexjs</h1> 
            
            <Link href="/about-us">About us</Link>
            <Link href="/market">Market</Link>
        </Layout>
    );
}
