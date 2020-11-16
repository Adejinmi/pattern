import React from 'react';
import styled from 'styled-components';
import logo from 'public/images/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSettings, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

export const Wrapper = styled.div`
	position: relative;
	img {
		width: 250px;
		margin: 30px auto 40px;
		display: block;
	}
`;

export const Nav = styled.nav`
	max-width: 600px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 25px auto 20px;
	padding-bottom: 15px;
	a.active {
		font-weight: 800;
	}
	p {
		font-size: 0.85rem;
		margin-bottom: 10px;
	}
	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		// border: 1px solid #c4c4c4;
		height: 1px;
		background: #c4c4c4;
	}
	@media (max-width: 960px) {
		display: none;
	}
`;

export const NavMobile = styled.nav`
	display: none;
	@media (max-width: 960px) {
		height: 100vh;
		width: 230px;
		background-color: white;
		box-shadow: 0 15px 20px 0 rgba(82, 65, 100, 0.07);
		transition: 0.3s all;
		position: fixed;
		top: 0px;
		left: 0;
		z-index: 222;
		height: 100vh;
		bottom: 0;
		display: block;
		left: ${(props) => `${props.left}px`};
		a {
			display: block;
			padding: 30px;
			&.active {
				font-weight: 600;
			}
		}
	}
	svg {
		margin-left: 30px;
		margin-top: 30px;
		font-size: 27px;
	}
`;

const Menu = styled.div`
	position: absolute;
	top: 0px;
	display: none;
	@media (max-width: 960px) {
		display: inline-block;
	}
`;

const Header = ({ isOpen, handleNavBar, left }) => {
	const router = useRouter();
	console.log(router.pathname);
	return (
		<Wrapper>
			<img src={logo} />
			<Menu>
				{isOpen ? (
					<FiX onClickCapture={() => handleNavBar('closed')} color='#000' style={{ marginRight: '15px' }} />
				) : (
					<FiMenu
						onClickCapture={() => handleNavBar('opened')}
						color='#000'
						style={{ marginRight: '15px' }}
					/>
				)}
			</Menu>
			<Nav>
				<Link href='/mtm'>
					<a className={router.pathname === '/mtm' ? 'active' : ''}>MTM ARTICLES</a>
				</Link>
				<Link href='/fabric'>
					<a className={router.pathname === '/fabric' ? 'active' : ''}>FABRIC ARTICLES</a>
				</Link>
				<Link href='/herbadashrey'>
					<a className={router.pathname === '/herbadashrey' ? 'active' : ''}>HERBADASHERY</a>
				</Link>
				<Link href='/cmt'>
					<a className={router.pathname === '/cmt' ? 'active' : ''}>CMT MASTERY</a>
				</Link>
			</Nav>
			<NavMobile left={left}>
				{isOpen && (
					<FiX onClickCapture={() => handleNavBar('closed')} color='#000' style={{ marginRight: '15px' }} />
				)}
				<Link href='/mtm'>
					<a className={router.pathname === '/mtm' ? 'active' : ''}>MTM ARTICLES</a>
				</Link>
				<Link href='/fabric'>
					<a className={router.pathname === '/fabric' ? 'active' : ''}>FABRIC ARTICLES</a>
				</Link>
				<Link href='/herbadashrey'>
					<a className={router.pathname === '/herbadashrey' ? 'active' : ''}>HERBADASHERY</a>
				</Link>
				<Link href='/cmt'>
					<a className={router.pathname === '/cmt' ? 'active' : ''}>CMT MASTERY</a>
				</Link>
			</NavMobile>
		</Wrapper>
	);
};

export default Header;
