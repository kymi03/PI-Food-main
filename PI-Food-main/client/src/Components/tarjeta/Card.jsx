import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card (props){
    const { name, img, diets, id, healthScore } = props;
    return(
        <div className={styles.container}>
            <div className={styles.description}>
                <Link to={`/detail/${id}`}>
                    <h1>{name}</h1>
                </Link>
                <img src={img} alt="" />
                <div>
                    {diets?.map((diet)  =>{
                        return <span>{ diet.name }</span>;
                    })}
                </div>
                <span>
                    <h3>Health Score: </h3>
                     {healthScore}
                </span>
            </div>
        </div>
    );
};
