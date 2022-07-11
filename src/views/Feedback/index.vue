<template>
  <div class="feedback" ref="feedback">
    <VantBar />
    <div class="content">
      <div class="header">意见与反馈</div>
      <div class="main">
        <div class="left-box">留言</div>
        <div class="right-box">
          <textarea placeholder="请填写您的意见和反馈" v-model="content" @input="change"></textarea>
          <div>{{num}}/150</div>
        </div>
      </div>
      <div class="phone">
        <div class="left-box">联系方式:</div>
        <div class="right-box">
          <input type="text" placeholder="邮箱/手机号/微信号" v-model="phone">
        </div>
      </div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  data () {
    return {
      content: '',
      phone: '',
      num: 0
    }
  },
  methods: {
    change () {
      this.num = this.content.length
      if (this.content.length > 150) {
        this.content = this.content.slice(0, 149)
      }
    },
    async submit () {
      const name = JSON.parse(localStorage.getItem('userInfo')).nickName
      try {
        await this.$store.dispatch('suggestionFeedback', { content: this.content, name, openId: localStorage.getItem('openId'), phone: this.phone })
        alert('小伙纸,真敢给我发意见,我记住你了')
        this.phone = ''
        this.content = ''
      } catch (error) {
        alert(error.message)
      }
    }
  },
  mounted () {
    document.body.style.backgroundColor = '#ffffff'
  },
  beforeRouteLeave (to, from, next) {
    document.body.style.backgroundColor = '#f4f4f4'
    next()
  }
}
</script>

<style scoped lang="scss">
.feedback {
  width: 750px;
  box-sizing: border-box;
  background-color: #fff;

  .content {
    box-sizing: border-box;
    width: 100%;
    padding: 0 15px;
    font-size: 20px;

    .header {
      font-size: 12px;
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
    }

    .main {
      padding: 15px 23px;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, .2);

      .left-box {
        width: 125px;
        height: 133px;
        margin-right: 18px;
      }

      .right-box {
        flex: 1;
        display: flex;
        flex-direction: column;

        textarea {
          width: 100%;
          resize: none;
          flex: 1;
          border: 0;
        }

        div {
          text-align: right;
          margin-top: 6px;
        }
      }
    }

    .phone {
      padding: 15px 23px;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, .2);

      .left-box {
        line-height: 35px;
        height: 35px;
        width: 125px;
        margin-right: 18px;
      }

      .right-box {
        flex: 1;

        input {
          width: 100%;
          height: 100%;
          border: 0;
        }
      }
    }

    button {
      display: block;
      width: 95%;
      height: 75px;
      background-color: #b4282d;
      color: #fff;
      border-radius: 6px;
      margin: 72px auto;
      font-size: 26px;
    }
  }
}
</style>
