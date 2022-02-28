import React from 'react';
import Images from './image.jsx';
import Author from './author.jsx';
import Price from './price.jsx';
import Title from './title.jsx';
import './books.css';

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