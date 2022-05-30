import React, { Component } from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import styled from 'styled-components';
import axios from 'axios';
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
const faq={
	position: 'absolute',
	width: '100%',
	backgroundColor:'dimgray',
	padding:'10px',
	fontSize:'20px',
	left:'0',
	color: 'white',
	textAlign:'center',
}
class Fabric extends Component{
	constructor(props){
		super(props)
		}
	render(){
		return (
			<>
				<p style={faq}>LEGAL TERMS</p>
                <div style={{width:'100%', textAlign:'center', marginTop:'100px'}}>
                    <div style={{textAlign:'left', padding: '20px', margin:'auto', width: 'auto'}}>
 
                        <p>Notice: Please read this document carefully before using this website. Do not use this website if you do not agree with the terms and conditions present in this document. Use of this website signifies compliance with these Terms of Use.</p>
                       
                        <p style={{fontWeight:'', margin: '30px 0px 20px 0px ', fontWeight:'bold'}}>SITE OWNERSHIP</p>
                        <p> This website (“Site”) is owned by Pattern & Produce, a sustainable garment production and manufacturing hub with headquarters in Lagos, Nigeria. </p>
						<hr style={{marginTop:'30px'}}></hr>
                        <p style={{fontWeight:'', margin: '30px 0px 20px 0px ', fontWeight:'bold'}}>INTELLECTUAL PROPERTY</p>
                        <p>The names, images and logos identifying Pattern & Produce, or any third parties and their products and services are subject to copyright, design rights and trademarks of Pattern & Produce and/or the third parties.</p>
                       
                        <p style={{fontWeight:'', margin: '30px 0px 20px 0px ', fontWeight:'bold'}}>PRODUCT INFORMATION</p>
                        <p>The product information on this Site is provided for the convenience of our customers and Site users, and is as accurate as possible. However, we make no guarantee, either express or implied, as to its accuracy or that the products displayed on the Site are always available. We also welcome your feedback and suggestions regarding any errors that you find on our Site, so that we can promptly address them.</p>
                        <hr style={{marginTop:'30px'}}></hr>
                        <p style={{fontWeight:'', margin: '30px 0px 20px 0px ', fontWeight:'bold'}}>SOCIAL MEDIA LINKS</p>
                        <p>You may link to our social media pages via the icons on our website. If you do so, please note that you are leaving our Site and going to a website that is owned and operated by a separate company (such as Facebook, Twitter, Instagram, etc.). Please be sure to review the separate Terms and Conditions and website Privacy Policies provided by the owners/operators of those websites.</p>
                       
                        <p style={{fontWeight:'', margin: '30px 0px 20px 0px ', fontWeight:'bold'}}>GENERAL</p>
                        <p>Pattern & Produce reserves the right to modify these Terms at any time. The terms on this page are binding upon you, therefore, you should review them often. Terms listed in this document may be superseded by specific terms elsewhere on the Site.</p>
                        <hr style={{marginTop:'30px'}}></hr>
                        <p style={{fontWeight:'', marginTop: '30px'}}>Privacy Policy</p>
                        <p>By using this Site, you confirm your consent to the Pattern & Produce Privacy Policy which is also accessible on this Site. If you do not agree to this policy, please do not use this Site. We reserve the right, at our discretion, to change, modify, add, or remove portions of this policy at any time. Please check this page periodically for changes. Your continued use of the Pattern & Produce Site following the posting of changes to these terms will mean you accept those changes.</p>
                        
                        <p style={{fontWeight:'', marginTop: '30px'}}>Changes to These Terms and Conditions</p>
                        <p>Pattern & Produce reserves the right to modify these Terms and Conditions, to align with changes in our practices, or company, or legal or compliance requirements. If the terms and conditions are changed, the new versions will be posted. We invite you to review our Terms and Conditions and Website Privacy Policy periodically to ensure that you are aware of them in relation to use of our website.</p>
                        
                        <p style={{fontWeight:'', marginTop: '30px'}}>Contact Us</p>
                        <p>If you have any questions relating to these Terms of Use or our website, you may contact us at
						+234 ‭903 990 2994‬ or write to us at ppus@patternandproduce.com</p>
                        

                        
                </div>
                </div>	
            </>
            
		);
	}	
	
};

export default Fabric;