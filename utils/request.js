import mockData from "./mockData.js";
import mockData1 from "./mockData1.js";
import mockData2 from "./mockData2.js";
import mockData3 from "./mockData3.js";
import mockData4 from "./mockData4.js";
import mockData5 from "./mockData5.js";
import mockData6 from "./mockData6.js";
const regeneratorRuntime = require("./runtime.js");
let env = "dev";
// // let env = "product"

let prefix = "https://api.puman.xyz/cute";

function getMockData() {
  return mockData;
}
function swiper() {
  return new Promise(resolve => {
    if (env === "dev") {
      resolve(getMockData());
      return;
    }
    wx.request({
      url: prefix + "/home",
      method: "GET",
      success(res) {
        resolve(res.data);
      }
    });
  });
}

function getMockData1() {
  return mockData1;
}
function classify() {
  return new Promise(resolve => {
    if (env === "dev") {
      resolve(getMockData1());
      return;
    }
    wx.request({
      url: prefix + "/commodity/classification",
      method: "GET",
      success(res) {
        resolve(res.data);
      }
    });
  });
}

function getMockData2() {
  return mockData2;
}
function brand() {
  return new Promise(resolve => {
    if (env === "dev") {
      resolve(getMockData2());
      return;
    }
    wx.request({
      url: prefix + "/commodity/classification/brand",
      method: "GET",
      success(res) {
        resolve(res.data);
      }
    });
  });
}

function getMockData3() {
  return mockData3;
}
function brandlist(id, typeid) {
  return new Promise(resolve => {
    if (env === "dev") {
      resolve(getMockData3());
      return;
    }
    wx.request({
      url: prefix + "/commodity/classification/brand/list",
      method: "GET",
      data: { id, typeid },
      success(res) {
        resolve(res.data);
      }
    });
  });
}

function getMockData4() {
  return mockData4;
}
function details(id) {
  return new Promise(resolve => {
    if (env === "dev") {
      resolve(getMockData4());
      return;
    }
    wx.request({
      url: prefix + "/commodity/classification/brand/list",
      method: "GET",
      data: { id },
      success(res) {
        resolve(res.data);
      }
    });
  });
}

function getMockData5() {
  return mockData5;
}
function cart() {
  return new Promise(resolve => {
    if (env === "dev") {
      resolve(getMockData5());
      return;
    }
    wx.request({
      url: prefix + "/cart",
      method: "GET",
      success(res) {
        resolve(res.data);
      }
    });
  });
}

function getMockData6() {
  return mockData6;
}
function order() {
  return new Promise(resolve => {
    if (env === "dev") {
      resolve(getMockData6());
      return;
    }
    wx.request({
      url: prefix + "/order",
      method: "GET",
      success(res) {
        resolve(res.data);
      }
    });
  });
}

export default { swiper, classify, brand, brandlist, details, cart, order };
