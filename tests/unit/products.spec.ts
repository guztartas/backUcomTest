import request from 'supertest';
import httpStatus from 'http-status';
import app from '../../src/app';
import { describe, test, expect } from '@jest/globals';
const shoesCategories = ['mens-shoes', 'womens-shoes'];

describe('Product routes', () => {
  describe('GET /v1/api/products', () => {
    test('should return 200 and successfully return product catalog', async () => {
      const res = await request(app)
        .get('/v1/api/products')
        .expect(httpStatus.OK);

      expect(res.body).not.toBeFalsy();

    });
    test('should return 200 and successfully return at least one product', async () => {
      const res = await request(app)
        .get('/v1/api/products')
        .expect(httpStatus.OK);

      expect(res.body.length).toBeGreaterThan(0);

    });
    test('should return 200 and should not have any product with less than 10 in stock', async () => {
      const res = await request(app)
        .get('/v1/api/products')
        .expect(httpStatus.OK);

      expect(res.body.filter(function (product) { return product.stock < 9 }).length).toEqual(0);
    });
    test('should return 200 and should not have any product in shoes category with percentageDiscount higher than 15', async () => {
      const res = await request(app)
        .get('/v1/api/products')
        .expect(httpStatus.OK);

      expect(res.body.filter(function (product) { shoesCategories.includes(product.category) && product.discountPercentage > 15 }).length).toEqual(0);
    });
    test('should return 200 and should have at least one product in shoes category with percentageDiscount lower or equal than 15', async () => {
      const res = await request(app)
        .get('/v1/api/products')
        .expect(httpStatus.OK);

      expect(res.body.filter(function (product) { return shoesCategories.includes(product.category) && product.discountPercentage <= 15 }).length).toBeGreaterThan(0);
    });
    test('should return 200 and should at least one product with stock higher than 10', async () => {
      const res = await request(app)
        .get('/v1/api/products')
        .expect(httpStatus.OK);
      expect(res.body.filter(function (product) { return product.stock > 9 }).length).toBeGreaterThan(0);
    });
  });
});
