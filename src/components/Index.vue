<template>
  <div class='index'>
    <header>
      <img src="../assets/grave.png" alt="">
      <div class="title">
        <h1>Graves of the Internet</h1>
        <h2>互联网坟墓</h2>
      </div>
    </header>
    <div class="search">
      <input placeholder="搜索坟墓" type="text">
      <p>缺少坟墓？去 <a class='add' href="https://github.com/myvin/gravesoftheinternet" target='_blank' title='添加坟墓'>添加坟墓</a>。</p>
      <p>请自备梯子以正常访问 wikipedia、Google 相关链接。</p>
    </div>
    <ul class='companies'>
      <li @click='choose(name, index)' :class='{active: active === index}' v-for='(name, index) in Object.keys(graves)' :key='index'>{{name}}({{graves[name].length}})</li>
    </ul>
    <div class="graves">
      <grave v-for='(item, index) in list' :item='item' :key='index'></grave>
    </div>
    <footer>
      <p>Graves of the Internet collected by <a href="https://github.com/myvin" title="myvin" target='_blank'>myvin</a> inspired by <a href="https://killedbygoogle.com/" title="killedbygoogle" target='_blank'>killedbygoogle</a></p>
      <p>互联网坟墓 - 互联网公司逝去产品列表</p>
      <p>以此祭奠那些夕阳下的奔跑，祭奠那些逝去的青春</p>
    </footer>
  </div>
</template>

<script>
import Grave from './Grave'
import { Graves } from '../graves'
export default {
  name: 'index',
  components: {
    Grave
  },
  data () {
    return {
      graves: Graves,
      list: [],
      active: 0
    }
  },
  mounted () {
    this.list = Graves.Baidu
  },
  methods: {
    choose (name, index) {
      this.list = Graves[name]
      this.active = index
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  header img {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 15px 0 20px;
  }
  header .title {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  header h1 {
    font-weight: lighter;
    font-size: 1.8em;
    margin: 0;
  }
  header h2 {
    margin: 0;
    font-size: 1em;
  }
  .search {
    width: 500px;
    max-width: 95%;
    box-sizing: border-box;
    margin: 20px auto 10px;
  }
  .search input {
    font-size: 2em;
    height: 100%;
    display: block;
    width: 100%;
    background-color: transparent;
    box-sizing: border-box;
    font-weight: lighter;
    border-style: none none solid;
    border-image: initial;
    border-bottom: 1px solid rgb(207, 207, 207);
    margin: 0 auto;
    outline: none;
  }
  .search p {
    font-size: .8em;
  }
  .companies {
    align-items: center;
    display: flex;
    font-size: 0.8em;
    justify-content: center;
    list-style-type: none;
    padding: 0 0 15px;
  }
  .companies li.active {
    font-weight: bold;
  }
  .companies li {
    padding: 10px;
  }
  .graves {
    min-height: 70vh;
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  @media screen and (min-width: 800px) {
    .graves {
      display: flex;
      flex-flow: row wrap;
    }
  }
  footer {
    color: rgb(250, 250, 250);
    background-color: rgb(51, 51, 51);
    text-align: center;
    font-size: .8em;
    padding: 15px 0;
  }
</style>
