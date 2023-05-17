import React from "react";
class Person2 extends React.Component{
    constructor(){
        super()
        this.state = {
            timer:0,
            Name: "Jhon",
            Bio:"",
            img: './Jhon-Doe.jpg',
            Profession: "Dev"
        };
    }
    componentDidMount(){
        setInterval(() => {this.setState({timer: this.state.timer + 1})},1000)
    }
render() {
    return(
        <div><p>Name: {this.state.Name} Bio:{this.state.Bio} Job: {this.state.Profession} </p>
        <img src={this.state.img} alt="Jhon"/>
            <p>{this.state.timer}</p></div>
    )
}
}
export default Person2;