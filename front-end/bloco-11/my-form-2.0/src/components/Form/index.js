import React from 'react';

import './style.css';
import Input from '../Input/Index';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <fieldset>
          <Input name='name' type='text' value={this.state.name} max_length={40} is_required callBack={this.handleInput} />
          <Input name='email' type='email' value={this.state.email} max_length={50} is_required callBack={this.handleInput} />
          <Input name='cpf' type='text' value={this.state.cpf} max_length={11} is_required callBack={this.handleInput} />
          <Input name='address' type='text' value={this.state.address} max_length={200} is_required callBack={this.handleInput} />
          <Input name='city' type='text' value={this.state.city} max_length={28} is_required callBack={this.handleInput} />
        </fieldset>
      </form>
    )
  }
}

export default Form;