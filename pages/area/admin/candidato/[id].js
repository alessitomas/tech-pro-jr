import styles from '../../../../styles/area_admin.module.css'
import WithSubnavigation_admin from '../../../../components/navbar_admin'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(candidato => {
        return {
            params: { id: candidato.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: {
            candidato: data
        }
    }
}

const Details = (props) => {
    return ( 
        <>
        < WithSubnavigation_admin/>
        <div className={styles.container}>
        <h1 className={styles.title}>Detalhes do candidato {props.candidato.name}</h1>
        <div className={styles.detail}>  
            <div className = {styles.detail__item}>
                <p className={styles.label}> Nome </p> <p> {props.candidato.name} </p>
            </div>
            <div className = {styles.detail__item}>
                <p className={styles.label}> Email </p> <p> {props.candidato.email} </p>
            </div>
            <div className = {styles.detail__item}>
                <p className={styles.label}> Gênero </p> <p> {props.candidato.website} </p>
            </div>
            <div className = {styles.detail__item}>
                <p className={styles.label}> Data de Nascimento </p> <p> {props.candidato.address.city} </p>
            </div>
            <div className = {styles.detail__item}>
                <p className={styles.label}> Curso </p> <p> {props.candidato.name} </p>
            </div>
            <div className = {styles.detail__item}>
                <p className={styles.label}> Semestre </p> <p> {props.candidato.email} </p>
            </div>
            <div className = {styles.detail__item}>
                <p className={styles.label}> Área de atuação </p> <p> {props.candidato.website} </p>
            </div>
            <div className = {styles.detail__item}>
                <p className={styles.label}> Bolsista </p> <p> {props.candidato.address.city} </p>
            </div>
            <div className = {styles.detail__item}>
                <p className={styles.label}> Número de celular </p> <p> {props.candidato.name} </p>
            </div>
            
            
        
        </div>
        </div>  
            </>
     );
}
 
export default Details;