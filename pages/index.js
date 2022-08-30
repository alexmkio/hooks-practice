import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReducerComponent from '../components/Reducer/Reducer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hooks</title>
        <meta name="description" content="React Hooks practice" />
      </Head>

      <main className={styles.main}>
        <ReducerComponent />
      </main>
    </div>
  )
}
