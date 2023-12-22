import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    setIsHamburgerActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsActive(false);
    setIsHamburgerActive(false);
  };

  return (
		<div className={`${styles.container} ${isActive ? styles.open : ""}`}>
			<nav className={`${styles.burgerNav} ${isActive ? styles.open : ""}`}>
				<p className={styles.title}>Navigation menu</p>
				<Link to="/" onClick={closeMenu}>
					Main Page
				</Link>
				<Link to="/categories" onClick={closeMenu}>
					Catigories
				</Link>
				<Link to="/allproducts" onClick={closeMenu}>
					All Products
				</Link>
				<Link to="/allsalespage" onClick={closeMenu}>
					All sales
				</Link>
				<Link to="/basket" onClick={closeMenu}>
					Your Basket
				</Link>
			</nav>
			<div
				className={`${styles.burger} ${isHamburgerActive ? styles.open : ""}`}
				onClick={toggleMenu}
			>
				<Hamburger toggled={isHamburgerActive} />
			</div>
		</div>
	);
};

export default BurgerMenu;
