<template>
  <div class="addaddress">
    <VantBar />
    <div class="content">
      <div class="name">
        <input type="text" placeholder="姓名" v-model="userName">
      </div>
      <div class="phone">
        <input type="text" placeholder="手机号码" v-model="telNumber">
      </div>
      <div class="address">
        <input type="text" placeholder="省份、城市、区县" v-model="address">
      </div>
      <div class="detailAddress">
        <input type="text" placeholder="详细地址，如楼道、楼盘号等" v-model="detailadress">
      </div>
      <div class="isDefault">
        <input type="checkbox" v-model="checked">
        <div class="text">设置为默认地址</div>
      </div>
    </div>
    <div class="bootom" @click="save">
      保存
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Addaddress',
  data () {
    return {
      userName: '',
      telNumber: '',
      address: '',
      detailadress: '',
      checked: false
    }
  },
  mounted () {
    document.body.style.backgroundColor = '#ffffff'
    if (this.$route.query.id) {
      this.getData()
    }
  },
  methods: {
    async getData () {
      await this.$store.dispatch('getAddressDetail', this.$route.query.id)
      this.userName = this.addressDetail.name
      this.telNumber = this.addressDetail.mobile
      this.address = this.addressDetail.address
      this.detailadress = this.addressDetail.address_detail
      if (this.addressDetail.is_default) {
        this.checked = true
      }
    },
    async save () {
      const { userName, telNumber, address, detailadress } = this
      let addressId = ''
      const checked = this.checked + ''
      const openId = localStorage.getItem('openId')
      if (this.$route.query.id) {
        addressId = this.$route.query.id
      }
      try {
        await this.$store.dispatch('saveAddress', { userName, telNumber, address, detailadress, openId, addressId, checked })
        this.$router.back()
      } catch (error) {
        alert(error.message)
      }
    }
  },
  computed: {
    ...mapGetters(['addressDetail'])
  }
}
</script>

<style scoped lang="scss">
.addaddress {
  width: 750px;

  .content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 127px;

    div {
      padding: 20px 23px;
      border-bottom: 1px solid #ebedf0;

      input {
        width: 100%;
        border: 0;
        line-height: 35px;
        font-size: 18px;
      }
    }

    .isDefault {
      padding: 7px 0;
      margin-top: 30px;
      border: 0;
      display: flex;
      font-size: 12px;
      align-items: center;

      input {
        width: 30px;
        height: 30px;
      }

      .text {
        padding: 0;
        padding-left: 15px;
        border: 0;
      }
    }
  }

  .bootom {
    width: 100%;
    background-color: #b4282d;
    color: #fff;
    text-align: center;
    line-height: 72px;
    position: fixed;
    bottom: 0;
  }
}
</style>
