import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Products() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    return (
        <div className={styles.container}>
            <h1>ID: </h1>
        </div>
    )
}