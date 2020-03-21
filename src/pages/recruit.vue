<template>
  <div class="main">
    <Header currentPageNum="3" />
    <div class="content">
      <div class="container clearFloat">
        <div class="left-panel">
          <div class="mod-column">
            <div class="mod-column-body">
              <div class="mod-tabbar">
                <div class="mod-tabbar-list">
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage(0)"
                    :class="activeIndex==0?'active':''"
                  >全部</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage(1)"
                    :class="activeIndex==1?'active':''"
                  >产品</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage(2)"
                    :class="activeIndex==2?'active':''"
                  >用研</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage(3)"
                    :class="activeIndex==3?'active':''"
                  >视觉</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage(4)"
                    :class="activeIndex==4?'active':''"
                  >UI</div>
                  <div
                    class="mod-tabbar-item ctCenter"
                    @click="toPage(5)"
                    :class="activeIndex==5?'active':''"
                  >交互</div>
                  <div class="add-wrap ctCenter">
                    <img src="@/assets/img/add.png" />
                    <span>发布职位</span>
                  </div>
                  <div class="line" :style="{left:leftDt}"></div>
                </div>
              </div>
              <div class="mod-list">
                <div class="mod-list-item">
                  <div class="product-image">
                    <img src="@/assets/img/jrtt_cover.png" />
                  </div>
                  <div class="product-title">今日头条 | 招聘运营设计师</div>
                  <div class="occupation">本科 | 北京 | 运营设计 | 2年+</div>
                  <div class="wallet">16k-20k</div>
                  <div
                    class="product-desc"
                  >1、负责产品推广、品牌运营以及市场活动的主视觉、h5及相关设计工作； 2、负责产品周边延展物料开发的创意工作； 3、擅长把握各种设计风格，具有独特的创意能力。</div>
                  <div class="product-meta">
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                  </div>
                </div>
                <div class="mod-list-item">
                  <div class="product-image">
                    <img src="@/assets/img/bx_cover.png" />
                  </div>
                  <div class="product-title">今日头条 | 招聘运营设计师</div>
                  <div class="occupation">本科 | 北京 | 运营设计 | 2年+</div>
                  <div class="wallet">16k-20k</div>
                  <div
                    class="product-desc"
                  >1、负责产品推广、品牌运营以及市场活动的主视觉、h5及相关设计工作； 2、负责产品周边延展物料开发的创意工作； 3、擅长把握各种设计风格，具有独特的创意能力。</div>
                  <div class="product-meta">
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                  </div>
                </div>
                <div class="mod-list-item">
                  <div class="product-image">
                    <img src="@/assets/img/tc_cover.png" />
                  </div>
                  <div class="product-title">今日头条 | 招聘运营设计师</div>
                  <div class="occupation">本科 | 北京 | 运营设计 | 2年+</div>
                  <div class="wallet">16k-20k</div>
                  <div
                    class="product-desc"
                  >1、负责产品推广、品牌运营以及市场活动的主视觉、h5及相关设计工作； 2、负责产品周边延展物料开发的创意工作； 3、擅长把握各种设计风格，具有独特的创意能力。</div>
                  <div class="product-meta">
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                  </div>
                </div>
                <div class="mod-list-item">
                  <div class="product-image">
                    <img src="@/assets/img/sh_cover.png" />
                  </div>
                  <div class="product-title">今日头条 | 招聘运营设计师</div>
                  <div class="occupation">本科 | 北京 | 运营设计 | 2年+</div>
                  <div class="wallet">16k-20k</div>
                  <div
                    class="product-desc"
                  >1、负责产品推广、品牌运营以及市场活动的主视觉、h5及相关设计工作； 2、负责产品周边延展物料开发的创意工作； 3、擅长把握各种设计风格，具有独特的创意能力。</div>
                  <div class="product-meta">
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                  </div>
                </div>
                <div class="mod-list-item">
                  <div class="product-image">
                    <img src="@/assets/img/jrtt_cover.png" />
                  </div>
                  <div class="product-title">今日头条 | 招聘运营设计师</div>
                  <div class="occupation">本科 | 北京 | 运营设计 | 2年+</div>
                  <div class="wallet">16k-20k</div>
                  <div
                    class="product-desc"
                  >1、负责产品推广、品牌运营以及市场活动的主视觉、h5及相关设计工作； 2、负责产品周边延展物料开发的创意工作； 3、擅长把握各种设计风格，具有独特的创意能力。</div>
                  <div class="product-meta">
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                  </div>
                </div>
                <div class="mod-list-item">
                  <div class="product-image">
                    <img src="@/assets/img/bx_cover.png" />
                  </div>
                  <div class="product-title">今日头条 | 招聘运营设计师</div>
                  <div class="occupation">本科 | 北京 | 运营设计 | 2年+</div>
                  <div class="wallet">16k-20k</div>
                  <div
                    class="product-desc"
                  >1、负责产品推广、品牌运营以及市场活动的主视觉、h5及相关设计工作； 2、负责产品周边延展物料开发的创意工作； 3、擅长把握各种设计风格，具有独特的创意能力。</div>
                  <div class="product-meta">
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                  </div>
                </div>
                <div class="mod-list-item">
                  <div class="product-image">
                    <img src="@/assets/img/tc_cover.png" />
                  </div>
                  <div class="product-title">今日头条 | 招聘运营设计师</div>
                  <div class="occupation">本科 | 北京 | 运营设计 | 2年+</div>
                  <div class="wallet">16k-20k</div>
                  <div
                    class="product-desc"
                  >1、负责产品推广、品牌运营以及市场活动的主视觉、h5及相关设计工作； 2、负责产品周边延展物料开发的创意工作； 3、擅长把握各种设计风格，具有独特的创意能力。</div>
                  <div class="product-meta">
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                  </div>
                </div>
                <div class="mod-list-item">
                  <div class="product-image">
                    <img src="@/assets/img/sh_cover.png" />
                  </div>
                  <div class="product-title">今日头条 | 招聘运营设计师</div>
                  <div class="occupation">本科 | 北京 | 运营设计 | 2年+</div>
                  <div class="wallet">16k-20k</div>
                  <div
                    class="product-desc"
                  >1、负责产品推广、品牌运营以及市场活动的主视觉、h5及相关设计工作； 2、负责产品周边延展物料开发的创意工作； 3、擅长把握各种设计风格，具有独特的创意能力。</div>
                  <div class="product-meta">
                    <div class="view ctCenter">
                      <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                      <span>235</span>
                    </div>
                    <div class="star ctCenter">
                      <img src="@/assets/img/starIcon.png" class="starIcon" />
                      <span>0</span>
                    </div>
                    <div class="date ctCenter">
                      <img src="@/assets/img/clockIcon.png" class="clockIcon" />
                      <span>2019.05.31</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="moreInfo ctCenter">查看更多</div>
            </div>
          </div>
        </div>
        <div class="right-list">
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
    <Footer />
  </div>
