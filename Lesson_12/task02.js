'use strict';

const rectangle = {
  width: 5,
  height: 5,
  get p() {
    return `${(this.width + this.height) * 2} см`;
  },
  set p(val) {
    if (typeof val === Number) {
      this.p = val;
    }
  },
  get s() {
    return `${this.width * this.height} см`;
  },
  set s(val) {
    if (typeof val === Number) {
      this.s = val;
    }
  },
};
console.log(rectangle.p);
console.log(rectangle.s);
