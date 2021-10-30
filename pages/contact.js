import React, { Component } from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import styled from 'styled-components';
import axios from 'axios';

const FormCont = styled.div`
	width: 100%;
	padding: 20px;
	border-radius: 5px;
	& form {
		text-align: center;
		& div {
			display: grid;
			grid-template-columns: 350px 350px;
			justify-content: space-around;
			@media(max-width: 960px){
				display: block;
			}
		}
			
		
		& p{
			margin: 13px 0px;
			text-align: left;
		} 
		& p:last-child{
			grid-column: 1 / span 2;
			text-align: left;
		}

		& input[type='submit']{
			background-color: dimgray;
			color: white;
			box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);
			width: 350px;
			font-size: 12px;
			border-style: none;
			border-radius: 5px;
			padding: 20px;
			margin-top: 50px;
			cursor: pointer;
			@media(max-width: 400px){
				width: 90%;
			}
		}
	}

	& textarea{
		height: 250px;
		width: 100%;
		resize: none;
	}
	
	& input{
		margin: 8px 0px;
		padding: 5px;
		outline: none;
		font-size: 14px;
		width: 350px;
		@media(max-width: 960px){
			width: 100%;
		}
	}
	& span{
		position: absolute;
		padding: 13px;
		color: grey;
	}
	& select{
		padding: 13px;
		outline: none;
		border: 1px solid lightgrey;
		border-radius: 5px;
		font-size: 14px;
		width: 350px;
	}

`
const OptDiv=styled.div`
	display: none;
`
class Contact extends Component{
	constructor(props){
		super(props)
		this.state={
			title:'',
			firstname:'',
			lastname: '',
			email: '',
			telephone: '',
			country: '',
			message: '',
		}
		}	
		handleForm = (event) =>{
			event.preventDefault();	
		}
	render(){
		return (
			<>
				<div style={{position:'absolute', left:'0', width:'100%', textAlign:'center', backgroundColor:'dimgray', color: 'white'}}><p style={{fontSize:'28px',padding:'5px 0px', textAlign:'center'}}>HELP AND CONTACT</p>
				
				</div>
	
				<FormCont style={{marginTop:'90px'}}>
					<p style={{fontWeight:'bold', fontSize:'14px', textAlign:'center'}}>WRITE TO US</p>
					<p style={{fontSize:'12px', color:'grey'}}>All fields are required</p>
 
					<form onSubmit={this.handleForm}>
					<div>	
						<p>Title <br></br> <input type='text' value={this.state.title} name='title' onChange={(event) => (this.setState({title:event.target.value}))}></input> </p>
						<p>First Name* <br></br> <input type='text' value={this.state.firstname} name='firstname' onChange={(event) => (this.setState({firstname:event.target.value}))}></input> </p>
						<p>Last Name* <br></br> <input type='text' value={this.state.lastname} name='lastname' onChange={(event) => (this.setState({lastname:event.target.value}))}></input> </p>
						<p>Email Address* <br></br> <input type='email' value={this.state.email} name='email' onChange={(event) => (this.setState({email:event.target.value}))}></input> </p>
						<p>Telephone Number* <br></br> <input type='text' value={this.state.telephone} name='telephone' onChange={(event) => (this.setState({telephone:event.target.value}))}></input> </p>	
						<p>Country* <br></br> <input type='text' value={this.state.country} name='country'  onChange={(event) => (this.setState({country:event.target.value}))}></input> </p>
						<p textA>Message* <br></br> <textarea name='message' onChange={(event) => (this.setState({message:event.target.value}))} ></textarea></p>
					</div>
						<input type='submit' value='SEND MESSAGE'></input>
					</form>

					<div style={{marginTop:'60px', textAlign:'center', fontWeight:'bold'}}><p>OUR BOUTIQUE</p> <p style={{fontSize:'30px', marginTop: '60px'}}>367 BORNO WAY, ALAGOMEJI, YABA, LAGOS, NIGERIA</p></div>
	
	
				</FormCont>
			</>
		);
	}	
	
};

export default Contact;