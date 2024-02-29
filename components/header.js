'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import { useRouter, usePathname } from 'next/navigation';

function Header() {
    
    const router = useRouter();
    const pathname = usePathname();
    const options = { scroll: true };

    return (
        <header className={styles.header}>
            <div className={styles.barra}>
                <Link onClick={() => router.push(pathname, options)} href="/">
                    <Image
                        className={styles.logo}
                        src='/img/logo.svg'
                        alt="Logo"
                        width={300}
                        height={40}
                    />
                </Link>
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
                    <Link
                        onClick={() => router.push(pathname, options)}
                        className={`${styles.link} ${styles.cart} ${pathname == '/cart' ? styles.active : ''}`}
                        href='/cart'>
                        <Image
                            src='/img/carrito.png'
                            alt="Carrito"
                            width={24}
                            height={24}
                        />
                    </Link>
                </nav> 
            </div>
        </header>
    );
}
export default Header;
