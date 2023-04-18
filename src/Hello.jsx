function Hello({color,children}){
    return (
        <div  className={"Hello"+ color}    >
           <p  > {children} </p> 
            {color}
        </div>
    )
} 
export default Hello