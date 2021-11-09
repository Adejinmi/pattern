import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import { CenterText, Grid, Button, H2, Section } from '../components/Styles';
import { isConstructSignatureDeclaration } from 'typescript';
import { BrowserRoute as Router, Route, Switch } from 'react-router-dom';


const Wrapper = styled.nav`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 0px 10px;
	margin-top: 5px;
	p {
		text-align: center;
		margin-bottom: 10px;
	}
`;
const InputWrapper = styled.div`
	position: relative;
	border-radius: 20px;
	&:after {
		content: 'OK';
		display: inline-block;
		padding: 11px 12px 7px;
		background: grey;
		cursor: pointer;
		color: #ffffff;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		border: 1px solid #000000;
	}
`;

const Input = styled.input`
	padding: 10px;
	width: 200px;
	box-sizing: border-box;
	background: #ffffff;
	border: 1px solid lightgrey;
	text-align: center;
	&:focus {
		outline: none;
	}
`;

const Subbut= styled.button`
display: inline-block;
padding: 8px 12px;
background: grey;
cursor: pointer;
color: #ffffff;
outline:none;
border-style: none;
margin-left: 20px;
border-radius: 50%;
&:hover{
	background-color: silver;
}
`;
 const Div = styled.div`
	width: 300px;
	@media(max-width: 960px){
		text-align: center;
		margin-bottom: 30px;
	}
 `
const Media = styled.div`
	display: flex;
	justify-content: center;
	& > div {
		min-height: 30px;
		min-width: 30px;
		border-radius: 30px;
		border: 1px solid #6a6a6a;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-right: 20px;
	}

	// svg {
	// 	height: 20px;
	// 	width: 20px;
	// }
`;
const List = styled.div`
	width: 300px;
	margin-bottom: 30px;
 	p{
		margin-left: 0px;
		color: #000000;
		text-align: center;
		margin-bottom: 8px;
		font-size: 0.9rem;
	}
	@media(max-width: 960px and min-width:660px){
		order: 3;
	}
`;

const Chsub=styled.div`
	display:none;
	margin: auto;
	background-color: white;
	height: 50px;
	border-radius: 5px;
	box-shadow: 0 2.8px 67px rgba(0,0,0,0.4);
	
`;


function openInst(){
	window.open('https://www.instagram.com/patternandproduce/');
}

function openF(){
	window.open('https://www.facebook.com/patternandproduce/');
}
function openTw(){
	window.open('https://twitter.com/PatternProduce');
}
async function sendMail(mail){
		const data = mail;
		const url ='https://patternandproduce.herokuapp.com/api/newsletter';
		axios.post(url, {
			data
		})
		.then((res) => {
			if (res.data=='Inserted Succesfully'){
				document.getElementById('wait').innerHTML='Thanks for subscribing!'
				document.getElementById('subscribe').value=''
				document.getElementById('subscribe').disabled=false
				document.getElementById('butt').disabled=false
			}
		}, (error) => {
				document.getElementById('wait').innerHTML='Something went wrong, Try Again'
				document.getElementById('subscribe').disabled=false
				document.getElementById('butt').disabled=false
		});

}
function subnew(){
	const email=document.getElementById('subscribe').value;
	var loc = email.lastIndexOf('@');
	var loc2 = email.lastIndexOf('.');
	if (loc2 > loc){
		document.getElementById('subscribe').disabled='true'
		document.getElementById('wait').style.display='block'
		document.getElementById('wait').innerHTML='Please wait........'
		sendMail(email);
	}
	else{
		document.getElementById('wait').innerHTML='Check your e-mail address and try again'
		document.getElementById('wait').style.display='block'
	}
}

export default () => (
	<Wrapper>
	
		<Section>
				<div style={{textAlign:'center',borderTop:'1px solid lightgrey', padding:'20px 40px', marginTop:'100px'}}>
					<p style={{fontSize:'20px', fontWeight:'bold', marginBottom:'20px'}}>ABOUT P & P</p>
					<p style={{fontSize:'18px', letterSpacing:'0.1px', wordSpacing:'0.5px'}}>	Founded in 2015, Pattern and Produce is the brainchild of Taiwo Samuel, 
						one of the leading and innovative names in men and women's fashion... <a href='#'><b>KNOW MORE</b></a>
					</p>
				</div>
		</Section>
		<Div>
			<p style={{fontSize:'17px'}}><b>Subscribe to our Newsletter</b></p>
				<Input placeholder='Email Address' id='subscribe' onSubmit={subnew}/>
				<Subbut id='butt' onClick={subnew}>&gt;</Subbut>
			<p id='wait' style={{fontSize:'13px', color:'dimgray', display:'none'}}>Please wait........</p>
		</Div>
		<List>
			<p><b>QUESTIONS</b></p>
			<p><Link href='/faq'>FAQ</Link></p>
			<p><Link href='/services'>Service Options</Link></p>
			<p><Link href='/terms'>Legal Terms</Link></p>
			<p><Link href='/contact'>HELP AND CONTACT</Link></p>
		</List>
		<Div>
			<p style={{fontWeight:'bold'}}>Follow Pattern and Produce</p>
			<Media>
				<div>
					<FiInstagram style={{cursor: "pointer"}} onClick={openInst}/>
				</div>
				<div>
					<FiFacebook style={{cursor: "pointer"}} onClick={openF} />
				</div>
				<div>
					<FiTwitter style={{cursor: "pointer"}} onClick={openTw} />
				</div>
			</Media>
		</Div>
	</Wrapper>
);
