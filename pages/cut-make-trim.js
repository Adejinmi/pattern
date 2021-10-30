import React, {Component} from 'react';
import styled from 'styled-components';
// import Radio from 'components/form/Radio';
export const Wrapper = styled.div`
	@font-face{
		font-family: futura;
		src: url('../public/fonts/futurabk.ttf');
		font-weight: normal
	}
	width:100%;
`;

const media = {
	mobile: '@media(max-width: 800px)',
	mobile2: '@media(max-width: 600px)'
}

export const Button = styled.button`
	padding: 25px;
	text-align: center;
`;

export const Cont = styled.div`
	max-width: 960px;
	width: 100%;
	margin: 0 auto;
	text-align: center;
		& form{
			padding-top: 50px;
		}
		& h4{
			color: black;
			text-align: center;
			font-size: 20px;
			color: white;
			margin:0;
			font-weight: lighter;
		}
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
			@media(max-width:350px){
				width: 90%;
			}
		}

`;

export const P = styled.p`
	color: black;
	font-size: 16px;
	letter-spacing: 1px;
	word-spacing: 1px;
	margin-bottom: 15px;
	margin-top: 20px;	
	font-weight: bold;
`;

export const E = styled.p`
	color: ${({suc}) => (suc ? 'green' : 'red')};;
	font-size: 14px;
	font-weight: bolder;
	letter-spacing: 1px;
	word-spacing: 1px;
	margin-bottom: 15px;
	margin-top: 15px;	
	display:none;
	text-align: left;
	background-color: ${({suc}) => (suc ? 'lemon' : 'pink')};
	padding: 5px;
`;

export const Que = styled.div`
	margin: 50px 40px;
	text-align: left;
	padding-left: 50px;
	& input[type='text'],input[type='email'],input[type='date'], select{
		font-family: inherit;
		color: black;
		outline: none;
		width: 100%;
		display:block;
		padding: 5px;
		margin-bottom: 10px;
		letter-spacing: 0.7px;
		text-align: left;
	}
	& input[type='checkbox'], input[type='radio']{
		margin-left: 20px;
		${media.mobile}{
			margin-left: 0px;
		}
		${media.mobile2}{
			margin-left: 0px;
		}
	}

	${media.mobile}{
		margin: 50px 0px;
		padding-left: 10px;
	}
	${media.mobile2}{
		margin: 50px 0px;
		padding-left: 10px;
	}
`
export const Quee = styled.div`
	margin: 50px 40px;
	text-align: left;
	padding-left: 50px;
	& p{
		margin-top: 10px;
		font-size: 13px;
	}
	& input[type='text']{
		font-family: inherit;
		color: black;
		margin-top: 10px;
		outline: none;
		width: 300px;
		display: block;
		padding: 5px;
		margin-bottom: 10px;
		letter-spacing: 0.7px;
		text-align: left;

		@media(max-width:960px){
			width: 96%;
		}
	}

	@media(max-width:960px){
		margin: 50px 0px;
		padding-left: 0px;
	}

`
export const Qu = styled.div`
	display: grid;
	grid-template-columns: 350px 350px;
	justify-content: space-evenly;
	width:100%;
	text-align: left;
	${media.mobile}{
		grid-template-columns: 250px 250px;
	}
	${media.mobile2}{
		grid-template-columns: 100%;
	}
	& p{
		margin-top: 10px;
		font-size: 13px;
	}
	& input[type='text'],input[type='email'],input[type='date'], select{
		font-family: inherit;
		margin-top: 10px;
		width: 100%;
		color: black;
		outline: none;
		border: 1px solid grey;
		border-radius: 3px;
		display:block;
		padding: 7px;
		margin-bottom: 10px;
		letter-spacing: 0.7px;
		text-align: left;
	}
`


