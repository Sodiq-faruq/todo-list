// let input = document.querySelector('.input');
// let btn = document.querySelector('.submit');
// let text = document.querySelector('.h1');
// let output = document.querySelector('.output')

// let count = 1;

// btn.addEventListener('click', function(){
//     let news = document.createElement('li');
//     let newss = document.createElement('div')
//     newss.className = 'nah';
//     output.appendChild(newss)
//     news.textContent = input.value;
//     console.log(news.textContent)
    
//     newss.textContent = news.textContent;
    

//     // count++

// })



let submitBtn = document.querySelector('.submit');
let input = document.querySelector('.input');
let container = document.querySelector('.output');


submitBtn.addEventListener('click',()=>{
    let list = document.createElement('div');
    list.className = "list";
    
    let text = document.createElement('h2');
    text.textContent = input.value;
    text.className = 'text'
    list.appendChild(text);

    let icon = document.createElement('i');
    icon.className = 'icon'
    icon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    list.appendChild(icon)
    icon.style.cursor = 'pointer';
    
    
    container.appendChild(list)

    
    input.value = '';
    icon.addEventListener('click',() =>{
        list.remove()
    })
})