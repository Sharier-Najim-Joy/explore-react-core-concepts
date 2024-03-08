import './book.css'
export default function Book({book}){
    const {name,price}=book
    return(
        <div className={'book'}>
        <h3>book name : {name}</h3>
        <p>price : {price}</p>
        </div>
    )
}