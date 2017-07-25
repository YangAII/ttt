/**
 * Created by martin on 2017/7/25.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
    routes:[
        {
         path:'/',
        name:'HomeComponent',
        component:require('../components/home_component.vue')
    },
        {
            path:'/secondpage',
            name:'ScondComponent',
            component:require('../components/second_component.vue')
        }
    ]
})
