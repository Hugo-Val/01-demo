import Link from "next/link";
import styles from "./Navbar.module.css";

const menuItems = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "About",
        href: "/about",
    },
    {
        text: "Contact",
        href: "/contact",
    },
    {
        text: "Pricing",
        href: "/pricing",
    }
];

export const Navbar = () => {
    return (
        <nav className={styles["menu-container"]}>
            {
                menuItems.map(({ text, href }, index) => (
                    <Link key={index} href={href} >{text}</Link>
                    
                ))}
            
        </nav>
    );
};