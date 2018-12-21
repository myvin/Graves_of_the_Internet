<template>
  <div class='grave'>
    <div class="info">
      <img src="../assets/grave.png" alt="grave">
      <div class="time">{{item.startAt}}</div>
      <div class="time">至</div>
      <div class="time">{{item.endAt}}</div>
    </div>
    <div class="content">
      <h2>
        <a :href="item.link" target="_blank" :title='item.name' rel="noopener noreferrer">{{item.name}}</a>
      </h2>
      <p>{{item.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grave',
  props: {
    item: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .grave {
    width: 500px;
    max-width: 100%;
    display: flex;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 1.25em 0 0 0;
    border-bottom: 1px solid rgb(222, 222, 222);
    flex: 0 0 30%;
    background: #fff;
    transition: .3s ease;
  }
  .grave:hover {
    background: #fafafa;
    transition: .3s ease;
  }
  @media screen and (max-width: 1100px) {
    .grave {
      flex: 0 0 50%;
    }
  }
  .info {
    flex-basis: 100px;
    flex-shrink: 0;
    text-align: center;
    padding-bottom: 1.25em;
  }
  .info img {
    width: 50px;
    height: 50px;
  }
  .info .time {
    font-size: 0.75em;
    margin-top: 3px;
  }
  .content {
    text-align: left;
    padding-bottom: 1em;
  }
  .content h2 {
    font-weight: 300;
    margin: 0;
  }
  .content p {
    padding-right: 2em;
    font-size: 0.9em;
    line-height: 1.5;
    margin: 8px 0 0;
    text-align: justify;
  }
</style>
