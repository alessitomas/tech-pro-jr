import styles from '../../../styles/area_admin.module.css'
import Link from 'next/link'
import WithSubnavigation_admin from '../../../components/navbar_admin'
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
      <WithSubnavigation_admin/>
        <h1 className={styles.title}>Alocações</h1>
    </div>
      )
}
