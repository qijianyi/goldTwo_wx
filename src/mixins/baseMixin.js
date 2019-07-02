import wepy from 'wepy'
import util from '@/utils/util'
export default class baseMixin extends wepy.mixin {
  $alert(content, title = '提示', confirmText = '确定', confirmColor = '#000000') {
    return util.alert(content, title, confirmText, confirmColor);
  }
  $ajax(url, params = {}) {
    return util.ajax(url, params);
  }
}
