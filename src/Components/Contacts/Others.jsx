import { useParams } from "react-router-dom";

const Others = () => {
  const { name } = useParams();
  return <div>Others - {name}</div>;
};

export default Others;
