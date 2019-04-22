//wepback打包图片
// 1.在JS中引入图片
import image1 from "./2.jpg"; //Import引入后使用file-loader,使用file-loader默认会在内部生成一张图片，把生成的图片名字返回来
console.log(image1);
let image = new Image();
image.src = image1; 
// let image = new Image(); //打包后成为字符串无法解析出来图片
// image.src="./2.jpg";      
document.body.append(image);

//2.在css中使用图片
import './index.less'
//3.在html中使用img src引入
