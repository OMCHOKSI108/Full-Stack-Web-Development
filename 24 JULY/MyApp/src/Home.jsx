import './Hello.css';
import logo from './assets/logo.png'

function Home(){
    var a = 10
    var b = 20

    var mycolor = {color : 'White',backgroundColor: 'green'}
    return (<>
    
     <h1>Home</h1>
     A value is {a} <br />
     B value is {b}
     <p style={{color: 'red',backgroundColor: 'black'}}>Hello I am P Tag</p>
     <p style={{color: 'red',backgroundColor: 'black'}}>Hello I am P Tag</p>
     <p style={mycolor}>I am P again</p>
     <p style={mycolor}>I am P again</p>
     <p style={mycolor}>I am P again</p>
     <img src={logo} />

    </>)
}

export default Home
