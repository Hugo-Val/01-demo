import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './MainLayout.module.css';
import { Inter } from 'next/font/google';
import { Navbar } from '../Navbar/Navbar';

const inter =  Inter({ subsets: ['latin'] });

type MyComponentProps = PropsWithChildren<{}>;

export default function MainLayout({ children }: MyComponentProps) {
    return (
        <>
            <Head>
                <title>Home - Hugo Valencia</title>
                <meta name="description" content="Home Page" />
                <Link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${inter.className}`}>
                {children}
            </main>
        </>
    )
}