//获取应用实例
import utils from "../../utils/request.js";
let { swiper } = utils;
const regeneratorRuntime = require("../../utils/runtime.js");
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: true // loading
  },

  //事件处理函数
  swiperchange: function(e) {
    //console.log(e.detail.current)
  },

  async onLoad() {
    console.log("onLoad");
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });
    });

    let data = await swiper();

    that.setData({
      images: data.carouserList
    });
    that.setData({
      venuesItems: data.themeList
    });
    that.setData({
      selectedList: data.selectedList
    });

    //     //sliderList
    //     // wx.request({
    //     //     url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
    //     //     method: 'GET',
    //     //     data: {},
    //     //     header: {
    //     //         'Accept': 'application/json'
    //     //     },
    //     //     success: function (res) {
    //     //         that.setData({
    //     //             images: res.data
    //     //         })
    //     //     }
    //     // })

    //     //venuesList
    //     // wx.request({
    //     //     url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
    //     //     method: 'GET',
    //     //     data: {},
    //     //     header: {
    //     //         'Accept': 'application/json'
    //     //     },
    //     //     success: function (res) {
    //     //         that.setData({
    //     //             venuesItems: res.data.data
    //     //         })
    //     //         setTimeout(function () {
    //     //             that.setData({
    //     //                 loadingHidden: true
    //     //             })
    //     //         }, 1500)
    //     //     }
    //     // })

    //     //choiceList
    //     // wx.request({
    //     //     url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
    //     //     method: 'GET',
    //     //     data: {},
    //     //     header: {
    //     //         'Accept': 'application/json'
    //     //     },
    //     //     success: function (res) {
    //     //         that.setData({
    //     //             choiceItems: res.data.data.dataList
    //     //         })
    //     //         setTimeout(function () {
    //     //             that.setData({
    //     //                 loadingHidden: true
    //     //             })
    //     //         }, 1500)
    //     //     }
    //     // })

    // }
  }
});
