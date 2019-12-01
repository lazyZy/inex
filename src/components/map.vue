//先在vue的index.html里面引入腾讯地图包
<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=AVRBZ-MJEC6-5ZOST-EPT5K-ZU2N6-LYF2G"></script>
//.vue
<template>

        <div id="travel" ></div>

</template>

<script>
    export default{
        name:'travel',
        data() {
            return {
                title: "旅行地图"
            };
        },
        mounted() {
            this.init();
        },
        methods:{
            init() {
                //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
                //设置地图中心点
                var myLatlng = new qq.maps.LatLng(39.916527,116.397128);
                //定义工厂模式函数
                var myOptions = {
                    zoom: 8,               //设置地图缩放级别
                    center: myLatlng,      //设置中心点样式
                    mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
                }
                //获取dom元素添加地图信息
                var map = new qq.maps.Map(document.getElementById("container"), myOptions);
            }
        }
    }
</script>
<style>
    .div{
        width:600px;
        height:500px;
    }
</style>
