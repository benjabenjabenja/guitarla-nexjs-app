import Layout from '@/components/layout';
import Link from 'next/link';

export const metadata = {
    title: "about us - NextJS",
    description: "Guitars, sale guitars, market place guitars, nextjs app.",
};

export default function AboutUs() {
    return (
        <Layout>
            <h2>About us</h2>
            <Link href='/'>Back to home</Link>
        </Layout>
    )
}
