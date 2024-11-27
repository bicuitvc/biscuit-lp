"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header
			className={`container ${styles.container} ${
				isMenuOpen ? styles.open : ""
			}`}
		>
			<div>
				<Link href='/'>
					<span className='sr-only'>Biscuit Ventures</span>
					<Image src='/vectors/logo.svg' alt='logo' width={260} height={24} />
				</Link>
				<button
					className={styles.hamburger}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<Image
						src={isMenuOpen ? "/vectors/close.svg" : "/vectors/hamburger.svg"}
						alt='menu'
						width={24}
						height={24}
					/>
				</button>
			</div>
			<nav
				className={`${styles.nav} ${isMenuOpen ? styles.open : styles.hidden}`}
			>
				<ul>
					<li>
						<Link href='/#biscuit'>Biscuit</Link>
					</li>
					<li>
						<Link href='/#portfolio'>Our Portfolio</Link>
					</li>
					<li>
						<Link href='/#contact' className='primary_button'>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
