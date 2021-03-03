<template>
    <div class='yuni-content' :style='`padding:${padNum}px;display: ${displayType};`'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"yuni-content",
    props:{
        padNum:{
            type:[String,Number],
            default:20
        },
        displayType:{
            type:String,
            default:'block'
        }
    }
}
</script>
<style lang="scss" scoped>
  .yuni-content{
      width:100%;
      min-height: 300px;
      
  }  
</style>