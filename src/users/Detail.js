import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      items: []
	    };
	  }

	componentDidMount(){
		fetch("http://localhost:8000/api/users/show/" + this.props.match.params.id)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            items: result
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
   	const { items } = this.state;
      return (
         <div>
         	<div className="col-sm-12">
            	<h2>User detail</h2>
            </div>
            <div className="col-sm-6">
	            <table className="table table-bordered">
	            	<thead>
		            	<tr>
		            		<th>ID:</th>
		            		<td>{items.id}</td>
		            	</tr>
		            	<tr>
		            		<th>Name:</th>
		            		<td>{items.name}</td>
		            	</tr>
		            	<tr>
		            		<th>Email:</th>
		            		<td>{items.email}</td>
		            	</tr>
		            	<tr>
		            		<th>Created at:</th>
		            		<td>{items.created_at}</td>
		            	</tr>
		            	<tr>
		            		<th>Updated at:</th>
		            		<td>{items.updated_at}</td>
		            	</tr>
	            	</thead>
	            </table>
	        </div>
	        <div className="col-sm-6">
	        	<img width="100px" src={`http://localhost:8000/images/${items.image}`} />
	        </div>	
            <div className="col-sm-12">
            	<Link className="btn btn-primary" to={`/users/Edit/${items.id}`}>Edit</Link>
            </div>
         </div>
      );
   }
}

export default Detail;