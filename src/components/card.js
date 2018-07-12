import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

  constructor() {
    super()

    this.state = {
      color: '',
      pluralNoun: '',
      adjective: ''
    }
  }

    render() {
      return (
        <div className='card'>
            <h1>{this.state.color}</h1>
            { Input('Color') }
            { Input('Plural Noun') }
            { Input('Adjective') }
        </div>
      );
    }
  }
  
export default Card;