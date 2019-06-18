//获取应用实例
// import { swiper } from "../../utils/request.js";
// const swiper = require("../../utils/request.js");
import swiper from "../../utils/request";
console.log({ swiper }, swiper.default + "");
const regeneratorRuntime = require("../../utils/runtime.js");
console.log(regeneratorRuntime);
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
    images: "",
    venuesItems: "",
    choiceItems: ""
  },

  //事件处理函数
  swiperchange: function(e) {
    //console.log(e.detail.current)
  },

  abc: async () => {
    return new Promise(resole => {
      setTimeout(resole, 5000);
    });
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

    console.log("111111111111111", new Date());
    await this.abc();
    console.log("2222222222222", new Date());

    // let data = swiper();
    // this.images = data.carouserList;
    // this.venuesItems = data.themeList;
    // this.choiceItems = data.selectedList;

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
