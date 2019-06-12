<template>
  <div class="bg">
    <img class="logo" src="../assets/logo.png">
    <h1 class="Welcome">{{ msg }}</h1>
    <mdb-container>
    <div class="view overlay zoom">
    <img src="../assets/mountains.png" class="img-fluid mountain " alt="smaple image">
    <div class="mask flex-center">
    </div>
</div>

  </mdb-container>

    <template>
  <mdb-container class="font">
    <mdb-row>
      <mdb-col col="4"><h3><u>Mountains</u></h3><p class="font">Our most popular natural feature for hiking are the mighty mountains! Mountains offer the most adventerous hiking experience because of their monstrous heights. There are actually various ways to scale up a mountain, but we at Adventerous Hiking always make sure to guide our customers through the most favorable routes up any mountain. Although mountains offer a wonderful experience in nature, it is important to take note of the dangers that mountains can possess. However, we at Adventerous Mountains make sure our guides are certified medics to take care of any injuries our customers might suffer from. If any serious injuries occur, we will investigate the case and work our best to finance any possible medical bills. Nevertheless, after 15 years of service, we at Adventerous Mountains have never let any customer to be significantly injured, and we take pride in always caring for our customers first. </p></mdb-col>
      <mdb-col col="4"><h3><u>Hills</u></h3><p class="font">Our most popular natural feature for hiking are the mighty mountains! Mountains offer the most adventerous hiking experience because of their monstrous heights. There are actually various ways to scale up a mountain, but we at Adventerous Hiking always make sure to guide our customers through the most favorable routes up any mountain. Although mountains offer a wonderful experience in nature, it is important to take note of the dangers that mountains can possess. However, we at Adventerous Mountains make sure our guides are certified medics to take care of any injuries our customers might suffer from. If any serious injuries occur, we will investigate the case and work our best to finance any possible medical bills. Nevertheless, after 15 years of service, we at Adventerous Mountains have never let any customer to be significantly injured, and we take pride in always caring for our customers first.</p></mdb-col>
      <mdb-col col="4"><h3><u>Mounts</u></h3><p class="font">Our most popular natural feature for hiking are the mighty mountains! Mountains offer the most adventerous hiking experience because of their monstrous heights. There are actually various ways to scale up a mountain, but we at Adventerous Hiking always make sure to guide our customers through the most favorable routes up any mountain. Although mountains offer a wonderful experience in nature, it is important to take note of the dangers that mountains can possess. However, we at Adventerous Mountains make sure our guides are certified medics to take care of any injuries our customers might suffer from. If any serious injuries occur, we will investigate the case and work our best to finance any possible medical bills. Nevertheless, after 15 years of service, we at Adventerous Mountains have never let any customer to be significantly injured, and we take pride in always caring for our customers first.</p></mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<mdb-container class="images">
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" class="img-fluid picture-width images-margin" alt="1">
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" class="img-fluid picture-width images-margin" alt="1">
</mdb-container>

<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet">


  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol} from 'mdbvue';
  
export default {  
  components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbFooter
    },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Adventerous Hiking'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}

.picture-width{
  width: 50%;
  float: left;
}

/*body, html {*/
  /*height: 100%;*/
/*}*/
.bg {
  /* The image used */
  background-image: url("../assets/mountain-path.png");

  /* Full height */
  height: auto;

  /* Center and scale the image nicely */
  background-position: center;
  /*position: fixed;*/
  /*min-width: 100%;*/
  background-repeat: no-repeat;
  background-size: cover !important;
}

.font{
  color: white;
}

p{ 
  font-size: 20px;
} 
.Welcome{
  color: white;
}

.images{
  height: 250px;
  margin-top: 50px;
}

.logo{
  width: 20%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.mountain{
  width: 100%;
  margin-top: 0%;
  margin-bottom: 2%;
}

.images-margin{
  margin-left: 3%;
  width: 45%;
}

@media only screen and (max-width: 1400px){
  .logo{
    width: 40%;
    margin-top: 4%;
  }
}

@media only screen and (max-width: 920px){
  .logo{
    width: 40%;
    margin-top: 7%;
  }
}

@media only screen and (max-width: 700px){
  .logo{
    width: 40%;
    margin-top: 10%;
  }
}

@media only screen and (max-width: 600px){
  .logo{
    width: 40%;
    margin-top: 13%;
  }
}




@media only screen and (max-width: 1100px){
  .mountain{
    width: 100%;
  }
}

@media only screen and (max-width: 1100px){
  .images-margin{
    width: 100%;
    margin-bottom: 3%;
  }
}

@media only screen and (max-width: 1200px){
  .images{
    height: 210px;
  }
}

@media only screen and (max-width: 1100px){
  .images{
    height: 875px;
  }
}

@media only screen and (max-width: 991px){
  .images{
    height: 660px;
  }
}

@media only screen and (max-width: 769px){
  .images{
    height: 660px;
  }
}

@media only screen and (max-width: 767px){
  .images{
    height: 495px;
  }
}

@media only screen and (max-width: 566px){
  .images{
    height: 495px;
  }
}

@media only screen and (max-width: 550px){
  .images{
    height: 460px;
  }
}

@media only screen and (max-width: 500px){
  .images{
    height: 432px;
  }
}

</style>
