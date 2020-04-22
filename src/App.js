import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Block from "./block";


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      blocks:[{Rooms:[{Active:false},{Active: false}, {Active: false}, {Active: false}, {Active: false}, {Active: false}],},
              {Rooms:[{Active:false},{Active: false}, {Active: false}, {Active: false}, {Active: false}, {Active: false}],},
              {Rooms:[{Active:false},{Active: false}, {Active: false}, {Active: false}, {Active: false}, {Active: false}],},
              {Rooms:[{Active:false},{Active: false}, {Active: false}, {Active: false}, {Active: false}, {Active: false}],},
              {Rooms:[{Active:false},{Active: false}, {Active: false}, {Active: false}, {Active: false}, {Active: false}],},
      ]}
  }
  getDetails() {
    axios.get("http://localhost:5000/all").then(res => {
      console.log(res.data);
      this.setState({
        blocks: res.data
      });
    });
  }
  componentDidMount() {
    this.getDetails();

    setInterval(()=>{
      this.getDetails()
    }, 4000)
  }


  render() {
    return (
        <div>
          <table className="table table-bordered">
            <thead>
            <tr className="table-dark">
              <th scope="col">Number</th>
              <th scope="col">Room 1</th>
              <th scope="col">Room 2</th>
              <th scope="col">Room 3</th>
              <th scope="col">Room 4</th>
              <th scope="col">Room 5</th>
              <th scope="col">Room 6</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row" className="table-active">Floor 1</th>
                <Block obj={this.state.blocks[0].Rooms[0].Active} co2={this.state.blocks[0].Rooms[0].CO2Level} smoke={this.state.blocks[0].Rooms[0].SmokeLevel}/>
                <Block obj={this.state.blocks[0].Rooms[1].Active} co2={this.state.blocks[0].Rooms[1].CO2Level} smoke={this.state.blocks[0].Rooms[1].SmokeLevel}/>
                <Block obj={this.state.blocks[0].Rooms[2].Active} co2={this.state.blocks[0].Rooms[2].CO2Level} smoke={this.state.blocks[0].Rooms[2].SmokeLevel}/>
                <Block obj={this.state.blocks[0].Rooms[3].Active} co2={this.state.blocks[0].Rooms[3].CO2Level} smoke={this.state.blocks[0].Rooms[3].SmokeLevel}/>
                <Block obj={this.state.blocks[0].Rooms[4].Active} co2={this.state.blocks[0].Rooms[4].CO2Level} smoke={this.state.blocks[0].Rooms[4].SmokeLevel}/>
                <Block obj={this.state.blocks[0].Rooms[5].Active} co2={this.state.blocks[0].Rooms[5].CO2Level} smoke={this.state.blocks[0].Rooms[5].SmokeLevel}/>
            </tr>
            <tr>
              <th scope="row" className="table-active">Floor 2</th>
              <Block obj={this.state.blocks[1].Rooms[0].Active} co2={this.state.blocks[1].Rooms[0].CO2Level} smoke={this.state.blocks[1].Rooms[0].SmokeLevel}/>
              <Block obj={this.state.blocks[1].Rooms[1].Active} co2={this.state.blocks[1].Rooms[1].CO2Level} smoke={this.state.blocks[1].Rooms[1].SmokeLevel}/>
              <Block obj={this.state.blocks[1].Rooms[2].Active} co2={this.state.blocks[1].Rooms[2].CO2Level} smoke={this.state.blocks[1].Rooms[2].SmokeLevel}/>
              <Block obj={this.state.blocks[1].Rooms[3].Active} co2={this.state.blocks[1].Rooms[3].CO2Level} smoke={this.state.blocks[1].Rooms[3].SmokeLevel}/>
              <Block obj={this.state.blocks[1].Rooms[4].Active} co2={this.state.blocks[1].Rooms[4].CO2Level} smoke={this.state.blocks[1].Rooms[4].SmokeLevel}/>
              <Block obj={this.state.blocks[1].Rooms[5].Active} co2={this.state.blocks[1].Rooms[5].CO2Level} smoke={this.state.blocks[1].Rooms[5].SmokeLevel}/>
            </tr>
            <tr>
              <th scope="row" className="table-active">Floor 3</th>
              <Block obj={this.state.blocks[2].Rooms[0].Active} co2={this.state.blocks[2].Rooms[0].CO2Level} smoke={this.state.blocks[2].Rooms[0].SmokeLevel}/>
              <Block obj={this.state.blocks[2].Rooms[1].Active} co2={this.state.blocks[2].Rooms[1].CO2Level} smoke={this.state.blocks[2].Rooms[1].SmokeLevel}/>
              <Block obj={this.state.blocks[2].Rooms[2].Active} co2={this.state.blocks[2].Rooms[2].CO2Level} smoke={this.state.blocks[2].Rooms[2].SmokeLevel}/>
              <Block obj={this.state.blocks[2].Rooms[3].Active} co2={this.state.blocks[2].Rooms[3].CO2Level} smoke={this.state.blocks[2].Rooms[3].SmokeLevel}/>
              <Block obj={this.state.blocks[2].Rooms[4].Active} co2={this.state.blocks[2].Rooms[4].CO2Level} smoke={this.state.blocks[2].Rooms[4].SmokeLevel}/>
              <Block obj={this.state.blocks[2].Rooms[5].Active} co2={this.state.blocks[2].Rooms[5].CO2Level} smoke={this.state.blocks[2].Rooms[5].SmokeLevel}/>
            </tr>
            <tr>
              <th scope="row" className="table-active">Floor 4</th>
              <Block obj={this.state.blocks[3].Rooms[0].Active} co2={this.state.blocks[3].Rooms[0].CO2Level} smoke={this.state.blocks[3].Rooms[0].SmokeLevel}/>
              <Block obj={this.state.blocks[3].Rooms[1].Active} co2={this.state.blocks[3].Rooms[1].CO2Level} smoke={this.state.blocks[3].Rooms[1].SmokeLevel}/>
              <Block obj={this.state.blocks[3].Rooms[2].Active} co2={this.state.blocks[3].Rooms[2].CO2Level} smoke={this.state.blocks[3].Rooms[2].SmokeLevel}/>
              <Block obj={this.state.blocks[3].Rooms[3].Active} co2={this.state.blocks[3].Rooms[3].CO2Level} smoke={this.state.blocks[3].Rooms[3].SmokeLevel}/>
              <Block obj={this.state.blocks[3].Rooms[4].Active} co2={this.state.blocks[3].Rooms[4].CO2Level} smoke={this.state.blocks[3].Rooms[4].SmokeLevel}/>
              <Block obj={this.state.blocks[3].Rooms[5].Active} co2={this.state.blocks[3].Rooms[5].CO2Level} smoke={this.state.blocks[3].Rooms[5].SmokeLevel}/>
            </tr>
            <tr>
              <th scope="row" className="table-active">Floor 5</th>
              <Block obj={this.state.blocks[4].Rooms[0].Active} co2={this.state.blocks[4].Rooms[0].CO2Level} smoke={this.state.blocks[4].Rooms[0].SmokeLevel}/>
              <Block obj={this.state.blocks[4].Rooms[1].Active} co2={this.state.blocks[4].Rooms[1].CO2Level} smoke={this.state.blocks[4].Rooms[1].SmokeLevel}/>
              <Block obj={this.state.blocks[4].Rooms[2].Active} co2={this.state.blocks[4].Rooms[2].CO2Level} smoke={this.state.blocks[4].Rooms[2].SmokeLevel}/>
              <Block obj={this.state.blocks[4].Rooms[3].Active} co2={this.state.blocks[4].Rooms[3].CO2Level} smoke={this.state.blocks[4].Rooms[3].SmokeLevel}/>
              <Block obj={this.state.blocks[4].Rooms[4].Active} co2={this.state.blocks[4].Rooms[4].CO2Level} smoke={this.state.blocks[4].Rooms[4].SmokeLevel}/>
              <Block obj={this.state.blocks[4].Rooms[5].Active} co2={this.state.blocks[4].Rooms[5].CO2Level} smoke={this.state.blocks[4].Rooms[5].SmokeLevel}/>
            </tr>
            </tbody>
          </table>
          <div className="text-dark">
            Details:
            <p>If the sensor is active : It will be displayed in Green Color</p>
            <p>If the sensor is not active : It will be displayed in White Color</p>
            <p>If the CO2(Carbondioxide) level is higher than or equal to level 5 : It will be displayed in Red Color</p>
            <p>If the Smoke level is higher than or equal to level 5 : It will be displayed in Red Color</p>
          </div>
        </div>
    );
  }


}

export default App;
