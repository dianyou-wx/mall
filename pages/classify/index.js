import utils from "../../utils/request.js";
let { classify } = utils;
const regeneratorRuntime = require("../../utils/runtime.js");
var app = getApp();
Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0
  },
  async onLoad() {
    var that = this;
    let data = await classify();
    that.setData({
      navLeftItems: data,
      navRightItems: data
    });
    // wx.request({
    //     url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
    //     method: 'GET',
    //     data: {},
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function (res) {
    //         that.setData({
    //             navLeftItems: res.data,
    //             navRightItems: res.data
    //         })
    //     }
    // })
  },

  //事件处理函数
  switchRightTab: function(e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    });
  }
});
