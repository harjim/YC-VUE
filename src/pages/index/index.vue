<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"/>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
  <view>
    <button @click="counter.increment()">{{ counter.count }}</button>
    <button @click="getCollectList">{{ counter.count }}</button>
  </view>
  <view>
    <uni-badge text="1"/>
    <uni-badge text="2" type="success"/>
  </view>
</template>

<script lang="ts" setup>
import QualityScore from '@services/qualityScore'
import { useCounterStore } from '@stores/counter'
import { ref } from 'vue'

const qualityScore = new QualityScore()

const getCollectList = async () => {
  const data = await qualityScore.getCollectList({
    companyName: '',
    deptId: '',
    year: '',
    type: 0,
    engineerName: '',
    scoreMonth: ''
  })
  console.log(data)
}
const counter = useCounterStore()
const title = ref('Hello')
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8F8F94;
}
</style>
