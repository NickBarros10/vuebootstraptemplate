<template>
  <div id="app">
    <!-- nav bar -->
    <template>
      <title>A Mountain Adventure</title>
  <!--Navbar-->
  <mdb-navbar class="fixed-top" color="black" dark>
    <!-- Navbar brand -->
    <mdb-navbar-brand to="/">
      <a class="navbar-brand">
        <img src="./assets/logo.png" height="40" alt="mountain logo">
      </a>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav >
        <mdb-nav-item to="/">Home</mdb-nav-item>
        <mdb-nav-item to="/Reviews">Reviews</mdb-nav-item>
        <mdb-nav-item to="/Pricing">Pricing</mdb-nav-item>
      </mdb-navbar-nav>
      <!-- Search form -->
      <mdb-form-inline>
        <mdb-input type="text" placeholder="Search" aria-label="Search"/>
      </mdb-form-inline>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

    <router-view style="margin-top: 3%">

    </router-view>
      
  
<template>
  <!-- Footer -->
  <mdb-footer color="black" class="font-small pt-0 foot">
    <mdb-container>
      <mdb-row>
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <a class="fb-ic"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="gplus-ic"><i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="pin-ic"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i></a>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>
    
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem, mdbFormInline } from 'mdbvue';

export default {
  components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbFormInline,
      mdbInput
    },
  name: 'App'
}
</script>

<style>
#app {
  font-family: Open Sans Condensed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

.foot{
  margin-top: 0px !important;
  text-align: center !important;
}


</style>
