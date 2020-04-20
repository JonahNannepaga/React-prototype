import React from "react";

class FormComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        mobile: ""
    };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeMobile = this.handleChangeMobile.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      handleChangeMobile(event) {
        this.setState({mobile: event.target.value});
      }
  
    handleSubmit(event) {
        
        if((this.state.name) === "") {
            alert('Name is blank. Please enter value');
        }
        else if((this.state.email === "")) {
            alert('Email is blank. Please enter value');
        }
        else if((this.state.mobile === "")) {
            alert('Mobile is blank. Please enter value');
        }
        else {
            alert('Form is valid. Successfully submitted!!');
        }
        event.preventDefault();
    }
  
    render() {
      return (
        <form className="form-comp" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </label>
          <label>
            Email:
            <input type="email" value={this.state.email} onChange={this.handleChangeEmail}/>
          </label>
          <label>
            Mobile:
            <input type="text" value={this.state.mobile} onChange={this.handleChangeMobile}/>
          </label>

          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }

  export default FormComponent;