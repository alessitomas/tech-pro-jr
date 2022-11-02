import styles from '../../../../styles/area_admin.module.css'
import Link from 'next/link'
import { useState } from 'react'

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
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input type="text" placeholder="Procure um candidato" onChange={event => {setSearchTerm(event.target.value);}}/>
      <h1>Candidatos</h1>
      {candidatos.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }

      }).map(candidato => (
        <Link href={'candidato/'+candidato.id} key={candidato.id}>
          <div className={styles.single}>
            <h3>{candidato.name}</h3>
          </div>
        </Link>
      ))}
    </div>
      )
}
