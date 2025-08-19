import { useAuth } from '../context/AuthContext';
import useQuery from '../context/api/useQuery';
import useMutation from '../context/api/useMutation';
import ActivityCard from './ActivityCard';
import Loading from './Loading';
import NewActivityForm from './NewActivityForm';

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
      <ul>
        {activities?.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
          />
        ))}
      </ul>
      {user && <NewActivityForm />}
    </>
  );
};

export default ActivitiesPage;
