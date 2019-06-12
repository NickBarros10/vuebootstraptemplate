<template>
  <div class="bg">
    <a href="/">
    <img class="logo" src="../assets/logo.png">
    </a>
    <h1 class="Welcome">{{ msg }}</h1>
    <mdb-container>
   <div class="view overlay zoom">
    <img src="../assets/hiking.png" class="img-fluid mountain " alt="smaple image">
    <div class="mask flex-center">
    </div>
</div>

  </mdb-container>

  <template>
  <mdb-container class="font">
    <mdb-row>
      <mdb-col col="4">
        <h3><u>John Doe</u></h3>
        <img class="profile" src="../assets/doe.png">
        <h2>5 out of 5</h2>
        <p class="font">I cannot express the abundant amount of joy and freedom I experienced during my hiking expedition! It was undoubtedly the greatest time of my life! My favorite part was when our friendly guide showed me and my hiking crew the wonderful sights of the mighty mountain we were hiking. However, this was only a detail from the adventure in its entirity. That part was included in the Medium Package which I purchased. I'd say it was the package with most value, because although the mega package offers buyers more equipment and features for the expedition, I personally found it a little pricy. Nevertheless, I would definitely do this again, perhaps once every year, and I would recommend this to anyone that's feeling like they need a peaceful break. </p>
      </mdb-col>
      <mdb-col col="4"><h3><u>Lily McFee</u></h3>
        <img class="profile" src="../assets/lily.png">
        <h2>5 out of 5</h2>
        <p class="font">I cannot express the abundant amount of joy and freedom I experienced during my hiking expedition! It was undoubtedly the greatest time of my life! My favorite part was when our friendly guide showed me and my hiking crew the wonderful sights of the mighty mountain we were hiking. However, this was only a detail from the adventure in its entirity. That part was included in the Medium Package which I purchased. I'd say it was the package with most value, because although the mega package offers buyers more equipment and features for the expedition, I personally found it a little pricy. Nevertheless, I would definitely do this again, perhaps once every year, and I would recommend this to anyone that's feeling like they need a peaceful break.</p></mdb-col>
      <mdb-col col="4"><h3><u>Jack Black</u></h3>
        <img class="profile" src="../assets/doug.png">
        <h2>5 out of 5</h2>
        <p class="font">I cannot express the abundant amount of joy and freedom I experienced during my hiking expedition! It was undoubtedly the greatest time of my life! My favorite part was when our friendly guide showed me and my hiking crew the wonderful sights of the mighty mountain we were hiking. However, this was only a detail from the adventure in its entirity. That part was included in the Medium Package which I purchased. I'd say it was the package with most value, because although the mega package offers buyers more equipment and features for the expedition, I personally found it a little pricy. Nevertheless, I would definitely do this again, perhaps once every year, and I would recommend this to anyone that's feeling like they need a peaceful break.</p></mdb-col>
    </mdb-row>
  </mdb-container>
</template>


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
      msg: 'Customer Reviews'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .profile{
    width: 100%;
  }

h3 {
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 5%;
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

.logo{
  width: 20%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.mountain{
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
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
