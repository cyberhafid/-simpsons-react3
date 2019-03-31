import React, { Component } from 'react';
import logo from './logo.svg';
//import Workings from './Workings';


const users = [
  {
    quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  },
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  },
  {
    quote: "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character: "Principal Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
  }
];

class Working extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openlogo: false,
      users
    

    };

    this.toggleOpenState = this.toggleOpenState.bind(this);
  }

  toggleOpenState = () => {
    this.setState({ open: !this.state.open, openlogo: !this.state.openlogo });
  }

  render() {
    const divClass = this.state.open ? 'open' : 'close'
    const divHeader = this.state.openlogo ? 'App-logo App-scale' : 'App-logo'





    return (
      <div>


       
<header className="App-header">
          <img src={logo} className={`${divHeader}`} alt="logo" />
          <h1 className="App-title">Tu as gagné au millionaire?</h1>
        </header>






        {this.state.users.map((person, index) => (



          <div className={`container ${divClass}`}>
            <figure >
            <button
          onClick={this.toggleOpenState}
        >DODO OU PAS DODO????????????????????????</button>
              <img src={person.image} alt={person.character} style={{ height: 300}} />
              <figcaption>
                <blockquote>personnage :{person.character}</blockquote>
                <cite>quote : {person.quote} </cite>

              </figcaption>
            </figure>
          </div>

        ))}





      </div>
    );
  }
}

export default Working;