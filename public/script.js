/*const getEventType = (event)=>{
  const log = document.getElementById('log');
  event.key === 'ArrowDown' ? console.log('Clickeaste flecha abajo') : console.log("No clickeaste flecha abajo");
};*/

document.addEventListener('DOMContentLoaded',()=>{

    var queryParameter = getQueryParameter('q');
    
    if(queryParameter){
      print(queryParameter);
    }
    
   
  });
  
  
  var getQueryParameter = (name) => {
  
      // extraigo el query parameter luego del '?' y separo 
      // por el separador '&'
      var variables = window.location.search.substring(1).split('&');
      var variable;
      for(var i=0;i<variables.length;i++){
        
          // chequeo si el nombre de la parametro es igual a 'q' y 
          // devueluelvo el valor decodeado
          variable = variables[i].split('=');
          
         
          if (decodeURIComponent(variable[0]) === name){
            
              
             return decodeURIComponent(variable[1]);
            
          }
          
               
          //return (decodeURIComponent(variable[0]) === name) ? true : false;
      }
  
      return false;
  };
  
  const print = (value)=>{
    var tag = document.querySelector('#results');
    var html='';
    
    html+='<h2> Ingresaste </h2>';
    html+='<p>'+value+'</p>';
    tag.innerHTML=html;
  
  };