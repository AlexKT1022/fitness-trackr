import { useAuth } from '../context/AuthContext';
import useMutation from '../context/api/useMutation';

const RESOURCE = '/activities';

const NewActivityForm = () => {
  const { user } = useAuth();
  const { mutate } = useMutation('POST', RESOURCE, ['activities']);

  const handleSubmit = (FormData) => {
    const activityObj = {
      creatorId: user.id,
      name: FormData.get('activityName'),
      description: FormData.get('description'),
    };

    mutate(activityObj);
  };

  return (
    <form action={handleSubmit}>
      <h2>Add a new activity</h2>
      <label>
        Name
        <input
          name="activityName"
          type="text"
          required
        />
      </label>
      <label>
        Description
        <input
          name="description"
          type="text"
          required
        />
      </label>
      <button>Add Activity</button>
    </form>
  );
};

export default NewActivityForm;
