# keyboard h5键盘组件

## 基础用法
+ 默认为数字键盘
+ word.sync属性可以双向绑定输入数据
+ result为所有按钮操作后的结果返回
```html
<template>
<example>
  <t-cell @click="open = !open" title="请输入金额" is-link>{{result}}</t-cell>
  <t-keyboard v-model="open" :word.sync="result" @result="output" class="pc"></t-keyboard>
</example>
</template>
<script>
  export default {
    data() {
      return {
        result: '',
        open: false
      }
    },
    methods: {
      output(e) {
        console.log(e)
      }
    }
  } 
</script>
<style>
  .pc{
    max-width: 414px;
  }
</style>
<!-- keyboard-demo-1.vue -->
```

## 其他键盘
+ type属性为simple时显示无小数点键盘
+ type属性为IDCard时显示身份证键盘
+ maxlength属性可以设置最大输入个数
```html
<template>
<example>
  <div class="auto vuti" @click="open = true">
    <div>
      <span class="word" v-if="result[0]">{{result[0]}}</span>
      <span class="point" v-else>·</span>
    </div>
    <div>
      <span class="word" v-if="result[1]">{{result[1]}}</span>
      <span class="point" v-else>·</span>
    </div>
    <div>
      <span class="word" v-if="result[2]">{{result[2]}}</span>
      <span class="point" v-else>·</span>
    </div>
    <div>
      <span class="word" v-if="result[3]">{{result[3]}}</span>
      <span class="point" v-else>·</span>
    </div>
    <div>
      <span class="word" v-if="result[4]">{{result[4]}}</span>
      <span class="point" v-else>·</span>
    </div>
    <div>
      <span class="word" v-if="result[5]">{{result[5]}}</span>
      <span class="point" v-else>·</span>
    </div>
  </div>
  <t-cell @click="open1 = !open1" title="请输入您的身份证" is-link>{{result1}}</t-cell>
  <t-keyboard v-model="open" type="simple" maxlength="6" :word.sync="result" class="pc"></t-keyboard>
  <t-keyboard v-model="open1" type="IDCard" maxlength="18" :word.sync="result1" class="pc"></t-keyboard>
</example>
</template>
<script>
  export default {
    data() {
      return {
        result: '',
        open: false,
        result1: '',
        open1: false
      }
    }
  } 
</script>
<style lang="scss">
  .auto{
    display: flex;
    align-items: center;
    justify-content: space-around;
    >div{
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      cursor: pointer;
    }
  }
</style>
<!-- keyboard-demo-2.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | v-model     | 开关   | Boolean  |   -   |   -   |   
  | word:sync     | 输入值   | String  |   -   |   -   |   
  | type     | 类型   | String  |   number,simple,IDCard   |   number   |   
  | maxlength     | 长度   | Number  |   -   |   -   |   

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | result     | 所有操作返回   |
  | close     | 关闭组件回调   |