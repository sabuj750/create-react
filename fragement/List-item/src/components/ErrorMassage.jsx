const ErrorMassage = ({ error }) => {
  return <>{error.length === 0 && <h3>There is no pet</h3>}</>;
};

export default ErrorMassage;
