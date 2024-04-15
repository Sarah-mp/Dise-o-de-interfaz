const opcion1 = document.getElementById('opcion1')
const opcion2 = document.getElementById('opcion2')
const opcion3 = document.getElementById('opcion3')
const opcion4 = document.getElementById('opcion4')
const opcion5 = document.getElementById('opcion5')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const content3 = document.getElementById('content3')
const content4 = document.getElementById('content4')
const content5 = document.getElementById('content5')

let chose = 1

const chageOption=  () => {
    chose == 1 ? (
        opcion1.classList.value = 'option option-active',
        content1.classList.value ='content content-active'
    )
    : ( 
        opcion1.classList.value = 'option',
        content1.classList.value ='content'
    )

    chose == 2 ? (
        opcion2.classList.value = 'option option-active',
        content2.classList.value ='content content-active'
    )
    : ( 
        opcion2.classList.value = 'option',
        content2.classList.value ='content'
    )

    chose == 3 ? (
        opcion3.classList.value = 'option option-active',
        content3.classList.value ='content content-active'
    )
    : ( 
        opcion3.classList.value = 'option',
        content3.classList.value ='content'
    )
    
    chose == 4 ? (
        opcion4.classList.value = 'option option-active',
        content4.classList.value ='content content-active'
    )
    : ( 
        opcion4.classList.value = 'option',
        content4.classList.value ='content'
    )

    chose == 5 ? (
        opcion5.classList.value = 'option option-active',
        content5.classList.value ='content content-active'
    )
    : ( 
        opcion5.classList.value = 'option',
        content5.classList.value ='content'
    )
}

opcion1.addEventListener('click', ()=>{
    chose = 1
    chageOption()

})

opcion2.addEventListener('click', ()=>{
    chose = 2
    chageOption()

})

opcion3.addEventListener('click', ()=>{
    chose = 3
    chageOption()

})

opcion4.addEventListener('click', ()=>{
    chose = 4
    chageOption()

})

opcion5.addEventListener('click', ()=>{
    chose = 5
    chageOption()

})