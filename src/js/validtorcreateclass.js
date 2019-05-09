export default class Validator {
  constructor(div) {
    this.parent = div;
    this.validateForm = 0;
    this.number = 0;
    this.button = 0;
    this.cardsRow = 0;
    this.cards = [
      './img/visa.png', './img/mastercard.png', './img/americanexpress.png', './img/discover.png', './img/jcb.png', './img/dinersclub.png', './img/Mir.png',
      './img/visaBW.png', './img/mastercardBW.png', './img/americanexpressBW.png', './img/discoverBW.png', './img/jcbBW.png', './img/dinersclubBW.png', './img/MirBW.png',
    ];
  }

  cardImg() {
    this.cardsRow = document.createElement('div');
    this.cardsRow.classList.add('cardsRow');
    this.parent.appendChild(this.cardsRow);
    for (let i = this.cards.length / 2; i < this.cards.length; i += 1) {
      const card = document.createElement('div');
      card.classList.add('card');
      const imgCard = document.createElement('img');
      imgCard.setAttribute('src', this.cards[i]);
      card.appendChild(imgCard);
      this.cardsRow.appendChild(card);
    }
  }

  validatorCreate() {
    this.cardImg();
    this.validateForm = document.createElement('form');
    this.number = document.createElement('input');
    this.button = document.createElement('button');
    this.parent.appendChild(this.validateForm);
    this.validateForm.appendChild(this.number);
    this.validateForm.appendChild(this.button);
    this.button.innerHTML = 'Click to Validate';
    this.validateForm.classList.add('validateForm');
    this.number.classList.add('input');
    this.button.classList.add('button');
  }

  cardSet(num) {
    this.cardsRow.childNodes[num].removeChild(this.cardsRow.childNodes[num].childNodes[0]);
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', this.cards[num]);
    this.cardsRow.childNodes[num].appendChild(imgCard);
  }

  cardReset(num) {
    this.cardsRow.childNodes[num].removeChild(this.cardsRow.childNodes[num].childNodes[0]);
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', this.cards[num + this.cards.length / 2]);
    this.cardsRow.childNodes[num].appendChild(imgCard);
  }
}