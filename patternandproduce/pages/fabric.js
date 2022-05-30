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
	img{
		
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
const Material = ({ fabric }) => (
	<MaterialWrapper href={`fabric/${fabric?.name}`}>
		<img src={fabric.imgUrl} />
		<p>{fabric.name}</p>
		<p style={{marginTop:'0px'}}>{fabric.sub}</p>
	</MaterialWrapper>
);

const Fabric = ({ fabrics }) => {
	const [filterr, setFilter] = useState('');
	
	if (filterr=='availability'){
		fabrics.sort((a,b)=>{
			return (a.availability > b.availability) ? 1 : ((b.availability > a.availability) ? -1 : 0)
		})
	}
	else if (filterr=='compositon'){
		fabrics.sort((a,b)=>{
			return (a.composition > b.compositon) ? 1 : ((b.composition > a.composition) ? -1 : 0)
		})
	}
	else if (filterr=='color'){
		fabrics.sort((a,b)=>{
			return (a.color > b.color) ? 1 : ((b.color > a.color) ? -1 : 0)
		})
	}
	else if (filterr=='design'){
		fabrics.sort((a,b)=>{
			return (a.design > b.design) ? 1 : ((b.design > a.design) ? -1 : 0)
		})
	}
	else if (filterr=='weave'){
		fabrics.sort((a,b)=>{
			return (a.weave > b.weave) ? 1 : ((b.weave > a.weave) ? -1 : 0)
		})
	}
	else if(filterr=='weight'){
		fabrics.sort((a,b)=>{
			return a.weight - b.weight;
		})
	}
	else if(filterr=='fabric'){
		fabrics.sort((a,b)=>{
			return a.fabric - b.fabric;
		})
	}

	const stsh =() => {
		var sho = document.getElementById('ilter').style.display;
		if (sho!='block'){
			document.getElementById('ilter').style.display='block';
		}
		else{
			document.getElementById('ilter').style.display	='none';
		}
	}
	
	return (
		<>
		<Div onClick={stsh}>
		 	<img src={filter} style={{height:'24px', width: '24px', opacity:'0.6', marginRight: '10px', marginBottom:'-5px'}} /> <p style={{display:'inline-flex'}}> Filter by: </p>

			 <Filter id='ilter'>
				 <img src={poly} />
				 <div>
				 <p onClick={()=>{setFilter('availability')}} > AVAILABILITY </p>
				 <p onClick={()=>{setFilter('weight')}}> WEIGHT </p>
				 <p onClick={()=>{setFilter('fabric')}}> FABRIC </p>
				 <p onClick={()=>{setFilter('composition')}}> COMPOSITION </p>
				 <p onClick={()=>{setFilter('color')}}> COLOR </p>
				 <p onClick={()=>{setFilter('design')}}> DESIGN </p>
				 <p onClick={()=>{setFilter('weave')}}> WEAVE </p>
				 </div>
			 </Filter>
		</Div>
		
			<GridEqual count={3} style={{ marginTop: '150px' }} gap={'40px'} isNotResponsive>
				{fabrics.map((fabric, i) => (
					<Material key={i} fabric={fabric} />
				))}
			</GridEqual>
		</>
	);
};

export async function getStaticProps() {
	const {
		data: { data },
	} = await axios.get('https://patternandproduce.herokuapp.com/api/fabrics');

	

	return {

		props: {
			fabrics: data,
			filter: filter,
		},
	};
}

export default Fabric;
