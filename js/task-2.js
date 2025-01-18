'use strict';

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const list = document.querySelector('.gallery');
const markup = images
  .map((image) => `<li class="list-item">
    <img class="list-item-img" src="${image.url}" alt="${image.alt}" width="360"></>
  </li>`)
  .join('');

list.insertAdjacentHTML("beforeend", markup);
console.log(list);

list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.flexWrap = 'wrap';
list.style.justifyContent = 'center';
list.style.gap = '48px 24px';
list.style.padding = '0';
list.style.margin = '0';

const listItem = document.querySelectorAll('.list-item');
listItem.style.flex = '0 0 calc(33.33% - 24px);';
listItem.style.boxSizing = 'border-box';

const listItemImg = document.querySelectorAll('.list-item-img');
listItemImg.style.display = 'block';
listItemImg.style.width = '100%';
listItemImg.style.height = 'auto';







    
