<template>
    <div class='yuni-menu' :style='`width:${width}px;background:${bgColor}`'>
        <div v-for="(item,index) in menuList" :key='index'>
            <YuniMenuItem v-if='!item.children' :menuData='item' :mColor='mColor'></YuniMenuItem>
            <YuniMenuGroup v-if='item.children' :menuData='item' :mColor='mColor'></YuniMenuGroup>
        </div>
    </div>
</template>
<script>
import YuniMenuGroup from './YuniMenuGroup'
import YuniMenuItem from './YuniMenuItem'
export default {
    name:'yuni-menu',
    props:{
        menuList:{
            type:Array,
            default:[]
        },
        width:{
            type:[String,Number],
            default:200
        },
        bgColor:{
            type:String,
            default:'#1976d2'
        },
        mColor:{
            type:String,
            default:'#1976d2'
        },
    },
    components:{
        YuniMenuGroup,
        YuniMenuItem,
    }
}
</script>