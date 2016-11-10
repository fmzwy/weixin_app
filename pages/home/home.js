//home.js
//获取应用实例
var app = getApp()
Page({
  data: {
    scrollTop:0,
    height:"1000px"
  },
  onLoad: function () {
   
  },
  onReady:function(){
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

