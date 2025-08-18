import { useEffect, useState } from 'react';
import { useApi } from '../context/ApiContext';

export default function ActivitiesPage() {
  const { request } = useApi();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await request('/activities');

        setActivities(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchActivities();

    console.log(activities);
  }, []);

  return (
    <>
      <h1>Activities</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
