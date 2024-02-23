import Layout from '@/components/layout';
import Link from 'next/link';

export const metadata = {
    title: "market - NextJS",
    description: "Guitars, sale guitars, market place guitars, nextjs app",
};

const Market = () => {
    return (
        <Layout>
            <h2>From market</h2>
            <Link href="/">Back to home</Link>
        </Layout>
    );
}

export default Market;
