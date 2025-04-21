import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>FitLog</h2>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Workout</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
