import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddWorkout from './pages/AddWorkout';
import WorkoutList from './pages/WorkoutList';
import Profile from './pages/Profile';
import { WorkoutProvider } from './context/WorkoutContext';

const App = () => {
  return (
    <WorkoutProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddWorkout />} />
          <Route path="/workouts" element={<WorkoutList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </WorkoutProvider>
  );
};

export default App;
