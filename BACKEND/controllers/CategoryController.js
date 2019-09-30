import models from "../models";

export default {
    //funciones de middleware
    add: async ( req, res, next) => {
        try {
            //reg de registro
            //se obtiene un objeto en elparametro req(mediante ajax) en el body, lo enviamos al metodo create para almacenar el objeto en la collecion categoria
            const reg = await models.Category.create(req.body);
            //devolver el resgistro como json en category
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'An error ocurred at adding a category'
            });
            //mostrar el error en el middlware morgan
            next(e);
        }
    },
    query: async (req,res,next) => {
        try { 
            const reg = await models.Category.findOne({_id:req.query._id});
            if(!reg){
                res.status(404).send({
                    message:'Register does not exist '
                });
            }else {
                res.status(200).json(reg);
            }
        } catch (e){
            res.status(500).send({
                message: 'An error ocurred at querying a category'
            });
            next(e);
        }
    },
    list: async (req,res,next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Category.find({$or:[{'nombre':new RegExp(valor,'i')},{'descripcion':new RegExp(valor,'i')}]},{createdAt:0})
            .sort({'createdAt': -1})
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'An error ocurred at listing a category'
            });
            next(e);
        }
    },
    update: async (req,res,next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre,descripcion:req.body.descripcion});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'An error ocurred at updating a category'
            });
            next(e);
        }
    },
    remove: async (req,res,next) => {
        try {
            const reg = await models.Category.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'An error ocurred at removing a category'
            });
            next(e);
        }
    },
    activate: async (req,res,next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'An error ocurred at activating a category'
            });
            next(e);
        }
    },
    deactivate: async (req,res,next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'An error ocurred at deactivating a category'
            });
            next(e);
        }
    }

}