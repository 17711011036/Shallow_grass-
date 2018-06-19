const express=require("express");
const goodscontroller=require("../controller/goodsController");
const selfController = require("../controller/selfController");
const router=express.Router();//获取路由对象
//商品
router.get("/goods",goodscontroller.goodsList);
//商品详情
router.get("/goods_details",goodscontroller.goodsDetails);
//订单
router.get("/order",goodscontroller.Order);
//支付
router.get("/pay",goodscontroller.Pay);
//购物车
router.get("/shop_cart",goodscontroller.shopCart);

//个人中心
router.get("/self",selfController.self);
router.get("/selfE",selfController.selfE);
router.get("/address",selfController.address);
router.get("/security",selfController.security);
router.get("/collect",selfController.collect);
router.get("/view",selfController.view);
router.get("/orderG",selfController.orderG);
router.get("/coupons",selfController.coupons);
router.get("/afterSale",selfController.afterSale);
router.get("/help",selfController.help);

module.exports=router;//公开router