var delArry=[];
$(".delSpan").click(function () {
    delArry.splice(0,delArry.length);
    delArry.push($(this).attr("id"));
    $.ajax({
        type:"get",
        url:"/delcartgoods.do",
        data:{
            shopcartid:delArry[0]
        },
        dataType:"json",
        success:function (data) {

        }
    });
});
$(".yhj_btn").click(function () {
    var coupon=$("#coupon").val();
    $.ajax({
        type:"get",
        url:"/coupon.do",
        data:{
            coupon:coupon
        },
        dataType:"json",
        success:function (data) {

        }
    });
    if ($("#coupon").val()==""){
        alert("请输入优惠码进行兑换哦！");
    }
});