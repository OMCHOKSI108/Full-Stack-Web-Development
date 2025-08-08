import Home from './Home'
import About from './About'
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventDemo from './EventDemo';
import Counter from './Counter';
import Sumdemo from './Sumdemo';
import Hooksdemo from './hooksdemo';
import Sumdemo1 from './Sumdemo1';
import RegisterForm from './RegisterForm';
import RegisterForm_class from './RegisterForm_class';
import RegisterForm_hooks from './RegisterForm_hooks';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Changepassword from './Changepassword';
import Editprofile from './Editprofile';



function App() {
  return (<>
    <h1>App</h1>
    <br /><br /><br />
    <Router>
      <Link to='/home'>Home</Link> |
      <Link to='/about'>About</Link> |
      <Link to='/contact'>Contact</Link> |
      <Link to='/eventdemo'>EventDemo</Link> |
      <Link to='/counter'>Counter</Link> |
      <Link to='/sumdemo'>Sum</Link> |
      <Link to='/sumdemo1'>Sum1</Link> |
      <Link to='/hooks'>hooks</Link> |
      <Link to='/registration'>Register</Link> |
      <Link to='/registration_class'>RegisterForm_class</Link> |
      <Link to='/registration_hooks'>RegisterForm_hooks</Link> |
      <Link to='/login'>Login</Link> |
      <Link to='/signup'>Signup</Link> |
      <Link to='/dashboard'>Dashboard</Link> |
      <Link to='/changepassword'>Changepassword</Link> |
      <Link to='/editprofile'>Editprofile</Link> |

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/eventdemo' element={<EventDemo />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/sumdemo' element={<Sumdemo />} />
        <Route path='/sumdemo1' element={<Sumdemo1 />} />
        <Route path='/hooks' element={<Hooksdemo />} />
        <Route path='/registration' element={<RegisterForm />} />
        <Route path='/registration_class' element={<RegisterForm_class />} />
        <Route path='/registration_hooks' element={<RegisterForm_hooks />} />
        <Route path='/cake/ahmedabad' element={<h1>Ahmedabad Cake </h1>} />
        <Route path='/cake/surat' element={<h1>Surat Cake</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/changepassword' element={<Changepassword />} />
        <Route path='/editprofile' element={<Editprofile />} />
        <Route path='*' element={<h1>404 File Not Found</h1>} />
      </Routes>
    </Router>

  </>);
}

export default App;