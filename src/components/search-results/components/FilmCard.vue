<template>
  <div class="film-card">
    <div class="film-card_poster">
      <img :src="film.posterUrl"/>
    </div>
    <div class="film-card_description description">
      <div class="description_title-block title-block">
        <div class="title-block_title">
          <span>{{ film.title }}</span>
        </div>
        <div class="title-block_year">
          <span>{{ film.year }}</span>
        </div>
      </div>
      <div class="title-block_genre">
        <span>{{ film.genres.join(', ') }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FilmCard',
  props: ['film'],
};
</script>
<style scoped lang="less">
@import "../../../assets/css/variables.less";

.film-card {
  width: 320px;
  height: 530px;
  display: flex;
  flex-direction: column;
  .fontMixin(20px);
  color: @primaryText;
  cursor: pointer;
}

.film-card_poster {
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    min-width: 320px;
    min-height: 450px;
  }
}

.film-card_description {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
}

.description_title-block {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.title-block_year {
  border: 1px solid @primaryTextOpacity;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 2px 10px;
  border-radius: @primaryBorderRadius;
}

.title-block_genre {
  margin-top: 10px;
  font-size: 18px;
  color: @primaryTextOpacity;
}
</style>
