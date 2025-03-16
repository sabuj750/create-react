const LoadingSpinner = () => {
  return (
    <div className="text-center mySpinner">
      <div
        className="spinner-border"
        style={{ height: "5rem", width: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
