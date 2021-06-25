import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';
import axios from 'axios';
import { isConstructSignatureDeclaration } from 'typescript';


const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 0px 10px;
	margin-top: 80px;
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
	box-sizing: border-box;
	background: #ffffff;
	border-top-left-radius: 20px;
	border: 1px solid #000000;
	border-right: 0;
	border-bottom-left-radius: 20px;
	&:focus {
		outline: none;
	}
`;
const Media = styled.div`
	display: flex;
	& > div {
		min-height: 30px;
		min-width: 30px;
		border-radius: 30px;
		border: 1px solid #6a6a6a;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
	}

	// svg {
	// 	height: 20px;
	// 	width: 20px;
	// }
`;
const List = styled.ul`
	list-style: none;
	li {
		color: #000000;
		text-decoration-line: underline;
		text-align: center;
		margin-bottom: 20px;
		font-size: 0.85rem;
	}
`;
const Subbut= styled.button`
display: inline-block;
padding: 10px 12px 10px;
background: grey;
cursor: pointer;
color: #ffffff;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
border: 1px solid #000000;
outline:none;
position:absolute;
&:hover{
	background-color: silver;
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
/*let axiosConfig = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		"Access-Control-Allow-Origin": "*",
	}
  };*/
async function sendMail(mail){
	const data = mail;
	const url ='http://localhost:5000/newsletter';
	axios.post(url, {
		data
	  })
	  .then((res) => {
		if (res.data=='Inserted Succesfully'){
			document.getElementById('wait').innerHTML='Thanks for subscribing!'
			document.getElementById('subscribe').value=''
			document.getElementById('subscribe').disabled='false'
			document.getElementById('butt').disabled='false'
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
		<div>
			<p>Newsletter</p>
				<Input placeholder='Your email address' id='subscribe' onSubmit={subnew}/>
				<Subbut id='butt' onClick={subnew}>OK</Subbut>
			<p id='wait' style={{fontSize:'13px', color:'dimgray', display:'none'}}>Please wait........</p>
		</div>
		<List>
			<li style={{cursor: "pointer"}}>FAQ</li>
			<li style={{cursor: "pointer"}}>Legal Terms</li>
			<li style={{cursor: "pointer"}}><a href='contact'>Contact Us</a></li>
		</List>
		<div>
			<p>Follow us</p>
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
		</div>
	</Wrapper>
);
