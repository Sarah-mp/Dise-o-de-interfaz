const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const option5 = document.getElementById('option5')
const option6 = document.getElementById('option6')
const option7 = document.getElementById('option7')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const content3 = document.getElementById('content3')
const content4 = document.getElementById('content4')
const content5 = document.getElementById('content5')
const content6 = document.getElementById('content6')
const content7 = document.getElementById('content7')

let chose = 1

const chageOption=  () => {
    chose == 1 ? (
        option1.classList.value = 'option option-active',
        content1.classList.value ='content content-active'
    )
    : ( 
        option1.classList.value = 'option',
        content1.classList.value ='content'
    )

    chose == 2 ? (
        option2.classList.value = 'option option-active',
        content2.classList.value ='content content-active'
    )
    : ( 
        option2.classList.value = 'option',
        content2.classList.value ='content'
    )

    chose == 3 ? (
        option3.classList.value = 'option option-active',
        content3.classList.value ='content content-active'
    )
    : ( 
        option3.classList.value = 'option',
        content3.classList.value ='content'
    )
    
    chose == 4 ? (
        option4.classList.value = 'option option-active',
        content4.classList.value ='content content-active'
    )
    : ( 
        option4.classList.value = 'option',
        content4.classList.value ='content'
    )

    chose == 5 ? (
        option5.classList.value = 'option option-active',
        content5.classList.value ='content content-active'
    )
    : ( 
        option5.classList.value = 'option',
        content5.classList.value ='content'
    )
    chose == 6 ? (
        option6.classList.value = 'option option-active',
        content6.classList.value ='content content-active'
    )
    : ( 
        option6.classList.value = 'option',
        content6.classList.value ='content'
    )
    chose == 7 ? (
        option7.classList.value = 'option option-active',
        content7.classList.value ='content content-active'
    )
    : ( 
        option7.classList.value = 'option',
        content7.classList.value ='content'
    )
}

option1.addEventListener('click', ()=>{
    chose = 1
    chageOption()

})

option2.addEventListener('click', ()=>{
    chose = 2
    chageOption()

})

option3.addEventListener('click', ()=>{
    chose = 3
    chageOption()

})

option4.addEventListener('click', ()=>{
    chose = 4
    chageOption()

})

option5.addEventListener('click', ()=>{
    chose = 5
    chageOption()

})

option6.addEventListener('click', ()=>{
    chose = 6
    chageOption()

})

option7.addEventListener('click', ()=>{
    chose = 7
    chageOption()

})

document.addEventListener('DOMContentLoaded', function() {
    var accToggles = document.querySelectorAll('.accordion-toggle');
  
    accToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        var accContent = this.nextElementSibling;
  
        // Cierra otros elementos del acordeón
        var allContents = document.querySelectorAll('.accordion-content');
        allContents.forEach(function(content) {
          if (content !== accContent) {
            content.style.display = 'none';
            content.previousElementSibling.classList.remove('active');
          }
        });
  
        // Muestra u oculta este elemento del acordeón
        if (accContent.style.display === 'block') {
          accContent.style.display = 'none';
          this.classList.remove('active');
        } else {
          accContent.style.display = 'block';
          this.classList.add('active');
        }
      });
    });
  });
  