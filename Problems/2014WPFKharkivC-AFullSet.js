registerProblem('2014 Winter Programming School, Kharkiv, day 1 (E. Kapun). Junior league. Problem C - A Full Set',
    [{
        input: '5 1',
        output: '11.4166667'
    }, {
        input: '5 5',
        output: '1.0'
    }, {
        input: '1000 1000',
        output: '1.0'
    }],

    function () {
        var tokens = readline().split(' ');
        var N = +tokens[0];
        var K = +tokens[1];

        var log_xCy = [];
        for (var i = 0; i <= N; i++) {
            var xCy = [0];
            log_xCy.push(xCy);
            var val = 0;
            for (var j = 1; j <= i; j++) {
                val += Math.log(i - j + 1) - Math.log(j);
                xCy.push(val);
            }
        }
        log_xCy[0].push(0);

        var status = [];
        for (var i = 0; i < K; i++) {
            status[i] = 0;
        }
        status[K] = 1;

        for (var i = K + 1; i <= N; i++) {
            var vi = 0;
            for (var j = 1; j <= Math.min(K, N - i) ; j++) {
                vi += Math.exp(log_xCy[i - j][K - j] + log_xCy[N - i + j][j] - log_xCy[N][K])*(status[i - j] + 1);
                //vi += Math.exp(log_xCy[i][j] + log_xCy[N - i][K - j] - log_xCy[N][K]);
            }
            status[i] = vi;
        }

        print(status[N].toFixed(9));
    }

    /*
        Problem C: http://codeforces.com/gym/100370
    */
);
