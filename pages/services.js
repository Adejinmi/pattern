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
const Div = styled.div`
    padding: 30px 0%;
    margin-top: 80px;
    
    & table {
        width: 100%;
        margin-bottom: 100px;

        @media(max-width:420px){
           th{
               word-break: break-all
           }
        }
        
    }
    & table, tr , td, th{
        border: 1px dotted dimgrey;
        border-collapse: collapse;
        text-align: center;
        word-break: break-all
        }   
    & th{
        width: 500px;
        padding:10px;
        font-size: 15px;
    }
    & td{
        width: 500px;
        padding: 20px 0px;
        font-size: 15px;
    }

    td p:first-child{
        font-weight: bold;
    }
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
const Flex=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:100%;
    justify-content: space-around;
    margin-top: 20px;    

    div{
        width: 45%;
        margin: 20px; 0px;
    @media(max-width:960px){
        width: 85%;
        border-bottom: 1px solid grey;
        padding-bottom: 40px;
    }
         ul{
            margin: 10px 0px;
            
            li{
                margin: 10px 0px;
            }
        }
    }

    div:nth-child(odd){
        border-right: 1px solid grey;
        @media(max-width:960px){
            border-right:0;
        }
    }
    & +hr{
        @media(max-width:960px){
            display: none;
        }
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
                <p style={faq}>SERVICE OPTIONS</p>
                
				<Div>
                
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>BLUE LINE</th>
                        <th>SILVER LINE</th>
                        <th>GOLD LINE</th>
                        <th>DIAMOND LINE</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><b>KAFTAN</b> <p>Price Point</p></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        
                    <tr>
                        <td><p>AGBADA</p> <p>Price Point</p></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td><p>JACKETS/SHIRPEL</p> <p>Price Point</p></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                         <td><p>PANTS</p> <p>Price Point</p></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                         <td><p>SHORTS</p> <p>Price Point</p></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                         <td><p>SHRITS</p> <p>Price Point</p></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>

                <hr style={{marginBottom:'100px'}}></hr>

                <p style={{fontSize:'22px', textAlign:'center', marginBottom:'20px', fontWeight:'bolder', textTransform:'uppercase'}}> Kaftan, Pants, Shorts</p>
                <Flex >
                    <div>
                        <p style={{fontWeight:'bold'}}>PRIME MORNING <span style={{color:'red'}}> (40% extra of Price Point)</span></p>
                        <ul>
                            <li>Delivery between 10am-12pm, 7 days a week</li>
                            <li>Place your order on or before 6pm a day before delivery (for Lagos and selected States)</li>
                            <li>Allotted one hour delivery window</li>
                            <li>Select a nominated delivery date up to 7 days in advance</li>
                        </ul>
                    </div>

                    <div>
                        <p style={{fontWeight:'bold'}}>PRIME EVENING  <span style={{color:'red'}}> (40% extra of Price Point)</span></p>
                        <ul>
                            <li>Delivery between 4pm and 6pm, seven days a week</li>
                            <li>Place your order on or before 8am on the day of delivery (for Lagos and selected States)</li>
                            <li>Allotted one hour delivery window</li>
                            <li>Select a nominated delivery date up to 7 days in advance</li>
                        </ul>
                    </div>
                    </Flex>

                    <hr style={{width: '50%'}}></hr>

                    <Flex>
                    <div>
                        <p style={{fontWeight:'bold'}}>EXPRESS <span style={{color:'red'}}> (20% extra of Price Point)</span></p>
                        <ul>
                            <li>Order 2 days before delivery date </li>
                            <li>Delivery between 9am -5pm, Mondays to Friday </li>
                            <li>Please note, orders made after Wednesday would be delivered the following Monday </li>
                            <li>Allotted one-hour delivery window</li>
                        </ul>
                    </div>

                    
                    <div>
                        <p style={{fontWeight:'bold'}}>STANDARD</p>
                        <ul>
                            <li>Order takes 7 working days </li>
                            <li> Allotted one hour delivery window</li>
                            <li>Allotted one hour delivery window</li>
                        </ul>
                    </div>
                </Flex>

                <hr style={{width: '50%'}}></hr>
			
                <p style={{fontSize:'22px',textAlign:'center', marginBottom:'20px', marginTop:'40px', fontWeight:'bolder',textTransform:'uppercase'}}>Jacket, Shirpel, Agbada</p>
                <Flex>
                    <div>
                        <p style={{fontWeight:'bold'}}>CLOSED LOOP</p>
                        <ul>
                            <li>Place your order on or before 12pm</li>
                            <li>Delivery in 5 days</li>
                        </ul>
                    </div>

                     <div>  
                        <p style={{fontWeight:'bold'}}>OPEN LOOP </p>
                        <ul>
                            <li>Place your order on or before 12pm</li>
                            <li>Delivery in 14 days</li>
                        </ul>

                    </div>
                </Flex>              
                
                </Div>
            </>
            
		);
	}	
	
};

export default Fabric;