import React, {Component} from 'react';
import styled from 'styled-components';
// import Radio from 'components/form/Radio';
export const Wrapper = styled.div`
	@font-face{
		font-family: futura;
		src: url('../public/fonts/futurabk.ttf');
		font-weight: normal
	}
	position: absolute;
	top:0;
	left:0;
	background-image: url('/images/background.png');
	min-height: 100vh;
	width:100%;
`;

export const Button = styled.button`
	padding: 25px;
	text-align: center;
`;

export const Cont = styled.div`
	background: #000000;
	opacity: 0.83;
	max-width: 960px;
	width: 100%;
	margin: 0 auto;
	text-align: center;
	& div {
		& h4{
			color: black;
			text-align: center;
			font-size:1.5rem;
			margin:0;
			font-weight: normal;
			background: white;
		}
		& h3{
			color:white;
			text-align: center;
			font-size: 1.2rem;
			margin:0;
			margin-bottom: 20px;
			font-weight: normal;
		}

	}
`;

export const P = styled.p`
	color: white;
	font-size: 16px;
	letter-spacing: 1px;
	word-spacing: 1px;
	margin-bottom: 15px;
	margin-top: 20px;	
`;

export const E = styled.p`
	color: red;
	font-size: 14px;
	font-weight: bolder;
	letter-spacing: 1px;
	word-spacing: 1px;
	margin-bottom: -15px;
	margin-top: 30px;	
	display:none;
`;

export const Que = styled.div`
	margin-left: 40px;
	margin-right: 40px;
	text-align: left;
	& input[type='text'],input[type='email'],input[type='date'], select{
		font-family: inherit;
		margin-left: 20px;
		color: white;
		outline: none;
		border:none;
		border-bottom: 1px solid white;
		background-color: black;
		display:block;
		padding: 5px;
		margin-bottom: 10px;
		letter-spacing: 0.7px;
		text-align: left;
	}
	& input[type='checkbox'], input[type='radio']{
		margin-left: 20px;
	}
`


