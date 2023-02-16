import { Link } from "@atoms/Link";

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.main}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/generator">Generator</Link>
      <Link to="/auth">Auth</Link>
      <Link to="/theme">Theme</Link>
      <Link to="/viewport">Viewport</Link>
      <Link to="/boundary">Boundary</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export { Menu };
