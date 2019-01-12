import splitter from 'dividing/bin/splitter'

var routes = [{
    path: '/',
    redirect: '/base/home/index'
  },{
    path: '/base/home/index',
    name: '/base/home/index',
    component: () => {
      return splitter('base/home/index')
    }
  },{
    path: '/base/init/index',
    name: '/base/init/index',
    component: () => {
      return splitter('base/init/index')
    }
  }
]

export default routes