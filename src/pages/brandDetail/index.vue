<template>
  <div class="wrap">
    <brandHeadDetail :detail="detail" />
    <div class="divider"></div>
    <!-- <packageList :packageInfo="packageInfo" :detail="detail"/> -->
    <div class="attention">
      注意事项
      <div v-for="(item,index) in attentionList" :key="index" class="attentionCon">
        <span class="symbol">>></span>{{item.list}}
      </div>
    </div>
    <div class="divider"></div>
    <!-- <div class="comment-conatiner">
      <div class="comment-head">
        <div class="comment-cell">
          <van-cell :title="cellTitle" is-link link-type="navigateTo" url="/pages/comment/index"/>
        </div>
        <div class="comment-type">
          <van-tabs type="card" color="#afafaf">
            <van-tab title="全部">

            </van-tab>
            <van-tab title="最新">

            </van-tab>
            <van-tab title="晒图评价">

            </van-tab>
          </van-tabs>
        </div>
      </div>
      <div class='comment-list' >
        <block v-for="(item, index) in commentList" :key="index">
          <div class="comment-item" v-if="index < 3">
            <div class='avatar-info'>
              <image :src='item.avatarUrl' mode="aspectFill"/>
            </div>
            <div class='main-info'>
              <div class='name-info'>{{item.userName}}</div>
              <div class='score-date'>
                <div class="score">
                  <van-rate
                    readonly
                    :value="item.score"
                    size="15"
                    allow-half
                    color="#F90"
                    void-color="#eee"
                    void-icon="star"
                    :change="onScoreChange"
                  />
                </div>
                <div class='date'>{{item.commentTime}}</div>
              </div>
              <div class='comment-info'>
                <div :class='detailClass[visible]'>{{item.comment}}</div>
                <div v-if="item.picUrls.length > 0" class='pic-info'>
                  <van-grid :border="borderShow" gutter="5" column-num="4">
                    <van-grid-item use-slot v-for="(pic, idx) in item.picUrls" :key="idx">
                      <image v-if="idx < 4" style="width: 140rpx; height: 140rpx;" mode="aspectFill" :src='pic.url'  @click='imgPreview(index,idx)'/>
                    </van-grid-item>  
                  </van-grid>
                </div>
              </div>
            </div>
          </div>
          <div v-if="index < commentList.length-1">
            <van-divider />
          </div>
        </block>
      </div>
      <van-cell title="查看全部用户评价" is-link :value="cellValue" />
    </div> -->
     <!-- <CommentList :commentList="commentList" :type="0" :category="detail.category" :id="detail.id" /> -->
    <!-- <div class="divider"></div>
     <div class="main">
       <div class="recommend">推荐</div>
      <van-divider />
      <div class="recommend-list">
        <block v-for="(item, index) in recommendInfo" :key="index">
            <brandItem :item="item" />
            <van-divider />
        </block>
      </div>
    </div>  -->
  </div>
</template>

