import Head from 'next/head';
import Animation from '../components/Animation';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quajutsu</title>
        <link rel="icon" href="/greninja.png" />

      </Head>
      <main>
        <h1 style={{ textAlign: 'center', color: '#4393d1', margin: '20px' }}>
          Furzkanone553
        </h1>
        <Animation />
      </main>
    </div>
  );
}
