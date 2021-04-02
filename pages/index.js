import React from 'react';
import styled from 'styled-components';
import { CenterText, Grid, Button, H2, Section } from '../components/Styles';
import AppointmentModal from 'components/AppointmentModal';
import NumberFormat from 'react-number-format';
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


const IndexPage = () => {
	const [modal, setModal] = React.useState(false);

	return (
		<>
			<Section>
				<H2>
					<CenterText>The Stuido</CenterText>
				</H2>
				<Grid columns={['2fr', '1fr']} gap='30px' isReverse>
					<MainImg src={image1} />
					<div>
						<p>
							The Pattern & Produce studios is passionately committed to developing exceptional skilled
							workforce, for the purpose of sustainable, <i>utilitarian, tribal</i>, and <i>affluence</i> wearables, in
							the bespoke and ready-to-wear line.
							<br /> Our design model is fulcrum on people, planet and profit.
						</p>
						<Button onClick={() => setModal(true)}>MAKE AN APPOINTMENT AT A BOUTIQUE</Button>
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
							Based on your personal measurement data, our in-studio will re-construct a bespoke mannequin
							from our capsules looks. Your exclusive piece will then be crafted and altered
							microscopically on this made-to-measure figure by our creatives, which would yield a
							finished garment that you can be sure the piece sits perfectly on your body like your hand’s
							in a glove.
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
						As part of our sustainability agenda, we have influenced the approach of fabric blocking, with
						the use of hand-made traditional textile prints, woven aso-oke, to fine soft wool, piqué, linen,
						mesh cotton, lyocell, in making everyday affluence utilitarian looks.
					</p>
				</Grid>
			</Section>

			<Section>
				<H2>
					<CenterText>TAILORING IN STORE</CenterText>
				</H2>
				<Grid columns={['1fr', '2fr']} gap='30px' style={{ marginBottom: '30px' }}>
					<p>
						Just as seen on the mannequin, an opportunity is offered in store for alteration of purchased
						items, ensuring the highest standard finish for the product, with time-honored techniques that’s
						adapted to your measurement.
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
						<li>PARIS, BON MARCHE</li> <li>LONDON, NEW BOND STREET</li> 
						<li>NYC, 57th STREET</li>
						<li>TOKYO GINZA SHANGHAI, PLAZA 66</li>
						<li>BEIJING, SHIN KONG PLACE</li> <li> GUANGZHOU,TAIKOO HUI</li>
						<li> HONG KONG, LANDMARK </li>
						<li>HONG KONG SAR, PEKING ROAD</li>
					</ul>
				</Grid>
			</Section>
			<AppointmentModal handleClose={() => setModal(false)} show={modal} />
		</>
	);
};

export default IndexPage;
