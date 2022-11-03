import styles from '../../../styles/area_admin.module.css'
import Link from 'next/link'
import WithSubnavigation_admin from '../../../components/navbar_admin'
import { useState } from "react";
import { SimpleGrid,Center, Spacer, bgGradient, Box } from "@chakra-ui/react";

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
    <div className={styles.body}>
      <WithSubnavigation_admin/>
        <h1 className={styles.title}>Alocações</h1>
    </div>  
    <SimpleGrid columns={2} spacing={1}>
    <div class="gp1">
    <h2>Grupo 1</h2>
      <li> Local: Sala 314 P2</li>
      <li> Fase: 2ª Engenharia</li>
      <li> Candidatos: 25</li>
      <li> Avaliadores: Eduardo, Pedro</li>
    </div>
    
    <div class="gp2">
    <h2>Grupo 2</h2>
    <li>Local: Sala 413 P1</li>
    <li> Fase: 3ª   Business</li>
    <li> Candidatos: 25</li>
    <li>Avaliadores: Gabriel, Lucas</li>
    </div>
    <div class="gp3">
    <h2>Grupo 3</h2>
    <li>Local: Sala 413 P1</li>
    <li> Fase: 3ª   Business</li>
    <li> Candidatos: 25</li>
    <li>Avaliadores: Gabriel, Lucas</li>
    </div>
    <div class="gp4">
    <h2>Grupo 4</h2>
    <li>Local: Sala 413 P1</li>
    <li> Fase: 3ª   Business</li>
    <li> Candidatos: 25</li>
    <li>Avaliadores: Gabriel, Lucas</li>
    </div>
 
    </SimpleGrid>



            
            
    </div>
      
      
      
      
      
      )
}
