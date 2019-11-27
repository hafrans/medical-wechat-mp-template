<template>
  <div class="wrap">
    <div class="personalizedMaintenance">
      <van-tabs swipe-threshold="3" color="#409EFF" @click="onClick">
          <van-tab name="0" title="中医药膳方案">
            <div class="content">
              <div class="title">中医药膳食疗推荐</div>
              <div class="rehead">根据您的健康分析，为您制定了详细的食疗方案：</div>
              <div class="article" v-for="(item,index) in recipe" :key="index">
                <div class="recipeTitle">{{item.title}}</div>
                <text class="recipeCon">{{item.content}}</text>
              </div>
            </div>
          </van-tab>
          <van-tab name="1" title="中医调理方案"></van-tab>
          <van-tab name="2" title="在线营养师"></van-tab>
      </van-tabs>
    </div>
      
  </div>
</template>
<script>
import { orderType } from '@/components/constants/index'
export default {
  data(){
    return {
     recipe: [
       {
         title: '食谱：',
         content: '补气虚食品：牛肉、鸡肉、猪肉、糯米、大豆、白扁豆、大枣、鲫鱼、鲤鱼、鹌鹑、黄鳝、虾、蘑菇等。可经常交替选服',
       },
       {
         title: '1. 沙参山药粥 ',
         content: '功效：益气养阴、健脾养胃、清心安神；\n 原料：沙参、山药、莲子、葡萄干各20克，糖适量，粳米50克；\n制作：先将山药切成小片，与莲子、沙参一起泡透后，再加入所有材料，放入砂锅内加水用火煮沸后，再用小火熬成粥',
       },
       {
         title: '2、海参粥',
         content: '取海参15克，大米60克，葱、姜末适量。将海参用温水泡发后洗净切成小块，大米洗净，入锅中加入海参、葱、姜末、盐及水熬成粥即可\n功效：滋阴养血、清泻虚火',
       },
       {
         title: '3、清补凉瘦肉汤',
         content: '主料：瘦肉250克（5两）,生熟薏米10克（2钱）,莲子5克（1钱）,百合5克（1钱）,淮生10克（2钱）,玉竹5克（1钱）,茨实5克（1钱）\n清补凉瘦肉汤的特色：此汤清甜滋补，有去湿开胃，除痰健肺等温和清凉功效，特别适宜身体瘦弱，虚不受补者饮用，是夏秋季节的合时汤水',
       },
       {
         title: '4、爆人参鸡片',
         content: '原料：鲜人参15克，鸡脯肉200克，冬笋25克，黄瓜25克，鸡蛋清1 个，精盐、料酒、葱、生姜、香菜粳 、鸡汤、猪油、芝麻油、 味精、水豆粉各适量\n1.将鸡脯片切成5厘米、宽1.6厘米、厚0.16厘米的片；人参洗净，斜刀切成0.6厘米厚的小片；冬笋、黄瓜切片；葱, 姜切丝；香菜粳切长段。\n2. 将鸡片加盐、味精后拌匀，下入鸡蛋清、水豆粉拌匀\n3. 将勺内放猪油，烧至五成热时，下入鸡片，用铁筷子划 开，熟时捞出，控净油\n4. 用精盐、味精、鸡汤、料酒对成汁水\n5.将勺内放底油，烧至六成热时，下入葱丝、生姜丝、笋片、 人参片煸炒，再下黄瓜片、香菜梗、鸡片，烹上汁水，颠翻几下，淋上明油即成',
       },
     ]
    }
  },
  methods: {
    goMakeComment(){
      const url = '/pages/makeComment/main';
      wx.navigateTo({url})
    },
    onClick(e){
      console.log(e)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.content {
  padding: 40rpx;
  line-height: 50rpx;
  .title {
  color: rgb(153,51,51);
  text-align: center;
  padding-bottom: 20rpx;
  }
  .rehead {
  line-height: 50rpx;
  padding-left: 20rpx;
  font-size: 30rpx
  }
  .recipeTitle {
    color: rgb(153,51,51);
    font-size: 30rpx;
    font-weight: bold;
  }
  .recipeCon {
    font-size: 30rpx;
  }
}

</style>