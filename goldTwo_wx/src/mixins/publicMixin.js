import wepy from 'wepy'
export default class publicMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap() {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log('这是mixin的数据');
  }

  onLoad() {

  }
}
