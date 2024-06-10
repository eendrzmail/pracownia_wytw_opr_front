// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import { APP_ROUTE } from './appConsts';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import LandingPage from '@/pages/LandingPage/LandingPage';
import styles from './App.module.css';
import WeatherPage from '@/pages/WeatherPage/WeatherPage';
import HistoryPage from '@/pages/HistoryPage/HistoryPage';

function App() {
    const queryClient = new QueryClient();

    return (
        <div className={styles.app}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter basename={'/pracownia/'}>
                    <Routes>
                        <Route
                            element={<LandingPage />}
                            index
                        />

                        <Route
                            element={<WeatherPage />}
                            path={`${APP_ROUTE.WEATHER}/*`}
                        />

                        <Route
                            element={<HistoryPage />}
                            path={`${APP_ROUTE.HISTORY}/*`}
                        />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    );
}

export default App;
