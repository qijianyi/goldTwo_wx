import wepy from 'wepy'
export default class Util {

  static isArray(item) {
    return Object.prototype.toString.apply(item) === '[object Array]';
  }
  static isObject(item) {
    return typeof item === 'object' && !this.isArray(item);
  }
  static isEmpty(item) {
    return !(this.isStr(item) && item.length > 0);
  }
  static isStr(item) {
    return typeof item === 'string';
  }
  static isFunc(item) {
    return typeof item === 'function';
  }
  static notEmpty(str) {
    return this.isStr(str) && str.length > 0;
  }
  static isEmpty(str) {
    return !this.notEmpty(str);
  }



  static async http(url, params = {}) {
    let data = params.query || {},
      p = {
        url: url,
        method: params.method,
        data: data,
        header: {
          ...{},
          ...params.header
        },
        count: params.count || 1,
        file: params.file,
        progress: params.progress,
      },
      res = await this._request(p);

    params = {
      ...{
        success: () => {},
        fail: (res) => {

        },
        error: (res) => {

        },
        complete: () => {},
      },
      ...params
    };
    return res && params.success(res.data);
  }


  static async _request(params) {
    return await wepy.request(params);
  }

  static async ajax(url, params = {}) {
    return this.http(url, {
      ...params,
      ...{
        method: 'GET',
        header: {
          'Content-Type': params.file ? 'multipart/form-data;application/json' : 'application/x-www-form-urlencoded'
        }
      }
    });
  }
}
