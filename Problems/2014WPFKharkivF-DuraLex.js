registerProblem('2014 Winter Programming School, Kharkiv, day 1 (E. Kapun). Junior league. Problem F - Dura Lex',
    [{
        input: '3\n\
                1 10\n\
                10 10\n\
                5 90',
        output: '3 1 2'
    }, {
        input: '4\n\
                1 10\n\
                1 10\n\
                10 10\n\
                5 90',
        output: '3 1 2'
    }, {
        input: '3\n\
                2 20\n\
                3 30\n\
                4 40',
        output: '1 2 3'
    }, {
        input: '13\n\
                0 10\n\
                0 20\n\
                0 15\n\
                1 0\n\
                3 0\n\
                2 0\n\
                1 1\n\
                1 3\n\
                1 2\n\
                99 3\n\
                99 2\n\
                99 1\n\
                5 90',
        output: '3 1 2'
    }],

    function () {
        var N = +readline();
        var array = [];
        for (var i = 1; i <= N; i++) {
            var tokens = readline().split(' ');
            var d = +tokens[0];
            var p = +tokens[1] / 100;
            array.push({
                index: i,
                ratio: (p ? (d / p) : 100000000),
                d: d,
                p: p * 100,
                toString: function () {
                    return this.index + ': ' + this.d + '/' + this.p + '=' + this.ratio;
                }
            });
        }

        array.sort(function (o1, o2) {
            var v = o1.ratio - o2.ratio;
            if (v < -0.000000001) {
                return -1;
            }
            else if (v > 0.000000001) {
                return 1;
            }
            return o1.index - o2.index;
        })

        print(array.map(function (ele) { return ele.toString(); }).join(' '));

    }

    /*
        Problem G: http://codeforces.com/gym/100370
    */
);
