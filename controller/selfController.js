const mysql = require("mysql");
const selfModel = require("../dao/selfDao");
const fs = require("fs");
var count = 0;
const selfController = {
    //个人中心
    self(req,resp){
        var username = req.session.user;
        selfModel.getUserInfo(username)
            .then(function(data) {
                resp.render("selfPublic/self",{selfData:data});
            });
    },


    //编辑个人中心
    selfE(req,resp) {
        var username = req.session.user;
        selfModel.getUserInfo(username)
            .then(function(data) {
                resp.render("selfPublic/selfE",{selfEData:data});
            });
    },

    //地址
    address(req,resp) {
        var username = req.session.user;
        selfModel.getUserAddress(username)
            .then(function(data) {
                resp.render("selfPublic/address",{addressData:data});
            });
    },

    //安全中心
    security(req,resp){
        var username = req.session.user;
        selfModel.getUserInfo(username)
            .then(function(data) {
                resp.render("selfPublic/security",{securityData:data});
            });
    },

    //收藏
    collect(req,resp) {
        resp.render("selfPublic/collect",{username:"测试"});
    },

    //足迹
    view(req,resp) {
        resp.render("selfPublic/view",{username:"测试"});
    },

    //订单信息
    orderG(req,resp){
        var username = req.session.user;
        selfModel.getOrder(username)
            .then(function(data) {
                resp.render("selfPublic/orderG",{orderData:data});
            });
    },

    //优惠券
    coupons(req,resp) {
        var username = req.session.user;
        selfModel.getCouponsInfo(username)
            .then(function(data) {
                console.log(data);
                resp.render("selfPublic/coupons",{couponsData:data});
            });
    },

    //售后
    afterSale(req,resp) {
        var username = req.session.user;
        selfModel.getsaleAfterInfo(username)
            .then(function(data) {
                console.log(data);
                resp.render("selfPublic/afterSale",{saleafterData:data});
            });
    },

    //帮助中心
    help(req,resp) {
        resp.render("selfPublic/help",{username:"测试"});
    },

    //文件保存
    saveInfo(req,resp) {
        var username = req.session.user;
        count++;
        var imgUrl = req.body.imgUrl;
        console.log(imgUrl);
        var base64Data = imgUrl.replace("data:image/png;base64,","").replace(/s/g,"+");
        var dataBuffer = new Buffer(base64Data,"base64");
        var path = "img/qiancao" + count + ".png";
        fs.writeFile("public/"+path,dataBuffer,function(err) {
            if(err) {
                console.log(err);
            }else {
                selfModel.updateHeader(path,username)
                    .then(function(data) {
                        console.log();
                    })
            }
        })
    },

    //其他信息保存
    saveOther(req,resp) {
        var username = req.session.user;
        var u_name = req.query.u_name;
        var u_sex = req.query.u_sex;
        var u_tel = req.query.u_tel;
        var u_email = req.query.u_email;
        var u_show = req.query.u_show;
        selfModel.updateUserInfo(u_name,u_sex,u_tel,u_email,u_show,username)
            .then(function(data) {
                console.log(1);
            })
    }
};

module.exports = selfController;
