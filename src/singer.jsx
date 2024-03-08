export default function Singer({singer}){
    return(
        <div style={{border:'2px solid red',marginTop:'20px',borderRadius:'20px'}}>
            <h3>name: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    )
}