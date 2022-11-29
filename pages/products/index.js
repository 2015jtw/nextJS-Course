import styles from '../../styles/Home.module.css'

export default function ProductPage() {

    const products = [
        {
            id: 1,
            name: 'Broom'
        },
        {
            id: 2,
            name: 'Razor'
        },
        {
            id: 3,
            name: 'Tooth brush'
        }
    ]
    return (
        <div className={styles.container}>
            <h1>Main Product Page</h1>
            <ul>
                {products.map(p => <li key={p.id}>{p.name}</li>)}
            </ul>
        </div>
    )
}