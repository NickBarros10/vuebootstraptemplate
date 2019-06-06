<template>
  <div class="hello">
    <img class="logo" src="../assets/logo.png">
    <h3>{{ msg }}</h3>

    <template>
  <mdb-container>
    <mdb-row>
      <mdb-col col="4">col="4"</mdb-col>
      <mdb-col col="4">col="4"</mdb-col>
      <mdb-col col="4">col="4"</mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<mdb-container>
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" class="img-fluid z-depth-1 picture-width" alt="1">
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" class="img-fluid z-depth-1 picture-width" alt="1">
</mdb-container>




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
      msg: 'Welcome to Our Website'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
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

@media only screen and (max-width: 1100px){
  .logo{
    width: 100%;
  }
}

</style>
