function burgerMenu(selector) {
  let menu = $(selector)
  let button = menu.find('.burger-menu__button')
  let links = menu.find('.burger-menu_link')
  let overlay = menu.find('.burger-menu_overlay')

  button.on('click', (e) => {
    e.preventDefault()
    toggleMenu()
  })

  links.on('click', () => toggleMenu())
  overlay.on('click', () => toggleMenu())

  function toggleMenu() {
    menu.toggleClass('burger-menu_active')
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overflow', 'hidden')
    } else {
      $('body').css('overflow', 'visible')
    }
  }
}
burgerMenu('.burger-menu')

const accordion = document.getElementsByClassName('contentBx')

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// let A = document.querySelector('.item1')
// let B = document.querySelector('.item2')
// let btn1 = document.querySelector('.button')
// let rst = document.querySelector('.output')
// let name_string = "Никифоров "
// btn1.onclick = function () {
//   console.log(A.value);
//   console.log(B.value);
//   // let c = parseInt(A.value) + parseInt(B.value)
//   // let c = A.value + B.value;
//   let c = [A.value, B.value].join(' ')
//   const result = name_string + c.split('').reverse().join('');
//   A.value = ''
//   B.value = ''
//   console.log(result)
//   console.log(result)
//   rst.innerHTML = result;
// }



let input_1 = document.querySelector('.item1');
let button = document.querySelector('button');
let output = document.querySelector('.output');
button.onclick = function () {
  console.log(input_1.value);

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
  }

  $('.item1').on('change', function () {
    val = declOfNum($(this).val(), ['год', 'года', 'лет']);
    output.innerHTML = $('#num-word').text(val);
  });

 
}