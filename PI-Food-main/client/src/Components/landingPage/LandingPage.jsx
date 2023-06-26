import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

export default function LandingPage(props){
    return(
        <div className={styles.container}>
            <div className={styles.txt}>
                <h1>WELCOME</h1>
                <h2>Henry Foods</h2>
                <Link to='/home'>
                    <button>Get Started</button>
                </Link>
            </div>
        </div>
    );
};