import splitter from 'dividing/bin/splitter'

var routes = [{
    path: '/',
    redirect: '/action'
  },{
    path: '/action',
    name: 'action',
    component: () => {
      return splitter('base/base/action')
    }
  },{
    path: '/unit',
    name: 'unit',
    component: () => {
      return splitter('base/base/unit')
    }
  },{
    path: '/color',
    name: 'color',
    component: () => {
      return splitter('base/base/color')
    }
  },{
    path: '/sort',
    name: 'sort',
    component: () => {
      return splitter('base/operate/sort')
    }
  },{
    path: '/button',
    name: 'button',
    component: () => {
      return splitter('base/operate/button')
    }
  },{
    path: '/popup',
    name: 'popup',
    component: () => {
      return splitter('base/operate/popup')
    }
  },{
    path: '/dialog',
    name: 'dialog',
    component: () => {
      return splitter('base/operate/dialog')
    }
  },{
    path: '/toast',
    name: 'toast',
    component: () => {
      return splitter('base/operate/toast')
    }
  },{
    path: '/picker',
    name: 'picker',
    component: () => {
      return splitter('base/operate/picker')
    }
  },{
    path: '/actionSheet',
    name: 'actionSheet',
    component: () => {
      return splitter('base/operate/actionSheet')
    }
  },{
    path: '/mask',
    name: 'mask',
    component: () => {
      return splitter('base/operate/mask')
    }
  },{
    path: '/scroll',
    name: 'scroll',
    component: () => {
      return splitter('base/operate/scroll')
    }
  },{
    path: '/grid',
    name: 'grid',
    component: () => {
      return splitter('grid/grid/grid')
    }
  },{
    path: '/carousel',
    name: 'carousel',
    component: () => {
      return splitter('grid/grid/carousel')
    }
  },{
    path: '/notice',
    name: 'notice',
    component: () => {
      return splitter('grid/grid/notice')
    }
  },{
    path: '/row',
    name: 'row',
    component: () => {
      return splitter('grid/grid/row')
    }
  },{
    path: '/cell',
    name: 'cell',
    component: () => {
      return splitter('view/view/cell')
    }
  },{
    path: '/cellInput',
    name: 'cellInput',
    component: () => {
      return splitter('view/view/cellInput')
    }
  },{
    path: '/group',
    name: 'group',
    component: () => {
      return splitter('view/view/group')
    }
  },{
    path: '/switch',
    name: 'switch',
    component: () => {
      return splitter('view/view/switch')
    }
  },{
    path: '/search',
    name: 'search',
    component: () => {
      return splitter('view/view/search')
    }
  },{
    path: '/page',
    name: 'page',
    component: () => {
      return splitter('navigate/navigate/page')
    }
  },{
    path: '/header',
    name: 'header',
    component: () => {
      return splitter('navigate/navigate/header')
    }
  },{
    path: '/datepicker',
    name: 'datepicker',
    component: () => {
      return splitter('high/high/datepicker')
    }
  },{
    path: '/gestures',
    name: 'gestures',
    component: () => {
      return splitter('high/high/gestures')
    }
  },{
    path: '/keyboard',
    name: 'keyboard',
    component: () => {
      return splitter('high/high/keyboard')
    }
  }
]

export default routes