import wepy from 'wepy'
import util from '@/utils/util'
export default class baseMixin extends wepy.mixin {
  $toast(title, icon = "success", duration = 2000) {
    return util.toast(title, icon, duration);
  }
  $alert(content, title = '提示', confirmText = '确定', confirmColor = '#000000') {
    return util.alert(content, title, confirmText, confirmColor);
  }
  $confirm(text, title = "提示", confirmText = '确定', confirmColor = '#000000') {
    return util.confirm(text, title, confirmText, confirmColor);
  }
  $ajax(url, params = {}) {
    return util.ajax(url, params);
  }
}
