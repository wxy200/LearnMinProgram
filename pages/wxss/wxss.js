// pages/wxss/wxss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:25.666666,
    time:485485823,
    titles:['衣服','裤子','鞋子']
  },
  myclick(event){
    console.log(event)
  },
  handleItem(event){
    console.log(event)
    const dataset=event.currentTarget.dataset;
    const title=dataset.item;
    const index=dataset.index;
    console.log(title,index)
  }
})