const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItems = document.querySelector('.gallery');

const galleryContent = images.map((item) => {
  const galleryImg = `<li><img src='${item.url}' alt='${item.alt}' width = 400 height = 250 /></li>`;
  return galleryImg;
  console.log(galleryImg);
});

galleryItems.insertAdjacentHTML('afterbegin', galleryContent.join(''));

galleryItems.style.display = 'flex';
galleryItems.style.listStyle = 'none';
galleryItems.style.gap = '100px';

console.log(galleryItems);