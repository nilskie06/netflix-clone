<template>
  <div class="netflix-app">
    <!-- Navbar -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-left">
        <h1 class="logo">NETFLIX</h1>
        <ul class="nav-links">
          <li class="active">Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div class="nav-right">
        <span class="search-icon">🔍</span>
        <span class="notif-icon">🔔</span>
        <div class="avatar">N</div>
      </div>
    </nav>

    <!-- Hero -->
    <div class="hero" :style="{ backgroundImage: `url(${featured.backdrop})` }">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h2 class="hero-title">{{ featured.title }}</h2>
        <div class="hero-meta">
          <span class="match">{{ featured.match }}% Match</span>
          <span class="year">{{ featured.year }}</span>
          <span class="rating">{{ featured.rating }}</span>
          <span class="duration">{{ featured.duration }}</span>
        </div>
        <p class="hero-desc">{{ featured.description }}</p>
        <div class="hero-buttons">
          <button class="btn-play">▶ Play</button>
          <button class="btn-info">ℹ More Info</button>
        </div>
      </div>
      <div class="hero-fade"></div>
    </div>

    <!-- Rows -->
    <div class="rows-container">
      <ContentRow v-for="category in categories" :key="category.id" :category="category" />
    </div>

    <!-- Modal -->
    <div v-if="selectedItem" class="modal-overlay" @click.self="selectedItem = null">
      <div class="modal">
        <button class="modal-close" @click="selectedItem = null">✕</button>
        <div class="modal-backdrop" :style="{ backgroundImage: `url(${selectedItem.backdrop})` }">
          <div class="modal-backdrop-overlay"></div>
          <div class="modal-backdrop-content">
            <h2>{{ selectedItem.title }}</h2>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-main">
            <div class="modal-meta">
              <span class="match">{{ selectedItem.match }}% Match</span>
              <span class="year">{{ selectedItem.year }}</span>
              <span class="rating">{{ selectedItem.rating }}</span>
              <span class="duration">{{ selectedItem.duration }}</span>
            </div>
            <p>{{ selectedItem.description }}</p>
          </div>
          <div class="modal-sidebar">
            <div class="modal-tag">Genre: {{ selectedItem.genre }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { categories, featured } from '../data/mock.js';
import ContentRow from './ContentRow.vue';

export default {
  name: 'NetflixApp',
  components: { ContentRow },
  setup() {
    const isScrolled = ref(false);
    const selectedItem = ref(null);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));

    return { isScrolled, categories, featured, selectedItem };
  },
};
</script>
