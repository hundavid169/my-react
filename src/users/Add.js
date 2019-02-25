import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
	constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.state = {image: '',imagePreviewUrl: '', errors: ''};
  }

	add(event) {
        var self = this;
        const formData = new FormData();
        formData.append('image', this.state.image, this.state.image.name);
        formData.append('name', this.name.value);
        formData.append('email', this.email.value);
        formData.append('password', this.password.value);
        
    axios.post('http://localhost:8000/api/users/add', formData,)
		  .then(function (response) {
        var result = response.data;
        if(result.status){
          self.setState({errors: '' });
          window.location.href='/users/List';
        }
        else{
          var validation = result.errors;
          var mgs = Object.values(validation);
          var str = '';
          for (var i = 0; i < mgs.length; i++) {
            str += mgs[i][0]+'<br>';
          }
          
          self.setState({errors: str });
        }
		    
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
      event.preventDefault();

    }

  fileChangedHandler = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let image = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: image,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(image)

  }

   render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} width="100px" />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image</div>);
    }
      return (
         <div>
            <h2>User Register</h2>
            <div className="alert alert-danger" style={this.state.errors ? {} : { display: 'none' }} dangerouslySetInnerHTML={{__html: this.state.errors}} ></div>
            <form onSubmit={this.add}>
              Name: <br />
              <input type="text" className="form-control" ref={(input) => this.name = input} /><br />
              Email: <br />
              <input type="text" className="form-control" ref={(input) => this.email = input} /><br />
              Password: <br />
              <input type="password" className="form-control" ref={(input) => this.password = input} /><br />
              <div>
                {$imagePreview}
              </div>
              <input type="file" onChange={this.fileChangedHandler} /><br />
              <input type="submit" className="btn btn-success" value="Save" />
            </form>  
         </div>
      );
   }
}

export default Add;