class Form extends Component{
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
		event.preventDefault(event);
		const { name, date, school, mobile, email, address, age, sex, lga, skill, time, availability, cost } = this.state;
		if(name=='' || date=='' || school=='' || mobile=='' || email=='' || address=='' || age=='' || sex=='' || lga=='' || skill.length==0 || time=='' || availability=='' || cost==''){
			document.getElementById('skillerror').style.display="block";
		}
		else{
			document.getElementById('skillerror').style.display="none";
			const data = this.state;
			const url ='https://patternandproduce.herokuapp.com/api/cmt';
			axios.post(url, {
				data
	  		})
	  		.then((res) => {
				if (res.data=='Inserted Succesfully'){
				document.getElementById('success').style.display="block";
			}
	  		}, (error) => {
				document.getElementById('skillerror').innerHTML='Something went wrong, Try Again'
				document.getElementById('skillerror').style.display="block";
	 		 });
			  
			}
		}

	render(){
		return(
			<Wrapper>
				<Cont>
					<div style={{position:'absolute', width:'100%', left:'0', backgroundColor:'dimgray', padding: '10px'}}>
						<h4>REGISTER WITH US</h4>
					</div>
					<form onSubmit={this.handleForm}>
					<P style={{textAlign:'left', fontWeight:'bold'}}>PERSONAL DETAILS</P>
					<E id='skillerror'>FILL ALL FIELDS</E>
					<E id='success' suc>SUCCESSFUL!</E>
						<Qu>
						
							<p>
								Full Name
								<input type='text' 
								value={this.state.name}
								onChange={this.handleName} required></input>
							</p>

							<p>
								Date of Birth
								<input type='text' 
								value={this.state.date}
								onChange={this.handleDate} required></input>
							</p>
							<p>
								School
								<input type='text' 
								value={this.state.school}
								onChange={this.handleSchool} required></input>
							</p>
							<p>
								Mobile Number
								<input type='text' 
								value={this.state.mobile}
								onChange={this.handleMobile} required></input>
							</p>
							
							<p>
								Email Address
								<input type='email' 
								value={this.state.email}
								onChange={this.handleMail} required></input>
							</p>

							<p>
								Address
								<input type='text' 
								value={this.state.address}
								onChange={this.handleAddress} required></input>
							</p>
							<p>
								Age
								<input type='text' 
								value={this.state.age}
								onChange={this.handleAge} required></input>
							</p>
							
							<p>
								Sex
								<input type='text' 
								value={this.state.sex}
								onChange={this.handleSex} required>
								</input>
							</p>

							<p>	
								LGA
								<input type='text' 
								value={this.state.lga}
								onChange={this.handleLga} required></input>
							</p>
						</Qu>

						<Que>
							
							<P>Why do you think acquiring an operational skill in garment industry would help you to be better
								equipped for the future?</P>
						 	<p> <input
								type='radio'
								name='skill'
								value={this.state.skill1}
								onChange={this.handleSkill}							
							/> To become self-reliant and financially independent
							</p>
						
							<p> <input
								type='radio'
								name='skill'
								value={this.state.skill2}
								onChange={this.handleSkill}							
							/> To be able to work and sponsor myself through tertiary education
							</p>

							<p> <input
								type='radio'
								name='skill'
								value={this.state.skill3}
								onChange={this.handleSkill}							
							/> To be able to make garments for myself and family, thereby helping to save on cost
							</p>

							<p> <input
								type='radio'
								name='skill'
								value={this.state.skill4}
								onChange={this.handleSkill}							
							/> To become self-reliant and financially independent
							</p>

							<p> <input
								type='radio'
								name='skill'
								value={this.state.skill5}
								onChange={this.handleSkill}							
							/> To understand the industrial process of garment production, thereby gathering experience for future employment
							</p>

							<p> <input
								type='radio'
								name='skill'
								value={this.state.skill6}
								onChange={this.handleSkill}							
							/> To develop a career in fashion and garment making
							</p>
							
						</Que>

						<Que>
							<P>Will you be able to devote your time to learn garment making if given the opportunity to learn
							at Pattern & Produce?</P>
						<input type='radio' name='time' value='yes' required onChange={this.handleTime} /> <span style={{ marginRight:'10px'}}>Yes</span>
						<input type='radio' name='time' value='no' required onChange={this.handleTime} /><span> No</span>
						</Que>				

						<Que>
							<P>How often will you be available to learn?</P>
							<input type='text' name='availability' required onChange={this.handleAvailabilty} /> <span style={{color:'white', marginRight:'10px'}}>Yes</span>
							
						</Que>		

						<Que>
							<P>Will your parents be able to afford the cost of the training?</P>
							<input type='radio' name='cost' value='yes' required onChange={this.handleCost} /> <span style={{ marginRight:'10px'}}>Yes</span>
							<input type='radio' name='cost' value='no' required onChange={this.handleCost} /><span style={{}}>No</span>
						</Que>	

						<Quee>
							<h3>PARENTS/GUARDIANS CONTACT</h3>
							<p>
								Full Name
								<input type='text' 
								value={this.state.pgname}
								onChange={this.handlePgName} required></input>
							</p>

							<p>
								Mobile Number
								<input type='text' 
								value={this.state.pgmobile}
								onChange={this.handlePgMobile} required></input>
							</p>

							<p>
								Address
								<input type='text' 
								value={this.state.pgaddress}
								onChange={this.handlePgAddress} required></input>
							</p>
						</Quee>				
						<input type='submit' value='REGISTER NOW' onClick={this.handleForm}></input>


					</form>
				</Cont>
			</Wrapper>
		)

	}
}
export default Form
