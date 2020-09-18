import React from 'react';
import styled from 'styled-components';
import logo from 'public/images/logo.svg';

export const Wrapper = styled.nav`
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
`;

const Header = () => (
	<Wrapper>
		<img src={logo} />
		<Nav>
			<p>MTM ARTICLES</p>
			<p>FABRIC ARTICLES</p>
			<p>HERBADASHERY</p>
			<p>CMT MASTERY</p>
		</Nav>
	</Wrapper>
);

export default Header;
