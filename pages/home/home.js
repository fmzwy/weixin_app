//home.js
//获取应用实例
var app = getApp()
Page({
  data: {
    scrollTop:0,
    height:"1000px",
    /*轮播图*/
    swiper:{
      height:"420rpx",
      imgUrls: [
        "./images/top-banner-1.png"
      ],
      changeHandler:function(e){
        console.log(e.detail.current)
      },
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 0
    },
    /*类目列表*/
    sortRows:[
      [
        {
          image:"./images/wx.png",
          title:"文胸",
          url:"./"
        },
        {
          image:"./images/nk.png",
          title:"内裤",
          url:"./"
        },
        {
          image:"./images/jjf.png",
          title:"家居服",
          url:"./"
        },
        {
          image:"./images/ssy.png",
          title:"塑身衣",
          url:"./"
        },
        {
          image:"./images/wp.png",
          title:"袜品",
          url:"./"
        }
      ],[
        {
          image:"./images/bnny.png",
          title:"保暖内衣",
          url:"./"
        },
        {
          image:"./images/cgny.png",
          title:"常规内衣",
          url:"./"
        },
        {
          image:"./images/ddk.png",
          title:"打底裤",
          url:"./"
        },
        {
          image:"./images/ssdp.png",
          title:"时尚单品",
          url:"./"
        },
        {
          image:"./images/more.png",
          title:"更多",
          url:"./"
        }
      ]
    ],
    /*拼团*/
    groups:[
      {
        teamBuyingDesc:"秋衣扎在秋裤里秋裤扎在袜子里这是对冬天最起码的尊重，但是首先你要有秋衣和秋裤。壹级采本期为您推荐37度恒温发热衣，秋衣秋裤纯棉系列，秋衣秋裤莫代尔系列，一定要看哦！",
        teamBuyingId:28,
        teamBuyingImg:"http://img-service.yijicai.cn/modTeamBuying/ab041947-54ed-4251-a4a4-635c89fdaeb6.png",
        teamBuyingTitle:"【天天拼货团-秋衣秋裤专场】",
        time:-119458490
      }
    ]

  },
  onLoad: function (opts) {
   console.log("onload");
   console.log(opts);
   console.log("onload");
  //  wx.request({
  //     url: '', 
  //     data: {
  //       x: '' ,
  //       y: ''
  //     },
  //     header: {
  //         'Content-Type': 'application/json'
  //     },
  //     success: function(res) {
  //       console.log(res.data)
  //     }
  //  })
    this.setData({
      
    })
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
  searchtap:function(event){
    // console.log(event.currentTarget.dataset);
    // wx.navigateTo({
    //   url: '../productDetail/productDetail'
    // });
    // console.log(11111);
  },
  //拼团
  grouptap:function(event){
    var id=event.currentTarget.dataset.id;
    console.log(id);
    // wx.navigateTo({
    //   url: '../?id='+id
    // });
  },
  //页面竖向滚动(触发频率太低了)
  scrollY:function(event){
    var that=this;
    var scrollTop=event.detail.scrollTop;
    that.setData({
        scrollTop:scrollTop
    });
    console.log(scrollTop);
  },
  /*跳转页面 */
  pageTo:function(page){
    wx.navigateTo({
      url: page,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }

})

