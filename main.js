let show = document.querySelector('.view')
result = document.querySelector('#equal')
rem = document.querySelector('#clear')





const insert = ( num ) => {
    
    let x = document.createTextNode(num)
    show.appendChild(x)
    
    rem.addEventListener('click', () => {
        show.removeChild(x)
    })
    
    result.addEventListener('click', () => {
        show.removeChild(x)
      
    })
    
}

const equal = () => {
    
    result.addEventListener('click', () => {
        let k =  document.createTextNode(eval(show.innerHTML)) // eval() evalúa código Javascript y lo ejecuta- innerHTML lo que muestra el nodo el el div
    
        show.appendChild(k) 
        rem.addEventListener('click', () => {
            show.removeChild(k)
        })
        
        
    
    })
}

equal()