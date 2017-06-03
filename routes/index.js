var express = require('express');
var router = express.Router();


var quizController = require('../controllers/quiz_controller');

// Pagina de inicio
router.get('/', function(req, res, next) {
  res.render('index');
});

// Pagina de ayuda
router.get('/help', function(req, res, next) {
    res.render('help');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    res.render('author');
});


// Autoload de rutas que usen :quizId
router.param('quizId', quizController.load);


// Definición de rutas de /quizzes
router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',                    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);

router.get('/quizzes/:quizId(\\d+)/play',  quizController.play);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);

router.get('/quizzes/randomplay', quizController.randomPlay);
router.get('/quizzes/randomcheck/:quizId(\\d+)', quizController.randomCheck)


module.exports = router;
