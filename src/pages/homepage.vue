<template>
  <div class="main">
    <Header currentPageNum="0" />
    <div class="content">
      <div class="container clearFloat">
        <div class="left-panel">
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
          <div class="notice">
            <div class="logo">有言</div>有言公告
            <label>|</label>一分钟get设计干货，本文将从面试准备、面试中技巧以及面试后复盘好啊
          </div>
          <div class="mod-column">
            <div class="mod-column-head">
              <div class="title">文章精选</div>
              <div class="desc">收集全球有帮助的沉淀</div>
              <img src="@/assets/img/moreIcon.png" class="moreIcon" />
            </div>
            <div class="mod-column-body">
              <div class="mod-tabbar">
                <div class="mod-tabbar-list">
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage2(0)"
                    :class="activeIndex2==0?'active':''"
                  >最新文章</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage2(1)"
                    :class="activeIndex2==1?'active':''"
                  >视觉设计</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage2(2)"
                    :class="activeIndex2==2?'active':''"
                  >交互设计</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage2(3)"
                    :class="activeIndex2==3?'active':''"
                  >用户研究</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage2(4)"
                    :class="activeIndex2==4?'active':''"
                  >产品运营</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage2(5)"
                    :class="activeIndex2==5?'active':''"
                  >职场管理</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage2(6)"
                    :class="activeIndex2==6?'active':''"
                  >我的订阅</div>
                  <div class="line" :style="{left:leftDt2}"></div>
                </div>
              </div>
              <div class="mod-list">
                <div class="mod-list-item" v-for="(item,index) in 10" v-bind:key="index">
                  <div class="product-image">
                    <img src="@/assets/img/cover.png" />
                  </div>
                  <div class="product-title">写给不懂设计思维的设计师</div>
                  <div
                    class="product-desc"
                  >这几年来，我发现，许多人，读书、学习时，总会有三个特点。追求收集。如获至宝地收集各种现成的笔记、参考资料，虽然很可能收啊啊啊啊啊</div>
                  <div class="product-meta">
                    <img src="@/assets/img/headimg.jpg" class="headImg" />
                    <span class="author">三分设</span>
                    <div class="dot"></div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="praise ctCenter">
                      <img src="@/assets/img/zanIcon.png" class="zanIcon" />
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="moreInfo ctCenter">查看更多</div>
            </div>
          </div>
        </div>
        <div class="right-list">
          <div class="newest-activity">
            <div class="activity-title">
              <span>最新活动</span>
              <img src="@/assets/img/moreIcon.png" />
            </div>
            <img src="@/assets/img/activity.png" class="activity-poster" />
            <div class="desc">有言在鲜 | 2019释放设计力 生存与未来——江南大学站</div>
            <div class="date">
              <img src="@/assets/img/clockIcon2.png" class="clockIcon" />
              <span>2019.05.22 13:00-20:00</span>
            </div>
            <div class="address">
              <img src="@/assets/img/locatIcon.png" class="locatIcon" />
              <span>无锡江南大学 | 全网直播</span>
            </div>
            <div class="logoIcon ctCenter">三分设</div>
          </div>
          <div class="circle">
            <div class="circle-title">
              <span>交流圈子</span>
              <label>找到靠谱组织</label>
            </div>
            <div class="circle-list">
              <div class="circle-item">
                <span>上海交流群</span>
                <img src="@/assets/img/addIcon.png" />
              </div>
              <div class="circle-item">
                <span>杭州交流群</span>
                <img src="@/assets/img/addIcon.png" />
              </div>
              <div class="circle-item">
                <span>安徽交流群</span>
                <img src="@/assets/img/addIcon.png" />
              </div>
              <div class="circle-item">
                <span>深圳交流群</span>
                <img src="@/assets/img/addIcon.png" />
              </div>
              <div class="circle-item">
                <span>招聘/内推群</span>
                <img src="@/assets/img/addIcon.png" />
              </div>
            </div>
          </div>
          <div class="resource-list">
            <div class="resource-item">
              <img src="@/assets/img/diamondIcon.png" />
              <div class="name">UI KITS设计资源</div>
              <div class="update-info">更新2321项</div>
              <div class="num ctCenter">23902</div>
              <div class="toNow">2天前</div>
            </div>
            <div class="resource-item">
              <img src="@/assets/img/bookIcon.png" />
              <div class="name">设计师必备书籍</div>
              <div class="update-info">更新32本</div>
              <div class="num ctCenter">222</div>
              <div class="toNow">2天前</div>
            </div>
          </div>
          <div class="work-list">
            <div class="work-item">
              <img src="@/assets/img/headimg.jpg" class="headImg" />
              <div class="author">中国不移动</div>
              <div class="occupation">销售</div>
              <div class="require">
                <div class="address">
                  <img src="@/assets/img/locatIcon.png" class="locatIcon" />
                  <span>北京</span>
                </div>
                <div class="experience">
                  <img src="@/assets/img/bagIcon.png" class="bagIcon" />
                  <span>5年以上</span>
                </div>
                <div class="wallet">
                  <img src="@/assets/img/starIcon2.png" class="starIcon2" />
                  <span>15~30k/月</span>
                </div>
              </div>
              <div class="toNow">2天前</div>
            </div>
            <div class="work-item">
              <img src="@/assets/img/headimg.jpg" class="headImg" />
              <div class="author">中国不联通</div>
              <div class="occupation">高级用户研究师</div>
              <div class="require">
                <div class="address">
                  <img src="@/assets/img/locatIcon.png" class="locatIcon" />
                  <span>北京</span>
                </div>
                <div class="experience">
                  <img src="@/assets/img/bagIcon.png" class="bagIcon" />
                  <span>5年以上</span>
                </div>
                <div class="wallet">
                  <img src="@/assets/img/starIcon2.png" class="starIcon2" />
                  <span>15~30k/月</span>
                </div>
              </div>
              <div class="toNow">2天前</div>
            </div>
          </div>
          <div class="recommend-authors">
            <div class="recommend-title">
              <span>推荐作者</span>
              <label>聚集创新的知识</label>
              <img src="@/assets/img/moreIcon.png" />
            </div>
            <div class="author-list">
              <div class="author-item">
                <img src="@/assets/img/headimg.jpg" class="headImg" />
                <div class="name">网易UEDC</div>
                <div class="desc">网易用户体验设计中心</div>
                <div class="add ctCenter">
                  <img src="@/assets/img/addIcon.png" />
                </div>
              </div>
              <div class="author-item">
                <img src="@/assets/img/headimg.jpg" class="headImg" />
                <div class="name">58UXD</div>
                <div class="desc">58用户体验设计中心</div>
                <div class="add ctCenter">
                  <img src="@/assets/img/addIcon.png" />
                </div>
              </div>
              <div class="author-item">
                <img src="@/assets/img/headimg.jpg" class="headImg" />
                <div class="name">李少加</div>
                <div class="desc">进化式运营作者</div>
                <div class="add ctCenter">
                  <img src="@/assets/img/addIcon.png" />
                </div>
              </div>
              <div class="author-item">
                <img src="@/assets/img/headimg.jpg" class="headImg" />
                <div class="name">TONY</div>
                <div class="desc">人生就是一场长跑</div>
                <div class="add ctCenter">
                  <img src="@/assets/img/addIcon.png" />
                </div>
              </div>
              <div class="author-item">
                <img src="@/assets/img/headimg.jpg" class="headImg" />
                <div class="name">腾讯研究院</div>
                <div class="desc">腾讯研究院是腾讯公司成立</div>
                <div class="add ctCenter">
                  <img src="@/assets/img/addIcon.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="hot-article">
            <div class="article-title">
              <span>热门文章</span>
              <label>聚集创新的知识</label>
              <img src="@/assets/img/moreIcon.png" />
            </div>
            <div class="article-list">
              <div class="article-item">业界动态 | 中台是个什么鬼?</div>
              <div class="article-item">交互体验 | 交互设计的三个层次</div>
              <div class="article-item">营销推广 | B2B营销很难做?学会搭建介媒</div>
              <div class="article-item">业界动态 | 产品经理眼里的B2C/O2O/新零售</div>
              <div class="article-item">AI人工智能 | 机器学习 | 特征工程</div>
            </div>
          </div>
          <div class="recommend-book">
            <div class="book-title">
              <span>好书推荐</span>
              <label>所有阅读都是自己的</label>
              <img src="@/assets/img/moreIcon.png" />
            </div>
            <div class="book-list">
              <div class="book-item">产品经理入门攻略</div>
              <div class="book-item">破茧成蝶2——以产品为中心的设计革命</div>
              <div class="book-item">数据产品经理修炼手册</div>
              <div class="book-item">幕后手册：打造突破式产品思维</div>
              <div class="book-item-withbook">
                <img src="@/assets/img/book-example.png" class="bookImg" />
                <div class="title">幕后产品：打造突破式产品思维</div>
                <div class="desc">腾讯原高级产品经理力作!</div>
              </div>
              <div class="book-item">数据产品经理修炼手册</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partners">
      <div class="content">
        <div class="title">合作伙伴</div>
        <div class="logo-list">
          <img src="@/assets/img/partner-logo.png" v-for="(item,index) in 12" v-bind:key="index" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/header";
