import React, { Component } from 'react';
import axios from 'axios';

class Calculator extends Component {
	state = { var1: 0, output: '', calculate: 0 };
      n1() {
          this.setState({output: this.state.output + '1' });
        }
        n2() {
          this.setState({output: this.state.output + '2' });
        }
        n3() {
          this.setState({output: this.state.output + '3' });
        }
        n4() {
          this.setState({output: this.state.output + '4' });
        }
        n5() {
          this.setState({output: this.state.output + '5' });
        }
        n6() {
          this.setState({output: this.state.output + '6' });
        }
        n7() {
          this.setState({output: this.state.output + '7' });
        }
        n8() {
          this.setState({output: this.state.output + '8' });
        }
        n9() {
          this.setState({output: this.state.output + '9' });
        }
        n0() {
          if(this.state.output !== ''){
            this.setState({output: this.state.output + '0' });
          } 
        }
        dot() {
          if(this.state.output.includes(".") === false){
            if(this.state.output === ''){
              this.setState({output: this.state.output + '0.' });
            }
            else{
              this.setState({output: this.state.output + '.' });
            }
          }
        }
        clear() {
          this.setState({output: '' });
        }
        add() {
          this.setState({var1: this.state.output });
          this.setState({calculate: 'add' });
          this.setState({output: '' });
        }
        minus() {
          this.setState({var1: this.state.output });
          this.setState({calculate: 'minus' });
          this.setState({output: '' });
        }
        multi() {
          this.setState({var1: this.state.output });
          this.setState({calculate: 'multi' });
          this.setState({output: '' });
        }
        divide() {
          this.setState({var1: this.state.output });
          this.setState({calculate: 'divide' });
          this.setState({output: '' });
        }
        total() {
          if(this.state.calculate === 'add'){
            this.setState({output: parseFloat(this.state.var1) + parseFloat(this.state.output) });
          }
          else if(this.state.calculate === 'minus'){
            this.setState({output: parseFloat(this.state.var1) - parseFloat(this.state.output) });
          }
          else if(this.state.calculate === 'multi'){
            this.setState({output: parseFloat(this.state.var1) * parseFloat(this.state.output) });
          }
          else if(this.state.calculate === 'divide'){
            this.setState({output: parseFloat(this.state.var1) / parseFloat(this.state.output) });
          }else{
            return false;
          }
        }
        users(){
          axios.get('http://localhost:8000/api/users')
          .then(function (response) {
            console.log(response);
          });
        }
  render() {
    return (
      <div>
        <h2>Calulator</h2>
        <div className="calulator">
            <input value={this.state.output} className="output" /><br />
            <div className="calBody">
              <button className="calBtn" type="button" onClick={this.n1.bind(this)}>1</button>
              <button className="calBtn" type="button" onClick={this.n2.bind(this)}>2</button>
              <button className="calBtn" type="button" onClick={this.n3.bind(this)}>3</button>
              <button className="calBtn" type="button" onClick={this.add.bind(this)}>+</button>
              <button className="calBtn" type="button" onClick={this.clear.bind(this)}>C</button>
              <br/>
              <button className="calBtn" type="button" onClick={this.n4.bind(this)}>4</button>
              <button className="calBtn" type="button" onClick={this.n5.bind(this)}>5</button>
              <button className="calBtn" type="button" onClick={this.n6.bind(this)}>6</button>
              <button className="calBtn" type="button" onClick={this.minus.bind(this)}>-</button>
              <br/>
              <button className="calBtn" type="button" onClick={this.n7.bind(this)}>7</button>
              <button className="calBtn" type="button" onClick={this.n8.bind(this)}>8</button>
              <button className="calBtn" type="button" onClick={this.n9.bind(this)}>9</button>
              <button className="calBtn" type="button" onClick={this.multi.bind(this)}>*</button>
              <br/>             
              <button className="calBtn" type="button" onClick={this.dot.bind(this)}>.</button>
              <button className="calBtn" type="button" onClick={this.n0.bind(this)}>0</button>
              <button className="calBtn" type="button" onClick={this.total.bind(this)}>=</button>
              <button className="calBtn" type="button" onClick={this.divide.bind(this)}>/</button>
            </div>         
        </div>
      </div>

    );
  }
}

export default Calculator;