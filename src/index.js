var express = require('express');
var app = express();
var multer = require('multer')
var upload = multer()


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
app.set('view engine', 'ejs');
app.use(express.static("public"));


var Game = require('./game');

const gridInit = require('./gridInit');

const aliveCellChar = '*';
const emptyCellChar = '.';

const seed = gridInit.withSeed(emptyCellChar,
    aliveCellChar,
    3,
    3,
    [
        { row: 0, column: 1 },
        { row: 1, column: 2 },
        { row: 2, column: 0 },
        { row: 2, column: 1 },
        { row: 2, column: 2 }
    ]
);

const game = new Game(aliveCellChar, emptyCellChar, 25, 25, seed);

game.update();

app.get('/', function (req, res) {
    res.render("index", {});
});

app.get('/next', function (req, res) {
    game.update();
    res.send(game.draw('next'));

});
app.get('/prev', function (req, res) {
    res.send(game.draw('prev'));

});

var type = upload.single('lif');

app.post('/fileupload', type, function (req, res) {

    console.log(req.file.buffer.toString());

    res.render("index", {});
});

