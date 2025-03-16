let Time = () => {
  let Today = new Date();
  let now_time = Today.toLocaleTimeString();
  return <p className="lead">This is the current time : {Today.toLocaleDateString()} - {now_time}</p>
}
export default Time;