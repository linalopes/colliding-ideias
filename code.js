var grammar, lines;

var result;


$(document).ready(function () {

    lines = [ $('#line1'), $('#line2'), $('#line3'), $('#line4') ];

    grammar = RiGrammar();
    grammar.loadFrom('data/base.yaml', function() {

        lines[0].text("clique");
        lines[1].text("para");
        lines[2].text("gerar");
        lines[3].text("poesia");

        $('#hdiv').click(createHaiku);
    });
});



function createHaiku() {

    result = grammar.expand();
    var haiku = result.split("%");
    for (var i = 0; i < lines.length; i++) {
        lines[i].text(haiku[i]);
    }
}

function keyPressed() {
    if (key == 's') {
        // creates a file called 'newFile.txt'
        let writer = createWriter('newFile.txt');
        // write 'Hello world!'' to the file
        writer.write(result);
        // close the PrintWriter and save the file
        writer.close();
    }
}
