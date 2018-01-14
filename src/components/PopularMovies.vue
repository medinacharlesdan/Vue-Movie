<template>
  <div class="PopularMovies ui segment container">
   <h1 class="ui header">
     <i class="tv icon"></i>
     <div class="content">
       Popular Movies
     </div>
     <div class="sub header">
       these movies are popular!
     </div>
   </h1>
 

<div class="ui five column doubling stackable grid">

    <div class="column" v-for="movie in movies">
     
  <div class="ui fluid card">
      <div class="image">
        <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path">
      </div>
      <div class="content">
        <a class="header">{{movie.title}}</a>
        <div class="meta">

           <span class="left floated">
          <i class="checkmark icon"></i>
          {{movie.popularity}}
        </span>

         <span class="right floated">
          <i class="heart outline like icon"></i>
          {{movie.vote_count}}
        </span>
        </div>
        <div class="description">{{movie.overview}}</div>
      </div>
      <div class="extra content">
       <a>
      <i class="arrow right icon"></i>
      read more
    </a>
      </div> 
    </div>

  
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'PopularMovies',
  data(){
      return{
        movies:[],
        movie:"",
      }
  },
  methods:{

  },
  created: function(){
    this.$http.get("https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=b5cad5db0797b8cfa3c8ab78230d79df").then(response => {
      this.movies = response.data.results;
    })
  }
  
}
</script>

<style scoped>
.PopularMovies{
  padding: 1rem;
}
</style>
