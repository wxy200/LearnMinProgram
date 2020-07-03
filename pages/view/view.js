// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  myclick(){
    wx.chooseImage({
      success:(res)=>{
        const path=res.tempFilePaths[0]
        this.setData({
          imagePath:path
        })
      }
    })
  }
})