registerProblem('Review JavaScript',
    [{
        input: '',
        output: ''
    }, {
        input: '',
        output: ''
    }],
    function () {

        // Thinking like Java/C#/C++     Plus     Google     Plus     Keyword: JavaScript/JScript

        // IDE + Debug: Visual Studio + Chrome/IE/FF - Developer Tools - F12 - Console

        // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript

        // Tutorial: https://www.codecademy.com/tracks/javascript

        //Variable: Replace [int, String, Student...] by [var, '']

        // Number
        var i = 3;
        m = 5;
        n = i + m;
        f = 9.0;
        f = i / 2;
        T = 0x0040;

        // String
        s1 = "String Value";
        var s2 = 'String Value';

        // Object and JSON
        var o1 = new Object();
        o2 = Object();
        o3 = {};
        o4 = { name: 'Ngoc', role: 'Lecture' };
        o5 = { 'name': 'Thinh', 'role': 'Student' };

        // Array
        array = new Array();
        var a2 = Array();
        a3 = [];
        for (i = 0; i < 1000; i++) {
            array[i] = i;
        }
        for (i = 0; i < 1000; i++) {
            a3.push();
        }

        // Date
        var date = new Date();

        // Funtion
        function f1(p1, p2) {
            return p1 + p2;
        }

        var f2 = function () {
            console.log(f1(2,3));
        }

        f3 = f2;


        // Operations
        n = i + m;
        s2 = s1 + n;
        s3 = n + m + s1;
        s3 += o1;

        // Control Statement: if for while do switch case

        // Regular Expression

        // Object Oriented Programming

        // JQuery

        // Bootstrap
    }
);
