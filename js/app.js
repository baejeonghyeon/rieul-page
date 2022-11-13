
// 메뉴 모달
const menu_button = document.querySelector('.menu-button');
const modal_menu = document.querySelector('.menu-modals');

let isMenuOpened = false;

menu_button.addEventListener('click', () => {
  if( !isMenuOpened ){
    document.body.classList.add('stopScrolling');
    modal_menu.classList.add('open');
    menu_button.classList.add('x-button');
    header.classList.remove('scrolled');
    isMenuOpened = true;
  } else {
    document.body.classList.remove('stopScrolling');
    modal_menu.classList.remove('open');
    menu_button.classList.remove('x-button');
    if (window.pageYOffset > 0){
      header.classList.add('scrolled');
    };
    
    isMenuOpened = false;
  }
  
})








// 스크롤에 따른 헤더창 변경
const header = document.querySelector('header');

const stickyNavbar = () => {
  header.classList.toggle('scrolled', window.pageYOffset > 0);
  // window.pageYOffset이 0보다 크면 header에 'scrolled'라는 클래스 부착.
};

stickyNavbar();
// we also need to call the function once the page is reloaded
// 중간에서 새로고침하면 처음에 적용이 안 되는 문제를 해결할 수 있음.

window.addEventListener('scroll', stickyNavbar);













// IntersectionObserver

let headlineObserver = new IntersectionObserver((e) => {
  e.forEach((head) => {
    if(head.isIntersecting){
      head.target.style.opacity = 1;
    } else {
      head.target.style.opacity = 0;
    }
    
  })
});

let headline = document.querySelectorAll('.headline');
headlineObserver.observe(headline[0]);
headlineObserver.observe(headline[1]);












// 내비게이션 활성화
const links = document.querySelectorAll('.nav-link');


activeLink();

window.addEventListener('scroll', () => {
  activeLink();
})

function activeLink(){
  let containers = document.querySelectorAll('.container[id]');
  let passedSections = Array.from(containers).map((sct, i) => {
    return {
      y: sct.getBoundingClientRect().top,
      id: i
    }
  }).filter((sct) => sct.y <= 0);

  
  console.log(passedSections);
  let currSectionId = passedSections.at(-1).id;

  links.forEach((link) => (link.classList.remove('current-location')));
  links[currSectionId].classList.add('current-location');
};











// arrow container

function nextPage(){
  let arrowA = document.querySelector('.arrow-a');
  
  let address = new Array();
  address.push(arrowA.href);
  
  let currentNumber = parseInt(address[0].slice(-1));
  let originAddress = address[0].slice(0, -1);
  let newAddress = '';

  if (currentNumber === 7){
    newAddress = originAddress + 1;
  } else {
    newAddress = originAddress + (currentNumber + 1);
  }

  arrowA.href = newAddress;
};

