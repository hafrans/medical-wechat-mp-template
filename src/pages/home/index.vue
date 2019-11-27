<template>
  <div class="wrap">
    <div class="main">
      <!-- <div class="search" @click="handleSearch">
       <van-search placeholder="请输入搜索关键词"  shape="round" placeholder-style="text-align: center"></van-search>
    </div> -->
    <swiper
      class="swiper"
      indicator-dots="true"
      autoplay="true"
      circular="true"
      interval="2000"
      duration="500"
    >
      <block v-for="(item, index) in bannerUrl" :index="index" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <div class="nav-list">
      <block v-for="(item, index) in navInfo" :key="index">
        <div class="nav" @click="handleNav(item.url)">
          <van-icon :name="item.type" :color="item.color" size="80rpx"/>
          <div class="nav-title">{{item.title}}</div>
        </div>
      </block>  
    </div>
      
    </div>
    <div class="divider"></div> 
    <!-- <div class="main">
      <div class="hot-new-list">
        <block v-for="(item, index) in hotNewInfo" :key="index">
            <div class="hot-new" @click="handleNav(item.url)">
                <van-icon :name="item.type" :color="item.color" size="80rpx"/>
                <div class="desc">
                  <image :src="item.src" alt="图片" />
                </div>
            </div>
          </block>  
      </div>
    </div> -->
    <!-- <div class="divider"></div> -->
    <div class="main">
      <van-divider contentPosition="center">推荐</van-divider>
      <div class="recommend-list">
        <block v-for="(item, index) in recommendInfo" :key="index">
            <brandItem :item="item" />
            <van-divider />
        </block>
      </div>
    </div> 
  </div>
</template>

<script>
import brandItem from '../../components/brandItem.vue'

export default {
  data() {
    return {
      bannerUrl: [
        { url: "/static/images/t03.png" },
        { url: "/static/images/t02.png" },
        { url: "/static/images/t01.png" }
      ],
      navInfo: [
        {type: 'send-gift', title: '健康评估', color: '#E76262', url: '../spot/main'},
        {type: 'wap-home', title: '健康风险分析', color: '#409EFF', url: '../hotel/main'},
        
        {type: 'invition', title: '远程就医', color: '#E3B168', url: '../hotel/main'},
        {type: 'coupon', title: '中医科普讲堂', color: '#F56C6C', url: '../hotel/main'},
     
      ],
       hotNewInfo: [
        {type: 'hot', color: '#efefef', src: '/static/images/food1.jpeg', url: '../spot/main'},
        {type: 'new', color: '#efefef', src: '/static/images/beach1.jpeg', url: '../hotel/main'},
      ],
      recommendInfo: [
        {id: '30', name: '北京同仁堂安宮牛黃丸', type: 1, headIcon: '/static/images/01.jpg', funciton: '清熱解毒，鎮驚開竅的功效。用於熱病，邪入心包，高熱驚厥，神昏譫語。'},
        {id: '10', name: '同仁牛黃清心丸', headIcon: '/static/images/02.jpg', funciton: '益氣養血、鎮驚安神、化痰熄風。'},
        {id: '07', name: '同仁大活絡丹', headIcon: '/static/images/03.jpg', funciton: '袪風舒筋、活絡、除濕。用於風寒濕痺引起的肢體疼痛、手足麻木、筋骨不利、行動不便、口眼歪斜、言語不清。'},
        {id: '11', name: '再造丸', headIcon: '/static/images/04.jpg', funciton: '袪風化痰、活血通絡。適用於風痰阻絡所致的口舌歪斜，手足麻木，疼痛拘攣，言語蹇澀。'},
        {id: '12', name: '人參再造丸', headIcon: '/static/images/05.jpg', funciton: '活血化瘀、息風通絡、補氣養血。'},
        {id: '20', name: '極細珍珠粉', headIcon: '/static/images/06.jpg', funciton: '安神定驚，清肝明目，潤膚淡斑。主治驚悸怔忡，心煩失眠等症狀。'},
      ]
    }
  },
  components: {
    brandItem
  },

  methods: {
    handleSearch() {
      let url = "../search/main?type=home";
      wx.navigateTo({ url });
    },
    handleNav(url){
      wx.navigateTo({url})
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.slide-image {
  width: 100%;
  height: 300rpx;
}
.nav-list{
  margin-top: 30rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.nav{
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 30rpx;
}
.nav-title{
  color: #4f4f4f;
  font-size: 28rpx;
}
.hot-new-list{
  margin-top: 20rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hot-new{
  width: 49.2%;
  height: 200rpx;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 20rpx;
  justify-content: space-between;
  border-radius: 5rpx;
}
.hot-new:nth-child(odd){
  background-image: linear-gradient(160deg, #a200ff 20%,#cf3700 80%);
}
.hot-new:nth-child(even){
  background-image: linear-gradient(160deg, #447c73 20%,#008cff 80%);
}
.desc{
  display: flex;
  align-items: center;
  image{
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    align-items: center;
    margin-right: 20rpx;
  }
}
</style>