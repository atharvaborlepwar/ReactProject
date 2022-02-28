import React from 'react';
import Images from './components/image.jsx';
import Author from './components/author.jsx';
import Price from './components/price.jsx';
import Title from './components/title.jsx';
import './styles/books.css';

function Books(props){
    function onclick(){
    
        alert(props.Title)
    }
    return(
        <section className='book' onClick={onclick} >
            <Images img={props.img} ></Images>
            <Title Title={props.Title}></Title>
            <Author Author={props.Author}></Author>
            <Price Price={props.Price}></Price>
        </section>
    )
}
export default Books;