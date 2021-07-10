import React, { Component } from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import image from 'public/images/service.jpg'

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
		}
	render(){
		return (
			<>
				<div style={{padding:'10px 15% 10px 15%'}}>
                <div style={{width:'100%', textAlign:'center', marginTop:'30px'}}><p style={{fontSize:'22px',textAlign:'center', textDecoration:'underline'}}>FAQ MTM</p>
                    <div style={{textAlign:'left', padding: '20px', margin:'auto', width: 'auto'}}>
                        <p style={{fontWeight:'bold'}}>SECURITY AND CONFIDENTIALITY</p>
                        <p>The processing, confidentiality, and security of your personal data is important to us. We are committed to offering you personalized services while respecting your privacy and choices in accordance with the applicable personal data regulations.</p>

                        <p style={{fontWeight:'bold', marginTop: '30px'}}>PRODUCTS</p>
                        <p>A product is available for online purchase whenever the word <b>“Pre-Order”</b> appears. You can also contact the <Link href='/services'><a><u>Service Options</u></a></Link> for more assistance with your purchases.</p>

                        <p style={{fontWeight:'', marginTop: '30px'}}>HOW CAN I GET HELP WITH PLACING MY ORDER?</p>
                        <p>Our Client Advisors are available to help you with your order. You can contact them from Monday to Saturday from 10am to 10pm (WAT) and on Sunday from 11am to 7pm (WAT) by calling +234 ‭903 990 2994‬ or by email at: tailormade@patternandproduce.com</p>
                       
                        <p style={{fontWeight:'', marginTop: '30px'}}>CAN I CANCEL OR CHANGE MY ORDER?</p>
                        <p>If you wish to modify or cancel your order, please contact the <u>Client Service Center </u> – our Client Advisors will be very happy to assist you with your request.</p>
                       
                        <p style={{fontWeight:'', marginTop: '30px'}}>HOW IS MY ORDER PREPARED?</p>
                        <p>After you have validated your order, it will be prepared based on the Service Option chosen. <br></br>
                            To provide you with a unique experience, we pay particular attention to the preparation of your order. <br></br>
                            Each order is prepared in a P&P workshop, and individually packaged in its presentation case. The presentation case is then inserted into a box that will protect it and keep it anonymous during shipping.
                        </p>

                        <p style={{fontWeight:'bold', marginTop: '30px'}}>YOUR PAYMENT</p>
                        <p>Payment for purchases on <a href='https://patternandproduce.herokuapp.com'><u>patternandproduce.com</u></a> are made via bank transfers after invoice is being issued. Bank details for deposits would be mailed along with invoice.
                        You can also refer to our <Link href='/terms'><a><u>general terms and conditions of sale.</u></a></Link> </p>

                        <p style={{fontWeight:'bold', marginTop: '30px'}}>YOUR DELIVERY</p>
                        <p>See <Link href='/services'><a><u>Service Options</u></a></Link> for details.</p>

                </div>
                </div>
                </div>
            </>
            
		);
	}	
	
};

export default Fabric;