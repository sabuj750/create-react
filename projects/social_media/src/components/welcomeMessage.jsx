const Welcome = ({ ButtonClick }) => {
  return (
    <center className="welcomeMessage">
      <h2>No! post is available.</h2>
      <button type="button" className="btn btn-primary" onClick={ButtonClick}>
        Get The Post
      </button>
    </center>
  );
};
export default Welcome;
