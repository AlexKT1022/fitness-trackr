import useMutation from '../context/api/useMutation';
import useQuery from '../context/api/useQuery';
import { useAuth } from '../context/AuthContext';
import ActivityCard from './ActivityCard';
import Loading from './Loading';
import NewActivityForm from './NewActivityForm';

const RESOURCE = '/activities';

const ActivitiesPage = () => {
  const { data: activities, loading: queryLoading } = useQuery(RESOURCE);
  const { user } = useAuth();
  const { loading: mutationLoading } = useMutation('POST', RESOURCE, []);

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
