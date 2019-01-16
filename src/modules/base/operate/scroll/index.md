# scroll滚动组件
滚动组件封装自[iscroll](https://iiunknown.gitbooks.io/iscroll-5-api-cn/content/versions.html)

## 基础用法

+ scroll组件本身是一个滚动视窗

```html
<example>
  <div style="height: 200px;background-color:white;">
    <t-scroll>
      <div v-for="n in 20">滚动中的第{{n}}条记录</div>
    </t-scroll>
  </div>
</example>
<!-- scroll-demo-1.vue -->
```

## 下拉刷新

+ 设置@pullDown监听则开启下拉刷新
+ 在异步获取数据后调用组件内refresh方法可重置组件
```html
<template>
<example>
  <div style="height: 200px;background-color:white;">
    <t-scroll ref="tScroll" @pullDown="pullDown">
      <div class="divs" v-for="n in arr">滚动中的第{{n}}条记录</div>
    </t-scroll>
  </div>
</example>
</template>
<script>
  export default {
    data() {
      return {
        arr: []
      }
    },
    methods: {
      pullDown() {
        let i = 0
        var arr = []
        while (i < 20) {
          i++
          arr.push(Math.random(100))
        }
        setTimeout(() => {
          this.arr = [].concat(arr)
          this.$nextTick(() => {
            this.$refs.tScroll.refresh()
          })
        }, 1000)
      },
    },
    mounted() {
      this.pullDown()
    }
  }
</script>
<style>
  .divs{
    cursor: normal;
  }
</style>
<!-- scroll-demo-2.vue -->
```

## 上拉加载

+ 监听pullUp则开启上拉加载
+ 在异步获取数据后调用组件内refresh方法可重置组件
```html
<template>
<example>
  <div style="height: 200px;background-color:white;">
    <t-scroll ref="tScroll" @pullUp="pullUp(1)">
      <div class="divs" v-for="n in arr">滚动中的第{{n}}条记录</div>
    </t-scroll>
  </div>
</example>
</template>
<script>
  export default {
    data() {
      return {
        arr: []
      }
    },
    methods: {
      pullUp(e) {
        let i = 0
        var arr = []
        while (i < 20) {
          i++
          arr.push(Math.random(100))
        }
        setTimeout(() => {
          if (e) {
            this.arr = this.arr.concat(arr)
          } else {
            this.arr = [].concat(arr)
          }
          this.$nextTick(() => {
            this.$refs.tScroll.refresh()
          })
        }, 1000)
      },
    },
    mounted() {
      this.pullUp()
    }
  }
</script>
<style>
  .divs{
    cursor: normal;
  }
</style>
<!-- scroll-demo-2.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | pullDownOffset     | 下拉刷新位移量   | Number  |   -   |   50   |
  | pullUpOffset     | 上拉加载位移量   | Number    | - |   50    |
  | options     | [iscroll参数](https://iiunknown.gitbooks.io/iscroll-5-api-cn/content/config.html)   | Object    | - |  -  |
  | loadTypeTop     | 下拉刷新loading样式   | String    | — |  ios   |
  | loadTypeBottom     | 上拉加载loading样式   | String    | — |  ios   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | pullDown     | 下拉刷新回调   |
  | pullUp     | 上拉加载回调   |
  | scroll     | 滚动回调   |

## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | default     | 自定义内容区域  |
  | pullDown     | 下拉刷新loading插槽  |
  | pullUp     | 上拉加载loading插槽  |