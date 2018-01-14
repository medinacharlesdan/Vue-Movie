<template>

  <div class="DiscoverParticle">
       
      <div class="master">
    

    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
    </vue-particles>
    <div class="ui text center aligned main-text">
      <h1 class="ui header inverted">
        Movie Vue
      </h1>
      <h3 class="ui header inverted">Do whatever you want when you want to.</h3>
      <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
    </div>

  </div>
  
  </div>
</template>

<script>
export default {
name:"DiscoverParticle"
}
</script>

<style scoped>
.DiscoverParticle{
    height: 100%;
    
}

.master{
    position: relative;
    min-width: 100%;
    min-height: 700px;
    background: rgb(0, 0, 0);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -1rem;
 
}
.master .main-text{
    position: absolute;
     min-width: 800px;
     top: 10%;
     padding: 5rem 5rem;
}

</style>
