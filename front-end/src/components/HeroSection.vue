<template>
  <section class="hero" :style="{backgroundImage:`url(${popularCities[1].landscape})`}">
    <div class="city-details" >
      <div class="wrapper">
        <h1 class="city-name">Paris</h1>
        <p class="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi cumque dolor
                                  doloremque est, ipsa iusto minus placeat porro quae, quisquam quod rerum veniam?
                                  Doloribus eaque expedita maxime pariatur ullam!</p>
        <a class="action-button">Explore
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"
               focusable="false">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        </a>
      </div>
    </div> <!-- /city-name -->
    <div class="popular-cities">
      <div class="wrapper">
        <p>Popular</p>
        <hr class="d-inline-block" />

        <Splide :options=options>
          <SplideSlide v-for="city in this.popularCities" :key="city">
            <img :src="city.landscape" alt="Sample 1" class="splide-img">
          </SplideSlide>
        </Splide>

      </div>
    </div> <!-- popular-cities -->

  </section> <!-- hero -->
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: "HeroSection",
  component: { Splide, SplideSlide},
  data() {
    return {
      options: {
        rewind: true,
        perPage: 1,
        gap   : '1rem',
        height: '200px',
        heightRatio: '400px',
        pagination: false,
      },
      popularCities: []
    };
  },
  created() {
    const URL = 'http://localhost:8000/api/favourites'
    fetch(URL)
        .then(res => res.json())
        .then(popularCities => {
          this.popularCities = popularCities.cities
          console.log(this.popularCities[0].landscape)
        //  created()
        })
        .catch((error) => {
          console.log(error);
        });
  }
}
</script>

<style scoped lang="scss">
.hero {
  display               : grid;
  grid-template-rows    : 1fr 1fr;
  background-size       : cover;
  background-position   : center;
  background-repeat     : no-repeat;
  background-color      : rgba(0, 0, 0, .5);
  background-blend-mode : overlay;
  color                 : white;
  height                : 100vh;
  grid-template-areas   : 'CityDetails'
                        'PopularCities';
  }

.city-details {
  grid-area   : CityDetails;
  padding-top : 50px;

  .city-name {
    text-transform : uppercase;
    margin-bottom  : -10px;
    letter-spacing : 2px;
    font-size      : 3rem;
    }

  p {
    max-width : 260px;
    }
  }

.action-button {
  border          : 2px solid white;
  fill            : currentColor;
  display         : inline-flex;
  align-items     : center;
  justify-content : center;
  padding         : 4px 10px;
  border-radius   : 8px;
  cursor          : pointer;

  svg {
    margin-left : 5px;
    }
  }

.popular-cities {
  grid-area : PopularCities;

  p {
    margin-bottom : 0;
    font-size     : 1.5rem;
    }

  hr {
    width : 100px;
    }
  }
.splide-img {
  width: 100%;
  height: 300px;
  border-radius: 7px;
  }

</style>
