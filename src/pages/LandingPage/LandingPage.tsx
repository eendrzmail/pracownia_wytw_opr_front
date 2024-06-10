import PageCard from './components/PageCard/PageCard';
import styles from './LandingPage.module.css';
import { APP_ROUTE } from 'app/appConsts';

const LandingPage = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.titleContainer}>
                <h2>Pogoda</h2>
            </div>

            <div className={styles.pages}>
                <PageCard
                    key={"Prognoza Pogody"}
                    name={"Prognoza Pogody"}
                    url={APP_ROUTE.WEATHER}
                />
                <PageCard
                    key={"Historia Pogody"}
                    name={"Historia Pogody"}
                    url={APP_ROUTE.HISTORY}
                />
            </div>
        </main>
    );
};

export default LandingPage;
