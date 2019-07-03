import wepy from 'wepy'
export default class Util {
  static async ajax(url, params) {
    wepy.showLoading({
      title: '加载中...',
      mask: true,
      success: res => {}
    });
    let network = await new Promise((resolve, reject) => {
      wepy.request({
        url: url,
        data: params.data,
        method: 'GET',
        dataType: 'json',
        header: {
          'content-type': 'applicction/x-www-form-urlencoded'
        },
        success: res => {
          res.statusCode == 200 ? resolve(res.data) : reiect(res);
        },
        fail: res => {
          this.toast('请求错误', 'none')
          reiect(res);
        },
        complete: res => {
          wepy.hideLoading();
        }
      });
    })
    return network;
  }
  static toast(title, icon = "success", duration = 2000) {
    return new Promise((resolve, reject) => {
      wepy.showToast({
        title: title,
        icon: icon,
        duration: duration,
        mask: true,
        success: res => {
          resolve();
        }
      })
      setTimeout(() => {
        wepy.hideToast();
      }, duration)
    });
  }
  static alert(content, title = '提示', confirmText = '确定', confirmColor = '#000000') {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: content,
        confirmText: confirmText,
        confirmColor: confirmColor,
        mask: true,
        showCancel: false,
        success: res => {
          resolve();
        }
      });
    });
  }
  static confirm(text, title = "提示", confirmText = '确定', confirmColor = '#000000') {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
        confirmText: confirmText,
        confirmColor: confirmColor,
        mask: true,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve();
          } else if (res.cancel) {
            reject();
          }
        },
        fail: res => {
          reject();
        }
      });
    });
  }
}
