import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth} from "./firebase/firebase.utils";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    };
    this.unSubscribeFromAuth=null;
  };

  
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{this.setState({currentUser:user}); console.log(user);});
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }


  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}
};

export default App;
