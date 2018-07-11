import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
    render() {
      return (
        <div className='Card'>
            { Input('Color') }
            { Input('Noun (plural)') }
            { Input('Adjective') }
        </div>
      );
    }
  }
  
export default Card;