<script>
// import { getComments } from '../../services/api.js'
import brandHeadDetail from '@/components/brandHeadDetail/index.vue'
import packageList from '@/components/packageList/index.vue'
import CommentList from '@/components/CommentList.vue'
import brandItem from '@/components/brandItem.vue'
export default {
  data() {
    return {
      attentionList: [
        {list: '本品為熱閉神昏所設, 寒閉神昏不得使用。'}, {list: '運動員及過敏體質者慎用。'}, {list: '服藥期間飲食宜清淡, 忌食辛辣食物。'},
        {list: '本品含朱砂、雄黃, 不宜過量、久用, 肝腎功能不全者慎用。'}, {list: '在治療過程中出現肢寒畏冷, 面色蒼白, 冷汗不止, 脈微欲絕, 由閉證變為脫證時應立即停藥。'}, {list: '服食過量可能會有危險。'},
        {list: '兒童必須在成人的監護下使用。'}, {list: '如正服用其他藥品，使用本品前請諮詢醫師。'}, {list: '服用前應除去蠟皮、塑膠球殼及玻璃紙；本品可嚼服，也可分份吞服。'},
      ],
      detail: {
        category: 0,
        name: '北京同仁堂安宮牛黃丸',
        headIcon: '/static/images/01.jpg',
        type: 1,
        id: '00',
        specifications: '每盒1蠟殼丸，每蠟殼丸1丸，每丸重3克。',
        function: '「北京同仁堂安宮牛黃丸」依照清代著名溫病學家吳鞠通《溫病條辯》之古方，配合同仁堂精良炮製方法，產品專門應對突發的心腦血管健康問題，傳承至今，造福多代廣大民眾。 有清熱解毒，鎮驚開竅的功效。用於熱病，邪入心包，高熱驚厥，神昏譫語。',
        composition: '天然牛黃、天然麝香、珍珠、黃連、黃芩、梔子、朱砂、雄黃、鬱金、冰片、水牛角濃縮粉等名貴藥材。',
        instruction: '口服，一次1丸，一日一次。 本品連續服用不宜超過三天，或遵醫囑',
        address: '日照市东港区绿舟路东夷小镇B岛北街',
        phone: '17810272102',
      },
      packageInfo: [
        {id: 'p30', name: '成人票', fullName: '东夷海洋馆成人票', soldNum: 300, subInfo: '随买随用', category: 3, type: 1, price: '120', value: '150', score: '4.5', headIcon: '/static/images/sea4.jpg', validTime: '2019-12-31'},
        {id: 'p10', name: '学生票', fullName: '东夷海洋馆学生票', soldNum: 600, subInfo: '随买随用', category: 1, type: 2, price: '80', value: '100', score: '5', headIcon: '/static/images/sea3.jpg', validTime: '2019-12-31'},
        {id: 'p07', name: '优惠票', fullName: '东夷海洋馆优惠票', soldNum: 370, subInfo: '随买随用', category: 0, type: 1, price: '60', value: '80', score: '3.5', headIcon: '/static/images/sea6.jpg', validTime: '2019-12-31'},
        {id: 'p11', name: '团体票10人', fullName: '东夷海洋馆团体票', soldNum: 547, subInfo: '随买随用', category: 1, type: 0, price: '899', value: '1000', score: '3', headIcon: '/static/images/sea8.jpg', validTime: '2019-12-31'},
        {id: 'p12', name: '情侣票', fullName: '东夷海洋馆情侣票', soldNum: 1200, subInfo: '随买随用', category: 1, type: 3, price: '200', value: '250', score: '4.5', headIcon: '/static/images/sea7.jpg', validTime: '2019-12-31'},
        {id: 'p20', name: '家庭票', fullName: '东夷海洋馆家庭票', soldNum: 400, subInfo: '随买随用', category: 2, type: 1, price: '499', value: '600', score: '2.5', headIcon: '/static/images/sea2.jpg', validTime: '2019-12-31'},
      ],
      commentList: [
        {
          cid: 'c0', 
          userName: 'Tiamin', 
          avatarUrl: '/static/images/head1.jpg', 
          commentTime: '2019-04-20', 
          score: '4.5',
          comment: '海洋馆里分几个部分，有不同的动物主题，大大小小的生物不少，环境还不错，一进门就像雨林似的，有代入感，每天定时有海洋动物表演，不过总体看下来内容不是很丰富，主要是海豚的表现会让人兴奋一下下，一些很小的生物在玻璃缸里游动，在灯光下仔细观察还是挺有意思的，中间看鲸鱼，被它的声音吸引。海洋馆里还有餐饮区和购物区，价格也是不便宜，总体来说，还是值得一逛，就是小贵', 
          picUrls: [
            {
              pid: 'p0', 
              url: '/static/images/sea1.jpg'},
            {
              pid: 'p1', 
              url: '/static/images/sea4.jpg'},
            {
              pid: 'p2', 
              url: '/static/images/sea2.jpg'},
            {
              pid: 'p3', 
              url: '/static/images/sea5.jpg'},
            {
              pid: 'p4', 
              url: '/static/images/sea6.jpg'},
            {
            pid: 'p4', 
            url: '/static/images/sea7.jpg'},
          ]
        },
        { 
          cid: 'c1', 
          userName: 'Adam', 
          avatarUrl: '/static/images/head3.jpg', 
          commentTime: '2019-01-20', 
          score: '3.5',
          comment: '去的时候人非常多，爆满，有白鲸、海狮，海豚等表演，里面还有各种海底世界的鱼类，最值得一提的就是里面的发光水母，真的好美好美', 
          picUrls: [
            {
              pid: 'p8', 
              url: '/static/images/sea3.jpg'},
          ]
        },
        {
          cid: 'c2', 
          userName: 'Joe', 
          avatarUrl: '/static/images/sea8.jpg', 
          commentTime: '2019-05-18', 
          score: '3.5',
          comment: '总体来说还是不错的！但是不知道为什么取消了“触摸池”，不能真正实际感受海洋生物了……', 
          picUrls: [],
        },
        {
          cid: 'c3', 
          userName: 'Tom', 
          avatarUrl: '/static/images/head4.jpg', 
          commentTime: '2019-06-20', 
          score: '3.5',
          comment: '海底隧道也有点太短了吧 而且买了和动物园的通票还必须要从海洋馆那个门进入 导致从动物园正门绕过去心情已经down了一大半 但是水母照出来依旧是好看的～', 
          picUrls: [],
        },
      ],
      recommendInfo: [
        {id: '10', name: '空中花园西餐厅', category: 4, type: 2, avgPrice: '120.00', score: '5', headIcon: '/static/images/food1.jpeg'},
        {id: '07', name: '古北海洋馆', category: 0, type: 1, avgPrice: '100.00', score: '3.5', headIcon: '/static/images/sea8.jpg'},
        {id: '11', name: '胖哥俩蟹肉煲', category: 4, type: 0, avgPrice: '120.00', score: '3', headIcon: '/static/images/hotel1.jpeg'},
        {id: '12', name: '金沙滩', category: 0, type: 3, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/beach1.jpeg'},
        {id: '20', name: 'season hotel', category: 1, type: 1, avgPrice: '120.00', score: '2.5', headIcon: '/static/images/hotel2.jpeg'},
      ]
    }
  },

  computed: {
    cellTitle(){
      return `用户评价(${this.commentList.length})`
    },
    cellValue(){
      return `共${this.commentList.length}条`
    }
  },

  components: {
    brandHeadDetail,
    packageList,
    CommentList,
    brandItem,
  },

  methods: {
  },

  async mounted() {
    console.log('params:', this.$root.$mp.query);
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.recommend{
  font-size: 28rpx;
  color: #afafaf;
  margin-top: 20rpx;
}
.attention {
  padding: 20rpx;
  .attentionCon {
    font-size: 25rpx;
   line-height: 50rpx;
    .symbol {
      color: rgb(153,51,51);
    }
  }
}
</style>