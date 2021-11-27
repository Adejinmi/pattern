import React, { useState } from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import styled from 'styled-components';
import axios from 'axios';
import filter from 'public/images/filter.svg';
import arrow from 'public/images/arrow.png';
import poly from 'public/images/poly.png';

export const MaterialWrapper = styled.a`
	position: relative;
	text-align: center;
	display: block;
	z-index: 1000;
	p {
		font-weight: bold;
		opacity:1;
		margin-top: 20px;
		
		@media(max-width:960px){
			margin-top: 5px;
			font-size: 14px;
		}
	}
	@media(max-width:960px){
		grid-column: ${({ig}) => {(ig>=164) ? '1 /3' : '1 /2'}};
	}
`;

export const Div = styled.div`
	margin-top: 80px;
	position: absolute;
	right: 6%;
	cursor: pointer;
	p{
		font-size: 16px;
		opacity: 0.7;
	}
	
`
export const Filter = styled.div`
	background-color: rgba(0,0,0,0.25);
	position: fixed;
	top:0;
	left:0;
	height: 100vh;
	width: 100%;
	z-index: 2000;
	display: ${({show}) => (show ? 'block' : 'none')};

	@media(max-width:960px){
		top: 197px;
	}
	img{
		height: 32px;
		width: 41px;
		position: fixed;
		top: 250px;
		right: 6%;
		@media(max-width:960px){
			height: 17.49px;
			width: 17.24px;
			right:6%;
			top:200px;
		}
	}
	& div{
		background-color: white;
		width: 892px;
		padding: 50px 30px;
		position: absolute;
		right: 6%;
		top: 270px;
		@media(max-width:960px){
			width: 100%;
			right:0;
			top: 16.49px;
		}

		p{
			border-bottom: 1px solid grey;
			padding: 8px 0px;
			font-size: 16px;
			opacity: 0.7;
			font-weight: bold;
			background-image: url(${arrow});
			background-repeat: no-repeat;
			background-position: center right;
			
		}
	}

`
	
	


const Fabric = ({ fabrics }) => {
	const imgElement = React.createRef();
	const [filterr, setFilter] = useState('');
	const [igg, setIgg] = useState(null);
	

	const stsh =() => {
		var sho = document.getElementById('ilter').style.display;
		if (sho!='block'){
			document.getElementById('ilter').style.display='block';
		}
		else{
			document.getElementById('ilter').style.display	='none';
		}
	}
	const Material = ({ fabric }) => (

		<MaterialWrapper href={`mtm/${fabric?.number}`}>
			<img src={fabric.imgUrl}  />
			<p style={{textAlign:'left', fontSize:'15px', fontWeight: 'bold', marginBottom:'0px'}}>{fabric.title}</p>
			<p style={{textAlign:'left', fontSize:'12px', marginTop:'0px'}}>{fabric.subtitle}</p>
		</MaterialWrapper>
	);
	return (
		<>
		<Div onClick={stsh}>
		 	<img src={filter} style={{height:'24px', width: '24px', opacity:'0.6', marginRight: '10px', marginBottom:'-5px'}} /> <p style={{display:'inline-flex'}}> Filter by: </p>

			 <Filter id='ilter'>
				 <img src={poly} />
				 <div>
				 <p onClick={()=>{setFilter('availability')}} > KAFTAN </p>
				 <p onClick={()=>{setFilter('weight')}}> AGBADA </p>
				 <p onClick={()=>{setFilter('fabric')}}> JACKET/SHIRPEL </p>
				 <p onClick={()=>{setFilter('composition')}}> PANTS </p>
				 <p onClick={()=>{setFilter('color')}}> SHORTS </p>
				 <p onClick={()=>{setFilter('design')}}> SHIRTS </p>
				 </div>
			 </Filter>
		</Div>

			<GridEqual count={3} style={{ marginTop: '150px' }} gap={'40px'}>
				{fabrics.map((fabric, i) => (
					<Material key={i} fabric={fabric} />
				))}
			</GridEqual>
		</>
	);
};

export async function getStaticProps() {
	const {
		data:{ data },
	} = await axios.get('https://patternandproduce.herokuapp.com/api/mtm');

	return {
		props: {
			fabrics: data
		},
	};
}

export default Fabric;
