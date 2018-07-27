import React from 'react';

class App extends React.Component {
    constructor(props) {
	   super(props);
	   this.state = {counter : 0};
	   this.handleClick = this.handleClick.bind(this);
   }
   handleClick() {
       this.setState({counter: this.state.counter + 1})
       console.log('Counter: ', this.state.counter); //Changes will not reflect suddenly
       fetch('http://localhost:5000/graphql', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({query: "{ message }"})
      })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
   }
   render() {
    const Style = {
        color: 'green'
    };
    const {
        one,
        two,
        ...remainingProps
    } = this.props
    
    console.log(remainingProps)
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