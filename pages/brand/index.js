import utils from "../../utils/request.js";
let { brand } = utils;
const regeneratorRuntime = require("../../utils/runtime.js");
var app = getApp();
Page({
  data: {},
  async onLoad(options) {
    var that = this;
    let data = await brand();
    console.log(data);
    that.setData({
      brandList: data
    });
    // wx.request({
    //   url:
    //     "http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType?id=" +
    //     options.id,
    //   method: "GET",
    //   data: {},
    //   header: {
    //     Accept: "application/json"
    //   },
    //   success: function(res) {
    //     that.setData({
    //       brandList: res.data.data
    //     });
    //   }
    // });
  }
});
