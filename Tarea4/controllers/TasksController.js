const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    Task.find(id).then((task) => res.json(task));
  } else {
    res.redirect('/');
  }
});
}

exports.done = (req, res) => {
  let id = req.params.id;
  Task.find(id).then((task) => {
    return Task.updateStatus(task);
  })
  .then((result) => {
    res.redirect('/');
  });
}

//

exports.delete = (req, res) => {
  let eliminar = req.params.id;
  Task.delete(eliminar).then(() => {
    if(req.xhr || req.headers.accept.indexOf("json") > -1){
      res.json({id : eliminar});
    } else {
      res.redirect('/');
    }
  });
}
