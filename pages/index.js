import React from 'react';
import styled from 'styled-components';
import { CenterText, Grid, Button, H2, Section } from '../components/Styles';
import image1 from 'public/images/landingImg.jpeg';
import image3 from 'public/images/madeToMeasure.jpeg';
import image4 from 'public/images/measure1.jpeg';
import image5 from 'public/images/measure2.jpeg';
import image6 from 'public/images/measure3.jpeg';
import image7 from 'public/images/choice.jpg';
import image8 from 'public/images/tailorstore.jpeg';
import image9 from 'public/images/tailorstore1.jpeg';
import image10 from 'public/images/tailorstore2.jpeg';
import image11 from 'public/images/tailorstore3.jpeg';
import image12 from 'public/images/boutique.jpeg';
import image14 from 'public/images/image14.jpeg';

const GridImg = styled.img`
	height: 414px;
	width: 100%;
	object-fit: cover;
	object-position: center left;
`;

const MainImg = styled.img`
	height: 426px;
	width: 100%;
	object-fit: cover;
`;

const IndexPage = () => (
	<>
		<Section>
			<H2>
				<CenterText>Made to measure</CenterText>
			</H2>
			<Grid columns={['2fr', '1fr']} gap='30px' isReverse>
				<MainImg src={image1} />
				<div>
					<p>
						Drawing on its sartorial expertise, Dior Men invites you to come and discover the Made to
						measure , available in selected boutiques
					</p>
					<Button>MAKE AN APPOINTMENT AT A BOUTIQUE</Button>
				</div>
			</Grid>
		</Section>
		<Section>
			<H2>
				<CenterText>Made to measure</CenterText>
			</H2>
			<Grid columns={['1fr', '2fr']} gap='30px' style={{ marginBottom: '30px' }}>
				<div>
					<p>
						The Made to measure is based on the emblematic Dior cuts (suits, dinner jackets, coats and
						shirts). <br />
						Each chosen model is perfectly adapted to your measurements thanks to Dior Men tailoring
						expertise.
					</p>
				</div>
				<MainImg src={image3} />
			</Grid>
			<Grid columns={['1fr', '1fr', '1fr']} gap='5px'>
				<GridImg src={image4} style={{ objectPosition: 'bottom' }} />
				<GridImg src={image5} />
				<GridImg src={image6} style={{ objectPosition: 'right' }} />
			</Grid>
		</Section>

		<Section>
			<H2>
				<CenterText>CHOICE OF FABRIC</CenterText>
			</H2>
			<Grid columns={['2fr', '1fr']} gap='30px'>
				<MainImg src={image7} style={{ objectPosition: 'bottom right' }} />
				<p>
					This personalised service allows you to benefit from a wide variety of fabrics, preselected by Kim
					Jones for their sophistication and quality. The Made to measure is made up of around 500 fabrics for
					suits, dinner jackets, coats and shirts and allows you to choose from different materials (Super
					130s to Super 180s virgin wool, mohair wool, silk, cashmere, etc.) and different patterns (Plain,
					textured, striped, Prince of Wales check, houndstooth, checked, etc.). Around 200 exceptional
					fabrics (120/2 to 300/2 cotton, stretch cotton, etc.) for shirts complete the service, these can be
					personalised with the “Bee” embroidery, symbolic of Dior, or with hand embroidered initials.
				</p>
			</Grid>
		</Section>

		<Section>
			<H2>
				<CenterText>TAILORING IN STORE</CenterText>
			</H2>
			<Grid columns={['1fr', '2fr']} gap='30px' style={{ marginBottom: '30px' }}>
				<p>
					Dior offers you the opportunity to have your purchases altered to ensure an impeccable finish. The
					perfect blend between the modernity of Dior Men style and traditional elegance, each piece is
					adapted to your measurements and made in keeping with time-honoured techniques to produce
					exceptional quality. To enjoy this service, Dior invites you to choose and contact one of our
					boutiques to agree on an appointment with a tailor and Made-to-measure expert.
				</p>
				<MainImg src={image8} />
			</Grid>
			<Grid columns={['1fr', '1fr', '1fr']} gap='5px'>
				<GridImg src={image9} />
				<GridImg src={image10} style={{ objectPosition: 'right' }} />
				<GridImg src={image11} />
			</Grid>
		</Section>

		<Section>
			<H2>
				<CenterText>LIST OF BOUTIQUES</CenterText>
			</H2>
			<Grid columns={['2fr', '1fr']} gap='30px'>
				<Grid columns={['1fr', '1fr']}>
					<MainImg src={image12} />
					<MainImg src={image14} />
				</Grid>
				<ul>
					<li>PARIS,MONTAIGNE</li> <li>PARIS, CHAMPS ELYSEES</li>
					<li>PARIS, BON MARCHE</li> <li>LONDON, NEW BOND STREET</li> <li>NYC, 57th STREET</li>
					<li>TOKYO GINZA SHANGHAI, PLAZA 66</li>
					<li>BEIJING, SHIN KONG PLACE</li> <li> GUANGZHOU,TAIKOO HUI</li>
					<li> HONG KONG, LANDMARK </li>
					<li>HONG KONG SAR, PEKING ROAD</li>
				</ul>
			</Grid>
		</Section>
	</>
);

export default IndexPage;
