<template>
  <div class="bg">
    <img class="logo" src="../assets/logo.png">
    <h1 class="Welcome">{{ msg }}</h1>
    <mdb-container>
    <img class="mountain" src="../assets/mountains.png">

  </mdb-container>

  <template>
  <mdb-container class="font">
    <mdb-row>
      <mdb-col col="4"><h3><u>Mountains</u></h3><p class="font">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></mdb-col>
      <mdb-col col="4"><h3><u>Hills</u></h3><p class="font">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></mdb-col>
      <mdb-col col="4"><h3><u>Mounts</u></h3><p class="font">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<mdb-container class="images">
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" class="img-fluid z-depth-1 picture-width images-margin" alt="1">
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" class="img-fluid z-depth-1 picture-width images-margin" alt="1">
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
  name: 'Web2',
  data () {
    return {
      msg: 'Hike Hike Hike'
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

@media only screen and (max-width: 1100px){
  .logo{
    width: 40%;
  }
}

@media only screen and (max-width: 1100px){
  .mountain{
    width: 100%;
  }
}
</style>
