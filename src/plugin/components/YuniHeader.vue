<template>
  <div class="yuni-header" :class='fixedTop?"fixedTop":""'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'yuni-header',
  props: {
    fixedScroll: {
      type: Number,
      default: null,
    }
  },
  data() {
    return {
      fixedTop: false,
    };
  },
  created() {
    if(this.fixedScroll){
        window.addEventListener("scroll",() => {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            if (top > this.fixedScroll) {
              this.fixedTop = true;
            } else {
              this.fixedTop = false;
            }
        });
    }
    
  },
};
</script>
<style lang="scss" scoped>
    .yuni-header{
        width:100%;
        min-width: 40px;
        box-shadow: 0px 12px 20px 0px rgba(68, 49, 49, 0.09);
        padding:0 20px;
        background: #fff;
        &.fixedTop{
            position: fixed;
            top:0;
            z-index: 100000;
        }
    }
</style>