import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {seconds: 0}
  }

  componentDidMount(){
    this.interval = setInterval(()=>this.tick(), 1000)
  }

  tick(){
    this.setState(state => ({ seconds: state.seconds+1}));
  }

  render(){
    return (
      <div>
        Segundos: {this.state.seconds}
      </div>
    );
  }
}

const varia = "Doggy";
class HelloMessage extends React.Component{

  render() {
    return (
      <div>
        Hola {this.props.name}
        <br/>
        Me siento {this.props.estadoAnimo}
        {varia}
      </div>
    );
  }
}

ReactDOM.render(
  // <HelloMessage name = "Don Deivid" estadoAnimo = "Sad"/>,
  <Timer/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
