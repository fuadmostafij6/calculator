let d = document.getElementById('d');
let r = document.getElementById('r')
let buttons = Array.from(document.getElementsByClassName('b'));



buttons.map( (button) => {
    
    button.addEventListener('click', (e) => {
      
        if( e.target.innerText ==="C"){
            d.innerText = ""
            r.innerText = ""


        }
        else if(e.target.innerText === '='){
            
            try {
                r.innerText = eval(d.innerText)
              }
              catch(err) {
                r.innerText= 'errore'
              }

        }
        else if(e.target.innerText=== '←'){
           
                d.innerText = d.innerText.slice(0, -1);
       
        }
        else{
            d.innerText += e.target.innerText;
        }
        
        
    });
});
