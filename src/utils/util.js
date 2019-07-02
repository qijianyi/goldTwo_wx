import wepy from 'wepy'
export default class Util {
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
  static async ajax(url, params = {}) {
    params = {
      ...{
        url: url,
        method: 'GET',
        success: () => {},
        fail: () => {},
        error: () => {},
        complete: () => {},
      },
      ...params
    };
    let res = await wepy.request(params);

    return res && (res.statusCode == 200 ? params.success(res.data) : params.fail(res.data));
  }
}
