<template>
  <div class="app__detailedpost">
    <div class="app__detailedpost-tags">
      <p class="app__detailedpost-tags_name">By Ryan Jackson</p>
      <p class="app__detailedpost-tags_time">2 Month Ago</p>
    </div>
    <h1 class="app__detailedpost-title">
      Optimizing CSS for faster page loads
    </h1>
    <div class="app__detailedpost-content">
      <section class="app__detailedpost-content_section1">
        <p class="app__detailedpost-content_section1-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
          blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero nunc consequat. Aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Tellus elementum sagittis vitae et leo duis ut
          diam. Eget nullam non nisi est sit amet. Dignissim suspendisse in est
          ante in nibh mauris. Nec feugiat in fermentum posuere urna. Diam in
          arcu cursus euismod quis viverra. Facilisis mauris sit amet massa
          vitae tortor condimentum lacinia. Diam quam nulla porttitor massa id
          neque aliquam vestibulum morbi. Sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend. Sed elementum tempus egestas
          sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Viverra nibh cras pulvinar mattis nunc
          sed blandit libero. Morbi tincidunt augue interdum velit euismod in.
          Accumsan lacus vel facilisis volutpat est velit egestas dui. Erat
          pellentesque adipiscing commodo elit at imperdiet. Quis risus sed
          vulputate odio ut. Nulla aliquet enim tortor at auctor urna.
        </p>
      </section>
      <div class="app__detailedpost-content_image">
        <img src="../assets/img/Safari.png" alt="blog photo" width="510px" height="327px" />
      </div>
      <section class="app__detailedpost-content_section2">
        <p class="app__detailedpost-content_section1-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
          blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero nunc consequat. Aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Tellus elementum sagittis vitae et leo duis ut
          diam. Eget nullam non nisi est sit amet. Dignissim suspendisse in est
          ante in nibh mauris. Nec feugiat in fermentum posuere urna. Diam in
          arcu cursus euismod quis viverra. Facilisis mauris sit amet massa
          vitae tortor condimentum lacinia. Diam quam nulla porttitor massa id
          neque aliquam vestibulum morbi. Sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend. Sed elementum tempus egestas
          sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Viverra nibh cras pulvinar mattis nunc
          sed blandit libero. Morbi tincidunt augue interdum velit euismod in.
          Accumsan lacus vel facilisis volutpat est velit egestas dui. Erat
          pellentesque adipiscing commodo elit at imperdiet. Quis risus sed
          vulputate odio ut. Nulla aliquet enim tortor at auctor urna. <br />
          Proin fermentum leo vel orci porta non pulvinar neque. In egestas erat
          imperdiet sed euismod nisi porta lorem. Metus vulputate eu scelerisque
          felis imperdiet proin fermentum. Luctus venenatis lectus magna
          fringilla. Nunc scelerisque viverra mauris in aliquam. Et molestie ac
          feugiat sed lectus vestibulum mattis. Sem et tortor consequat id porta
          nibh venenatis cras sed. Sed felis eget velit aliquet sagittis id.
          Auctor neque vitae tempus quam pellentesque nec nam aliquam sem.
          Tincidunt ornare massa eget egestas purus viverra accumsan in. Aliquet
          lectus proin nibh nisl condime.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailedPost",
};
</script>

<style lang='scss' scoped >
.app__detailedpost {
  max-width: 1144px;
  margin: 0 auto;

  .app__detailedpost-tags{
    display: flex;
    margin-top: 91px;
    gap: 4px;

    :nth-child(1){
      font-size: 12;
      line-height: 14.32px;
      font-weight: 500;
      color: #4B4B4B;
    }

    :nth-child(2){
      font-size: 12;
      line-height: 14.32px;
      font-weight: 500;
      color: #6E6E6E;
    }
  }

  .app__detailedpost-title{
    margin-top: 10px;
    font-size: 32px;
    line-height: 38.19px;
    font-weight: 900;
    color: #2C2C2C;
  }

  .app__detailedpost-content {
    margin-top: 23px;

    .app__detailedpost-content_section1-desc,
    .app__detailedpost-content_section2-desc{
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
      color: #6E6E6E;
    }

    .app__detailedpost-content_image{
      display: flex;
      justify-content: center;
      margin: 30px 0px;
    }
  }


}
</style>