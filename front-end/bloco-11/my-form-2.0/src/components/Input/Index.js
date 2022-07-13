import React from 'react';

class Input extends React.Component {
  render() { 
    const { name, value, type, is_required = false, max_length, callBack } = this.props;

    let error
    if (value.length > max_length) {
      error = `Este campo deve possuir até ${max_length} caracteres`;
    }
    return (
      <>
        <label>{name}:</label>
        <input name={name} type={type} onChange={callBack} required={is_required} />
        {error && <span className='error-call'>{error}</span>}
      </>
    );
  }
}
 
export default Input;