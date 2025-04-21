import { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const AddWorkout = () => {
  const { addWorkout } = useContext(WorkoutContext);
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !duration) {
      setError('Please fill all fields');
      return;
    }
    addWorkout({
      title,
      duration,
      date: new Date().toLocaleDateString()
    });
    setTitle('');
    setDuration('');
    setError('');
    alert('Workout Added!');
  };

  return (
    <div className="page">
      <h2>Add New Workout</h2>
      <form onSubmit={handleSubmit} className="form">
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Workout Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (e.g., 30 min)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
