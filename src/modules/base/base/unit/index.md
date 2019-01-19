# 单位与变量

vuti采用css3新特性

+ 使用相对视口长度单位[vmin](https://drafts.csswg.org/css-values-3/#viewport-relative-lengths)
+ 使用[css变量及var函数](https://www.w3.org/TR/css-variables/)处理公共变量
+ 使用[calc](https://drafts.csswg.org/css-values-3/#calc-notation)函数处理样式计算，以此实现组件变量化

## 单位

vw、vh、vmin、vmax 主要用于页面视口大小布局，相对于rem;v*可以使组件相对于一个绝对的标准来适配页面。

+ vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。
+ vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。
+ vmin：vw和vh中较小的那个。
+ vmax：vw和vh中较大的那个。

### 使用方式
+ html节点变量如下：
  ```css
  html{
    /** 
    * 尺寸比例
    */
    --size: 1;
  }
  ```
  可以通过修改body节点该变量的值来改变组件尺寸标准
  
  例如想在pc端使用移动端375px宽度标准：
  ```js
  (function(doc,win){
    var htmlScale = function(){
      var vw = win.innerHeight > win.innerWidth ? win.innerWidth : win.innerHeight
      var myScale = vw/375
      doc.body.style.setProperty('--size', myScale)
    }
    htmlScale()
    win.addEventListener('resize',htmlScale,false)
  })(document,window)
  ```
+ body节点变量如下：
  ```css
  body{  
    /** 
    * 主色及副色
    */
    --color-t1: #0096ff;
    --color-t2: #999999;
    --color-error: #ff4d1d;
    --color-warn: #ffa71d;
    /** 
    * 字体主色及副色
    */
    --color-font-t1: #333333;
    --color-font-t2: #666666;
    ...
  ```
### 浏览器支持情况

![支持情况](static/img/vw.png)

## 变量
CSS中原生的变量定义语法是：--*

变量的使用是使用var函数：var(--*)

变量的计算使用calc函数：calc(var(--*)/2)

例如cell组件使用全局变量才设置样式：

```css
.vuti-cell{
  display: flex;
  justify-content: space-between;
  background-color: var(--color-bg-t2);
  padding: 0px var(--size-margin-t2);
  position: relative;
  min-height: var(--size-cell-height);
}

.vuti-cell~.vuti-cell::before{
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  width: 96vmin;
  height: 1px;
  background-color: var(--color-divide);
  transform: scaleY(.5);
  -webkit-transform: scaleY(.5);
  -moz-transform: scaleY(.5);
  -ms-transform: scaleY(.5);
  -o-transform: scaleY(.5);
  z-index: 2;
}
.vuti-cell-left{
  display: flex;
  margin-right: var(--size-margin-t1);
  align-items: center;
}
.vuti-cell-middle{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--color-t2);
  font-size: var(--size-font-t3);
}
...
```

### 浏览器支持情况

![支持情况](static/img/var.png)
<!-- ## Options
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | type     | 类型   | string  |   small / single / dubble   |   —   |
  | title     | 标题   | string    |   —  |     —    |
  | subTitle     | 双行列表的副标题   | string    | — |  —  |
  | describle     | 标题描述   | string    | — |  —   |
  | isLink     | 是否使用链接状态   | boolean    | — | false   |
  | isSelect     | 是否使用选择状态   | boolean    | — | false   |
  | selectValue     | 选择状态   | boolean    | — | false   |
  | isSwitch  | 是否使用开关状态    | boolean   | —   | false   |
  | switchValue  | 开关按钮的状态 | boolean   |  —  |  true  |

  ## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 链接状态的回调函数   |
  | select     | 选择状态的回调函数   |
  | change     | 开关状态的回调函数   | -->

