import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './router'

// Import style
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/mystyle.css'

import Header from '@/containers/Header.vue'

const App = () => 
  <div>
    <Header />
    <Routes />
    <div>Footer</div>
  </div>

ReactDOM.render(<App />, document.getElementById('app'))