import { Link } from 'react-router-dom';
import DarkModeButton from '../DarkModeButton/DarkModeButton';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div class="left-part">
        <Link to="/" class="navbar__elt">Accueil</Link>
        <Link to="/about" class="navbar__elt">L'Agence</Link>
        <Link to="/works" class="navbar__elt">Projets</Link>
      </div>
      <DarkModeButton />
    </nav>
  )
}
export default Navbar;