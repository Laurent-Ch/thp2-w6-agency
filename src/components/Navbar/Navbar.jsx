import { Link } from 'react-router-dom';
import DarkModeButton from 'components/DarkModeButton/DarkModeButton';

const Navbar = () => {
  // SECOND TUTORIAL
  return (
    <nav className='Navbar'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <DarkModeButton />
    </nav>
  )
}
export default Navbar;