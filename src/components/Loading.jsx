import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <>
      <FaSpinner
        className="spin-icon"
        size={100}
      />
    </>
  );
};

export default Loading;
