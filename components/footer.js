'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import styles from '../styles/footer.module.css';

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const options = { scroll: true };

    return (
        <footer className={`contenedor ${styles.footer}`}>
            <nav className={styles.navigation}>
                <Link
                    onClick={() => router.push(pathname, options)}
                    className={`${styles.link} ${pathname == '/' ? styles.active : ''}`}
                    href='/'> Home </Link>
                <Link
                    onClick={() => router.push(pathname, options)}
                    className={`${styles.link} ${pathname == '/about-us' ? styles.active : ''}`}
                    href='/about-us'> About Us </Link>
                <Link
                    onClick={() => router.push(pathname, options)}
                    className={`${styles.link} ${pathname == '/market' ? styles.active : ''}`}
                    href='/market'> Market </Link>
                <Link
                    onClick={() => router.push(pathname, options)}
                    className={`${styles.link} ${pathname == '/blog' ? styles.active : ''}`}
                    href='/blog'> Blog </Link>
            </nav>
            <p className={styles.copyright}> copyright reseved by BENJA DEV { new Date().getFullYear() }</p>
        </footer>
    );
}
