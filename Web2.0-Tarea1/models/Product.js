const knex = require('../database/connection')

exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

exports.all = () => {
  return knex('products')
}

exports.one = (id) => {
  return knex('products').where('id', id)
}

exports.editProduct = (id, name, description, price) => {
  return knex('products').where('id', id).update({
    name: name,
    description: description,
    price: price
  })
}

exports.insert = (name, description, price) => {
  return knex('products').insert({
    name:name,
    description:description,
    price:price
  })
}


exports.show = (id) => {
  return knex('products').where('id', id).del()
}
