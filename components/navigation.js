import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Hamburger from './hamburger';

export default function Navigation({ links }) {
    const { asPath } = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const menuStyles = mobileMenuOpen ? 'flex' : 'hidden';
    const navLinks = links.filter(({ navigation }) => navigation);
    return (
        <>
            <Hamburger toggleMenu={toggleMenu} />
            <nav className={`${menuStyles} sm:flex fixed sm:relative sm:mr-8 py-20 sm:py-0 font-sans h-full flex flex-col sm:flex-row justify-between space-x-40 text-white font-bold text-lg sm:text-sm inset-0 sm:inset-auto`}>
                <div className="flex flex-col sm:flex-row">
                    {navLinks.map(({ title, href }) => {
                        const active = asPath === href ? 'sm:active-link' : '';
                        return (
                            <Link href={href} key={href}>
                                <a className={`${active} px-4 py-4 sm:py-0 sm:h-full flex justify-center items-center sm:border-b-4 border-white hover:border-primary-accent transition-colors ease-linear duration-100 text-center`}>
                                    {title}
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}

Navigation.propTypes = {
    links: PropTypes.arrayOf(PropTypes.exact({
        title: PropTypes.string,
        href: PropTypes.string,
        navigation: PropTypes.bool,
        footer: PropTypes.bool,
    })).isRequired,
};
