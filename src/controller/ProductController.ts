import { Request, Response } from 'express'
import Cathegory from '../models/Cathegory'
import Product from '../models/Product'

export async function create(req: Request, res: Response) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    const cathegoryId = await Cathegory.findOne({ name: req.body.cathegory }, '_id')

    if (!cathegoryId) return res.send({ msg: 'Categoria não encontrada!' })

    await Product.create({ ...req.body, image: filename, cathegoryId })

    return res.status(201).send({ Message: 'Produto cadastrado com sucesso' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const product = await Product.findOne({ _id: req.params._id })
    return res.status(200).send(product)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const data = await Product.find({})

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}
