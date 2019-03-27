var assert = require('assert');

var fizzbuzz = require('../src/index.js');

describe('FizzBuzz', function () {
    it('return true quando multiplo de 3', function () {
        var output = fizzbuzz.multiploDe3(15);
        assert.strictEqual(output, true);
    });

    it('return true quando multiplo de 5', function () {
        var output = fizzbuzz.multiploDe5(15);
        assert.strictEqual(output, true);
    });

    it('return true quando multiplo de 3 e 5', function () {
        var output = fizzbuzz.multiploDe3e5(15);
        assert.strictEqual(output, true);
    });
    it('return false quando nao multiplo de 3', function () {
        var output = fizzbuzz.multiploDe3(10);
        assert.strictEqual(output, false);
    });
    it('return false quando nao multiplo de 5', function () {
        var output = fizzbuzz.multiploDe5(3);
        assert.strictEqual(output, false);
    });
    it('return false quando nao multiplo de 3 e 5', function () {
        var output = fizzbuzz.multiploDe3e5(9);
        assert.strictEqual(output, false);
    });
    it('return false quando nao multiplo de 3 e 5', function () {
        var output = fizzbuzz.multiploDe3e5(10);
        assert.strictEqual(output, false);
    });
    it('quando 3 return fizz', function () {
        var output = fizzbuzz.print(3);
        assert.strictEqual(output, 'fizz');
    });
    it('quando 5 return buzz', function () {
        var output = fizzbuzz.print(5);
        assert.strictEqual(output, 'buzz');
    });

    it('quando 3 e 5 return fizzbuzz', function () {
        var output = fizzbuzz.print(15);
        assert.strictEqual(output, 'fizzbuzz');
    });

    it('quando nem 3 nem 5 return número', function () {
        var output = fizzbuzz.print(17);
        assert.strictEqual(output, 17);
    });
    it('quando 3 e não 5 return fizz', function () {
        var output = fizzbuzz.print(99);
        assert.strictEqual(output, 'fizz');
    });
    it('quando não 3 5 return buzz', function () {
        var output = fizzbuzz.print(55);
        assert.strictEqual(output, "buzz");
    });
    it('return fizz', function () {
        var output = fizzbuzz.fizz(55);
        assert.strictEqual(output, "fizz");
    });

    it('return buzz', function () {
        var output = fizzbuzz.buzz(55);
        assert.strictEqual(output, "buzz");
    });

    it('return fizzbuzz', function () {
        var output = fizzbuzz.fizzbuzz(75);
        assert.strictEqual(output, "fizzbuzz");
    });

    it('return numero', function () {
        var output = fizzbuzz.numero(75);
        assert.strictEqual(output, 75);
    });

     

});