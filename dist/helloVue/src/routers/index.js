'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by martin on 2017/7/25.
 */
_vue2.default.use(_vueRouter2.default);
exports.default = new _vueRouter2.default({
    routes: [{
        path: '/',
        name: 'home',
        component: require('../components/home_component.vue')
    }, {
        path: '/secondpage',
        name: 'secondpage',
        component: require('../components/second_component.vue')
    }]
});
//# sourceMappingURL=index.js.map