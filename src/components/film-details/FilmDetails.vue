<template>
  <div class='film-details'>
    <div class="film-details_layer layer">
      <div class="layer_image"/>
    </div>
    <div class="film-details_poster">
      <img :src="film.posterurl"/>
    </div>
    <div class="film-details_details details">
      <div class="details_title-block title-block">
        <span class="title-block_title">
          {{film.title}}
        </span>
        <div class="title-block_rating rating">
          <span class="rating_value">{{film.imdbRating.toFixed(1)}}</span>
        </div>
      </div>
      <div class="details_genre">
        <span>{{film.genres.join(', ')}}</span>
      </div>
      <div class="details_stats stats">
        <div class="stats_year year">
          <span class="year_value">1000</span>
          <span class="year_units">year</span>
        </div>
        <div class="stats_duration duration">
          <span class="duration_value">157</span>
          <span class="duration_units">min</span>
        </div>
      </div>
      <div class="details_details">
        <p>{{film.storyline}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmDetails',
  props: ['film'],
};
</script>

<style scoped lang="less">
@import "../../assets/css/variables.less";

.film-details {
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 80px 60px 50px 60px;
  .fontMixin(24px);
  color: @primaryText;
}

.film-details_layer {
  .layerMixin("../../assets/img/cinema.jpg", 5px, 0.4);
}

.film-details_poster {
  height: 400px;
  width: 300px;

  img {
    height: 100%;
  }
}

.film-details_details {
  padding: 12px 0 12px 60px;
}

.title-block {
  display: flex;
  align-items: center;
}

.title-block_title {
  font-size: 30px;
}

.title-block_rating {
  .boxMixin(40px);
  font-size: 18px;
  border: 1px solid @primaryTextOpacity;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}

.rating_value {
  color: @positiveText;
}

.details_genre {
  font-size: 16px;
  margin-top: 10px;
}

.details_stats {
  margin-top: 30px;
  display: flex;
}

.stats_year {
  margin-right: 20px;
}

.year_value {
  margin-right: 5px;
}

.year_units {
  color: @activeText;
}

.duration_value {
  margin-right: 5px;
}

.duration_units {
  color: @activeText;
}

.details_details {
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.4;
}
</style>
