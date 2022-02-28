import React from 'react';
import ReactDOM  from 'react-dom'; 
import './style.css';
import Booklist from './books/booklist';
import './books/styles/books.css';
//When importing react files you not need to write the extension of a file for ex .jsx. You can skip the extension
import Header from './core/header.jsx'
import Footer from './core/footer.jsx';


function Index(){
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
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
)
