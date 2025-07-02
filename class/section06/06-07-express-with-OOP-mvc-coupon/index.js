// const express = require('express');  옛날 방식 => common.js 방식
import express from 'express'; // 요즘방식 => 모듈방식
import { ProductController } from './mvc/controllers/product.controller.js';
import { CouponController } from './mvc/controllers/coupon.controller.js';

const app = express();

// 상품 API
const productController = new ProductController();
app.post('/products/buy', productController.buyProduct);  // 상품 구매하기 API
app.post('/products/refund', productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권) API
const couponController = new CouponController();
app.post('/coupons/buy', couponController.buyCoupon);  // 상품권을 돈주고 구매하는 API


app.listen(3000);

