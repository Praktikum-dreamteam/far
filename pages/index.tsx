import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../src/components/Header'
import Donate from "../src/components/Donate";

export default function Home() {
  return (
    <div className="home">

      <Header />
      <Donate />
    </div>
  )
}
