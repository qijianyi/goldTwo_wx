import wepy from 'wepy'
export default class Util {
  static async ajax(url, params = {}) {
    params = {
      ...{
        url: url,
        method: 'GET',
        success: () => {},
        fail: () => {},
        error: () => {},
        complete: () => {},
      },...params
    }
    return await wepy.request(params);
    // console.log(res);
    // return res;
    // params = {
    //   ...{
    //     url: url,
    //     method: 'GET',
    //     success: () => {},
    //     fail: () => {},
    //     error: () => {},
    //     complete: () => {},
    //   },
    //   ...params
    // };
  

    // return res && (res.statusCode == 200 ? params.success(res.data) : params.fail(res.data));
  }
}
