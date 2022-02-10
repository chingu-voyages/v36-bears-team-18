<template>
  <section class="hero" :style="{backgroundImage:`url(${popularCities[1].landscape})`}">
    <div class="city-details">
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
        <div class="slider">
          <template v-for="city in this.popularCities" :key="city">
            <img :src="city.landscape" :alt="city.city">
          </template>
          <div class="slider-navigation">
            <button class="prev">
              <svg class="d-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
              </svg>
            </button>
            <button class="next">
              <svg class="d-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div> <!-- popular-cities -->

  </section> <!-- hero -->
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      popularCities: [
        {
          country: "Spain",
          city: "Barcelona",
          population: "1.62 million",
          landscape: "https://source.unsplash.com/hVhfqhDYciU/1024x768",
          placeVisit: [
            {
              name: "Sagrada Familla",
              imageUrl: "https://images.unsplash.com/photo-1569661341346-96bdffdd6295"
            },
            {
              name: "Parc de la Ciutadella",
              imageUrl: "https://cdn.pixabay.com/photo/2016/08/01/21/18/parc-de-la-ciutadella-1562194_960_720.jpg"
            },
            {
              name: "Park Güell",
              imageUrl: "https://cdn.pixabay.com/photo/2020/03/12/21/34/fun-4926289_960_720.jpg"
            },
            {
              name: "Arc de Triomf",
              imageUrl: "https://cdn.pixabay.com/photo/2020/03/08/12/05/the-arc-de-triomf-4912302_960_720.jpg"
            }
          ]
        },
        {
          country: "France",
          city: "Paris",
          population: "2.161 million",
          landscape: "https://source.unsplash.com/nnzkZNYWHaU/1024x768",
          placeVisit: [
            {
              name: "Eiffel Tower",
              imageUrl: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg"
            },
            {
              name: "Jardin des Tuileries",
              imageUrl: "https://images.unsplash.com/photo-1564227589927-2a13874d0a92"
            },
            {
              name: "Louvre Museum",
              imageUrl: "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg"
            },
            {
              name: "Palace of Versailles",
              imageUrl: "https://images.unsplash.com/photo-1566087247505-cd95ebd53df9"
            }
          ]
        },
        {
          country: "Italy",
          city: "Venice",
          population: "261,905",
          landscape: "https://source.unsplash.com/1naE8177_bI/1024x768",
          placeVisit: [
            {
              name: "St.Mark's Basilica",
              imageUrl: "https://cdn.pixabay.com/photo/2021/10/15/14/09/saint-marks-basilica-6712670_960_720.jpg"
            },
            {
              name: "St.Mark's Square",
              imageUrl: "https://cdn.pixabay.com/photo/2015/09/05/07/33/piazza-san-marco-923916_960_720.jpg"
            },
            {
              name: "Doge's Palace",
              imageUrl: "https://cdn.pixabay.com/photo/2014/10/02/19/51/st-marks-square-470561_960_720.jpg"
            },
            {
              name: "The Rialto Bridge",
              imageUrl: "https://cdn.pixabay.com/photo/2018/01/04/16/16/venice-3061053_960_720.jpg"
            }
          ]
        },
        {
          country: "Japan",
          city: "Tokyo",
          population: "14.04 million",
          landscape: "https://source.unsplash.com/To5wAJDt1IM/1024x768",
          placeVisit: [
            {
              name: "Sensouji Temple",
              imageUrl: "https://images.unsplash.com/photo-1580167227251-be70f01b0c51"
            },
            {
              name: "teamLab Borderless and teamLab Planets",
              imageUrl: "https://images.unsplash.com/photo-1592997264946-028edf8ea505"
            },
            {
              name: "Tokyo Tower",
              imageUrl: "https://images.unsplash.com/photo-1609383020819-ccff2af581ce"
            },
            {
              name: "Ameyoko",
              imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
            }
          ]
        }
      ]
    };
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

.slider {
  display : flex;
  justify-content: center;
  align-items: center;
  position: relative;
  }

.slider img {
  width  : 200px;
  height : 200px;
  }

.prev, .next {
  background: none;
  border-radius: 100%;
  border: 2px solid white;
  padding: 0;
  svg {
    fill: white;
    width: 20px;
    height: 20px;
    }
  }
.prev {
  margin-right: 20px;
  }
</style>
