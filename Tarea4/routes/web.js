const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');

router.get('/', homepageController.index);
router.post('/tasks', tasksController.store);
router.post('/update/:id/done', tasksController.done);
router.delete('/update/:id/delete', tasksController.delete);
router.get('/tasks', tasksController.database)

module.exports = router;
