<template>
    <div id="app">
        <template v-for="i in 10">
            <img
                v-lazy="'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJGuGn0prXGbibFeCicxsg53sjYiaHbC2o1KWjaC7ET9DFd4OiawDP19moMmNtOwkWn3JHdTHsAMVTPFQ/132'"
                :key="i"
            />
            <img
                v-lazy="'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJGuGn0prXGbibFeCicxsg53sjYiaHbC2o1KWjaC7ET9DFd4OiawDP19moMmNtOwkWn3JHdTHsAMVTPFQ/132'"
                :key="`${i}-`"
            />
        </template>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
html {
    background-color: #f5f5f5;
}
#app {
    img {
        display: block;
        margin: 15px auto;
        width: 200px;
        height: 200px;
    }

    img + img {
        margin-top: 0;
    }
}
</style>