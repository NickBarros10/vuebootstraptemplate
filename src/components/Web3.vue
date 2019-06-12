<template>
  <div class="bg">
    <a href="/">
    <img class="logo" src="../assets/logo.png">
    </a>
    <h1 class="Welcome">{{ msg }}</h1>
    <mdb-container>
      <div class="view overlay zoom">
    <img src="../assets/take-a-hike-day.png" class="img-fluid hike" alt="smaple image">
    <div class="mask flex-center">
    </div>
</div>

  </mdb-container>

<mdb-container>
<table class="table">
  <thead class="teal lighten-2">
    <tr>
      <th scope="col">Age Range</th>
      <th scope="col">Mini Package</th>
      <th scope="col">Medium Package</th>
      <th scope="col">Mega Package</th>
    </tr>
  </thead>
  <tbody class="black white-text">
    <tr>
      <th scope="row">12-20</th>
      <td>$125.00</td>
      <td>$175.00</td>
      <td>$225.00</td>
    </tr>
    <tr>
      <th scope="row">21-54</th>
      <td>$185.00</td>
      <td>$235.00</td>
      <td>$285.00</td>
    </tr>
    <tr>
      <th scope="row">55-84</th>
      <td>$155.00</td>
      <td>$205.00</td>
      <td>$255.00</td>
    </tr>
  </tbody>
</table>
</mdb-container>

<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet">


  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol,} from 'mdbvue';
  
export default {  
  components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbFooter
    },
  name: 'Web3',
  data () {
    return {
      msg: 'Pricing'
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
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  /*position: fixed;*/
  /*min-width: 100%;*/
  background-repeat: no-repeat;
  background-size: cover !important;
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
  margin-top: 2%;
  margin-bottom: 2%;
}

.hike{
  margin: auto !important;
  margin-bottom: 2% !important;
  margin-top: 2% !important;
}

.table{
  margin-top: 2%;
}

@media only screen and (max-width: 1100px){
  .logo{
    width: 40%;
  }
}

</style>
