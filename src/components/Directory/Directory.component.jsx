import React from "react";
import "./Directory.styles.scss";

import MenuItem from "../MenuItem/MenuItem.component.jsx";

class Directory extends React.Component{
constructor(props){
    super(props);
    this.state = {
        categories:[
            {
                id:1,
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                title:'hats'
            },
            {
                id:2,
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                title:'jackets'
            },
            {
                id:3,
                imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                title:'sneakers'
            },
            {
                id:4,
                imageUrl:'https://i.ibb.co/GCCdy8t/womes.png',
                title:'womens',
                size:'large'
            },
            {
                id:5,
                imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                title:'mens',
                size:'large'
            }
        ]
    };
}
render(){
    return(
        <div className="directory-menu">
        {this.state.categories.map(({title, imageUrl, id, size})=> <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        )}
        </div>
    );
    }
};

export default Directory;