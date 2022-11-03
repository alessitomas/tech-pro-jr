import styles from '../../../../styles/area_admin.module.css'
import Link from 'next/link'
import WithSubnavegation_3 from '../../../../components/navbar_CADASTROS'
import { useState } from "react";

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
    <div className={styles.body}>
      <WithSubnavegation_3/>
      <input type="text" placeholder="Procure um candidato" onChange={event => {setSearchTerm(event.target.value);}}/>
      <h1 className={styles.title}>Candidatos</h1>
      <div className={styles.container}>
      <div className={styles.main}>
      {candidatos.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }


      }).map(candidato => (
        <Link href={'candidato/'+candidato.id} key={candidato.id}>
          <div className={styles.case_container}>
            <p>{candidato.name}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
    </div>
      )
}
