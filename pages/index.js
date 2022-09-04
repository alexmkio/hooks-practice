import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReducerComponent from '../components/Reducer/Reducer'
import LazyReducerComponent from '../components/LazyReducer/LazyReducer'
import MemoComponent from '../components/Memo/Memo'
import WithoutMemoComponent from '../components/WithoutMemo/WithoutMemo'
import CallbackComponent from '../components/Callback/Callback'
import WithoutCallbackComponent from '../components/WithoutCallback/WithoutCallback'
import RefComponent from '../components/Ref/Ref'

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
        <MemoComponent />
        <WithoutMemoComponent />
        <CallbackComponent />
        <WithoutCallbackComponent />
        <RefComponent />
      </main>
    </div>
  )
}
