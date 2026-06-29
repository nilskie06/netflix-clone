<template>
  <div class="page">
    <div class="page-hero" :style="{ backgroundImage: `url(${heroItem.backdrop})` }">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="page-badge">{{ heroItem.badge || 'SERIES' }}</span>
        <h1>{{ heroItem.title }}</h1>
        <p>{{ heroItem.description }}</p>
        <div class="page-meta">
          <span>{{ heroItem.match }}% Match</span>
          <span>{{ heroItem.year }}</span>
          <span>{{ heroItem.duration }}</span>
        </div>
        <button class="btn btn-play">▶ Play</button>
      </div>
    </div>
    <div class="page-grid">
      <div class="page-card" v-for="item in items" :key="item.id" @click="$emit('select', item)">
        <img :src="item.thumbnail" :alt="item.title" loading="lazy">
        <div class="page-card-badge" v-if="item.badge">{{ item.badge }}</div>
        <div class="page-card-info">
          <h3>{{ item.title }}</h3>
          <div class="page-card-meta">
            <span>{{ item.match }}%</span>
            <span>{{ item.year }}</span>
            <span>{{ item.rating }}</span>
          </div>
          <span class="page-card-genre">{{ item.genre }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentPage',
  props: {
    items: { type: Array, required: true },
    heroItem: { type: Object, required: true },
  },
  emits: ['select'],
};
</script>
