import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {
   return (
      <nav className={style.nav}>
         <NavLink className={style.link} to="/profile" activeClassName={style.active}>Profile</NavLink>
         <NavLink className={style.link} to="/dialogs" activeClassName={style.active}>Messages</NavLink>
         <NavLink className={style.link} to="/news" activeClassName={style.active}>News</NavLink>
         <NavLink className={style.link} to="/music" activeClassName={style.active}>Music</NavLink>
         <NavLink className={style.link} to="/settings" activeClassName={style.active}>Settings</NavLink>
      </nav>
   )
}

export default Navbar;