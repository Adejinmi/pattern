import React, { Component } from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import drop from 'public/images/drop.png'

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
const Q = styled.div`
	padding: 10px 10%;
	@media(max-width:960px){
		padding: 10px 5%;
	}
	& p{
		word-break: break-word;
		font-size: 17px;
	}
	
`
const P = styled.p`
	margin-top: 20px;
	font-weight: bold;
	@media(max-width:960px){
		padding-right: 30px;
		font-size: 17px;
		background-image:url(${drop});
		background-repeat: no-repeat;
		background-position: right top;
		border-bottom: 1px solid grey;
		padding-bottom: 20px;
		& + p{
			display: none;
		}
	}
`
const OptDiv=styled.div`
	display: none;
`
const faq={
	position: 'absolute',
	width: '100%',
	backgroundColor:'dimgray',
	padding:'10px',
	fontSize:'20px',
	left:'0',
	color: 'white',
	textAlign:'center'
}
class Fabric extends Component{
	constructor(props){
		super(props)
		this.state={
			security: false, products: true, placeOrder: true, changeOrder: true, prepareOrder: true, payment: true, delivery: true
		}	
	}
	handleClick = (event) => {
		const x= window.matchMedia( " (max-width:960px) ");
		if (x.matches){
			if(event.target.nextSibling.style.display!="block"){
				event.target.style.borderBottom='0';
				event.target.nextSibling.style.display="block";	
	
			}	else {
				event.target.nextSibling.style.display="none";	
				event.target.style.borderBottom='1px solid grey';
			}
		}

		
	}
	render(){
		return (
			<>
				<Q>
                <p style={faq}>FREQUENTLY ASKED QUESTION </p>
				<div style={{marginTop: '70px'}}>
                    <div style={{textAlign:'left', padding: '0px 10px', margin:'auto', width: 'auto', boxSizing:'border-box'}}>
                        <P onClick={this.handleClick}>SECURITY AND CONFIDENTIALITY </P>
                        <p style={{borderBottom:'1px solid grey', paddingBottom:'20px'}}>The processing, confidentiality, and security of your personal data is important to us. We are committed to offering you personalized services while respecting your privacy and choices in accordance with the applicable personal data regulations.</p>

                        <P onClick={this.handleClick}>PRODUCTS</P>
                        <p style={{borderBottom:'1px solid grey', paddingBottom:'20px'}}>A product is available for online purchase whenever the word <b>“Pre-Order”</b> appears. You can also contact the <Link href='/services'><a><u>Service Options</u></a></Link> for more assistance with your purchases.</p>

                        <P onClick={this.handleClick}>HOW CAN I GET HELP WITH PLACING MY ORDER?</P>
                        <p style={{borderBottom:'1px solid grey', paddingBottom:'20px'}}>Our Client Advisors are available to help you with your order. You can contact them from Monday to Saturday from 10am to 10pm (WAT) and on Sunday from 11am to 7pm (WAT) by calling +234 ‭903 990 2994‬ or by email at: tailormade@patternandproduce.com</p>
                       
                        <P onClick={this.handleClick}>CAN I CANCEL OR CHANGE MY ORDER?</P>
                        <p style={{borderBottom:'1px solid grey', paddingBottom:'20px'}}>If you wish to modify or cancel your order, please contact the <u>Client Service Center </u> – our Client Advisors will be very happy to assist you with your request.</p>
                       
                        <P onClick={this.handleClick}>HOW IS MY ORDER PREPARED?</P>
                        <p style={{borderBottom:'1px solid grey', paddingBottom:'20px'}}> After you have validated your order, it will be prepared based on the Service Option chosen. <br></br>
                            To provide you with a unique experience, we pay particular attention to the preparation of your order. <br></br>
                            Each order is prepared in a P&P workshop, and individually packaged in its presentation case. The presentation case is then inserted into a box that will protect it and keep it anonymous during shipping.
                        </p>

                        <P onClick={this.handleClick} style={{fontWeight:'bold', marginTop: '30px'}}>YOUR PAYMENT</P>
                        <p>Payment for purchases on <a href='https://patternandproduce.herokuapp.com'><u>patternandproduce.com</u></a> are made via bank transfers after invoice is being issued. Bank details for deposits would be mailed along with invoice.
                        You can also refer to our <Link href='/terms'><a><u>general terms and conditions of sale.</u></a></Link> </p>

                        <P style={{fontWeight:'bold', marginTop: '30px'}}>YOUR DELIVERY</P>
                        <p>See <Link href='/services'><a><u>Service Options</u></a></Link> for details.</p>

                </div>
                </div>
                </Q>
            </>
            
		);
	}	
	
};

export default Fabric;