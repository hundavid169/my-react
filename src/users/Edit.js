import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      id: '', name: '', email: ''
	    };
	  }

	name(e) {
        this.setState({name: e.target.value});
      }
    email(e) {
        this.setState({email: e.target.value});
      }

    edit(){
    	axios.put('http://localhost:8000/api/users/update/'+ this.state.id, {
		    name: this.state.name,
		    email: this.state.email,
		  })
		  .then(function (response) {
		    window.location.href='/users/Detail/' + response.data.id;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
    }

	componentDidMount(){
		fetch("http://localhost:8000/api/users/show/" + this.props.match.params.id)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            id: result.id,
	            name: result.name,
	            email: result.email
	          });
	        },
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )

	}
   render() {
      return (
         <div>
            <h2>User Edit</h2>
            Name: <br />
            <input className="form-control" type="text" onChange={this.name.bind(this)} value={this.state.name} /><br />
            Email: <br />
            <input className="form-control" type="text" onChange={this.email.bind(this)} value={this.state.email} /><br />
            <button type="submit" className="btn btn-success" onClick={this.edit.bind(this)} >Save</button>
         </div>
      );
   }
}

export default Edit;