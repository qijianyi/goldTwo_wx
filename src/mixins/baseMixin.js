import wepy from 'wepy'
import util from '@/utils/util'
export default class baseMixin extends wepy.mixin {
  async $ajax(url, params = {}) {
    return util.ajax(url, params);
  }
}
