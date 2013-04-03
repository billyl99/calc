$(document).ready(function() {
    $.getScript("parser.js");

    $('#addEquation').click(function(){
        var equation = $('input[name="equation"]').val();
        // validate equation with parse
        // http://silentmatt.com/javascript-expression-evaluator/
        var expression = Parser.parse(equation);
        $('#equationList').append('<li>' + expression + '</li>');
    });

});
