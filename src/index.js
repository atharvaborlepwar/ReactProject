import React from 'react';
import ReactDOM  from 'react-dom'; 
import './style.css';
import Booklist from './books/booklist.js';
import './books/books.css';
import Header from './core/header.jsx'
import Footer from './core/footer.jsx';


function Main(){
  return(
  <section>
    <Header></Header>
    <Booklist></Booklist>
    <Footer></Footer>
  </section>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
)
