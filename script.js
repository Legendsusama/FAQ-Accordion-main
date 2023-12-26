

let accordionsItem = document.querySelectorAll('.accordion-item');
let accordionsContent = document.querySelectorAll('.accordion-content');
let accordionsButton = document.querySelectorAll('.accordion-title > img');

accordionsItem.forEach(item =>{

  let title = item.querySelector('.accordion-title');
  let button = item.querySelector('img');
  let content = item.querySelector('.accordion-content');

  button.addEventListener('click', ()=>{


    for(let i=0; i< accordionsItem.length; i++){

      if(accordionsItem[i] != item){

        accordionsContent[i].style.maxHeight = null;
        accordionsButton[i].src = 'assets/images/icon-plus.svg';

      }else {

        if(content.style.maxHeight){

          content.style.maxHeight = null;
          button.src = 'assets/images/icon-plus.svg'; 

        }else{

          content.style.maxHeight = content.scrollHeight + 'px';
          button.src = 'assets/images/icon-minus.svg';

        }

      }

    }    

  })

})