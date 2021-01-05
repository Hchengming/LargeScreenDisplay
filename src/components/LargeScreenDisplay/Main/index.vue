<template>
  <div id="large-screen-display" class="home-container clearfix">
    <header-title></header-title>
    <div class="home-main">
      <!-- 左边区域 -->
      <left-menu @postEditableTabs="postEditableTabs"></left-menu>
      <!-- 中间区域 -->
      <main-content :editableTabs="editableTabs"></main-content>
      <!-- 右边区域 -->
      <right-setting></right-setting>
    </div>
  </div>
</template>

<script>
import "../Css/index.scss";
import HeaderTitle from "./Header/index.vue";
import LeftMenu from "./LeftMenu/index.vue";
import RightSetting from "./RightSetting/index.vue";
import MainContent from "./Content/index.vue";
export default {
  name: "",
  data() {
    return {
      editableTabs: []
    };
  },
  components: {
    HeaderTitle,
    LeftMenu,
    RightSetting,
    MainContent
  },
  methods: {
    postEditableTabs(tabData) {
      this.editableTabs = tabData;
    }
  }
};
</script>


