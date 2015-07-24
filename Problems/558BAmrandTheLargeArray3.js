registerProblem('558B Amr and The Large Array - Dictionary',
    [{
        input: '5\n\
                1 1 2 2 1',
        output: '1 5'
    },
    {
        input: '5\n\
                1 2 2 3 1',
        output: '2 3'
    },
    {
        input: '6\n\
                1 2 2 1 1 2',
        output: '1 5'
    }
    ],
    function () {

        Node = function (value, position) {
            this.value = value;
            this.minPosition = 100001;
            this.maxPosition = -100001;

            this.setPosition = function (position) {
                this.minPosition = Math.min(this.minPosition, position);
                this.maxPosition = Math.max(this.maxPosition, position);
            }

            this.getLength = function () {
                return this.maxPosition - this.minPosition;
            }

            this.toString = function () {
                return '(' + this.position + ', ' + this.value + ')';
            };

            this.setPosition(position);
        };

        n = +readline();
        numbers = readline().split(' ');
        nodes = {};
        for (i = 0; i < n; i++) {
            var number = +numbers[i];
            nodes[numbers[i]] = new Node(+numbers[i], i);
        }

        var maxValueNode = null;

        for (key in nodes) {
            var node = nodes[key];
            if (maxValueNode === null || maxValueNode.value > node.value ||
                (maxValueNode.value == node.value && maxValueNode.getLength() > node.getLength())) {
                maxValueNode = node;
            }
        }

        print((maxValueNode.minPosition + 1) + ' ' + (maxValueNode.maxPosition + 1));


    }
);
