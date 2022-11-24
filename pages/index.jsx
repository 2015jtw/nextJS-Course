import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.container}>
      <h1>Hi</h1>
      <div>
        <ul>
          <li>
            <Link href="/about">About Page</Link>
          </li>
          <li>
            <Link href="/blogs/blah">Catch All Page</Link>
          </li>
          <li>
            <Link href="/products/">Product Index Page</Link>
          </li>
          <li>
            <Link href="/products/random">Dynamic Product Page</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
