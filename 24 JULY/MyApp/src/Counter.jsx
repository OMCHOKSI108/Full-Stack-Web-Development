import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={counter:1};
    }
    incrementData(){
        if(this.state.counter>3){
            this.setState({msg:"Sorry Value is >3"})
        }else{
            this.setState({counter:this.state.counter+1,msg:''})
        }
    }
    decrementData(){
        if(this.state.counter<1){
            this.setState({msg:"SOrry Value is < 1"})
        }else{
            this.setState({counter:this.state.counter-1,msg:''})
        }
    }
    render(){
        var a =10
        return(
            <>
                <h1>Counter App</h1>
                A Value is {a}
                Counter Value is {this.state.counter}<br />
                <input type="button" value="+" onClick={this.incrementData.bind(this)}/>
                <input type="button" value="-" onClick={this.decrementData.bind(this)}/>
                <br/>
                <p style={{color:'red'}}>{this.state.msg}</p>
            </>
        );
    }

}
export default Counter;