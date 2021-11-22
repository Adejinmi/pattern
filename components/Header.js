import React from 'react';
import styled from 'styled-components';
import logo from 'public/images/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSettings, FiSearch, FiMenu, FiX } from 'react-icons/fi';

export const Wrapper = styled.div`
	position: relative;
	img {
		width: 250px;
		margin: 30px auto 40px;
		display: block;
	}
`;

export const Nav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0px;
	border-bottom: 1px solid #c4c4c4;
	a{
		opacity: 0.7;
		padding-bottom: 19px;
	}
	a.active {
		font-weight: bold;
		border-bottom: 2px solid black;
	}
	
	@media (max-width: 960px) {
		display: none;
	}
`;

export const NavMobile = styled.nav`
	display: none;
	@media (max-width: 960px) {
		height: 100vh;
		width: 100%;
		background-color: rgba(0,0,0,0.25);
		transition: 0.3s all;
		position: fixed;
		top: 0px;
		left: 0;
		z-index: 222;
		display: none;
		a {
			text-align: center;
			display: block;
			padding: 10.5px;
			font-size: 14px;
			opacity: 0.7;
			&.active {
				opacity: 1;
				font-weight: bold;
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
const Div= styled.div`
	background-color: white;
	box-sizing: border-box;
	border-top: ${({isBod}) => (isBod ? '0.4px solid rgba(115,115,115,0.5)' : '' )};
	padding:  ${({isBod}) => (isBod ? '25px 0px' : '' )};
`

const Header = ({ isOpen, handleNavBar, left }) => {
	const router = useRouter();
	console.log(router.pathname);
	return (
		<Wrapper>
			<img src={logo} />
			<Menu>
					<FiMenu onClickCapture={() => document.getElementById('mobil').style.display="block"} color='#000' style={{ marginRight: '15px' }} />
			</Menu>
			<Nav>
				<Link href='/'>
					<a className={router.pathname === '/' ? 'active' : ''}>HOME</a>
				</Link>

				<Link href='/mtm'>
					<a  className={router.pathname === '/mtm' ? 'active' : ''}>MADE-TO-MEASURE</a>
				</Link>
				<Link href='/fabric'>
					<a className={router.pathname === '/fabric' ? 'active' : ''}>FABRIC ARTICLES</a>
				</Link>
				<Link href='/herbadashrey'>
					<a className={router.pathname === '/herbadashrey' ? 'active' : ''}>HABERDASHERY</a>
				</Link>
				<Link href='/cut-make-trim'>
					<a className={router.pathname === '/cut-make-trim' ? 'active' : ''}>CUT-MAKE-TRIM	</a>
				</Link>
				<Link href="#">
					<FiSearch style={{cursor: 'pointer'}} />
				</Link>
			</Nav>
			<NavMobile left={left} id='mobil'>
			<Div>
					<FiX onClickCapture={() => document.getElementById('mobil').style.display="none"} color='#000' style={{ marginLeft: '15px', marginBottom:'45px' }} />
				<Div isBod>
				<Link href='/'>
					<a className={router.pathname === '/' ? 'active' : ''}>HOME</a>
				</Link>
				<Link href='/mtm'>
					<a className={router.pathname === '/mtm' ? 'active' : ''}>MADE-TO-MEASURE</a>
				</Link>
				<Link href='/fabric'>
					<a className={router.pathname === '/fabric' ? 'active' : ''}>FABRIC ARTICLES</a>
				</Link>
				<Link href='/herbadashrey'>
					<a className={router.pathname === '/herbadashrey' ? 'active' : ''}>HERBADASHERY</a>
				</Link>
				<Link href='/cut-make-trim'>
					<a className={router.pathname === '/cut-make-trim' ? 'active' : ''}>CUT-MAKE-TRIM</a>
				</Link>
				</Div>
			</Div>
			</NavMobile>
		</Wrapper>
	);
};

export default Header;
