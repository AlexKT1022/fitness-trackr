import useMutation from '../context/api/useMutation';
import { useAuth } from '../context/AuthContext';
import { usePage } from '../context/PageContext';

const RESOURCE = '/activities';

const NewActivityForm = () => {
  const { user } = useAuth();
  const { mutate } = useMutation('POST', RESOURCE, []);
  const { setPage } = usePage();

  const handleSubmit = (FormData) => {
    const activityObj = {
      creatorId: user.id,
      name: FormData.get('activityName'),
      description: FormData.get('description'),
    };

    mutate(activityObj);

    setPage('activities');
  };

  return (
    <form action={handleSubmit}>
      <h2>Add a new activity</h2>
      <label>
        Name
        <input
          name="activityName"
          type="text"
        />
      </label>
      <label>
        Description
        <input
          name="description"
          type="text"
        />
      </label>
      <button>Add Activity</button>
    </form>
  );
};

export default NewActivityForm;
