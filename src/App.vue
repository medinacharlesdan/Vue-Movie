<template>
  <div id="app">
   
    <div class="ui menu  secondary">
      <router-link to="/">
  <a class=" item">
    Home
  </a>
  </router-link>
  <router-link to="/latest-movies">
  <a class="item">
    Latest Movies
   
  </a>
  </router-link>

  <router-link to="/popular-movies">
  <a class="item">
    Popular Movies
   
  </a>
  </router-link>

  <router-link to="/top-rated-movies">
  <a class="item">
  Top rated movies
  </a>
  </router-link>

  <div class="right menu">
    <div class="item">
      <div class="ui transparent icon input">
        <input type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div>
    </div>
  </div>
</div>
 
<router-view></router-view>


  
  </div>
</template>

<script>

import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';
import LatestMovies from './components/LatestMovies';


export default {
  name: 'app',
  components: {
    PopularMovies,
    TopRatedMovies,
    LatestMovies
    
  }
}
</script>

<style>
.contents {
padding-top:2rem;

}
</style>
