Array.prototype.square = function () {
    return this.map(item => Math.pow(item, 2));
}

Array.prototype.cube = function () {
    return this.map(item => Math.pow(item, 3));
}

Array.prototype.average = function () {
    // return this.reduce((sum, current) => sum + current) / this.length;
    return this.sum() / this.length;
}

Array.prototype.sum = function () {
    if (this.length) {
        return this.reduce((sum, current) => sum + current);
    }
}

Array.prototype.even = function () {
    return this.filter(item => item % 2 == 0 ? true : false);
}

Array.prototype.odd = function () {
    return this.filter(item => item % 2 != 0 ? true : false);
}


let ms = [];

console.log(ms.square());
console.log(ms.cube());
console.log(ms.average());
console.log(ms.sum());
console.log(ms.even());
console.log(ms.odd());