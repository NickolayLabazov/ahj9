export default class ValidLogic {
  constructor(validator) {
    this.validator = validator;
    this.set = 0;
  }

  paySyst() {
    this.validator.validatorCreate();

    this.validator.number.addEventListener('input', () => {
      if (this.validator.number.value === '2') {
        this.validator.cardReset(this.set);
        this.validator.cardSet(6);
        this.set = 6;
      } else if ((this.validator.number.value[0] === '3') && ((this.validator.number.value[1] === '4') || (this.validator.number.value[1] === '7'))) {
        this.validator.cardReset(this.set);
        this.validator.cardSet(2);
        this.set = 2;
      } else if ((this.validator.number.value[0] === '3') && ((this.validator.number.value[1] === '1') || (this.validator.number.value[1] === '5'))) {
        this.validator.cardReset(this.set);
        this.validator.cardSet(4);
        this.set = 4;
      } else if ((this.validator.number.value[0] === '3') && ((this.validator.number.value[1] === '6') || (this.validator.number.value[1] === '8'))) {
        this.validator.cardReset(this.set);
        this.validator.cardSet(5);
        this.set = 5;
      } else if (this.validator.number.value[0] === '4') {
        this.validator.cardReset(this.set);
        this.validator.cardSet(0);
        this.set = 0;
      } else if (this.validator.number.value[0] === '5') {
        this.validator.cardReset(this.set);
        this.validator.cardSet(1);
        this.set = 1;
      } else if ((this.validator.number.value[0] === '6') && (this.validator.number.value[1] === '0')) {
        this.validator.cardReset(this.set);
        this.validator.cardSet(5);
        this.set = 5;
      } else {
        this.validator.cardReset(this.set);
      }
    });

    this.validator.button.addEventListener('click', () => {
      event.preventDefault();
      if (this.validator.number.value !== '') {
        const n = this.luhn_check(this.validator.number.value);
        this.validator.number.value = '';
        this.validator.cardReset(this.set);
        console.log(n);
        if (n) {
          this.validator.number.setAttribute('data-valid', 'valid');
        } else {
          this.validator.number.setAttribute('data-valid', 'invalid');
        }
      }
    });
  }

  luhn_check(value) {
    return value.split('')
      .reverse()
      .map(x => parseInt(x))
      .map((x, idx) => (idx % 2 ? x * 2 : x))
      .map(x => (x > 9 ? (x % 10) + 1 : x))
      .reduce((accum, x) => accum += x) % 10 === 0;
  }
}
