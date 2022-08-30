import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReducerComponent from '../components/Reducer/Reducer'
import LazyReducerComponent from '../components/LazyReducer/LazyReducer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hooks</title>
        <meta name="description" content="React Hooks practice" />
      </Head>

      <main className={styles.main}>
        <ReducerComponent />
        <LazyReducerComponent initialCount={60}/>
      </main>
    </div>
  )
}
