import { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import WorkoutCard from '../components/WorkoutCard';

const WorkoutList = () => {
  const { workouts } = useContext(WorkoutContext);

  return (
    <div className="page">
      <h2>My Workouts</h2>
      <div className="workout-list">
        {workouts.length === 0 ? (
          <p>No workouts logged yet.</p>
        ) : (
          workouts.map(w => <WorkoutCard key={w.id} workout={w} />)
        )}
      </div>
    </div>
  );
};

export default WorkoutList;
