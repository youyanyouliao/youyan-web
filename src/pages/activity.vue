<template>
  <div class="main">
    <Header currentPageNum="2" />
    <div class="content">
      <div class="container clearFloat">
        <div class="header-ct">
          <div class="header-left-ct">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/carousel1.png" class="swiperImg" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/carousel2.png" class="swiperImg" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/carousel3.png" class="swiperImg" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="nav left ctCenter" @click="prevCarousel">
                <img src="@/assets/img/leftIcon.png" />
              </div>
              <div class="nav right ctCenter" @click="nextCarousel">
                <img src="@/assets/img/rightIcon.png" />
              </div>
            </div>
          </div>
          <div class="header-right-ct">
            <Calendar v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
          </div>
        </div>
        <div class="mod-column">
          <div class="mod-column-body">
            <div class="mod-tabbar">
              <div class="mod-tabbar-list">
                <div
                  class="mod-tabbar-item ctCenter"
                  @click="toPage(0)"
                  :class="activeIndex==0?'active':''"
                >全部活动</div>
                <div
                  class="mod-tabbar-item ctCenter"
                  @click="toPage(1)"
                  :class="activeIndex==1?'active':''"
                >线下活动</div>
                <div
                  class="mod-tabbar-item ctCenter"
                  @click="toPage(2)"
                  :class="activeIndex==2?'active':''"
                >线上活动</div>
                <div
                  class="mod-tabbar-item ctCenter"
                  @click="toPage(3)"
                  :class="activeIndex==3?'active':''"
                >进行中</div>
                <div
                  class="mod-tabbar-item ctCenter"
                  @click="toPage(4)"
                  :class="activeIndex==4?'active':''"
                >已结束</div>
                <div class="add-wrap ctCenter">
                  <img src="@/assets/img/add.png" />
                  <span>加入我们</span>
                </div>
                <div class="line" :style="{left:leftDt2}"></div>
              </div>
            </div>
            <div class="mod-list">
              <div class="mod-list-item" v-for="(item,index) in 15" v-bind:key="index">
                <div class="head-cover">
                  <img src="@/assets/img/activity_cover.png" />
                </div>
                <div class="body-ct">
                  <div class="activity-name">PMTalk2019深圳产品增长大会</div>
                  <div class="activity-date">时间：2019年09月22日</div>
                  <div class="activity-address">地点：上海 | 静安</div>
                  <div class="activity-num">人数：限额200人</div>
                </div>
                <div class="signUpBtn ctCenter">报名参加</div>
              </div>
            </div>
            <div class="pagination-wrap">
              <div class="pagination-item ctCenter">
                <img src="@/assets/img/leftIcon1.png" />
              </div>
              <div class="pagination-item ctCenter">1</div>
              <div class="pagination-item ctCenter">2</div>
              <div class="pagination-item ctCenter">3</div>
              <div class="pagination-item ctCenter">...</div>
              <div class="pagination-item ctCenter">
                <img src="@/assets/img/leftIcon2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/header";
