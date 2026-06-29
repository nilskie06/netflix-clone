<template>
  <div class="content-row">
    <h3 class="row-title">{{ category.title }}</h3>
    <div class="row-slider" ref="slider">
      <div class="row-poster" v-for="item in category.items" :key="item.id"
           @click="$emit('select', item)">
        <img :src="item.thumbnail" :alt="item.title" loading="lazy">
        <div class="poster-info">
          <h4>{{ item.title }}</h4>
          <div class="poster-meta">
            <span class="match">{{ item.match }}%</span>
            <span class="year">{{ item.year }}</span>
            <span class="rating">{{ item.rating }}</span>
          </div>
          <div class="poster-genre">{{ item.genre }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentRow',
  props: {
    category: { type: Object, required: true },
  },
};
</script>
