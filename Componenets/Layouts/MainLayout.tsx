
import Head from 'next/head';
import Link from 'next/link';
import styles from './MainLayout.module.css';
import { Inter } from 'next/font/google';
import { Navbar } from '../Navbar/Navbar';
import { FC } from 'react';


const inter =  Inter({ subsets: ['latin'] });



export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Home - Hugo Valencia</title>
                <meta name="description" content="Home Page" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${inter.className}`}>
                {children}
            </main>
        </>
    )
}