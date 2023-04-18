
function Arr(){ 
   
    let dic=[{"id":1,"name":"rishu","roll":196301084,"sub":"math"},
    {"id":2,"name":"roshan","roll":196301085,"sub":"algo"},
    {"id":3,"name":"kumar","roll":196301086,"sub":"zoology"},
    {"id":4,"name":"yadav","roll":196301087,"sub":"chem"},
    {"id":5,"name":"singh","roll":196301088,"sub":"bio"},
    {"id":6,"name":"pradeep","roll":196301089,"sub":"phy"},
    {"id":8,"name":"jaggu","roll":1963,"sub":"micro"}]   

    //const ar = dic.map((element) => <li>{element}</li>);
    return(
        <>
    {dic.map((item, index) => (
      <div key={index}> 
       <li><div>id: {item.id}</div>
        <div>Name: {item.name}</div>
       <div>roll: {item.roll}</div>
       <div>sub: {item.sub}</div></li> 
        
      </div>
    ))}
  </>

    
    )

} 
export default Arr; 
