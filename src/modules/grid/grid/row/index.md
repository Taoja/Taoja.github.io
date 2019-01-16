# row行组件

## 使用方式

```html
<template>
<example>
  <t-row 
  :data="data"
  ></t-row>
</example>
</template>
<script>
  import turbo from '@a/turbo.png'
  export default {
    data() {
      return {
        data: [
          {
            src: turbo,
            linkType: 0,
            link: 'http://www.baidu.com'
          },
          {
            src: turbo,
            linkType: 0,
            link: 'http://www.baidu.com'
          },
          {
            src: turbo,
            linkType: 0,
            link: 'http://www.baidu.com'
          },
          {
            src: turbo,
            linkType: 0,
            link: 'http://www.baidu.com'
          },
          {
            src: turbo,
            linkType: 0,
            link: 'http://www.baidu.com'
          }
        ]
      }
    },
    methods: {
      click(e) {
        this.$dialog({
          title: '点击了',
          text: e.link
        })
      }
    }
  } 
</script>
<!-- row-demo-1.vue -->
```


## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | data     | 需要展示数据列表   | Array  |   {src}   |   -   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 返回被点击对象   |

