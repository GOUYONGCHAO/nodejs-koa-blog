<template>
  <div class="ads">
    <div class="Card">
      <a class="Banner-link" href="https://www.homeworkdone.net" target="_blank">
        <div class="Banner-adTag">广告</div>
        <img class="Banner-image" src="../assets/images/ads.jpeg" alt="广告" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({})
  },
  created() {},
  methods: {
    ...mapActions({}),
    // 路由跳转
    toPath(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang="scss">
.ads {
  // padding: 0 24px;
  // margin-bottom: 24px;
  // background: #fff;
  border-radius: 5px;
}

.Card {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  -webkit-transition: height 0.3s, margin 0.3s, opacity 0.3s;
  transition: height 0.3s, margin 0.3s, opacity 0.3s;
}

.Card img {
  display: block;
  width: 100%;
  border-radius: 0px;
}

.Card .Banner-adTag:hover {
  opacity: 0;
}

.Card .Banner-image {
  width: 100%;
  height: 144px;
}

.Card .Banner-adTag {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 45px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  color: #ebebeb;
  background-color: #000;
  opacity: 0.5;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
}
</style>

