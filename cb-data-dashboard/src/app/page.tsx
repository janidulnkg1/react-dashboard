"use client"; // Ensure this directive is at the top for a Client Component

import Head from 'next/head';
import styles from "@/styles/Home.module.css";
import Dashboard from '@/pages/Dashboard/Dashboard';
import Login from '@/pages/components/Login';
import Header from '@/pages/components/Headers/Header';
import SideMenu from '@/pages/components/SideMenu';
import Settings from '@/pages/Dashboard/Settings';
import { useSession } from "next-auth/react";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {
          session ? (
            <>
              <SideMenu />
              <Dashboard />
            </>
          ) : (
            <Login />
          )
        }
      </main>
    </>
  );
}

export default Home;
