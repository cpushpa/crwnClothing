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
                title:'hats',
                linkUrl:'hats'
            },
            {
                id:2,
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                title:'jackets',
                linkUrl:''
            },
            {
                id:3,
                imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                title:'sneakers',
                linkUrl:''
            },
            {
                id:4,
                imageUrl:'https://i.ibb.co/GCCdy8t/womes.png',
                title:'womens',
                size:'large',
                linkUrl:''
            },
            {
                id:5,
                imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                title:'mens',
                size:'large',
                linkUrl:''
            }
        ]
    };
}
render(){
    return(
        <div className="directory-menu">
        {this.state.categories.map(({id, ...othercategories})=> 
            <MenuItem key={id} {...othercategories} />
        )}
        </div>
    );
    }
};

export default Directory;