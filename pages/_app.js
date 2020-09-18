import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

export const Layout = styled.div`
	max-width: 1200px;
	width: 100%;
	padding: 0 20px;
	margin: 0 auto;
`;

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</Layout>
	);
}

export default MyApp;
