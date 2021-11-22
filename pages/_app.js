import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export const Layout = styled.div`
	width: 100%;
	padding: 0 6%;
	margin: 0 auto;
`;

function MyApp({ Component, pageProps }) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [left, setLeft] = React.useState(-230);
	const handleNavBar = () => {
		setLeft(isOpen ? -230 : 0);
		setIsOpen(!isOpen);
	};
	const router = useRouter();
	useEffect(() => {
		document.getElementById('mobil').style.display='none';
	  });
	return router.route !== '/cmt' ? (
		
		<Layout>
			<Header handleNavBar={handleNavBar} isOpen={isOpen} left={left}/>
			<Component {...pageProps} />
			<Footer />
		</Layout>
	) : (
		<Component {...pageProps} />
	);
}

export default MyApp;
