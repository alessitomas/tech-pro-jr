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
        <WithSubnavigation_admin/>

        <div className={styles.detail}>  
            <h1> {props.candidato.name} </h1>
            <p> {props.candidato.email} </p>
            <p> {props.candidato.website} </p>
            <p> {props.candidato.address.city} </p>
        </div>
            </>
     );
}
 
export default Details;