import React from 'react';

import './filterButton.css';

class FilterButton extends React.Component {
  render() {
    return (
      <button className='filter-button' disabled={this.props.type === this.props.selected_type} onClick={this.props.callBack}>{this.props.type}</button>
    );
  }
}

export default FilterButton;