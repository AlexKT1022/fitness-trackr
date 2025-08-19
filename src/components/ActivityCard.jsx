import { useAuth } from '../context/AuthContext';
import useMutation from '../context/api/useMutation';

const RESOURCE = '/activities';

const ActivityCard = ({ activity }) => {
  const { token, user } = useAuth();
  const { mutate } = useMutation(
    'DELETE',
    RESOURCE + `/${activity.id.toString()}`,
    ['activities'],
  );

  const handleDelete = () => {
    console.log(activity);

    if (user.id !== activity.creatorId) {
      alert(
        'You must be the same user who created this activity to perform this action',
      );

      return;
    }

    mutate();
  };

  return (
    <li>
      {activity.name}
      {token && (
        <button
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default ActivityCard;
