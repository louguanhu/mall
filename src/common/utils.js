
//防抖函数
export function debounce(func,delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

//日期转换工具
export function formatDate(time,fmt) {
	//创建Date方法
	let date =new Date(time*1000)
  //获取年份
    if(/(y+)/.test(fmt)){
      //RegExp.$1匹配到的东西 yyy-MM-dd=>RegExp.$1=yyy
      //将匹配的结果转成date.getFullYear()+''，
      // 然后通过4-匹配的长度获取对应的字符串长度（substr(截取几位)）
      fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
    }
    //
  //M+  =》正则表达式的规则 匹配多个1个或者多个M
  // y*则是匹配0或者多个y y?是匹配0个或者一个y
    let o = {
        'M+':date.getMonth()+1,
        'd+':date.getDate(),
        'h':date.getHours(),
        'm+':date.getMinutes(),
        's+':date.getSeconds()
    };
    //在O中按顺序拿出key和与之对应的方法，
    for (let k in o){
      if(new RegExp(`(${k})`).test(fmt)){
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1)? str : padLeftZero(str))
      }
    }
    console.log(fmt)
    return fmt
}
function padLeftZero(str) {
  //00+4=>0004.substr(1)=>04
  //00+12=>0004.sunstr(2)=>12
 return ('00'+str).substr(str.length)
}