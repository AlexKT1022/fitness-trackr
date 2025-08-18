import useQuery from '../context/api/useQuery';
import Loading from './Loading';

const RESOURCE = '/activities';

const ActivitiesPage = () => {
  const { data: activities, loading } = useQuery(RESOURCE);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Activities</h1>
      <ul>
        {activities?.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ActivitiesPage;
