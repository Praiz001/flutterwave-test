<template>
    <div class="app__footer">
        <div class="app__footer-title">
            Join our Team of Writers
        </div>
        <p class="app__footer-desc">
            On dasdas, writers earn a living doing what they love. ,<br>Getting started is easy. Just pay a one time <strong>$25 fee</strong> and everything is ready to go.
        </p>
        <button class="app__footer-button">JOIN US</button>

    </div>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
*{
  max-width: 1144px;
  margin: 0 auto;
}

.app__footer{
    height: 383px;
    margin-top: 156px;
    text-align: center;

    .app__footer-title{
        color: #2C2C2C;
        font-size: 32px;
        font-weight: 500;
        line-height: 38.19px;
    }

    .app__footer-desc {
        margin-top: 12px;
        font-size: 22px;
        line-height: 32px;
        font-weight: 400;
        color: #6E6E6E;
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