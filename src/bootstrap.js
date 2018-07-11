import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Home />
    , document.querySelector('.home-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
