import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router'
import './css/style.css'


import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

// const repo = `/${window.location.pathname.split('/')[1]}`    To Deploy to GitHub Pages
const Root = () => {
  return (
//  Modify React Router to run in a subfolder for Github Pages. 
//  Everything will be living in /storename
// <BrowserRouter basename ={repo}                              
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


render(<Root/>, document.getElementById('main'))