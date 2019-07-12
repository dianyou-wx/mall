import utils from "../../utils/request.js";
let { order } = utils;
const regeneratorRuntime = require("../../utils/runtime.js");
var app = getApp();
Page({
  data: {},
  async onLoad() {
    var that = this;
    let data = await order();
    that.setData({
      orderList: data.list
    });
    console.log(this.data.orderList);
  }
});
