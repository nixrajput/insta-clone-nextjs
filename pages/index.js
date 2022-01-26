import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Insta 2.0</title>
        <meta name="description" content="Instagram clone using NextJS" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feeds */}
      <Feed />

      {/* Modals */}
      <Modal />

    </div>
  )
}
