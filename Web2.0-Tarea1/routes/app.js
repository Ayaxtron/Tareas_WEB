// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../controllers/PagesControllers');

router.get('/homepage', PagesController.homepage)

router.get('/:id/edit', PagesController.edit)

router.post('/:id/edit', PagesController.editProduct)

router.get('/insert', PagesController.insertProduct)

router.post('/insert', PagesController.insert)

router.get('/:id/show', PagesController.delete)

router.post('/:id/show', PagesController.show)

router.get('/*', PagesController.homepage)

module.exports = router
