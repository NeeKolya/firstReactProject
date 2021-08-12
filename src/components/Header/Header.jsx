import logo from './../../images/logo.png';
import style from './Header.module.css';

function Header() {
   return (
      <header className={style.header}>
         <img src={logo} alt="logo" className={style.logo} />
      </header>
   )
}

export default Header;