<template>
    <div class='yuni-inputs'>
        <template v-if='type=="text"' >
            <input 
                class='yuni-input yuni-input-text' 
                type="text"
                :placeholder="placeholder"
                :style='`width:${width}px;height:${height}px;border-radius:${radius}px;border:1px solid ${borderColor};color:${color}`'>
        </template>
    </div>
</template>
<script>
export default {
    props:{
        width:{
            type:[String,Number],
            default:240
        },
        height:{
            type:[String,Number],
            default:36
        },
        radius:{
           type:[String,Number],
           default:4 
        },
        color:{
            type:String,
           default: '#666'
        },
        placeholder:{
           type:String,
           default: ''
        },
        borderColor:{
           type:String,
           default: '#ddd'
        },
        type:{
            type:String,
            default:'text'
        }
    }
}
</script>
<style lang="scss" scoped>
    .yuni-inputs{
        display: inline-block;
        .yuni-input{
            display:inline-block;
            padding:6px;
            border:1px solid #ddd;
            border-radius:4px;
            outline: none;
        }
    }
     .yuni-inputs+*{
        margin-left:15px;
    }
</style>