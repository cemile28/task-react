
import ReactDOM from 'react-dom/client';

import "./index.css"

import book from "./img/book.jpg"
import book2 from "./img/book2.jpg"
let price = 256
let price$ = 300



function Bookname(){

    return <h1 className='bookname'>Мастер и Маргарита</h1>
  }
  function Bookprice (){
    return<h4 className='price'>Цена: {price} руб</h4>
  }
  function Bookauthor (){
    return <h3 className='author'> Автор: Михаил Афанасьевич Булгаков </h3>
  }
  
  
  function Bookimage(){
  
    return <img className='images'  src={book} />
  
  }
  
  function Bookname2(){
  
    return <h1 className='bookname'>Яма</h1>
  }
  function Bookprice2 (){
    return<h4 className='price'>Цена: {price$} руб</h4>
  }
  function Bookauthor2 (){
    return <h3 className='author2'> Автор: Александр Куприн</h3>
  }
  
  
  function Bookimage2(){
  
    return <img className='images2'  src={book2} />
  
  }
  
  function  Book2(){
    return <div className='books'>
      <Bookimage2/>
      <Bookname2/>
      <Bookprice2/>
      <Bookauthor2/>
      <disp/>
    </div>
  }
  
  function Book(){
    return <div className='books'>
      <Bookimage/>
     <Bookname/>
     <Bookprice/>
     <Bookauthor/>
     
     
    </div>
  
  }
 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
     
     <Book/>
        <Book2/>
    </>);

