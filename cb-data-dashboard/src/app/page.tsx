import Head from 'next/head'
import styles from "@/styles/Home.module.css";
import Dashboard from '@/pages/Dashboard/Dashboard';
import Login from '@/pages/Login';
import Header from '@/pages/components/Headers/Header';
import SideMenu from '@/pages/components/SideMenu';
import Settings from '@/pages/Dashboard/Settings';

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard"/>
        <meta name="viewport" content="width=device-width initial-scale-1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Header />
      <SideMenu />
        
      </main>
    </>
  );
}
