<template>
    <div class='yuni-card' >
        <div class='yuni-card-title' v-if='title'>{{title}}</div>
        <slot name="title"></slot>
        <div class='yuni-card-content'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
        title:{
            type:String,
            default:null
        },
        
    }
}
</script>
<style lang='scss' scoped>
    .yuni-card{
        width:100%;
        height:auto;
        border:1px solid #efefef;
        margin-top:20px;
        .yuni-card-title{
            width:100%;
            height:36px;
            line-height: 36px;
            text-align: left;
            padding:0 20px;
            font-size:16px;
            border-bottom:1px solid #efefef;
            color:#666;
        }
        .yuni-card-content{
            padding:20px;
        }
    }
</style>