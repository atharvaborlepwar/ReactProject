import React from 'react';
import ReactDOM  from 'react-dom'; 
import './style.css';
import Books from './books/books.jsx'



function Greetings() {
  return (
<article>
<h1 className={'headline'}>Hello Everyone</h1>
<Books img='https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' 
Title='Ikigai: The Japanese secret to a long and happy life'
Author='Héctor García'
Price='410'>

</Books>
<Books img='https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' 
Title='Ikigai: The Japanese secret to a long and happy life'
Author='Héctor García'
Price='410'>

</Books>
<Books img='https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' 
Title='Ikigai: The Japanese secret to a long and happy life'
Author='Héctor García'
Price='410'>

</Books>
<Books img='https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' 
Title='Ikigai: The Japanese secret to a long and happy life'
Author='Héctor García'
Price='410'>

</Books>

</article>
)
}
ReactDOM.render(
  <React.StrictMode>
    <Greetings/>
  </React.StrictMode>,
  document.getElementById('root')
)