</template>
<script>
import Header from "./components/header";
import Footer from "./components/footer";
export default {
  name: "recruit",
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {
    leftDt: function() {
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
  components: { Header, Footer },
  methods: {
    toPage(index) {
      this.activeIndex = index;
    }
  },
  mounted() {}
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
                float: left;
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
            .mod-list-item {
              width: 100%;
              min-height: 170px;
              box-sizing: border-box;
              padding: 23px 0 11px 102px;
              position: relative;
              .product-image {
                position: absolute;
                top: 14px;
                left: 0;
                width: 78px;
                height: 76px;
                background: rgba(216, 216, 216, 1);
                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 38px;
                  border-radius: 100%;
                }
              }
              .product-title {
                font-weight: 500;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 20px;
                color: rgba(51, 51, 51, 1);
                line-height: 28px;
              }
              .occupation {
                margin-top: 6px;
                font-size: 12px;
                font-weight: 300;
                color: rgba(51, 51, 51, 1);
                line-height: 20px;
              }
              .wallet {
                font-size: 20px;
                font-weight: 400;
                color: rgba(253, 205, 0, 1);
                line-height: 28px;
                position: absolute;
                top: 23px;
                right: 0;
              }
              .product-desc {
                font-size: 12px;
                margin-top: 10px;
                overflow: hidden;
                font-weight: 300;
                color: rgba(51, 51, 51, 1);
                line-height: 20px;
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
                .view {
                  width: 49px;
                  position: absolute;
                  left: 0px;
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
                  left: 48px;
                  .starIcon {
                    width: 12px;
                    height: 12px;
                  }
                  span {
                    margin-left: 4px;
                  }
                }
                .date {
                  width: 86px;
                  position: absolute;
                  right: 0;
                  .clockIcon {
                    width: 10px;
                    height: 10px;
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
            margin-bottom: 296px;
          }
        }
      }
    }
    .right-list {
      float: right;
      width: 300px;
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
</style>