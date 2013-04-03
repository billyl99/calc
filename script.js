$(document).ready(function() {
    $.getScript("parser.js");
    
    var currentEquation;
	var variables;

    $('#addEquation').click(function(){
        var equation = $('input[name="equation"]').val();
        // validate equation with equation parse
        // http://silentmatt.com/javascript-expression-evaluator/
        var expression = Parser.parse(equation);
        $('#equationList').append('<li>' + expression + '</li><br />');
    });

    $(document).on('click', 'li', function(){
		$('#variableList').empty();
	
        $('li').removeClass('highlighted');
        $(this).toggleClass('highlighted');
        currentEquation = Parser.parse($(this).text());
		variables = currentEquation.variables();
		
		for (var i = 0; i < variables.length; i++) {
			$('#variableList').append('<input type="text" name=' + variables[i] + ' value="0""> <label>' + variables[i] + '</label> <br />');
		}
    });
	
	$(document).on('keyup', '#variableList input', function(){
		var result;
		var variablesTable = {};
		$('#variableList').children('input').each(function(){
			variablesTable[$(this).attr("name")] = $(this).val();
		});
		$('#answerbox').text(currentEquation.evaluate(variablesTable));
	});
});
