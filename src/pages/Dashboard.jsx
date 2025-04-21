import { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const Dashboard = () => {
  const { workouts } = useContext(WorkoutContext);

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>Total Workouts: {workouts.length}</p>
      <p>Welcome to FitLog! Track and manage your workouts with ease.</p>
    </div>
  );
};

export default Dashboard;
