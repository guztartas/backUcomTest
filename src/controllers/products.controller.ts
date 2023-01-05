const catchAsync = require('../utils/catchAsync');
const { productsService } = require('../services');
import { Request, Response } from 'express';

const getProducts = catchAsync(async (req:Request, res:Response) => {
  const result = await productsService.getProducts();
  res.send(result);
});

export default {
  getProducts,
};
