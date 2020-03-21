<template>
  <div class="main">
    <Header/>
    <div class="content">
      <div class="container">
        <div class="data-info-wrap">
          <div class="article-num">
            <label>10</label>
            <span>文章</span>
          </div>
          <div class="view-num">
            <label>3.3M</label>
            <span>总阅读</span>
          </div>
          <div class="name-info">
            <div class="headImgWrap">
              <img src="@/assets/img/headimg.jpg" />
            </div>
            <div class="name">京东</div>
            <div class="gzh">公众号:三分设</div>
            <div class="contact-info ctCenter">
              <div class="gz">关注</div>
              <div class="bar"></div>
              <div class="sl">私聊</div>
            </div>
          </div>
          <div class="zs-num">
            <label>3.3M</label>
            <span>被赞</span>
          </div>
          <div class="dy-num">
            <label>10</label>
            <span>订阅量</span>
          </div>
        </div>
        <div class="nav-wrap">
          <div class="nav-item">文章</div>
          <div class="nav-item">订阅</div>
          <div class="nav-item">团队</div>
          <div class="nav-item">资料</div>
          <div class="nav-item">创作历程</div>
        </div>
        <div class="work-list">
          <div class="work-item" v-for="(item,index) in 16" v-bind:key="index">
            <div class="head-cover">
              <img src="@/assets/img/work_cover1.png" />
            </div>
            <div class="body-ct">
              <div class="title">写给不懂设计思维地设计师</div>
              <div class="occupation">经验/设计</div>
              <div class="meta-data">
                <div class="view ctCenter">
                  <img src="@/assets/img/viewIcon.png" class="viewIcon" />
                  <span>235</span>
                </div>
                <div class="star ctCenter">
                  <img src="@/assets/img/starIcon.png" class="starIcon" />
                  <span>0</span>
                </div>
                <div class="praise ctCenter">
                  <img src="@/assets/img/zan_icon.png" class="zanIcon" />
                  <span>0</span>
                </div>
              </div>
              <div class="time">1小时前</div>
            </div>
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
        <div class="hd-area">
          <div class="left-hd">
            <div class="comment-area">
              <div class="input-area ctCenter">
                <textarea rows="5" cols="83"></textarea>
                <div class="rest-num">
                  还可以输入
                  <label>500</label>个字
                </div>
              </div>
              <div class="comment-btn-wrap">
                <div class="emoj">
                  <img src="@/assets/img/emoj.png" />
                  <span>表情</span>
                </div>
                <div class="comment-btn ctCenter">评论</div>
              </div>
              <div class="comment-list">
                <div class="comment-item" v-for="(item,index) in 3" v-bind:key="index">
                  <img src="@/assets/img/headimg.jpg" class="headImg" />
                  <div class="comment-content">
                    <div class="name">哇哇</div>
                    <div class="ct">喜欢这种有前后对比的文章 能看到作者的创作思路 不错！不错!</div>
                    <div class="date">2019/6/12 18:18</div>
                  </div>
                  <img src="@/assets/img/coment1.png" class="commentImg" />
                </div>
              </div>
            </div>
            <div class="moreInfo ctCenter">查看更多</div>
          </div>
          <div class="right-hd">
            <div class="my-team">
              <div class="name">
                <span>我的团队</span>
                <img src="@/assets/img/moreIcon.png" />
              </div>
              <div class="member-list">
                <div class="member-item">
                  <img src="@/assets/img/headimg.jpg" class="headImg" />
                  <div class="member-name">京东</div>
                </div>
              </div>
            </div>
            <div class="recent-reader">
              <div class="name">
                <span>最近读者</span>
              </div>
              <div class="reader-list">
                <div class="reader-item" v-for="(item,index) in 5" v-bind:key="index">
                  <img src="@/assets/img/headimg.jpg" class="headImg" />
                  <div class="reader-name">腾讯</div>
                  <div class="reader-time">刚刚</div>
                </div>
              </div>
            </div>
            <div class="copyright">© 京东 版权所有，未经允许，请勿用于任何用途。</div>
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
  name: "userCenter",
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {},
  components: { Header, Footer },
  methods: {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.content {
  .container {
    padding: 20px 130px;
    margin-top: 70px;
    .data-info-wrap {
      display: flex;
      justify-content: center;
      .article-num {
        display: flex;
        flex-direction: column;
        text-align: center;
        box-sizing: border-box;
        padding-top: 40px;
        label {
          font-size: 21px;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 29px;
        }
        span {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 17px;
        }
      }
      .view-num {
        display: flex;
        flex-direction: column;
        margin-left: 84px;
        margin-right: 88px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 40px;
        label {
          font-size: 21px;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 29px;
        }
        span {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 17px;
        }
      }
      .name-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        .headImgWrap {
          width: 110px;
          height: 110px;
          background: rgba(255, 255, 255, 1);
          border: 4px solid rgba(245, 245, 245, 1);
          border-radius: 100%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }
        .name {
          font-size: 19px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 26px;
          margin-top: 13px;
        }
        .gzh {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 17px;
          margin-top: 5px;
        }
        .contact-info {
          width: 137px;
          height: 44px;
          border-radius: 22px;
          border: 1px solid rgba(204, 204, 204, 1);
          margin-top: 21px;
          .gz {
            font-size: 12px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 17px;
          }
          .bar {
            width: 1px;
            height: 12px;
            background-color: #cccccc;
            margin-left: 17px;
            margin-right: 17px;
          }
          .sl {
            font-size: 12px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 17px;
          }
        }
      }
      .zs-num {
        display: flex;
        flex-direction: column;
        margin-left: 88px;
        margin-right: 84px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 40px;
        label {
          font-size: 21px;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 29px;
        }
        span {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 17px;
        }
      }
      .dy-num {
        display: flex;
        flex-direction: column;
        text-align: center;
        box-sizing: border-box;
        padding-top: 40px;
        label {
          font-size: 21px;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 29px;
        }
        span {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 17px;
        }
      }
    }
    .nav-wrap {
      width: 940px;
      height: 50px;
      background: rgba(245, 245, 245, 1);
      border-radius: 25px;
      margin-top: 25px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 186px;
      padding-right: 186px;
      .nav-item {
        font-size: 15px;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
        margin-left: 37px;
        margin-right: 37px;
      }
    }
    .work-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .work-item {
        width: 220px;
        height: 280px;
        background: rgba(255, 255, 255, 1);
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        margin-top: 30px;
        .head-cover {
          width: 220px;
          height: 140px;
          border-radius: 20px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
        }
        .body-ct {
          box-sizing: border-box;
          padding: 12px 8px 16px 8px;
          .title {
            font-size: 16px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 22px;
          }
          .occupation {
            font-size: 12px;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 17px;
            margin-top: 5px;
          }
          .meta-data {
            display: flex;
            margin-top: 16px;
            box-sizing: border-box;
            padding-bottom: 15px;
            border-bottom: 1px solid #f5f5f5;
            .view {
              width: 49px;
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
              .zanIcon {
                width: 10px;
                height: 12px;
              }
              span {
                margin-left: 4px;
              }
            }
          }
          .time {
            font-size: 12px;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 17px;
            text-align: right;
            margin-top: 6px;
          }
        }
      }
    }
    .pagination-wrap {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      margin-bottom: 40px;
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
    .hd-area {
      margin-top: 40px;
      display: flex;
      .left-hd {
        width: 620px;
        .comment-area {
          .input-area {
            height: 116px;
            background: rgba(255, 255, 255, 1);
            border-radius: 12px;
            border: 1px solid rgba(204, 204, 204, 1);
            align-items: flex-start;
            flex-direction: column;
            textarea {
              border: none;
              outline: none;
              background: transparent;
              resize: none;
            }
            .rest-num {
              text-align: right;
              font-size: 12px;
              font-weight: 300;
              color: rgba(51, 51, 51, 1);
              line-height: 17px;
              width: 100%;
              padding-right: 18px;
              box-sizing: border-box;
              label {
                color: #fdcd00;
              }
            }
          }
          .comment-btn-wrap {
            display: flex;
            justify-content: space-between;
            margin-top: 11px;
            .emoj {
              display: flex;
              align-items: center;
              img {
                width: 22px;
                height: 22px;
              }
              span {
                font-size: 12px;
                font-weight: 400;
                color: rgba(109, 114, 120, 1);
                line-height: 17px;
                margin-left: 5px;
              }
            }
            .comment-btn {
              width: 99px;
              height: 35px;
              border-radius: 18px;
              border: 1px solid rgba(151, 151, 151, 1);
              font-size: 12px;
              font-weight: 400;
              color: rgba(109, 114, 120, 1);
              line-height: 17px;
            }
          }
          .comment-list {
            .comment-item {
              display: flex;
              justify-content: flex-start;
              position: relative;
              margin-top: 34px;
              .headImg {
                width: 50px;
                height: 50px;
                border-radius: 100%;
              }
              .comment-content {
                margin-left: 8px;
                .name {
                  font-size: 12px;
                  font-weight: 400;
                  color: rgba(153, 153, 153, 1);
                }
                .ct {
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 1);
                  margin-top: 4px;
                }
                .date {
                  font-size: 12px;
                  font-weight: 400;
                  color: rgba(153, 153, 153, 1);
                  margin-top: 6px;
                }
              }
              .commentImg {
                width: 22px;
                height: 22px;
                position: absolute;
                right: 6px;
                bottom: 6px;
              }
            }
          }
        }
        .moreInfo {
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #333;
          font-size: 15px;
          font-weight: 300;
          background: #f5f5f5;
          border-radius: 25px;
          margin-top: 34px;
          margin-bottom: 28px;
        }
      }
      .right-hd {
        margin-left: 18px;
        .my-team {
          background: #f5f5f5;
          border-radius: 12px;
          padding-bottom: 22px;
          width: 300px;
          .name {
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
            img {
              width: 22px;
              height: 22px;
              position: absolute;
              right: 21px;
              top: 17px;
            }
          }
          .member-list {
            display: flex;
            .member-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 30px;
              margin-top: 16px;
              .headImg {
                width: 50px;
                height: 50px;
                border-radius: 100%;
              }
              .member-name {
                font-size: 12px;
                font-weight: 300;
                color: rgba(51, 51, 51, 1);
                line-height: 17px;
                margin-top: 13px;
              }
            }
          }
        }
        .recent-reader {
          background: #f5f5f5;
          border-radius: 12px;
          padding-bottom: 22px;
          width: 300px;
          margin-top: 20px;
          .name {
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
          }
          .reader-list {
            display: flex;
            flex-wrap: wrap;
            .reader-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 30px;
              margin-top: 19px;
              .headImg {
                width: 50px;
                height: 50px;
                border-radius: 100%;
              }
              .reader-name {
                font-size: 12px;
                font-weight: 300;
                color: rgba(51, 51, 51, 1);
                line-height: 17px;
                margin-top: 7px;
              }
              .reader-time {
                font-size: 12px;
                font-weight: 300;
                color: rgba(153, 153, 153, 1);
                line-height: 17px;
              }
            }
          }
        }
        .copyright {
          margin-top: 13px;
          font-size: 12px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: rgba(51, 51, 51, 1);
          line-height: 17px;
        }
      }
    }
  }
}
</style>
