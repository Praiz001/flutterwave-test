<template>
  <div class="app__footer">
    <div class="app__footer-title">Join our Team of Writers</div>
    <p class="app__footer-desc">
      On dasdas, writers earn a living doing what they love. ,<br />Getting
      started is easy. Just pay a one time <strong>$25 fee</strong> and
      everything is ready to go.
    </p>
    <button class="app__footer-button" @click="makePayment()">JOIN US</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "AppFooter",
  // created() {
  //   let Script = document.createElement("script");
  //   Script.setAttribute("src", "https://checkout.flutterwave.com/v3.js");
  //   document.head.appendChild(Script);
  // },
  methods: {
    makePayment(){
      FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-af3dfaec08abfc863225175f8591df1a-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: 54600,
      currency: "NGN",
      payment_options: "card, mobilemoneyghana, ussd",
      redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "rose@unsinkableship.com",
        phone_number: "08102909304",
        name: "Rose DeWitt Bukater",
      },
      customizations: {
        title: "The Titanic Store",
        description: "Payment for an awesome cruise",
        logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
    })
    } 
  }
}
</script>

<style lang="scss" scoped>
* {
  max-width: 1144px;
  margin: 0 auto;
}

.app__footer {
  height: 383px;
  margin-top: 156px;
  text-align: center;

  .app__footer-title {
    color: #2c2c2c;
    font-size: 32px;
    font-weight: 500;
    line-height: 38.19px;
  }

  .app__footer-desc {
    margin-top: 12px;
    font-size: 22px;
    line-height: 32px;
    font-weight: 400;
    color: #6e6e6e;
  }

  .app__footer-button {
    width: 177px;
    height: 45px;
    padding: 12 55px;
    background-color: black;
    color: white;
    font-size: 18px;
    line-height: 21.48px;
    font-weight: 500;
    margin-top: 35px;
    cursor: pointer;
  }
}
</style>