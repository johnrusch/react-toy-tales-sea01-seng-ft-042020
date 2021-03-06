import React, { Component } from 'react';

class ToyForm extends Component {


  handleSubmit = (e) => {
    e.preventDefault()
    e.persist()
    console.log(e.target.name.value)
    this.props.onSubmitClick(e)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.handleChange}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.handleChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
