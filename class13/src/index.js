import Jquery from "jquery";
import moment from "moment";
import "moment/locale/zh-cn"
// 设置moment语言
moment.locale("zh-cn");
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
