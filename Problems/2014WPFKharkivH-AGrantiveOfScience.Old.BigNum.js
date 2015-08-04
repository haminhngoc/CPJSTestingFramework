
function genTest2014WPFKharkivH_3() {
    var N = 5;
    var M = 5;
    var s = N + ' ' + M + '\n';
    for (i = 0; i < N; i++) {
        var Ni = 5+ randBetween(0, 5);
        var linei = [Ni];
        for (var j = 0; j < Ni; j++) {
            linei.push(randBetween(0, 1000));
        }
        s += linei.join(' ') + '\n';
    }
    return s;
}

registerProblem('2014 Winter Programming School, Kharkiv, day 1 (E. Kapun). Junior league. Problem H - A Granite Of Science',
    [{
        input: '3 3\n\
                1 3\n\
                2 1 1\n\
                3 0 0 0',
        output: '14.3333333'
    }, {
        input: '2 1\n\
                1 1\n\
                1 2',
        output: '9.0'
    }, {
        input: genTest2014WPFKharkivH_3(),
        output: ''
    }],

    function () {

        BigNum = function (number) {

            //if (number) {
            //    this.power = Math.floor(Math.log(number) / Math.log(10));
            //    this.value = number / Math.pow(10, this.power);
            //}
            //else {
            //    this.value = 0;
            //    this.power = 0;
            //}

            this.value = number;
            this.power = 0;

            this.toString = function () {
                return this.value + 'E' + this.power;
            }

            this.add = function (num) {
                if (typeof (num) == 'number') {
                    this.add(new BigNum(num));
                }
                else {
                    if (this.power > num.power) {
                        this.value += num.value / Math.pow(10, this.power - num.power);
                    }
                    else {
                        this.value = num.value + this.value / Math.pow(10, num.power - this.power);
                        this.power = num.power;
                    }
                }
                return this;
            }

            this.multiply = function (num) {
                if (typeof (num) == 'number') {
                    this.multiply(new BigNum(num));
                }
                else {
                    this.value *= num.value;
                    if (this.value) {
                        var k = 0;
                        if (this.value > 1000000) {
                            k = Math.floor(Math.log(this.value) / Math.log(10));
                            this.value = this.value / Math.pow(10, k);
                        }
                        this.power += num.power + k;
                    }
                    else {
                        this.value = 0;
                        this.power = 0;
                    }
                }
                return this;
            }

            this.divide = function (num) {
                if (typeof (num) == 'number') {
                    this.divide(new BigNum(num));
                }
                else {
                    this.value /= num.value;
                    if (this.value) {
                        var k = 0;
                        if (this.value > 1000000 || this.value < 0.000001) {
                            k = Math.floor(Math.log(this.value) / Math.log(10));
                            this.value = this.value / Math.pow(10, k);
                        }
                        this.power -= num.power;
                        this.power += k;
                    }
                    else {
                        this.value = 0;
                        this.power = 0;
                    }
                }
                return this;
            }

            this.clone = function () {
                var newValue = new BigNum(0);
                newValue.value = this.value;
                newValue.power = this.power;
                return newValue;
            }
        }

        var tokens = readline().split(' ');
        var N = +tokens[0];
        var M = +tokens[1];

        var sumSquares = [];
        var sums = [];
        var MAX = 1002;
        for (var i = 0; i < MAX; i++) {
            sumSquares[i] = new BigNum(0);
            sums[i] = new BigNum(0);
        }

        var count = new BigNum(1);
        for (var i = 0; i < N; i++) {
            var tokens = readline().split(' ');
            var Ni = +tokens[0];

            var c = 0;
            var square = 0;
            var sum = 0;
            for (var j = 0; j < Ni + M; j++) {
                if (j < Ni) {
                    var v = +tokens[j + 1];
                    c++;
                    sum += v;
                    square += v * v;
                }
                if (j >= M) {
                    v = +tokens[j - M + 1];
                    c--;
                    sum -= v;
                    square -= v * v;
                }

                var newQuare = new BigNum(square);
                newQuare.multiply(count).add(sums[j].clone().multiply(2 * sum));
                sumSquares[j].multiply(M).add(newQuare);

                var newSum = new BigNum(sum);
                newSum.multiply(count);
                sums[j].multiply(M).add(newSum);
            }
            count.multiply(M);
            //print(sums);
            //print(sumSquares);
        }

        var result = new BigNum(0);
        for (var i = 0; i < MAX; i++) {
            result.add(sumSquares[i]);
        }
        result.divide(count);

        print(result.value * Math.pow(10, result.power));


    }

    /*
        Problem G: http://codeforces.com/gym/100370

        //var number = new BigNum(123);
        //print(number);
        //print(number.add(1234));
        //print(number.multiply(1234));
        //print(number.divide(1234));
        //print(number.clone().multiply(1234));
        //print(number);
        //return;
    */
);