import Footer from "./components/footer";
export default {
  name: "homepage",
  data() {
    return {
      mySwiper: null,
      activeIndex2: 0
    };
  },
  computed: {
    leftDt2: function() {
      let tmpDt = "";
      if (this.activeIndex2 == 0) {
        tmpDt = "22px";
      } else if (this.activeIndex2 == 1) {
        tmpDt = "110px";
      } else if (this.activeIndex2 == 2) {
        tmpDt = "198px";
      } else if (this.activeIndex2 == 3) {
        tmpDt = "286px";
      } else if (this.activeIndex2 == 4) {
        tmpDt = "374px";
      } else if (this.activeIndex2 == 5) {
        tmpDt = "462px";
      } else if (this.activeIndex2 == 6) {
        tmpDt = "550px";
      }
      return tmpDt;
    }
  },
  components: { Header, Footer },
  methods: {
    toPage2(index) {
      this.activeIndex2 = index;
    },
    prevCarousel() {
      this.mySwiper.slidePrev();
    },
    nextCarousel() {
      this.mySwiper.slideNext();
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
    .left-panel {
      position: relative;
      float: left;
      width: 620px;
      .swiper-container {
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
      .notice {
        position: relative;
        margin-top: 10px;
        width: 620px;
        height: 50px;
        background: #f5f5f5;
        border-radius: 25px;
        box-sizing: border-box;
        padding: 15px 14px 14px 52px;
        white-space: nowrap;
        font-size: 15px;
        font-weight: 300;
        text-overflow: ellipsis;
        overflow: hidden;
        .logo {
          width: 36px;
          height: 36px;
          border-radius: 100%;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: #000;
          position: absolute;
          top: 7px;
          left: 6px;
        }
        label {
          margin-left: 4px;
          margin-right: 4px;
        }
      }
      .mod-column {
        margin-top: 20px;
        width: 100%;
        .mod-column-head {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          position: relative;
          .title {
            font-size: 20px;
          }
          .desc {
            font-size: 12px;
            color: rgba(153, 153, 153, 1);
            margin-left: 8px;
          }
          .moreIcon {
            position: absolute;
            right: 0;
            width: 22px;
            height: 22px;
          }
        }
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
            .mod-list-item {
              width: 100%;
              min-height: 170px;
              box-sizing: border-box;
              padding: 23px 0 22px 240px;
              position: relative;
              .product-image {
                position: absolute;
                top: 12px;
                left: 0;
                width: 220px;
                height: 140px;
                img {
                  display: block;
                  width: 100%;
                  height: 100%;
                  border-radius: 12px;
                  object-fit: cover;
                }
              }
              .product-title {
                font-size: 20px;
                color: #333;
                font-weight: 500;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
              .product-desc {
                font-size: 12px;
                color: #333;
                margin-top: 10px;
                height: 35px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .product-meta {
                width: 100%;
                height: 32px;
                margin-top: 27px;
                position: relative;
                display: flex;
                font-size: 12px;
                color: #999;
                align-items: center;
                .headImg {
                  width: 32px;
                  height: 32px;
                  border-radius: 100%;
                }
                .author {
                  margin-left: 9px;
                }
                .dot {
                  margin-left: 14px;
                  margin-right: 14px;
                  border-radius: 100%;
                  width: 4px;
                  height: 4px;
                  background-color: #999;
                }
                .date {
                  width: 86px;
                  .clockIcon {
                    width: 10px;
                    height: 10px;
                  }
                  span {
                    margin-left: 4px;
                  }
                }
                .view {
                  width: 49px;
                  position: absolute;
                  right: 79px;
                  .viewIcon {
                    width: 12px;
                    height: 8px;
                  }
                  span {
                    margin-left: 4px;
                  }
                }
                .star {
                  width: 39px;
                  position: absolute;
                  right: 39px;
                  .starIcon {
                    width: 12px;
                    height: 12px;
                  }
                  span {
                    margin-left: 4px;
                  }
                }
                .praise {
                  width: 39px;
                  position: absolute;
                  right: 0;
                  .zanIcon {
                    width: 12px;
                    height: 12px;
                  }
                  span {
                    margin-left: 4px;
                  }
                }
              }
            }
          }
          .moreInfo {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #333;
            font-size: 15px;
            font-weight: 300;
            background: #f5f5f5;
            border-radius: 25px;
            margin-top: 10px;
          }
        }
      }
    }
    .right-list {
      float: right;
      width: 300px;
      .newest-activity {
        width: 100%;
        position: relative;
        margin-top: 0;
        border-radius: 12px;
        padding: 14px 15px 15px 19px;
        background: #f5f5f5;
        box-sizing: border-box;
        .activity-title {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            font-size: 20px;
            font-weight: 300;
            color: #333;
          }
          img {
            width: 22px;
            height: 22px;
          }
        }
        .activity-poster {
          width: 261px;
          height: 137px;
        }
        .desc {
          width: 261px;
          height: 40px;
          font-weight: 300;
          font-size: 14px;
          margin-top: 8px;
          color: #333;
        }
        .date {
          height: 17px;
          width: 261px;
          margin-top: 5px;
          display: flex;
          align-items: center;
          .clockIcon {
            width: 11px;
            height: 11px;
          }
          span {
            font-size: 12px;
            color: #999;
            margin-left: 6px;
          }
        }
        .address {
          height: 17px;
          width: 261px;
          margin-top: 3px;
          display: flex;
          align-items: center;
          .locatIcon {
            width: 11px;
            height: 12px;
          }
          span {
            font-size: 12px;
            color: #999;
            margin-left: 6px;
          }
        }
        .logoIcon {
          width: 32px;
          height: 32px;
          border-radius: 100%;
          font-weight: bold;
          color: #000;
          position: absolute;
          background: #fff;
          bottom: 16px;
          right: 16px;
          font-size: 8px;
        }
      }
      .circle {
        width: 300px;
        box-sizing: border-box;
        padding: 14px 23px 20px 18px;
        background: #f5f5f5;
        border-radius: 12px;
        margin-top: 20px;
        .circle-title {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          span {
            color: #333;
            font-size: 20px;
            font-weight: 300;
          }
          label {
            font-size: 12px;
            color: #999;
            margin-left: 5px;
          }
        }
        .circle-list {
          .circle-item {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              color: #333;
              font-size: 14px;
              font-weight: 400;
            }
            img {
              width: 12px;
              height: 12px;
            }
          }
        }
      }
      .work-list {
        .work-item {
          width: 299px;
          height: 100px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid #ccc;
          position: relative;
          padding: 19px 0px 20px 92px;
          margin-top: 20px;
          box-sizing: border-box;
          .headImg {
            width: 70px;
            height: 70px;
            border-radius: 100%;
            position: absolute;
            top: 15px;
            left: 13px;
          }
          .author {
            font-size: 12px;
            color: #000;
            font-weight: 500;
          }
          .occupation {
            margin-top: 2px;
            font-size: 14px;
            color: #000;
            font-weight: 400;
          }
          .require {
            display: flex;
            align-items: center;
            width: 100%;
            height: 14px;
            margin-top: 8px;
            .address {
              display: flex;
              align-items: center;
              height: 14px;
              width: 50px;
              img {
                width: 12px;
                height: 13px;
              }
              span {
                font-size: 10px;
                color: #4a4a4a;
                margin-left: 4px;
              }
            }
            .experience {
              display: flex;
              align-items: center;
              height: 14px;
              width: 62px;
              img {
                width: 12px;
                height: 12px;
              }
              span {
                font-size: 10px;
                color: #4a4a4a;
                margin-left: 4px;
              }
            }
            .wallet {
              display: flex;
              align-items: center;
              height: 14px;
              width: 72px;
              img {
                width: 14px;
                height: 12px;
              }
              span {
                font-size: 10px;
                color: #4a4a4a;
                margin-left: 4px;
              }
            }
          }
          .toNow {
            position: absolute;
            font-size: 10px;
            color: #4a4a4a;
            top: 18px;
            right: 18px;
          }
        }
      }
      .resource-list {
        .resource-item {
          width: 299px;
          height: 100px;
          border-radius: 12px;
          position: relative;
          padding: 19px 0px 20px 92px;
          margin-top: 20px;
          box-sizing: border-box;
          background: linear-gradient(
            133deg,
            rgba(0, 141, 255, 1) 0%,
            rgba(18, 96, 230, 1) 100%
          );

          img {
            width: 60px;
            height: 51px;
            position: absolute;
            top: 24px;
            left: 16px;
          }
          .name {
            font-size: 16px;
            color: #fff;
          }
          .update-info {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 400;
            margin-top: 3px;
          }
          .num {
            width: 51px;
            height: 17px;
            border-radius: 8.5px;
            background-color: rgba(0, 0, 0, 0.2);
            font-size: 12px;
            color: #fff;
            margin-top: 4px;
          }
          .toNow {
            position: absolute;
            font-size: 10px;
            color: #fff;
            top: 18px;
            right: 18px;
          }
        }
      }
      .recommend-authors {
        width: 100%;
        background: #f5f5f5;
        border-radius: 12px;
        margin-top: 20px;
        padding-bottom: 20px;
        .recommend-title {
          width: 100%;
          height: 50px;
          position: relative;
          box-sizing: border-box;
          padding: 14px 0 0 21px;
          span {
            font-size: 20px;
            color: #333;
            font-weight: 300;
          }
          label {
            font-size: 12px;
            color: #999;
            font-weight: 400;
            margin-left: 5px;
          }
          img {
            width: 22px;
            height: 22px;
            position: absolute;
            right: 21px;
            top: 17px;
          }
        }
        .author-list {
          .author-item {
            width: 100%;
            height: 60px;
            padding: 10px 0 0 70px;
            position: relative;
            box-sizing: border-box;
            .headImg {
              width: 40px;
              height: 40px;
              position: absolute;
              top: 10px;
              left: 20px;
              border-radius: 100%;
            }
            .name {
              color: #333;
              font-size: 14px;
              font-weight: 300;
            }
            .desc {
              color: #999;
              font-size: 12px;
              font-weight: 300;
              margin-top: 3px;
            }
            .add {
              width: 18px;
              height: 18px;
              border-radius: 100%;
              background: #fff;
              position: absolute;
              bottom: 31px;
              right: 23px;
              img {
                width: 12px;
                height: 12px;
              }
            }
          }
        }
      }
      .hot-article {
        width: 100%;
        background: #f5f5f5;
        border-radius: 12px;
        margin-top: 20px;
        padding-bottom: 20px;
        .article-title {
          width: 100%;
          height: 50px;
          position: relative;
          padding: 14px 0 0 21px;
          box-sizing: border-box;
          span {
            font-size: 20px;
            color: #333;
            font-weight: 300;
          }
          label {
            font-size: 12px;
            color: #999;
            font-weight: 400;
            margin-left: 5px;
          }
          img {
            width: 22px;
            height: 22px;
            position: absolute;
            right: 21px;
            top: 17px;
          }
        }
        .article-list {
          .article-item {
            height: 30px;
            width: 280px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 7px 0 0 18px;
            font-size: 12px;
            font-weight: 400;
            color: #333;
          }
        }
      }

      .recommend-book {
        width: 100%;
        background: #f5f5f5;
        border-radius: 12px;
        margin-top: 20px;
        padding-bottom: 9px;
        .book-title {
          width: 100%;
          height: 50px;
          position: relative;
          padding: 14px 0 0 21px;
          box-sizing: border-box;
          span {
            font-size: 20px;
            color: #333;
            font-weight: 300;
          }
          label {
            font-size: 12px;
            color: #999;
            font-weight: 400;
            margin-left: 5px;
          }
          img {
            width: 22px;
            height: 22px;
            position: absolute;
            right: 21px;
            top: 17px;
          }
        }
        .book-list {
          .book-item {
            height: 30px;
            width: 280px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 7px 0 0 18px;
            font-size: 12px;
            font-weight: 400;
            color: #333;
            position: relative;
            box-sizing: border-box;
          }
          .book-item-withbook {
            width: 100%;
            height: 90px;
            background: #fff;
            position: relative;
            padding: 10px 40px 0 90px;
            .bookImg {
              width: 60px;
              height: 60px;
              position: absolute;
              top: 13px;
              left: 13px;
            }
            .title {
              color: #333;
              font-size: 14px;
              font-weight: 400;
            }
            .desc {
              color: #999;
              font-size: 12px;
              font-weight: 400;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
.partners {
  background-color: #f5f5f5;
  padding-bottom: 64px;
  .content {
    overflow: hidden;
    .title {
      font-size: 14px;
      color: #000;
      font-weight: 400;
      margin-top: 42px;
      margin-left: 130px;
    }
    .logo-list {
      width: 874px;
      height: 111px;
      margin: 0 auto;
      margin-top: 22px;
      margin-bottom: 62px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      img {
        margin: 10px;
      }
    }
  }
}
</style>