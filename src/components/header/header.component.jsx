import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

const Header = ({currentUser})=>{
    return(
        <div className="header">
            <div className="logo-container">
                <Link to="/" >
                    <Logo className="logo" />
                </Link>
            </div>
            <div className="options">
                <Link to="/shop" className="option">Shop</Link>
                <Link to="/contact" className="option">Contact</Link>
                {
                    currentUser?
                    <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link to="/SignIn" className="option">SignIn</Link>
                }
                
            </div>
        </div>
    );
};

const mapStateToProps = state=>({
    currentUser : state.user.currentUser
});
export default connect(mapStateToProps)(Header);