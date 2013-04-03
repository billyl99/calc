$(document).ready(function() {
    $.getScript("parser.js");
    
    var currentEquation;

    $('#addEquation').click(function(){
        var equation = $('input[name="equation"]').val();
        // validate equation with parse
        // http://silentmatt.com/javascript-expression-evaluator/
        var expression = Parser.parse(equation);
        $('#equationList').append('<li>' + expression + '</li><br />');
    });

    $(document).on('click', 'li', function(){
        $('li').removeClass('highlighted');
        $(this).toggleClass('highlighted');
        currentEquation = Parser.parse($(this).text());
    });
    
    function calculate() {
        console.log(currentEquation);
    };
});
