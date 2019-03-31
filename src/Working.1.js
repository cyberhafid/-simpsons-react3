import React, { Component } from 'react';
import Quotes from "./Quotes";
class Working extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleOpenState = this.toggleOpenState.bind(this);
   }

  toggleOpenState=()=>{
  this.setState({open :!this.state.open}); 
}

  render() {
    const divClass = this.state.open ? 'open': 'close'

    return (
      <div className={`container ${divClass}`}>


<button 
onClick={this.toggleOpenState}
>court bind</button>

<figure >
    
    <figcaption>
      <blockquote>personnage :</blockquote>
      <cite>quote : </cite>
 
     
    </figcaption>
  </figure>
<Quotes  />


       
     
      </div>
    );
  }
}

export default Working;