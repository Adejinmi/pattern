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
import landimg from 'public/images/2_54.jpeg';
import image15 from 'public/images/PP B&W-2.jpg';
import image16 from 'public/images/PP B&W-12.jpg';
import image17 from 'public/images/PP B&W-41.jpg';
import image18 from 'public/images/PP B&W-56.jpg';
import image19 from 'public/images/PP - black-4.jpg';
import image20 from 'public/images/PP B&W-3.jpg';
import image21 from 'public/images/PP B&W-10.jpg';
import image22 from 'public/images/PP B&W-20.jpg';

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
					<MainImg src={landimg} />
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
					<MainImg src={image8} />
				</Grid>
				<Grid columns={['1fr', '1fr', '1fr']} gap='5px'>
					<GridImg src={image17} style={{ objectPosition: '50% 20%' }} />
					<GridImg src={image16} style={{objectPosition: 'center -40px'}} />
					<GridImg src={image15} style={{ objectPosition: 'top' }} />
				</Grid>
			</Section>

			<Section>
				<H2>
					<CenterText>CHOICE OF FABRIC</CenterText>
				</H2>
				<Grid columns={['2fr', '1fr']} gap='30px'>
					<MainImg src={image1} style={{ objectPosition: 'bottom right' }} />
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
					<MainImg src={image18} style={{objectPosition: '10% 80%'}} />
				</Grid>
				<Grid columns={['1fr', '1fr', '1fr']} gap='5px'>
					<GridImg src={image20} style={{objectFit: 'cover', objectPosition:'center -190px'}} />
					<GridImg src={image22} style={{ objectPosition: 'center', }} />
					<GridImg src={image21} style={{objectPosition: 'center 1px'}} />
				</Grid>
			</Section>

			<Section>
				<H2>
					<CenterText>STUDIO LOCATION</CenterText>
					<p style={{fontSize:'16px', textAlign:'center'}}>YABA, LAGOS</p>
				</H2>
					<Grid columns={['3fr']}>
						<MainImg src={image19} style={{objectFit:'cover'}}  />
					</Grid>
				
			</Section>
			<AppointmentModal handleClose={() => setModal(false)} show={modal} />
		</>
	);
};

export default IndexPage;
