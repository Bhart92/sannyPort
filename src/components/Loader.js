import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center loader">
      <Spinner animation="grow" />
    </div>
  );
};

export default Loader;
