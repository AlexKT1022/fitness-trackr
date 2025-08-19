import { useAuth } from '../context/AuthContext';
import useQuery from '../context/api/useQuery';
import useMutation from '../context/api/useMutation';
import ActivityCard from '../components/ActivityCard';
import Loading from '../components/Loading';
import NewActivityForm from '../components/NewActivityForm';
import ActivityList from '../components/ActivityList';

const RESOURCE = '/activities';

const ActivitiesPage = () => {
  const { user } = useAuth();
  const { data: activities, loading: queryLoading } = useQuery(
    RESOURCE,
    'activities',
  );
  const { loading: mutationLoading } = useMutation('POST', RESOURCE, [
    'activities',
  ]);

  if (queryLoading || mutationLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Activities</h1>
      <ActivityList activities={activities} />
      {user && <NewActivityForm />}
    </>
  );
};

export default ActivitiesPage;
