import { Link } from 'react-router-dom';

const Navbar = () => {
  // SECOND TUTORIAL
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/works">Works</Link>
      <br />
    </nav>
  )
}
export default Navbar;