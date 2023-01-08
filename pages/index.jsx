import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import fs from 'fs/promises'
import path from 'path'

export default function Home(props) {

  const { products } = props;

  return (
    <div className={styles.container}>

      <ul>
        {
          products.map((product) => (
            <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
          ))
        }
      </ul>


    </div>
  )
}

export async function getStaticProps() {

  const filepath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products
    }
  }
}
