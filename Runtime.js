
var problems = {};
var currentProb = null;
var inputs = [];
var currentInput = -1;
var expectedResult = '';
var currentResult = '';

function readline() {
    return inputs[currentInput++];
}

function print(s) {
    currentResult += s + '\n';
}

function addRuntimeRow() {
    var no = $('#Runtime tbody tr').length + 1;
    return $('<tr><td>' + no + '</td><td></td><td></td></tr>').appendTo('#Runtime tbody');
}

function registerProblem(probId, testcases, func) {
    problems[probId] = { testcases: testcases, func: func };
    $('#SelectProblem').append('<option value="' + probId + '">' + probId + '</option>');
}

$('#SelectProblem').change(function () {
    var value = $(this).val();

    var currentProb = problems[value.trim()];
    $('#Runtime tbody').html('');

    currentProb.testcases.forEach(function (test) {
        inputs = [];
        currentInput = 0;

        var jqRow = addRuntimeRow();
        jqRow.find('td:eq(1)').append('<pre>' + test.input.replace(/\n\s*/g, '\n') + '</pre>');

        expectedResult = test.output;
        currentResult = '';

        test.input.split('\n').forEach(function (line) {
            line = line.trim();
            if (line) {
                inputs.push(line);
            }
        });

        var startTime = (new Date()).getTime();

        currentProb.func();

        var endTime = (new Date()).getTime();

        jqRow.find('td:eq(2)').append('<pre>Result:\n' + currentResult + 'In ' + (endTime - startTime) + ' milliseconds \n--------------------------------\nExpected:\n' + expectedResult + '</pre>');

    });
});