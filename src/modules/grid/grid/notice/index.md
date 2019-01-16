# notice公告组件

## 使用方式

```html
<template>
<example>
  <t-notice 
  :data="data"
  :options="{
    title: [
      {
        text: '播报',
        color: '#cc162c'
      }
    ]
  }"
  ></t-notice>
</example>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {
            text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
            linkType: 0,
            link: 'http://www.baidu.com'
          },
          {
            text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
            linkType: 1,
            link: 'demo_flex'
          },
          {
            text: '这是 NoticeBar 通告栏',
            linkType: 0,
            link: 'http://www.baidu.com'
          },
          {
            text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
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
<!-- notice-demo-1.vue -->
```

## 文字+图片+图标使用方法

```html
<template>
<example>
  <t-notice 
  :data="data"
  :options="options"
  ></t-notice>
</example>
</template>
<script>
  import turbo from '@a/turbo.png'
  export default {
    data() {
      return {
        data: [
          {
            text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
            linkType: 0,
            link: 'http://www.baidu.com'
          },
          {
            text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
            linkType: 1,
            link: 'demo_flex'
          },
          {
            text: '这是 NoticeBar 通告栏',
            linkType: 0,
            link: 'http://www.baidu.com'
          },
          {
            text: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
            linkType: 0,
            link: 'http://www.baidu.com'
          }
        ],
        options: {
          title: [
            {
              src: require('@a/turbo.png'),
              width: '20px'
            },
            {
              text: '小发播报',
              color: '#cc162c'
            },
            {
              icon: 'icon-QRcode',
              color: '#cc162c'
            }
          ]
        }
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
<!-- notice-demo-2.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | data     | 需要展示数据列表   | Array  |   {text}   |   -   |
  | options     | 设置头部参数   | Object  |   {title}   |   -   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 返回被点击对象   |

