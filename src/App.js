import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth,createUserProfileDocument } from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
 unSubscribeFromAuth=null;
  
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
        setCurrentUser( {
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }

      setCurrentUser( userAuth);
    });
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }


  render(){
  return (
    <div className="App">
      <Header />
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         <Route exact path="/signin" render={()=>this.props.currentUser?<Redirect to="/" />:<SignInSignUp />} />
      </Switch>
    </div>
  );
}
};

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
});
const mapDispatchToProps= dispatch=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
