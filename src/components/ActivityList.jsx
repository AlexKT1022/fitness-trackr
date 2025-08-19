import ActivityCard from './ActivityCard';

const ActivityList = ({ activities }) => {
  return (
    <ul>
      {activities?.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </ul>
  );
};

export default ActivityList;
