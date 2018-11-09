<template>
    <div class="shopping-cart-content">
      <scroller :on-refresh="refresh" :on-infinite="infinite">
        <div>
          <div class="cart-list">
            <p class="null-cart">
              你的购物车是空的！
            </p>
          </div>
          <div class="lovely">
            <div class="lovely-top">猜你喜欢</div>
            <div class="lovely-list">
              <dl>
                <dt>
                  <img src="../../assets/images/6_11.gif" alt="">
                </dt>
                <dd>
                  <p>清欢眼选商城小程序端···</p>
                  <p>
                    <span>￥299</span>
                    <span>已售299件</span>
                  </p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="../../assets/images/6_11.gif" alt="">
                </dt>
                <dd>
                  <p>清欢眼选商城小程序端···</p>
                  <p>
                    <span>￥299</span>
                    <span>已售299件</span>
                  </p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="../../assets/images/6_11.gif" alt="">
                </dt>
                <dd>
                  <p>清欢眼选商城小程序端···</p>
                  <p>
                    <span>￥299</span>
                    <span>已售299件</span>
                  </p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="../../assets/images/6_11.gif" alt="">
                </dt>
                <dd>
                  <p>清欢眼选商城小程序端···</p>
                  <p>
                    <span>￥299</span>
                    <span>已售299件</span>
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </scroller>
    </div>
</template>

<script>
    export default {
        name: "shopping-cart-content"
    }
</script>

<style scoped>

</style>
