import '../styles/App.css'
import '../styles/materialize.css'
import '../styles/normalize.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Login from './components/login/login'
import Signup from './components/signup/signup'
import ForgotPassword from './components/forgotpassword/forgotpassword'
import ChangePassword from './components/changepassword/changepassword'
import Profile from './components/profile/profile'
import HomePage from './pages/home'
import Subscribe from './components/subscribe/subscribe'
import Success from './components/success/success'
import Failure from './components/failure/failure'
import ChangeEmail from './components/changeemail/changeemail'
import RecoverPassword from './components/recoverpassword/recoverpassword'
import Stock from './components/cloud pharma/stock'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/"                exact  element={<HomePage/>} />
          <Route path="/recoverpassword/"exact  element={<RecoverPassword/>} />
          <Route path="/forgotpassword/" exact  element={<ForgotPassword/>} />
          <Route path="/changepassword/" exact  element={<ChangePassword/>} />
          <Route path="/changepassword/:token" exact  element={<ChangePassword/>} />

          <Route path="/login/"          exact  element={<Login/>} />
          <Route path="/signup/"         exact  element={<Signup/>} />

          <Route path="/subscribe/"      exact  element={<Subscribe/>} />
          <Route path="/success/:id"     exact  element={<Success/>} />
          <Route path="/failure/"        exact  element={<Failure/>} />

          <Route path="/profile/"         exact  element={<Profile/>} />
          <Route path="/changeemail/"    exact  element={<ChangeEmail/>} />
          <Route path="/stock/"          exact  element={<Stock/>} />
        </Routes>
      
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
