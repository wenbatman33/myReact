import Home from '@/views/Home';
import About from '@/views/About';
import ReduxPages from '@/views/ReduxPages';
import ContextPage from '@/views/ContextPage';

let routes = [
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'About'
    }
  },
  {
    path:'/redux',
    component:ReduxPages,
    meta:{
      title:'Redux Pages'
    }
  },
  {
    path:'/context',
    component:ContextPage,
    meta:{
      title:'Context Page'
    }
  }
]

export default routes;
