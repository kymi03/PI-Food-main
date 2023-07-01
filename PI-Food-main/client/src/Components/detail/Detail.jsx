import { Link, useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { recipeDetail } from '../../Redux/actions';
import { useLoading } from '../../hooks/hooks';
import styles from './Detail.module.css';


export default function Detail(props) {

    const { id } = useParams();

    const recipes = useSelector((state) => state.recipeDetail);

    const loading = useLoading( recipeDetail, id);

    return (
        <div>
            <div className='invisible'></div>
            {loading ? (
                <span className={styles.loader}></span>
            ) : (
                <div className={styles.container}>
                    <Link to='/home'>
						<button>Back To home</button>
					</Link>
                    <h1>{recipes.title}</h1>
                    <h3>ID: {recipes.id}</h3>
                    <img src={recipes.image} alt="" />
                    <h3>Health Score: {recipes.healthScore}</h3>
                    {recipes.diets?.map((diet) => {
                        return (
                            <div className={styles.diet}>
                                <span>{diet.name}</span>
                            </div>
                        );
                    })}

                    <div className={styles.summary}>
                        <h2>Info: </h2>
                        <p dangerouslySetInnerHTML={{
                            __html: recipes.summary,
                        }}
                        ></p>
                    </div>

                    <h2 className={styles.stepByStep}>
                        Step By Step Preparation:
                    </h2>
                    {recipes.steps.map((step, index) => {
						return (
							<div key={index} className={styles.stepByStep}>
								<h3>Step {step.number}</h3>
								<ul>
									<p>{step.step}</p>
								</ul>
							</div>
						);
					})}
                </div>
            )}
        </div>
    );
}; 