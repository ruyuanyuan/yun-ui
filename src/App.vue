<template>
  <div id="app">
    <yuni-header :fixedScroll="100">
      <div class='mp-header'>
        <div class='logo'>
          YuniUI
        </div>
        <div class='mp-name'>与你同行,看视界多姿多彩</div>
      </div>
    </yuni-header>
    <yuni-content padNum='0' displayType='flex'>
      <yuni-menu :menuList='menuList' :width='180' bgColor='#2196f3' mColor='#64b5f6' direction='vertical'></yuni-menu>
      <div class='pageview'>
        <router-view />
      </div>
    </yuni-content>
  </div>
</template>
<script>
export default {
  data(){
    return {
      menuList:[
        {
          icon:require('@/assets/img/img1.png'),
          name:"介绍",
          route:'/home'
        },
        {
          icon:require('@/assets/img/img1.png'),
          name:"按钮",
          route:'/button'
        },
        {
          icon:require('@/assets/img/img1.png'),
          name:"输入框",
          route:'/input'
        },
        {
          icon:require('@/assets/img/img1.png'),
          name:"动画",
          route:'/animate'
        },
      ]
    }
  }
};
</script>
<style lang="scss">
.mp-header{
  width:100%;
  height:60px;
  display: flex;
  align-items: center;
  .logo{
    font-size:24px;
  }
  .mp-name{
    margin-left: 40px;
    font-size: 18px;
  }
}
.pageview{
  flex:1;
}
</style>
