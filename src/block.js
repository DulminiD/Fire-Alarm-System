import React, {Component} from "react";

export default class Block extends Component{
    constructor(props) {
        super(props);
        this.state={
            object:this.props.obj,
            co2danger:false,
            smokedanger:false
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            co2danger:false,
            smokedanger:false,
        });
        if(nextProps.co2>=5){
            this.setState({
                co2danger:true
            })
        }
        if(nextProps.smoke>=5){
            this.setState({
                smokedanger:true
            })
        }
    }


    render() {
        const {obj, co2, smoke}=this.props;
        return(
             <td className={obj? 'table-success':'none'} >
                 <div style={{height: "80px"}}>
                 {obj ?
                     (<div>
                         <p className={this.state.co2danger ? 'table-danger' : 'none'}>CO2 Level = {co2}  </p>
                         <p className={this.state.smokedanger ? 'table-danger' : 'none'}>Smoke Level = {smoke}</p>
                     </div>) : (null)
                 }
                     </div>
                </td>
        );
    }
}