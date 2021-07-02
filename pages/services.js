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
class Fabric extends Component{
	constructor(props){
		super(props)
		this.state={
		}
		}	
		handleName = (event) =>{
			console.log(event.target)
		}
	render(){
		return (
			<>
				<div style={{padding:'10px 15% 10px 15%'}}>
                <div style={{width:'100%', textAlign:'center', marginTop:'50px'}}><p style={{fontSize:'22px',textAlign:'center', textDecoration:'underline'}}> Kaftan, Pants, Shorts</p>
                    <div style={{textAlign:'left', padding: '20px', margin:'auto', width: 'auto'}}>
                        <p style={{fontWeight:'bold'}}>PRIME MORNING <span style={{color:'red'}}> (40% extra of Price Point)</span></p>
                        <ul>
                            <li>Delivery between 10am-12pm, 7 days a week</li>
                            <li>Place your order on or before 6pm a day before delivery (for Lagos and selected States)</li>
                            <li>Allotted one hour delivery window</li>
                            <li>Select a nominated delivery date up to 7 days in advance</li>
                        </ul>

                        <p style={{fontWeight:'bold'}}>PRIME EVENING  <span style={{color:'red'}}> (40% extra of Price Point)</span></p>
                        <ul>
                            <li>Delivery between 4pm and 6pm, seven days a week</li>
                            <li>Place your order on or before 8am on the day of delivery (for Lagos and selected States)</li>
                            <li>Allotted one hour delivery window</li>
                            <li>Select a nominated delivery date up to 7 days in advance</li>
                        </ul>

                        <p style={{fontWeight:'bold'}}>EXPRESS <span style={{color:'red'}}> (20% extra of Price Point)</span></p>
                        <ul>
                            <li>Order 2 days before delivery date </li>
                            <li>Delivery between 9am -5pm, Mondays to Friday </li>
                            <li>Please note, orders made after Wednesday would be delivered the following Monday </li>
                            <li>Allotted one-hour delivery window</li>
                        </ul>

                        <p style={{fontWeight:'bold'}}>STANDARD</p>
                        <ul>
                            <li>Order takes 7 working days </li>
                            <li> Allotted one hour delivery window</li>
                            <li>Allotted one hour delivery window</li>
                        </ul>
                    </div>
                </div>
			
            
                <div style={{width:'100%', textAlign:'center', marginTop:'50px'}}><p style={{fontSize:'22px',textAlign:'center', textDecoration:'underline'}}>Jacket, Shirpel, Agbada</p>
                    <div style={{textAlign:'left', padding: '20px', margin:'auto', width: 'auto'}}>
                        <p style={{fontWeight:'bold'}}>CLOSED LOOP</p>
                        <ul>
                            <li>Place your order on or before 12pm</li>
                            <li>Delivery in 5 days</li>
                        </ul>

                        <p style={{fontWeight:'bold'}}>OPEN LOOP </p>
                        <ul>
                            <li>Place your order on or before 12pm</li>
                            <li>Delivery in 14 days</li>
                        </ul>

                    </div>
                </div>

                <div>
                    <p style={{textDecoration:'underline', textAlign:'center', fontSize:'22px', marginBelow:'0px'}}>Price Points</p>
                    <img src={image}></img>
                </div>
                
                
                </div>
            </>
            
		);
	}	
	
};

export default Fabric;