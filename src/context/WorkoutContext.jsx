import { createContext, useState, useEffect } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => {
        const mapped = data.map(d => ({
          id: d.id,
          title: d.title,
          date: new Date().toLocaleDateString(),
          duration: `${Math.floor(Math.random() * 90) + 10} min`
        }));
        setWorkouts(mapped);
      });
  }, []);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, { ...workout, id: Date.now() }]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
