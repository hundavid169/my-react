import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class List extends Component {
		constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      items: []
	    };
	  }

	  delete(id){
	  	console.log(id);
	  	axios.delete('http://localhost:8000/api/users/delete/' + id)
		  .then(function (response) {
		    window.location.href='/users/List';
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	  }

	  componentDidMount() {
	    fetch("http://localhost:8000/api/users")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            items: result
	          });
	        },
	        (error) => {
	        	alert('Fail to get Users list');
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
            <h2>Users List</h2>
            <table className="table table-bordered">
            	<thead>
		          <tr>
		            <th width="10%">Id</th>
		            <th width="20%">Name</th>
		            <th width="30%">Email</th>
		            <th width="20%">Image</th>
		            <th width="20%"></th>
		          </tr>
		        </thead>
	          <tbody>
		          {items.map(item => (
		            <tr key={item.id}>
		              <td>
		                {item.id}
		              </td>
		              <td>
		                {item.name}
		              </td>
		              <td>
		                {item.email}
		              </td>
		              <td>
		                <img width="100px" src={`http://localhost:8000/images/${item.image}`} />
		              </td>
		              <td>
		                <Link className="btn btn-primary" to={`/users/Detail/${item.id}`}>Detail</Link>
		                	&nbsp;
		                <button className="btn btn-danger" type="button" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete(item.id) } }>Delete</button>
		              </td>

		            </tr>
		          ))}
		       </tbody>
	        </table>
         </div>
      );
   }
}

export default List;