<template>
    <div class='yuni-menu-item' :style='`background:${mColor}`'>
        <template v-if='menuData'>
            <router-link :to='menuData.route'>
            <img class='yuni-menu-icon' v-if='menuData.icon' :src="menuData.icon" alt="">
            <span class='yuni-menu-name'>{{menuData.name}}</span>
            </router-link>
        </template>
    </div>
</template>
<script>
export default {
    name:"yuni-menu-item",
    props:{
        menuData:{
            type:Object,
            default:null
        },
        mColor:{
            type:String,
            default:'#1976d2'
        },
    }
}
</script>
<style lang="scss" scoped>
    .yuni-menu-item{
        width:100%;
        height:40px;
        position: relative;
        border-bottom:1px solid  #d4fff7;
        &::before{
            content: '';
            position: absolute;
            top:0;
            left:0;
            z-index: 0;
            width:0;
            height:100%;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.091), rgba(127, 253, 243, 0.21));
            transition: all 0.2s linear;
        }
        &:hover{
            &::before{
                position: absolute;
                top:0;
                left:0;
                width:100%
            }
        }
        a{
            display: flex;
            align-items: center;
            width:100%;
            height:100%;
            padding:5px 15px;
            color:#fff;
            position: absolute;
            z-index:2;
        }
        .yuni-menu-icon{
            max-height:20px;
            max-width: 20px;
        }
        .yuni-menu-name{
            margin-left:10px;
            font-size:14px;
        }
    }
</style>