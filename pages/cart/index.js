import utils from "../../utils/request.js";
let { cart } = utils;
const regeneratorRuntime = require("../../utils/runtime.js");
var app = getApp();
Page({
  data: {
    cartImg: "../../images/cart-null.png",
    tipWords: "购物车空空如也"
  },
  async onLoad() {
    var that = this;
    let data = await cart();
    that.setData({
      cartList: data.list
    });
  },
  reduce: function(e) {
    var that = this;
    let query = e.currentTarget.dataset["index"];
    console.log(this.data.cartList[query].number);
    if (this.data.cartList[query].number > 1) {
      this.data.cartList[query].number -= 1;
      var list = this.data.cartList;
      this.setData({
        cartList: list
      });
    }
  },
  plus: function(e) {
    var that = this;
    let query = e.currentTarget.dataset["index"];
    console.log(this.data.cartList[query].number);
    this.data.cartList[query].number += 1;
    var list = this.data.cartList;
    this.setData({
      cartList: list
    });
  }
});
