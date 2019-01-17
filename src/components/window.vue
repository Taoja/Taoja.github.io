<template>
  <div class="example" :class="{'source': open}">
    <div class="window">
      <slot></slot>
    </div>
    <div class="btn" @click="open = !open">{{open ? '隐藏' : '查看'}}代码</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
<style>
.example+pre{
  max-height: 0;
  overflow: hidden;
  transition: all .5s;
}
.source+pre{
  max-height: 200px;
  overflow: auto;
}
</style>

<style lang="scss" scoped>
.btn{
  height: 44px;
  line-height: 44px;
  background-color: white;
  border-top: 1px solid #eaeefb;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  color: #666;
  font-size: 14px;
}
.btn:hover{
  opacity: .8;
}
.example{
  transition: .2s;
  background-color: #f6f6f6;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-top: 20px;
  padding-top: 25px;
  display: flex;
  align-items: center;
  flex-flow: column;
}
.window{
  width: 100%;
  max-width: 375px;
}
</style>
