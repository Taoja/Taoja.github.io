# carousel轮播图组件
轮播图组件作用于后端配置的页面。通过接口返回字段的变化渲染不同轮播图

## 使用方式
+ 传入data数据，即可展示data数组中src图片及轮播效果
```html
<template>
<example>
  <t-carousel :data="data" @click="click"></t-carousel>
</example>
</template>
<script>
  import src1 from '@a/carousel/1.jpg'
  import src2 from '@a/carousel/2.jpg'
  import src3 from '@a/carousel/3.jpg'
  import src4 from '@a/carousel/4.jpg'
  import src5 from '@a/carousel/5.jpg'
  export default {
    data() {
      return {
        data: [
          {
            src: src1,
            text: 1
          },
          {
            src: src2,
            text: 2
          },
          {
            src: src3,
            text: 3
          },
          {
            src: src4,
            text: 4
          },
          {
            src: src5,
            text: 4
          },
        ]
      }
    },
    methods: {
      click(e) {
        this.$dialog({
          title: '点击了',
          text: e.text
        })
      }
    }
  } 
</script>
<!-- carousel-demo-1.vue -->
```

## scale模式
+ options属性中type控制是否使用缩放模式
```html
<template>
<example>
  <t-carousel 
    :data="data" 
    :options="{
      type: 'scale'  
    }" 
    @click="click"
  ></t-carousel>
</example>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {
            src: src1,
            text: 1
          },
          {
            src: src2,
            text: 2
          },
          {
            src: src3,
            text: 3
          },
          {
            src: src4,
            text: 4
          },
          {
            src: src5,
            text: 4
          },
        ]
      }
    },
    methods: {
      click(e) {
        this.$dialog({
          title: '点击了',
          text: e.text
        })
      }
    }
  } 
</script>
<!-- carousel-demo-2.vue -->
```

## 分页与自动播放
+ options属性中pagination控制是否显示分页图标
+ options属性中autoplay控制是否自动播放
```html
<template>
<example>
  <t-carousel 
    :data="data" 
    :options="{
      pagination: false,
      autoplay: false  
    }" 
    @click="click"
  ></t-carousel>
</example>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {
            src: src1,
            text: 1
          },
          {
            src: src2,
            text: 2
          },
          {
            src: src3,
            text: 3
          },
          {
            src: src4,
            text: 4
          },
          {
            src: src5,
            text: 4
          },
        ]
      }
    },
    methods: {
      click(e) {
        this.$dialog({
          title: '点击了',
          text: e.text
        })
      }
    }
  } 
</script>
<!-- carousel-demo-3.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | data     | 需要展示数据列表   | Array  |   {src}   |   -   |
  | options     | 需要控制组件变化参数列表   | Array    |   -  |     -    |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 返回被点击对象   |

