import React from 'react';
function Images(props){
    return(
        <img src={props.img} alt=''></img>
        
    )
}
function Title(props){
    return(
        <h4>
            {props.Title}
        </h4>
    )
}
function Author (props){
    return(
        <h5>
            {props.Author}
        </h5>
    )
}
function Price (props){
    return(
        <h4>
            {props.Price}
        </h4>
    )
}
function Books(props){
    return(
        <section>
            <Images img={props.img} ></Images>
            <Title Title={props.Title}></Title>
            <Author Author={props.Author}></Author>
            <Price Price={props.Price}></Price>
        </section>
       
    
    
    
    
    )
}
export default Books;