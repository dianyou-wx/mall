import mockData from "./mockData.js";
import mockData1 from "./mockData1.js";
import mockData2 from "./mockData2.js";
import mockData3 from "./mockData3.js";
import mockData4 from "./mockData4.js";
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

export default { swiper, classify, brand, brandlist, details };
