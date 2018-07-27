import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const one = 'one';

ReactDOM.render(<App one={one} two='two' three='three'/>, document.getElementById('app'));