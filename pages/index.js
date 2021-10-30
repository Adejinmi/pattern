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
import image19 from 'public/images/bottom.png';
import image20 from 'public/images/PP B&W-3.jpg';
import image21 from 'public/images/PP B&W-10.jpg';
import image22 from 'public/images/PP B&W-20.jpg';

const GridImg = styled.img`
	height: 414px;
	width: 100%;
	object-fit: cover;
	object-position: center left;
	@media (max-width: 960px){
		height: 150px;
		margin: auto;
		margin-bottom: 10px;
		width: 95%;
		order: ${({orderOne}) => (orderOne ? '1' : '')};
		order: ${({orderTwo}) => (orderTwo ? '2' : '')};
	}
`;

const MainImg = styled.img`
	height: 426px;
	width: 100%;
	object-fit: cover;
	@media(max-width: 960px){
		height: 250px;
		margin-bottom: ${({shouldGo}) => (shouldGo ? '30px': '')};
	}
`

const Butt= styled.button`
	background-color: dimgray;
	color: white;
	box-shadow: 1px 2px 4px rgba(0,0,0,0.5);
	width: 350px;
	font-size: 12px;
	border-style: none;
	border-radius: 5px;
	padding: 20px;
	margin-top: 50px;
	cursor: pointer;
	@media(max-width:387px){
		width: 90%;
	}
`



const IndexPage = () => {
	const [modal, setModal] = React.useState(false);

	return (
		<>
			<Section>
				<H2>
					<CenterText>The Studio</CenterText>
				</H2>
				<div style={{textAlign:'center'}}>
					<MainImg src={landimg} />
					<Butt onClick={() => setModal(true)}> BOOK AN APPOINTMENT WITH US</Butt>
				</div>
			</Section>
			<Section>
				<Grid columns={['1fr', '2fr']} gap='30px' style={{ marginBottom: '30px'}} isRev>
					<p>
						The made to measure is based on the emblematic Pattern and Produce cuts. 
						Each chosen model is perfectly adapted to your measurements thanks to Pattern and Produce 
						tailoring experience
					</p>
					<MainImg src={image8} shouldGo/>
				</Grid>
				<Grid columns={['1fr', '1fr', '1fr']} gap='50px' style={{marginTop:'80px'}}>
					<GridImg src={image17} style={{ objectPosition: '50% 20%' }} />
					<GridImg src={image16} style={{objectPosition: 'center -40px'}}  orderOne/>
					<GridImg src={image15} style={{ objectPosition: 'top' }} orderTwo/>
				</Grid>
			</Section>

			<Section>
				<H2>
					<CenterText>CHOICE OF FABRIC</CenterText>
				</H2>
				<Grid columns={['2fr', '1fr']} gap='80px' style={{marginTop:'50px'}}>
					<MainImg src={image1} style={{ objectPosition: 'bottom right' }} shouldGo/>
					<p>
						This personalised service allows you to benefit from a wide variety of fabric,
						presented by Taiwo Samuel for his sophistication and quality. The made to measure is made up of 500 fabrics for suits,
						dinner jackets, coats and shirts and allows you to choose from different materials and different paaters, Price of Wales check.
						Around 200 exceptional fabrics for shirts complete the service, these can be personalised with the "Bee" embroidery,
						symbolic of Pattern and Produce initials.
					</p>
				</Grid>
			</Section>

			<Section>
				<H2>
					<CenterText>TAILORING IN STORE</CenterText>
				</H2>
				<Grid columns={['1fr', '2fr']} gap='80px' style={{ marginBottom: '80px', marginTop:'50px' }} isRev>
					<p>
						Pattern and Produce offers you the opporunity to have your purchases altered to ensure on impeccable finish. 
						The perfect blend between the modernity of the Patterned man style and traditional elegance, each peice is adapted to your 
						measurement and made in keeping with time-honoured techniques to produce exceptional quality to enjoy this service, 
						Pattern and Produce invites you to choose and contact our boutique to agree on an appointment with a tailor.
					</p>
					<MainImg src={image18} style={{objectPosition: ' 60%'}} shouldGo/>
				</Grid>
				<Grid columns={['1fr', '1fr', '1fr']} gap='80px'>
					<GridImg src={image20} style={{objectFit: 'cover', objectPosition:'center'}} />
					<GridImg src={image22} style={{ objectPosition: '20px', }} />
					<GridImg src={image21} style={{objectPosition: 'center 1px'}} />
				</Grid>
			</Section>

			<Section>
					<Grid columns={['3fr']}>
						<MainImg src={image19} style={{objectFit:'cover'}}  />
					</Grid>
			</Section>

		
			<AppointmentModal handleClose={() => setModal(false)} show={modal} />
		</>
	);
};

export default IndexPage;
 