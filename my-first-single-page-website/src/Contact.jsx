import React from 'react'
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
   

    doPrint(){
        var no1 = this.state.txt2;
        var no2 = this.state.txt2;
        
        if (!this.state.txt1) {
            this.setState({ ans: "Enter first name" });
            return;
        }
        if (!this.state.txt2) {
            this.setState({ ans: "Enter last name" });
            return;
        }
        this.setState({ ans: `${this.state.txt1} ${this.state.txt2}` });
       
    }

    render(){
        return(<>
        <h1>Contact</h1>
        First Name : <input type='text' onChange={(e)=>this.setState({txt1:e.target.value})}/>
        Last Name : <input type='text' onChange={(e)=>this.setState({txt2:e.target.value})}/>
        <br />


        <input type='button' value="Submit " onClick={this.doPrint.bind(this)}/>
        {this.state.ans}
        </>)
    }
}
export default Contact;