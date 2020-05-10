let buttons = [...document.querySelectorAll('.buttons')]
let equal = document.querySelector('.equal')
let add = document.querySelector('.add')
let screen = document.querySelector('.screen')
let clear = document.querySelector('.clear')

getButtons = () => {
buttons.forEach(v =>{

     v.addEventListener('click',(e) =>{
        let value =  document.createTextNode(e.target.value)
        e.target === equal ? value = document.createTextNode(operations(screen.innerText)) : ''
        screen.appendChild(value) 
    })
        
})
clear.addEventListener('click' ,() =>{ screen.innerText = ''})

}


operations = a => {
    
    let numA = parseInt(a.match(/^[0-9]+/g).join())
    let numB = parseInt(a.match(/[0-9]+$/g).join())
    let add = a.match(/\+{1}/g)
    let subs = a.match(/\-{1}/g)
    let mult = a.match(/\*{1}/g)
    let div = a.match(/\/{1}/g)
    
    
    return add ?  ` = ${numA + numB}`: subs ? ` = ${numA - numB}` : mult ? ` = ${numA * numB}` : div && numB > 0 ? ` = ${numA / numB}` : ''
    
}

    getButtons()