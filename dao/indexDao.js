const dbpool=require("../config/dbpoolConfig");
const indexModel={
    // 查询今日上新
    product(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods where is_new>='0'",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    lt(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM post",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 手机号有没有被注册过
    phone(phone){
        console.log(phone)
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users where tel=?",
                [phone],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 修改密码验证手机号
    xgsjh(phone){
        console.log(phone)
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users where tel=?",
                [phone],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 注册2.保存到数据库
    jrsjk(phone,mm,C){
        return new Promise((resolve,reject)=>{
<<<<<<< HEAD
            dbpool.connect("INSERT  INTO `users`(`u_id`,`for_user_gradeId`,`name`,`tel`,`sex`,`password`,`email`,`userImg`,`userStatus`,`createTime`,`User_gradeid`,`User_ex`,`User_show`,`Grade_ID`,`o_ID`,`is_del`) VALUES \n" +
                "\n" +
                "(null,null,?,?,null,?,null,null,null,null,null,null,null,null,null,0)",
=======
            dbpool.connect("INSERT  INTO `users`(`u_id`,`for_user_gradeId`,`name`,`tel`,`sex`,`password`,`email`,`userImg`,`userStatus`,`createTime`,`User_gradeid`,`User_ex`,`User_show`,`Grade_ID`,`o_ID`,`is_del`) \n" +
                "VALUES(NULL,NULL,?,?,NULL,?,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0)",
>>>>>>> 780376a460c94aedbfe9f04bc61ff52937d9b7a3
                [C,phone,mm],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    // 修改密码.保存到数据库
    xgmmjrsjk(phone,mm){
        return new Promise((resolve,reject)=>{
            dbpool.connect("UPDATE users SET PASSWORD=? WHERE tel=?;",
                [mm,phone],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    homes(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods where is_hot>='0'",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    }

}

module.exports=indexModel;