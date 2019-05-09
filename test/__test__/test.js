
import Validator from '../../src/js/validtorcreateclass.js';

test('validator', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const validator = new Validator(container);
  validator.validatorCreate();

  const valExp = document.createElement('div');
  const cardsRow = document.createElement('div');
  cardsRow.classList.add('cardsRow');
  valExp.appendChild(cardsRow);
  for (let i = 7; i < 14; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card');
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', validator.cards[i]);
    card.appendChild(imgCard);
    cardsRow.appendChild(card);
  }

  const validateForm = document.createElement('form');
  const number = document.createElement('input');
  const button = document.createElement('button');
  valExp.appendChild(validateForm);
  validateForm.appendChild(number);
  validateForm.appendChild(button);
  button.innerHTML = 'Click to Validate';
  validateForm.classList.add('validateForm');
  number.classList.add('input');
  button.classList.add('button');
  expect(container.innerHTML).toEqual(valExp.innerHTML);
});


// import Validator from '../src/js/validtorcreateclass.js';
/*
        test('validator', () => {
          document.body.innerHTML = '<div id="container"></div>';
          const container = document.querySelector('#container');
          const  validator = new Validator(container);
          validator.validatorCreate();

          let valExp = document.createElement('div');
          let cardsRow = document.createElement('div');
          cardsRow.classList.add('cardsRow');
          valExp.appendChild(cardsRow);
          for(let i = 7; i < 14; i += 1){
            let card = document.createElement('div');
            card.classList.add('card');
            let imgCard = document.createElement('img');
            imgCard.setAttribute('src', validator.cards[i]);
            card.appendChild(imgCard);
            cardsRow.appendChild(card);
          }

        let validateForm = document.createElement('form');
        let number = document.createElement('input');
        let button = document.createElement('button');
        valExp.appendChild(validateForm);
        validateForm.appendChild(number);
        validateForm.appendChild(button);
        button.innerHTML = 'Click to Validate';
        validateForm.classList.add('validateForm');
        number.classList.add('input');
        button.classList.add('button');
          expect(container.innerHTML).toEqual(valExp.innerHTML);
          });

           */
