import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '../../styles/about-us.module.css';

export const metadata = {
    title: "about us - NextJS",
    description: "Guitars, sale guitars, market place guitars, nextjs app.",
};

export default function AboutUs() {
    return (
        <Layout>
            <main className='contenedor'>
                <h1 className='heading'>About us</h1>
                <div className={styles.contenido}>
                    <Image
                        src='/img/nosotros.jpg'
                        alt="Logo sobre nosotros"
                        width={1000}
                        height={800}
                        className={styles.image}
                    />
                    <div>
                        <p>Integer lectus ex, consectetur a fermentum et, pharetra id nibh. Quisque varius gravida metus, et pretium augue semper quis.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Donec vitae tempor turpis, vel fringilla lorem. Quisque mollis vestibulum mollis. Pellentesque suscipit pulvinar aliquet.
                        Praesent ac quam lorem.</p>

                        <p>Proin feugiat fermentum convallis.Fusce lacinia, odio non condimentum placerat, arcu urna pellentesque urna,
                        in mattis ipsum nunc sed felis.
                        Nunc consequat sollicitudin posuere. Donec laoreet eros vel volutpat ullamcorper.
                        Etiam pretium accumsan diam et malesuada. Aenean ac sem justo. Phasellus ac sem nibh. Maecenas laoreet eros sed ultricies consequat. In non ultrices nibh</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
