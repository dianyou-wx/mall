import utils from "../../utils/request.js";
let { brandlist } = utils;
const regeneratorRuntime = require("../../utils/runtime.js");
var app = getApp();
Page({
  data: {},
  async onLoad(options) {
    var that = this;
    let data = await brandlist(options.typeid);
    that.setData({
      list: data
    });
    // wx.request({
    //   url:
    //     "http://www.huanqiuxiaozhen.com/wemall/goods/inqGoodsByTypeBrand?brand=" +
    //     options.brand +
    //     "&typeid=" +
    //     options.typeid,
    //   method: "GET",
    //   data: {},
    //   header: {
    //     Accept: "application/json"
    //   },
    //   success: function(res) {
    //     that.setData({
    //       list: res.data.data
    //     });
    //   }
    // });
  }
});
