import Navbar from "../Navbar/Navbar";
import style from "./header.module.scss";

const Header = () => (
  <header className={style.wrapper}>
    <Navbar />
  </header>
);

export default Header;
