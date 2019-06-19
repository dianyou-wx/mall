import mockData from "./mockData";
import mockData1 from "./mockData1";
const regeneratorRuntime = require("./runtime.js");
let env = "dev";
// // let env = "product"

let prefix = "https://api.puman.xyz/cute";

function getMockData() {
  return mockData;
}
async function swiper() {
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

// function getMockData1() {
//   return mockData1;
// }
// async function classify() {
//   // return new Promise(resolve => {
//   //   if (env === "dev") {
//   //     resolve(getMockData1());
//   //     return;
//   //   }
//   //   wx.request({
//   //     url: prefix + "/commodity/classification",
//   //     method: "GET",
//   //     success(res) {
//   //       resolve(res.data);
//   //     }
//   //   });
//   // });
// }

// export default { swiper, classify };

let kkk = { swiper: swiper };
export default kkk;
