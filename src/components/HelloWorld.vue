<template>
    <div id="HelloWorld">
    <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            个人简历
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-stats" />
            旅游记录
        </MenuItem>
    </Menu>
    </div>

</template>
<script>
    export default {
        name:'HelloWorld',
        data () {
            return {
                theme1: 'lighht'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
