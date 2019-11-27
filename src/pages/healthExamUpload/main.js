import Vue from 'vue'
import App from './index'
import store from "./store"

import { mapState, mapGetters } from 'vuex'

const app = new Vue({
    store,
    render: h => h(App),
    mounted() {
        wx.setNavigationBarTitle(this.$root.$mp.query);
        this.title = this.$root.$mp.query.title;
        this.desc = this.$root.$mp.query.desc;
    },
    data() {
        return {
            fileList: [
                 { url: '/static/images/exam01.jpg' },
                 { url: '/static/images/exam02.jpg' },
                 { url: '/static/images/exam03.jpg' },
            ],
            captiond: "asdasdad",
            title: "",
            desc: ""
        }
    },
    methods: {
        
    },
    computed: {
        mtitle() {
            return this.$root.$mp.query.title;
        },
        mcaption() {
            return this.captiond;
        }
    }
}).$mount("#app")
