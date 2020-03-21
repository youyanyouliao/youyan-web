 <template>
  <div class="footer">
    <div class="footer-container">
      <div class="content clearFloat">
        <div class="footer-links">
          <img src="@/assets/img/youyanIcon_footer.png" class="youyanIcon" />
          <div class="slogan">释放设计力</div>
          <div class="website">www.youyan.com</div>
          <div class="links-list">
            <span>关于我们</span>
            <span>商务合作</span>
            <span>联系我们</span>
            <span>版权声明</span>
          </div>
        </div>
        <div class="footer-service clearFloat">
          <div class="service-item">
            <div class="logo-wrap"></div>
            <div class="service-name">星球</div>
          </div>
          <div class="service-item">
            <div class="logo-wrap"></div>
            <div class="service-name">商城</div>
          </div>
          <div class="service-item">
            <div class="logo-wrap"></div>
            <div class="service-name">课程</div>
          </div>
          <div class="service-item">
            <div class="logo-wrap"></div>
            <div class="service-name">沙龙</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="copyright">Copyright @2018-2019有言版权所有 有言(上海)网络科技有限公司旗下产品 京ICP备13017272号-2</div>
    </div>
  </div>
</template>
    <script>
export default {
  name: "my-footer",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
.footer {
  .footer-container {
    background: #333333;
    .content {
      // max-width: 1200px;
      // min-width: 1200px;
      // min-height: 100%;
      // margin: 0 auto;
      // box-sizing: border-box;
      padding-top: 49px;
      padding-bottom: 41px;
      padding-left: 136px;
      .footer-links {
        float: left;
        .youyanIcon {
          width: 159px;
          height: 60px;
        }
        .slogan {
          color: #fdcd00;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 22px;
          margin-top: 6px;
        }
        .website {
          color: #fdcd00;
          font-size: 14px;
          font-weight: 400;
          margin-top: 14px;
        }
        .links-list {
          margin-top: 25px;
          span {
            font-size: 15px;
            color: #fff;
            font-weight: 400;
            margin-right: 20px;
          }
        }
      }
      .footer-service {
        float: left;
        margin-top: 54px;
        margin-left: 86px;
        .service-item {
          float: left;
          margin-right: 86px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .logo-wrap {
            border: 1px solid #979797;
            width: 74px;
            height: 74px;
            border-radius: 100%;
          }
          .service-name {
            width: 40px;
            height: 28px;
            font-size: 20px;
            font-weight: 400;
            color: #fff;
            margin-top: 24px;
          }
        }
        // &::after {
        //   content: "";
        //   display: block;
        //   clear: both;
        // }
      }
      // &::after {
      //   content: "";
      //   display: block;
      //   clear: both;
      // }
    }
  }
  .footer-copyright {
    background: #fff;
    .copyright {
      max-width: 1200px;
      min-width: 1200px;
      box-sizing: border-box;
      padding-top: 18px;
      padding-bottom: 48px;
      text-align: center;
      color: #999999;
      font-size: 12px;
      font-weight: 400;
      margin: 0 auto;
    }
  }
}
</style>