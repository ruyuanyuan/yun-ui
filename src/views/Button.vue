<template>
    <YuniContent pNum='20'>
        <div class='page-title'>按钮组件</div>
        <div class='page-content'>
            <YuniCard title='普通按钮'>
                <vzer-button>默认按钮</vzer-button>
                <YuniButton type='color'>按钮</YuniButton>
                <YuniButton type='color' color='#409EFF' fontColor='#fff' radius='4' borderColor='#409EFF'>按钮</YuniButton>
                <YuniButton type='color' color='#E6A23C' fontColor='#fff' radius='6' borderColor='#E6A23C'>按钮</YuniButton>
                <YuniButton type='color' color='#F56C6C' fontColor='#fff' radius='30' borderColor='#F56C6C'>按钮</YuniButton>
                <YuniButton type='color' color='transparent'  fontColor='#F56C6C' radius='4' borderColor='#F56C6C' >按钮</YuniButton>
                <YuniButton type='color' color='transparent'  fontColor='#409EFF' radius='30' borderColor='#409EFF' animate='shake'>按钮</YuniButton>
                <YuniButton type='color' color='transparent'  fontColor='#409EFF' radius='30' borderColor='transparent' animate='border'>按钮</YuniButton>
            </YuniCard>
            <YuniCard title='过渡色按钮'>
                <YuniButton type='colorliner' direction='right' fontColor='#fff' :colors='["#bf8bf5","#ff6f00","#667eea"]'>按钮</YuniButton>
                <YuniButton type='colorliner' direction='right' animate='shake' fontColor='#fff' :colors='["#bf8bf5","#667eea"]'>按钮</YuniButton>
            </YuniCard>
            <code class='yuni-code'>
                <pre class='yuni-pre'>
普通按钮
&nbsp;&lt;YuniButton&nbsp;type='color'&gt;按钮&lt;/YuniButton&gt;
&nbsp;&lt;YuniButton&nbsp;type='color'&nbsp;color='#409EFF'&nbsp;fontColor='#fff'&nbsp;radius='4'&nbsp;borderColor='#409EFF'&gt;按钮&lt;/YuniButton&gt;
&nbsp;&lt;YuniButton&nbsp;type='color'&nbsp;color='#E6A23C'&nbsp;fontColor='#fff'&nbsp;radius='6'&nbsp;borderColor='#E6A23C'&gt;按钮&lt;/YuniButton&gt;
&nbsp;&lt;YuniButton&nbsp;type='color'&nbsp;color='#F56C6C'&nbsp;fontColor='#fff'&nbsp;radius='30'&nbsp;borderColor='#F56C6C'&gt;按钮&lt;/YuniButton&gt;
&nbsp;&lt;YuniButton&nbsp;type='color'&nbsp;color='transparent'&nbsp;fontColor='#F56C6C'&nbsp;radius='4'&nbsp;borderColor='#F56C6C'&gt;按钮&lt;/YuniButton&gt;
&nbsp;&lt;YuniButton&nbsp;type='color'&nbsp;color='transparent'&nbsp;fontColor='#409EFF'&nbsp;radius='30'&nbsp;borderColor='#409EFF'&gt;按钮&lt;/YuniButton&gt;
过渡色按钮
&lt;YuniButton&nbsp;type='colorliner'&nbsp;direction='right'&nbsp;:colors='["#bf8bf5","#ff6f00","#667eea"]'&gt;按钮&lt;/YuniButton&gt;
&nbsp;&lt;YuniButton&nbsp;type='colorliner'&nbsp;direction='right'&nbsp;:colors='["#bf8bf5","#667eea"]'&gt;按钮&lt;/YuniButton&gt;
                </pre>
            </code>
           <table class='yuni-table'>
               <thead>
                   <th>参数</th>
                   <th style='width:300px'>说明</th>
                   <th>类型</th>
                   <th>可选值</th>
                   <th>默认值</th>
               </thead>
               <tbody>
                    <tr>
                       <td>type</td>
                       <td>类型</td>
                       <td>String</td>
                       <td>color/colorliner</td>
                       <td>color</td>
                   </tr>
                    <tr>
                       <td>color</td>
                       <td>按钮颜色</td>
                       <td>String</td>
                       <td>-</td>
                       <td>#fff</td>
                   </tr>
                   <tr>
                       <td>fontColor</td>
                       <td>文字颜色</td>
                       <td>String</td>
                       <td>-</td>
                       <td>#666</td>
                   </tr>
                   <tr>
                       <td>radius</td>
                       <td>圆角</td>
                       <td>String/Number</td>
                       <td>-</td>
                       <td>4</td>
                   </tr>
                    <tr>
                       <td>borderColor</td>
                       <td>边框颜色</td>
                       <td>String</td>
                       <td>-</td>
                       <td>#efefef</td>
                   </tr>
                    <tr>
                       <td>colors</td>
                       <td>过渡颜色(最少两个色值，type为colorliner时生效) </td>
                       <td>Array</td>
                       <td>-</td>
                       <td>['#667eea','#bf8bf5',' #667eea']</td>
                   </tr>
                    <tr>
                       <td>direction</td>
                       <td>过渡方向(type为colorliner时生效)</td>
                       <td>String</td>
                       <td>top/right/bottom/left</td>
                       <td>right</td>
                   </tr>
               </tbody>
           </table>
        </div>
    </YuniContent>
</template>
<script>
export default {
}
</script>
<style lang='scss' scoped>

</style>