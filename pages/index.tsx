import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../src/components/Header';
import Donate from "../src/components/Donate";
import Body from '../src/components/Body';

export default function Home() {
  // @ts-ignore
    return (
    <div className="home">

      <Header />
      <Donate />
      <Body />
    </div>
  )
}
