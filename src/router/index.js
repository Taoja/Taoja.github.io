import splitter from 'dividing/bin/splitter'

var routes = [{
    path: '/',
    redirect: '/unit'
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
    path: '/block',
    name: 'block',
    component: () => {
      return splitter('base/operate/block')
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
  }
]

export default routes