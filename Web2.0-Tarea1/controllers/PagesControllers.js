let ProductModel = require('../models/Product')

exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      
      let products = data;
      
      res.render('pages/homepage', { products: products });
    });
}

exports.about = (req, res) => {
  res.send('About us');
}

exports.edit = (req, res) => {
  ProductModel.one(req.params.id).then((data) => {
    let product = data
    console.log(product)
    res.render('pages/edit', { product: product })
  })
}

exports.editProduct = (req, res) => {
  ProductModel.editProduct(req.body.id, req.body.name, req.body.description, req.body.price).then((data)=> {
    ProductModel.all()
    .then((data) => {
      let products = data
      res.render('pages/homepage', { products: products })
    })
  })
}

exports.insert = (req, res) => {
 ProductModel.insert(
   req.body.name,
   req.body.description,
   req.body.price).then((data) => {
     ProductModel.all()
     .then((data) => {
       let products = data
       res.render('pages/homepage', { products: products })
     })
   })
}

exports.insertProduct = (req, res) => {
 res.render('pages/create')
}

exports.delete = (req, res) => {
  ProductModel.one(req.params.id).then((data) => {
    let product = data
    console.log(product)
    res.render('pages/show', { product: product })
  })
}

exports.show = (req, res) => {
  console.log(req.body.id);
  ProductModel.show(req.params.id).then((data) => {
    ProductModel.all()
    .then((data) => {
      let products = data
      res.render('pages/homepage', { products: products })
    })
  })
}

