import { usePage } from './context/PageContext';
import Register from './components/Register';
import Login from './components/Login';
import ActivitiesPage from './components/ActivitiesPage';
import PageNotFound from './components/PageNotFound';

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
const App = () => {
  const { page } = usePage();

  if (page === 'register') return <Register />;
  if (page === 'login') return <Login />;
  if (page === 'activities') return <ActivitiesPage />;

  return <PageNotFound />;
};

export default App;
