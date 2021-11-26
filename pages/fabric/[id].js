import React , { useState, useEffect } from 'react';
import { Grid } from 'components/Styles';
import styled from 'styled-components';
import axios from 'axios';
import ruler from 'public/images/ruler.png';
import vector from 'public/images/vector.svg';
import close from 'public/images/close.png';

export const FabricList = styled.ul`
	position: relative;
	padding-left: 0;
	li {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e2e2e2;
		padding: 15px 0 3px 0;
		font-size: 16px;
		opacity: 0.7;
		p:first-child{
			font-weight: bold;
		}
		p {
			text-align: left;
			text-transform: uppercase;
		}
		img {
			background-color: #417505;
			height: 25px;
			width: 25px;
			color: white;
			padding: 5px;
			border-radius: 50%;
			margin-bottom: -5px;
			margin-left: 20px;
			&:focus {
				outline: none;
			}
		}
	}
`;

export const Div = styled.div`
	display: block;
`
export const E = styled.div`
	width: 8%;
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	@media(max-width: 960px){
		margin-top: 15px;
		width: 100%;
		order:2;
		font-size: 14px;
	}
`
export const DD = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media(max-width: 960px){
		flex-wrap: wrap;
		flex-direction: row;
	}

`
export const D= styled.div`
	width:670px;
	margin:0 auto; 	
	img {
		width: 95%;
		height: 29px;

		@media(max-width: 960px){
			width: 96%;
			height: auto;
		}
	}
	@media(max-width: 960px){ 
		width: 100%;
	}
`
export const P = styled.p`
	display: inline;
	font-size: 24px;
	opacity: 0.5;
	margin: 0 5.3% 0 0;
	@media (max-width: 960px){
		font-size: 3.2vw;
		margin: 0, 1%,0,0;
	}
`

export const F= styled.div`
	width: 92%;
	text-align: center;
	@media(max-width: 960px){
		width:100%;
	}
`

const Fabric = ({ fabric }) => {
	const [desktop, setDesktop] = useState(0);

	useEffect(() => {
		setDesktop(document.getElementById('ruler').width);
	
		const updateMedia = () => {
			setDesktop(document.getElementById('ruler').width);
		};
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	  }, []);
	return (
		<Div style={{ marginTop: '60px' }}>
			<p style={{fontSize:'20px', textAlign:'center', marginBottom:'25px'}}>INCH</p>
			<DD> 
			
				<E>
					<p>{fabric?.sub}</p>
					<p>{fabric?.name}</p>
				</E>
					
				<F>

				<D> 
					<P>{(fabric?.inch-1)}</P>
					<P style={{fontWeight:'bold', opacity:'1'}}>{(fabric?.inch)}</P>
					<P>{(fabric?.inch+1)}</P>
					<P>{(fabric?.inch+2)}</P>
					<P>{(fabric?.inch+3)}</P>
					<P>{(fabric?.inch+4)}</P>
					<P>{(fabric?.inch+5)}</P>
					<P>{(fabric?.inch+6)}</P>
					<P>{(fabric?.inch+7)}</P>
					<P>{(fabric?.inch+8)}</P>
					<P>{(fabric?.inch+9)}</P>
					<br />
					<img src={ruler} id='ruler'/>
					</D>
					
				</F>
			</DD>
			<img src={fabric.imgUrl} />
			<div>
				<FabricList>

				{fabric.availability ? (
					<li>
					<p>AVAILABILITY</p>
					<p> AVAILABLE <img src={vector} style={{position:'relative'}}/> </p>
					
				</li>
				) :

				(
					<>
					<li>
						<p>AVAILABILITY</p>
						<p> NOT AVAILABLE <img src={close} style={{position:'relative', backgroundColor:'red'}}/> </p>
						
					</li>
					</>
				)
				
				}
					
					<li>
						<p>Weight</p>
						<p>{fabric?.weight}</p>
					</li>

					<li>
						<p>FABRIC</p>
						<p>{fabric?.fabric}</p>
					</li>

					<li>
						<p>COMPOSITION</p>
						<p>{fabric?.composition}</p>
					</li>
					<li>
						<p>COLOUR</p>
						<p>{fabric?.color}</p>
					</li>
					<li>
						<p>DESIGN</p>
						<p>{fabric?.design}</p>
					</li>
					<li>
						<p>WEAVE</p>
						<p>{fabric?.weave}</p>
					</li>
				</FabricList>
			</div>
		</Div>
	);
};

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: '*' } }],
// 		fallback: true,
// 	};
// }

export async function getServerSideProps({ params }) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const id = params.id;
	const {
		data: { data },
	} = await axios.get(`https://patternandproduce.herokuapp.com/api/fabrics/${id}`);

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			fabric: data,
		},
	};
}
export default Fabric;