import Footer from "./components/footer";
import Calendar from "vue-calendar-component";
export default {
  name: "homepage",
  data() {
    return {
      mySwiper: null,
      activeIndex: 0
    };
  },
  computed: {
    leftDt2: function() {
      let tmpDt = "";
      if (this.activeIndex == 0) {
        tmpDt = "22px";
      } else if (this.activeIndex == 1) {
        tmpDt = "110px";
      } else if (this.activeIndex == 2) {
        tmpDt = "198px";
      } else if (this.activeIndex == 3) {
        tmpDt = "286px";
      } else if (this.activeIndex == 4) {
        tmpDt = "374px";
      } else if (this.activeIndex == 5) {
        tmpDt = "462px";
      } else if (this.activeIndex == 6) {
        tmpDt = "550px";
      }
      return tmpDt;
    }
  },
  components: { Header, Footer, Calendar },
  methods: {
    toPage(index) {
      this.activeIndex = index;
    },
    prevCarousel() {
      this.mySwiper.slidePrev();
    },
    nextCarousel() {
      this.mySwiper.slideNext();
    },
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    }
  },
  mounted() {
    this.mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });

    //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
    new Swiper(".swiper-container");
    var mySwiper = document.querySelector(".swiper-container").swiper;
    mySwiper.slideNext();
  }
};
</script>
<style lang='less' scoped>
.content {
  .container {
    padding: 20px 130px;
    margin-top: 70px;
    .header-ct {
      width: 100%;
      display: flex;
      .header-left-ct {
        width: 620px;
        .swiper-container {
          width: 620px;
          .swiperImg {
            width: 100%;
            height: 290px;
            border-radius: 12px;
          }
          .nav {
            width: 50px;
            height: 50px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 25px;
            position: absolute;
            top: 110px;
            z-index: 9999;
            cursor: pointer;
            &.left {
              left: 18px;
            }
            &.right {
              right: 18px;
            }
          }
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 4px;
          }
          .swiper-pagination-bullet-active {
            width: 22px;
            height: 8px;
            background: #fff;
            border-radius: 4px;
          }
        }
      }
      .header-right-ct {
        width: 300px;
        margin-left: 19px;
      }
    }
    .mod-column {
      width: 100%;
      .mod-column-body {
        .mod-tabbar {
          position: relative;
          width: 100%;
          height: 40px;
          box-shadow: inset 0 -1px 0 0 #ccc;
          overflow-x: auto;
          .mod-tabbar-list {
            white-space: nowrap;
            overflow: hidden;
            .mod-tabbar-item {
              float: left;
              width: 88px;
              height: 40px;
              font-size: 12px;
              color: #999;
              cursor: pointer;
              &.active {
                color: #000;
                font-weight: bold;
              }
            }
            .add-wrap {
              float: right;
              width: 72px;
              height: 40px;
              cursor: pointer;
              img {
                width: 14px;
                height: 14px;
              }
              span {
                font-size: 12px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 17px;
                margin-left: 4px;
              }
            }
            .line {
              width: 44px;
              height: 3px;
              background-color: #333;
              position: absolute;
              bottom: 0;
              transition: all 0.5s;
            }
          }
        }
        .mod-list {
          margin-top: 11px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .mod-list-item {
            width: 300px;
            height: 320px;
            background: rgba(245, 245, 245, 1);
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            margin-top: 20px;
            .head-cover {
              height: 180px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .body-ct {
              height: 140px;
              box-sizing: border-box;
              padding: 11px 18px 0 18px;
              .activity-name {
                font-size: 16px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                line-height: 22px;
              }
              .activity-date {
                margin-top: 28px;
                font-size: 12px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 17px;
              }
              .activity-address {
                margin-top: 4px;
                font-size: 12px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 17px;
              }
              .activity-num {
                margin-top: 4px;
                font-size: 12px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 17px;
              }
            }
            .signUpBtn {
              position: absolute;
              right: 15px;
              bottom: 20px;
              width: 78px;
              height: 34px;
              background: rgba(253, 205, 0, 1);
              border-radius: 22px;
              font-size: 12px;
              font-weight: 600;
              color: rgba(0, 0, 0, 1);
              line-height: 17px;
            }
          }
        }
        .pagination-wrap {
          display: flex;
          justify-content: center;
          margin-top: 192px;
          margin-bottom: 56px;
          .pagination-item {
            width: 40px;
            height: 40px;
            border-radius: 25px;
            border: 1px solid rgba(204, 204, 204, 1);
            font-size: 15px;
            font-weight: 300;
            color: rgba(51, 51, 51, 1);
            line-height: 21px;
          }
        }
      }
    }
  }
}
</style>
<style>
.wh_content_all {
  background-color: #f5f5f5 !important;
}
.wh_item_date {
  color: #333333 !important;
}
.wh_top_tag {
  color: #333333 !important;
}
.wh_content_li {
  color: #333333 !important;
}
.wh_jiantou1 {
  border-top: 2px solid #333333 !important;
  border-left: 2px solid #333333 !important;
}
.wh_jiantou2 {
  border-top: 2px solid #333333 !important;
  border-right: 2px solid #333333 !important;
}
.wh_other_dayhide {
  color: #999 !important;
}
.wh_chose_day {
  background: #fdcd00 !important;
}
</style>