const mongoose = require('mongoose');

//import do model Product
const Product = mongoose.model('Product'); 

module.exports = {
    async index(req, res){
        const products = await Product.find(); 
        return res.json(products); 
    }, 
    async create(req, res){
      const product = await Product.create(req.body);
      return res.json(product);
    }, 
    async getProd(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product)
    },
    async update(req, res){
        const product = await Product.findOneAndUpdate(req.params.id, req.body, {new:true });
        return res.json(product); 
    },

    async remove(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
}   