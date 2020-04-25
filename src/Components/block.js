import React, {Component} from "react";
import BlockUnit from "./blockUnit";

export default class Block extends Component{
    constructor(props) {
        super(props);
        this.state={
            object:this.props.obj,
            header:false,
            length:0,
            blocks:[]
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            blocks:nextProps.o.Rooms,
            header:nextProps.header
        })

    }

    getBlockUnit(){
        return this.state.blocks.map((res, i)=>{
            return  <BlockUnit header={this.state.header} h={this.props.header} obj={this.state.blocks[i]} />
        })
    }

    render() {
        return(
            //{header? (<th scope="row" className="table-active">Floor {h+1}</th>):(null)}
            this.getBlockUnit()
        );
    }
}