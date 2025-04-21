const WorkoutCard = ({ workout }) => {
    return (
      <div className="workout-card">
        <h3>{workout.title}</h3>
        <p><strong>Duration:</strong> {workout.duration}</p>
        <p><strong>Date:</strong> {workout.date}</p>
      </div>
    );
  };
  
  export default WorkoutCard;
  