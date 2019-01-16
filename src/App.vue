<template>
  <div id="app">
    <div class="Tnavbar">
      <div class="navbarIcon iconfont icon-icon_list" @click="openSideBar = !openSideBar"></div>
      <div class="left">Vuti-UI</div>
      <div class="right">
        <div>Guide</div>
        <div>API Reference</div>
        <div>Release Notes</div>
        <div>Languages</div>
        <div>GitHub</div>
      </div>
      <div class="loadbar" v-if="loadWidth" :style="{width: loadWidth+'%'}"></div>
    </div>
    <div class="down">
      <div class="left" :class="{'sideBarAct': openSideBar}">
        <ul class="slideBar">
          <li v-for="(item, index) in sidebar" :key="index">
            <p v-if="item.type === 'head'" class="sidebar-heading">{{item.name}}</p>
            <a @click="openSideBar = false;" :class="{'active': $route.name === item.id}" v-else class="slide-link" :href="item.url">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="body output_wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loadWidth: 0,
      loading: false,
      loadSrc: require('../node_modules/vuti/common/svg/fire.svg'),
      openSideBar: false,
      sidebar: [
        {
          type: 'head',
          name: '指南'
        },
        {
          type: 'link',
          id: 'unit',
          name: '单位与变量 - unit@var',
          url: '#/unit'
        },
        {
          type: 'link',
          id: 'color',
          name: '颜色 - color',
          url: '#/color'
        },
        {
          type: 'head',
          name: '操作'
        },
        {
          type: 'link',
          id: 'block',
          name: '块 - block',
          url: '#/block'
        },
        {
          type: 'link',
          id: 'button',
          name: '按钮 - button',
          url: '#/button'
        },{
          type: 'link',
          id: 'popup',
          name: '底部弹窗 - popup',
          url: '#/popup'
        },{
          type: 'link',
          id: 'dialog',
          name: '对话框 - dialog',
          url: '#/dialog'
        },{
          type: 'link',
          id: 'toast',
          name: '提示框 - toast',
          url: '#/toast'
        },{
          type: 'link',
          id: 'picker',
          name: '选择器 - picker',
          url: '#/picker'
        }
      ]
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.loadWidth = 80
      this.loading = true
      next()
    })
    this.$router.afterEach((to, from) => {
      this.loadWidth = 100
      this.loading = false
      this.$nextTick(() => {
        this.loadWidth = 0
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.leave{
  display: none;
}
.sideBarAct{
  width: 14rem !important;
}
.navbarIcon{
  display: none;
  font-size: 1.2rem;
  @media screen and (max-width: 720px) {
    display: block;
  }
}
#app{
  display: flex;
  flex-flow: column;
  height: 100%;
  >.Tnavbar{
    padding: .7rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    position: relative;
    >.loadbar{
      position: absolute;
      bottom: 0px;
      height: 1px;
      left: 0px;
      background-color: var(--color-t1);
      transition: all .2s;
    }
    >.left{
      font-size: 1.3rem;
      font-weight: 600;
      color: #2c3e50;
      position: relative;
    }
    >.right{
      display: flex;
      @media screen and (max-width: 720px) {
        display: none;
      }
      >div{
        cursor: pointer;
        position: relative;
        display: inline-block;
        margin-left: 1.5rem;
        line-height: 2rem;
        font-size: .9rem;
      }
    }
  }
  >.down {
    flex: 1;
    display: flex;
    position: relative;
    >.left{
      background-color: white;
      font-size: 15px;
      width: 16.4rem;
      border-right: 1px solid #eaecef;
      overflow: auto;
      transition: .5s all;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      @media screen and (max-width: 1080px) {
        width: 14rem;
      }
      @media screen and (max-width: 720px) {
        width: 0px;
      }
      >.slideBar{
        padding: 1.5rem 0;
        transition: .5s all;
        min-width: 14rem;
        .sidebar-heading{
          color: #999;
          transition: color .15s ease;
          font-size: 1.1em;
          font-weight: 700;
          padding-left: 1.5rem;
          margin-top: 0;
          margin-bottom: .5rem;
        }
        .slide-link{
          font-weight: 400;
          display: inline-block;
          color: #2c3e50;
          border-left: .25rem solid transparent;
          padding: .35rem 1rem .35rem 1.25rem;
          line-height: 1.4;
          width: 100%;
          box-sizing: border-box;
        }
        .active {
          font-weight: 600;
          color: var(--color-t1);
          border-left-color: var(--color-t1);
        }
      }
    }
    >.body{
      flex: 1;
      max-width: 740px;
      margin: 20px auto;
      padding: 0px 2rem 0px 18.4rem;
      transition: .5s all;
      overflow: auto;
      @media screen and (max-width: 1080px) {
        padding-left: 16rem;
      }
      @media screen and (max-width: 720px) {
        padding-left: 2rem;
      }
    }
  }
}
</style>
