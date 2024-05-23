import { Router } from 'express'
import { body } from 'express-validator'
import { createProduct, getProducts } from './handlers/product'
import {handleInputErrors} from './middleware'
const router = Router()

//Routing
router.get('/', getProducts)

router.post('/',

    //Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vació'),

    body('price')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage('El precio de Producto no puede ir vació')
        .custom(value => value > 0).withMessage('Precio no valido'),
        
handleInputErrors,

createProduct
)

router.put('/', (req, res) => {
    res.json('Desde Put')
})

router.patch('/', (req, res) => {
    res.json('Desde Patch')
})

    .delete('/', (req, res) => {
        res.json('Desde Delete')
    })

export default router