//sidbar
const menuItens = document.querySelectorAll('.menu-item');
/*********** sidebar ************** */
menuItens.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    if (item.id != 'notifications') {
      document.querySelector('.notification-popup').style.display = 'none';
    } else {
      document.querySelector('.notification-popup').style.display = 'block';
      document.querySelector(
        '#notifications .notification-count',
      ).style.display = 'none';
    }
  });
});

//message
const messageNotification = document.getElementById('messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#messages-search');

messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display =
    'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});

//chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach((user) => {
    let name = user.querySelectorAll('h5')[0].textContent.toLowerCase();

    if (name.indexOf(val) != -1) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }
  });
};

messageSearch.addEventListener('keyup', searchMessage);

// //themer
// const theme = document.querySelector('#theme');
// const themeModal = document.querySelector('.customize-theme');
// //opneModal
// const openThemeModal = () => {
//   themeModal.style.display = 'grid';
// };
// theme.addEventListener('click', openThemeModal);

// //closseModal
// const closeThemeModal = (e) => {
//   if (e.target.classList.contains('customize-theme')) {
//     themeModal.style.display = 'none';
//   }
// };
// themeModal.addEventListener('click', closeThemeModal);

// //Font Size
// const fontSize = document.querySelectorAll('.chosse-size span');

// //root:
// let root = document.querySelector(':root');

// //fontSize
// fontSize.forEach((size) => {
//   let fontSize;
//   size.addEventListener('click', () => {
//     if (size.classList.contains('font-size-1')) {
//       fontSize = '10px';
//       root.style.setProperty('--sticky-top-left', '5.4rem');
//       root.style.setProperty('--sticky-top-right', '5.4rem');
//     } else if (size.classList.contains('font-size-2')) {
//       fontSize = '13px';
//       root.style.setProperty('--sticky-top-left', '5.4rem');
//       root.style.setProperty('--sticky-top-right', '-7rem');
//     } else if (size.classList.contains('font-size-3')) {
//       fontSize = '16px';
//       root.style.setProperty('--sticky-top-left', '-2rem');
//       root.style.setProperty('--sticky-top-right', '-17rem');
//     } else if (size.classList.contains('font-size-4')) {
//       fontSize = '19px';
//       root.style.setProperty('--sticky-top-left', '-5rem');
//       root.style.setProperty('--sticky-top-right', '-25rem');
//     } else if (size.classList.contains('font-size-5')) {
//       fontSize = '22px';
//       root.style.setProperty('--sticky-top-left', '-12rem');
//       root.style.setProperty('--sticky-top-right', '-35rem');
//     }
//   });
//   // change font size of the root html elemet
//   document.querySelector('html').style.fontSize = fontSize;
// });

// /**********************************/

// const colorPalette = document.querySelectorAll('.choose-color span ')

// const changerActiveColors = () => {
//   changerActiveColors.forEach(colorPicker => {
//     colorPicker.classList.remove('ativo')
//   })
// }

// colorPalette.forEach(color => {
//   let primary;
//   color.addEventListener('click' , () => {
//   if(color.classList.contains('color-1')){
//     primaryHue = 252;
//   }else if (color.classList.contains('color-2')){
//       primaryHue = 52;
//   }else if (color.classList.contains('color-3')){
//     primaryHue = 352;
//   }else if (color.classList.contains('color-4')){
//   primaryHue = 152;
//   }else if (color.classList.contains('color-5')){
//     primaryHue = 202;
//   }
//   color.classList.add('ativo')
//   root.style.setProperty('--primary-color-hue', primaryHue)
//   })
// })

// /************** background-color ********************/

// const Bg1 = Document.querySelector('.bg-01')
// const Bg2 = Document.querySelector('.bg-02')
// const Bg3 = Document.querySelector('.bg-03')








// //the backgound
// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;


// const changeBG =  () => {
//   root.style.setProperty('--light-color-lightness', lightColorLightness)
//   root.style.setProperty('--white-color-lightness', whiteColorLightness)
//   root.style.setProperty('--dark-color-lightness'), darkColorLightness
// }
// Bg1.addEventListener('click', () => {
//   darkColorLightness = '95%'
//   whiteColorLightness = '20%'
//   lightColorLightness = '15%'

//   // add ativo class
// Bg1.classList.add('ativo')
// //remove ativo class from the others 
// Bg2.classList.remove('ativo')
// Bg3.classList.remove('ativo')
// changeBG();
// })

// /********************** */
// Bg2.addEventListener('click', () => {
//   darkColorLightness = '95%'
//   whiteColorLightness = '20%'
//   lightColorLightness = '15%'

//   // add ativo class
// Bg2.classList.add('ativo')
// //remove ativo class from the others 
// Bg1.classList.remove('ativo')
// Bg3.classList.remove('ativo')
// changeBG();
// })
// /********************** */
// Bg3.addEventListener('click', () => {
//   darkColorLightness = '95%'
//   whiteColorLightness = '10%'
//   lightColorLightness = '0%'

//   // add ativo class
// Bg3.classList.add('ativo')
// //remove ativo class from the others 
// Bg1.classList.remove('ativo')
// Bg2.classList.remove('ativo')
// changeBG();
// })
