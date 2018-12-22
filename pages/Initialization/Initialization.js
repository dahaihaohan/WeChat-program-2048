
Page({
  data: {
      current:0
  },
  onReady:function(){
    this.loading();
  },
  loading: function () {
    let n = 1;
    let time = setInterval(() => {
      if (n == 6) {
        clearInterval(time);
        wx.redirectTo({
          url: '../2048/2048'
        })
      }
      this.setData({
        current: this.data.current+1
      });
      if(this.data.current>3){
        this.setData({
          current:0
        });
      }
      n++;
    }, 500);
  }
})