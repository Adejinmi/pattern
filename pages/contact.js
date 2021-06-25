import React, { Component } from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import styled from 'styled-components';
import axios from 'axios';

const FormCont = styled.div`
	border: solid 1px lightgrey;
	width: 100%;
	padding: 20px 200px;
	border-radius: 5px;
	& input{
		padding: 13px;
		outline: none;
		border: none;
		font-size: 18px;
		width: 100%;
	}
	& span{
		position: absolute;
		padding: 13px;
		color: grey;
	}

`
const OptDiv=styled.div`
	display: none;
`
class Fabric extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'',
			date: '',
			school: '',
			mobile: '',
			email: '',
			address: '',
			age: '',
			sex: '',
			lga: '',
		}
		}	
		handleName = (event) =>{
			console.log(event.target)
		}
	render(){
		return (
			<>
				<div style={{widtth:'100%', textAlign:'center', marginTop:'50px'}}><p style={{fontSize:'36px',textAlign:'center'}}>CONTACT</p>
				<p style={{fontSize:'16px'}}>Our ambassadors will give you a personalized welcome and will be delighted to accompany you as you discover Pattern & Produce and its products.</p>
				</div>
	
				<FormCont style={{marginTop:'90px'}}>
					<p style={{fontWeight:'bold', fontSize:'14px'}}>WRITE US</p>
					<p style={{fontSize:'12px', color:'grey'}}>* All fields marked with a star are required</p>

					<form style={{display:'grid', gridTemplateColumns:'1fr 1fr', alignItems:'start', gridGap:'10px'}}>


						
					</form>
	
	
				</FormCont>
			</>
		);
	}	
	
};

export default Fabric;