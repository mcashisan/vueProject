import Vue from 'vue'
import Router from 'vue-router'
//引入组件配置路由
import Child1 from "../components/Home/Child1"
<<<<<<< Updated upstream
import Child2 from '../components/Home/Child2'
=======
import Child3 from "../components/LYF/Child3"
>>>>>>> Stashed changes

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/", component:Child1},
<<<<<<< Updated upstream
    {path:"/Child2",component:Child2}
=======
    {path:"/Child3",component:Child3}
>>>>>>> Stashed changes
  ]
})
