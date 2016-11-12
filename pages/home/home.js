//home.js
//获取应用实例
var app = getApp()
Page({
  data: {
    scrollTop:0,
    height:"1000px"
  },
  onLoad: function (opts) {
   console.log("onload");
   console.log(opts);
   console.log("onload");
  },
  onUnload: function (opts) {
   console.log("onUnload");
   
  },
  onReady:function(){
  },
  onShow:function(opts){
    console.log("onshow");
   console.log(opts);
   console.log("onshow");
  },
  //搜索框点击
  searchtap:function(){
    console.log(11111);
    wx.navigateTo({
      url: '../productDetail/productDetail'
    });
    console.log(11111);
  },
  //页面竖向滚动(触发频率太低了)
  scrollY:function(event){
    var that=this;
    var scrollTop=event.detail.scrollTop;
    that.setData({
        scrollTop:scrollTop
    });
    console.log(scrollTop);
  }

})

