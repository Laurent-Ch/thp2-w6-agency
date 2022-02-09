import { Link } from 'react-router-dom';
import DarkModeButton from '../DarkModeButton/DarkModeButton';

const Navbar = () => {

  return (
    <nav className='Navbar'>
      <Link to="/">Accueil</Link>
      <Link to="/about">L'Agence</Link>
      <Link to="/works">Projets</Link>
      <DarkModeButton />
    </nav>
  )
}
export default Navbar;