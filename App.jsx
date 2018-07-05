import React from 'react';

class App extends React.Component {
   constructor(props) {
	   super(props);
	   this.state = {counter : 0};
	   this.handleClick = this.handleClick.bind(this);
   }
   handleClick() {
	   this.setState({counter: this.state.counter + 1})
   }
   render() {
    const Style = {
        color: 'green'
    };
      return (
         <React.Fragment>
			 <div style={Style}>
				{this.state.counter}
			 </div>
			 <button onClick={this.handleClick}>Incrementer</button>
		 </React.Fragment>
      );
   }
}
export default App;