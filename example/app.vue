<template>
    <div id="app">
        <h4>UPDATE</h4>
        <img v-wxqlogo="logo" />
        <h4>LAZYLOAD</h4>
        <img
            v-lazy="'http://wx.qlogo.cn/mmopen/28c9BREWQGib9AFTicicERnYkfOicL5VCjKFTRwRdehoeTSAXBOcHoibY0xlJzkGSru8ichGe3JSnhILWBbCVC2Pf5ZNiaib9319m7Oa/0'"
        />
        <template v-for="i in 20">
            <img
                v-lazy="'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJGuGn0prXGbibFeCicxsg53sjYiaHbC2o1KWjaC7ET9DFd4OiawDP19moMmNtOwkWn3JHdTHsAMVTPFQ/132'"
                :key="i"
            />
        </template>
        <img
            v-lazy="'http://wx.qlogo.cn/mmopen/28c9BREWQGib9AFTicicERnYkfOicL5VCjKFTRwRdehoeTSAXBOcHoibY0xlJzkGSru8ichGe3JSnhILWBbCVC2Pf5ZNiaib9319m7Oa/0'"
        />
    </div>
</template>

<script>
const logos = [
    'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJGuGn0prXGbibFeCicxsg53sjYiaHbC2o1KWjaC7ET9DFd4OiawDP19moMmNtOwkWn3JHdTHsAMVTPFQ/132',
    'http://wx.qlogo.cn/mmopen/vi_32/xHJicibcyGQ7ABUuGxcbl5dh3OKImxkHQTmx7wvlHGRoxw2SDvsp03kwibATma8dhd0AdPREnfGIEGKYKPH5j16vg/132'
]
export default {
    name: 'App',
    data () {
        return {
            logo: logos[0]
        }
    },
    created () {
        let i = 0
        this.i = setInterval(() => {
            this.logo = logos[++i % 2]
            if (i >= 20) {
                i = 0
            }
        }, 1000)
    },
    beforeDestroy () {
        clearInterval(this.i)
    }
}
</script>

<style lang="less">
html {
    background-color: #f5f5f5;
}
#app {
    text-align: center;

    img {
        display: block;
        margin: 15px auto;
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    img + img {
        margin-top: 0;
    }
}
</style>