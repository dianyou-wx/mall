import utils from "../../utils/request.js";
let { details } = utils;
const regeneratorRuntime = require("../../utils/runtime.js");
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200
  },

  async onLoad(options) {
    var that = this;
    let data = await details(options.id);
    that.setData({
      goodsPicsInfo: data.goodsPicsInfo,
      shopppingDetails: data.shopppingDetails
    });
    // 商品详情
    // wx.request({
    //   url: "http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=" + options.id,
    //   method: "GET",
    //   data: {},
    //   header: {
    //     Accept: "application/json"
    //   },
    //   success: function(res) {
    //     //console.log(res.data.data);
    //     that.data.shopppingDetails = res.data.data;

    //     var goodsPicsInfo = [];
    //     var goodsPicsObj = {};
    //     var goodspic = res.data.data.goodspics;
    //     var goodspics = goodspic.substring(0, goodspic.length - 1);
    //     var goodspicsArr = goodspics.split("#");
    //     for (var i = 0; i < goodspicsArr.length; i++) {
    //       goodsPicsInfo.push({
    //         picurl: goodspicsArr[i]
    //       });
    //     }
    //     that.setData({
    //       goodsPicsInfo: goodsPicsInfo
    //     });
    //   }
    // });
  }
});
