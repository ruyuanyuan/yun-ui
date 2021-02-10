<template>
  <div class="yunni-menu-group">
    <div class="yunni-menu-group-title" @click.stop='showMenuGroup'>
      <img
        class="yunni-menu-group-icon"
        v-if="menuData.icon"
        :src="menuData.icon"
        alt=""
      />
      <span class="yunni-menu-group-name">{{ menuData.name }}</span>
    </div>
    <div
      class="yunni-menu-group-content"
      v-for="(item, index) in menuData.children"
      :key="index"
      :class='{"show-group":showflag}'
    >
      <YuniMenuItem
        v-if="!item.children"
        :menuData="item"
        :mColor="mColor"
      ></YuniMenuItem>
      <YuniMenuGroup
        v-if="item.children"
        :menuData="item"
        :mColor="mColor"
      ></YuniMenuGroup>
    </div>
  </div>
</template>
<script>
import YuniMenuGroup from "./YuniMenuGroup";
import YuniMenuItem from "./YuniMenuItem";
export default {
  name: "YuniMenuGroup",
  props: {
    menuData: {
      type: Object,
      default: [],
    },
    mColor: {
      type: String,
      default: "#1976d2",
    },
  },
  components: {
    YuniMenuGroup,
    YuniMenuItem,
  },
  data() {
    return {
        showflag:false
    };
  },
  methods:{
      showMenuGroup(){
        this.showflag = !this.showflag
      }
  }
};
</script>
<style lang="scss" scoped>
.yunni-menu-group {
  .yunni-menu-group-title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 5px 15px;
    cursor: pointer;
    border-bottom:1px solid  #d4fff7;
    .yunni-menu-group-icon {
      max-height: 20px;
      max-width: 20px;
    }
    .yunni-menu-group-name {
      margin-left: 10px;
      font-size: 14px;
      color:#fff;
    }
  }
  .yunni-menu-group-content {
    height:0;
    overflow: hidden;
    transition: all 1s linear;
    &.show-group{
        height:auto;
    }
  }
}
</style>