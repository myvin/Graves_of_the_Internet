<template>
  <div class='grave'>
    <div class="info">
      <img src="../assets/grave.png" alt="grave">
      <div class="time">Start time</div>
      <div class="time">至</div>
      <div class="time">End time</div>
    </div>
    <div class="content">
      <h2>
        <a href="" target="_blank" rel="noopener noreferrer">name</a>
      </h2>
      <p>desc</p>
    </div>
  </div>
</template>

<style scoped>
  .grave {
    width: 500px;
    max-width: 100%;
    display: flex;
    box-sizing: border-box;
    margin: 1em auto;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(222, 222, 222);
    flex: 0 0 30%;
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
    padding-bottom: 1.25em;
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
  }
</style>
