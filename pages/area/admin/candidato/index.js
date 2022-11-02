import styles from '../../../../styles/area_admin.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {
      candidatos: data
    },
  }
}

export default function Area_Candidato({ candidatos }) {
  console.log(candidatos)
  return (
    <div>
      <h1>Candidatos</h1>
      {candidatos.map(candidato => (
        <Link href={'candidato/'+candidato.id} key={candidato.id}>
          <div className={styles.single}>
            <h3>{candidato.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
