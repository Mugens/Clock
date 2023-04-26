import React from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css'

function Header(props){
  return(
    <div className="header">
      <h1 className="title">
        <i className="far fa-clock"></i>
        React Clock
      </h1>
    </div>
  ) 
}
function Panel(props){
  return(
    <div className="clock__panel">
      <label id="date-switch" className="clock__switch">
        <input type="checkbox" onChange={props.switch}/>
        <span className="switch"></span>
      </label>
      <label for="data-switcher" className="clock__calendar">
        <i className="far fa-calendar-alt"></i>
      </label>
    </div>
  )
}
function Body(props){
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes()<10 ? "0" + props.date.getMinutes() : props.date.getMinutes();
  let second = props.date.getSeconds()<10 ? "0" + props.date.getSeconds() : props.date.getSeconds();

  let date = props.showDate ? 'Wed 29 January 2020' : "";

  return(
    <div className="clock__body">
      <div className="clock__time">
        {`${hours}:${minutes}:${second}`}
      </div>
      <div className="clock__date" >
        {date}
      </div>
    </div>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: new Date(),
      showDate: false,
    }

  }

  componentDidMount(prevProps){
    setInterval(() => {
      this.setState({date: new Date()})
    }, 100);
  }

  handleSwitch = ()=>this.setState({showDate: !this.state.showDate});

  render(){
    return (
      <div className="clock">
        <Header/>
        <Panel switch={this.handleSwitch}/>
        <Body date={this.state.date} showDate={this.state.showDate}/>
      </div>
    );
  }
}

export default App;
