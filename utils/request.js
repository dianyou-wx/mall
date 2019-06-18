import mockData from "./mockData";
console.log(mockData);
// const mockData = require("./mockData");
// const regeneratorRuntime = require('./runtime.js');
// // const mockData = require('./mockData.json');
// let env = "dev"
// // let env = "product"

// let prefix = "https://api.puman.xyz/cute";

// function getMockData() {
//     return mockData
// }
// async function swiper() {
//     return new Promise(resolve => {
//         if (env === "dev") {
//             resolve(getMockData());
//             return;
//         }
//         wx.request({
//             url: prefix + '/home',
//             method: 'GET',
//             success(res) {
//                 resolve(res.data)
//             }
//         })
//     })
// }
// module.exports = swiper
function abc() {
  return { age: 123 };
}
// module.exports =abc

export default abc;