export class Form extends Component{
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
			skill1:'To become self-reliant and financially independent',
			skill2:'To be able to work and sponsor myself through tertiary education',
			skill3:'To be able to make garments for myself and family, thereby helping to save on cost',
			skill4: 'To become self-reliant and financially independent',
			skill5: 'To understand the industrial process of garment production, thereby gathering experience for future employment',
			skill6:'To develop a career in fashion and garment making',
			skill:[],
			time:'',
			availability:'',
			cost:'',

		}		
	}
	handleName = (event) =>{
		this.setState({
			name: event.target.value
		})
	}
	handleDate = (event) =>{		
		this.setState({
			date: event.target.value
		})
	}
	handleSchool = (event) =>{
		this.setState({
			school: event.target.value
		})
	}
	handleMobile = (event) =>{
		this.setState({
			mobile: event.target.value
		})
	}
	handleMail = (event) =>{
		this.setState({
			email: event.target.value
		})
	}
	handleAddress = (event) =>{
		this.setState({
			address: event.target.value
		})
}
	handleAge = (event) =>{
		this.setState({
			age: event.target.value
		})
	}
	handleSex = (event) =>{
		this.setState({
			sex: event.target.value
		})
	}
	handleLga = (event) =>{
		this.setState({
			lga: event.target.value
		})
	}
	handleSkill=(event)=>{
		if(event.target.checked){
			var sk=event.target.value

			this.setState(prevState=> ({
				skill:prevState.skill.concat(sk),
			}))
		}
	}
	handleTime=(event)=>{
		this.setState({
			time:event.target.value
		})
	}
	handleAvailabilty=(event)=>{
		this.setState({
			availability:event.target.value
		})
	}
	handleCost=(event)=>{
		this.setState({
			cost:event.target.value
		})
	}
	handleForm=(event)=>{
		event.preventDefault();
		var arr=this.state.skill
		if(arr.length==0){
			document.getElementById('skillerror').style.display="block";
		}
		else{
			document.getElementById('skillerror').style.display="none";
			
		}
			
	}

	render(){
		return(
			<Wrapper>
				<Cont>
					<div>
						<h3>PATTERN & PRODUCE</h3>
						<h4>REGISTER</h4>
					</div>
					<form onSubmit={this.handleForm}>
						<Que>
							<P>PERSONAL DETAILS</P>
							<input type='text' 
							value={this.state.name}
							placeholder="Fullname" 
							onChange={this.handleName} required></input>

							<input type='text' 
							value={this.state.date}
							placeholder="Date of Birth"
							onChange={this.handleDate} required></input>

							<input type='text' 
							value={this.state.school}
							placeholder="School"
							onChange={this.handleSchool} required></input>
							
							<input type='text' 
							value={this.state.mobile}
							placeholder="Mobile Number"
							onChange={this.handleMobile} required></input>

							<input type='email' 
							value={this.state.email}
							placeholder="Email Address"
							onChange={this.handleMail} required></input>

							<input type='text' 
							value={this.state.address}
							placeholder="Address"
							onChange={this.handleAddress} required></input>

							<input type='text' 
							value={this.state.age}
							placeholder="Age"
							onChange={this.handleAge} required></input>

							<select type='text' 
							value={this.state.sex}
							onChange={this.handleSex} required>
								<option value=''>Sex</option>
								<option value='male'>Male</option>
								<option value='female'>Female</option>
							</select>

							<input type='text' 
							value={this.state.lga}
							placeholder="LGA"
							onChange={this.handleLga} required></input>
							
						</Que>

						<Que>
							<E id='skillerror'>SELECT AT LEAST ONE</E>
							<P>Why do you think acquiring an operational skill in garment industry would help you to be better
								equipped for the future?</P>
						 	<p style={{color:'white'}}> <input
								type='checkbox'
								name='skill'
								value={this.state.skill1}
								onChange={this.handleSkill}							
							/> To become self-reliant and financially independent
							</p>
						
							<p style={{color:'white'}}> <input
								type='checkbox'
								name='skill2'
								value={this.state.skill2}
								onChange={this.handleSkill}							
							/> To be able to work and sponsor myself through tertiary education
							</p>

							<p style={{color:'white'}}> <input
								type='checkbox'
								name='skill'
								value={this.state.skill3}
								onChange={this.handleSkill}							
							/> To be able to make garments for myself and family, thereby helping to save on cost
							</p>

							<p style={{color:'white'}}> <input
								type='checkbox'
								name='skill'
								value={this.state.skill4}
								onChange={this.handleSkill}							
							/> To become self-reliant and financially independent
							</p>

							<p style={{color:'white'}}> <input
								type='checkbox'
								name='skill'
								value={this.state.skill5}
								onChange={this.handleSkill}							
							/> To understand the industrial process of garment production, thereby gathering experience for future employment
							</p>

							<p style={{color:'white'}}> <input
								type='checkbox'
								name='skill'
								value={this.state.skill6}
								onChange={this.handleSkill}							
							/> To develop a career in fashion and garment making
							</p>
							
						</Que>

						<Que>
							<P>Will you be able to devote your time to learn garment making if given the opportunity to learn
							at Pattern & Produce?</P>
						<input type='radio' name='time' value='yes' required onChange={this.handleTime} /> <span style={{color:'white', marginRight:'10px'}}>Yes</span>
						<input type='radio' name='time' value='no' required onChange={this.handleTime} /><span style={{color:'white'}}>No</span>
						</Que>				

						<Que>
							<P>How often will you be available to learn?</P>
							<input type='radio' name='availability' value='yes' required onChange={this.handleAvailabilty} /> <span style={{color:'white', marginRight:'10px'}}>Yes</span>
							<input type='radio' name='availability' value='no' required onChange={this.handleAvailabilty} /><span style={{color:'white'}}>No</span>
						</Que>		

						<Que>
							<P>Will your parents be able to afford the cost of the training?</P>
							<input type='radio' name='cost' value='yes' required onChange={this.handleCost} /> <span style={{color:'white', marginRight:'10px'}}>Yes</span>
							<input type='radio' name='cost' value='no' required onChange={this.handleCost} /><span style={{color:'white'}}>No</span>
						</Que>	

						<Que>
							<P>PARENTS/GUARDIANS CONTACT</P>
							<input type='text' 
							value={this.state.pgname}
							placeholder="Fullname" 
							onChange={this.handlePgName} required></input>

							<input type='text' 
							value={this.state.pgmobile}
							placeholder="Mobile Number"
							onChange={this.handlePgMobile} required></input>
							
							<input type='text' 
							value={this.state.pgaddress}
							placeholder="Address"
							onChange={this.handlePgAddress} required></input>
						</Que>				
						<input type='submit' value='REGISTER' style={{marginTop:'20px', padding:'5px 10px 5px 10px'}}></input>


					</form>
				</Cont>
			</Wrapper>
		)

	}
}
export default Form
