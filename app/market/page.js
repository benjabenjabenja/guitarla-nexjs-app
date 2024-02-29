import Layout from '@/components/layout';
import GuitarList from '@/components/guitar-list';

export const metadata = {
    title: "market - NextJS",
    description: "Guitars, sale guitars, market place guitars, nextjs app",
};

const Market = () => {
    return (
        <Layout>
            <main className="contenedor">
                <h1 className='heading'> Market </h1>
                <GuitarList
                    
                />
            </main>
        </Layout>
    );
}

export default Market;
