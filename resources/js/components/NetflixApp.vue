<template>
  <div class="netflix-app">
    <div class="bg-grid"></div>
    <div class="bg-glow"></div>

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
        <div class="nav-icon">🔍</div>
        <div class="nav-icon">🔔</div>
        <div class="avatar">N</div>
      </div>
    </nav>

    <!-- Hero -->
    <div class="hero" :style="{ backgroundImage: `url(${featured.backdrop})` }">
      <div class="hero-particles">
        <div v-for="n in 20" :key="n" class="particle" :style="{ left: Math.random()*100+'%', animationDelay: Math.random()*5+'s', animationDuration: 4+Math.random()*4+'s' }"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="dot"></span>
          ORIGINAL SERIES
        </div>
        <h2 class="hero-title"><span>{{ featured.title }}</span></h2>
        <div class="hero-meta">
          <span class="match">{{ featured.match }}% Match</span>
          <span class="year">{{ featured.year }}</span>
          <span class="rating">{{ featured.rating }}</span>
          <span class="duration">{{ featured.duration }}</span>
        </div>
        <p class="hero-desc">{{ featured.description }}</p>
        <div class="hero-buttons">
          <button class="btn btn-play">▶ Play</button>
          <button class="btn btn-info">ℹ More Info</button>
        </div>
      </div>
    </div>

    <!-- Rows -->
    <div class="rows-container">
      <ContentRow v-for="category in categories" :key="category.id" :category="category" @select="selectedItem = $event" />
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="selectedItem" class="modal-overlay" @click.self="selectedItem = null">
        <div class="modal">
          <button class="modal-close" @click="selectedItem = null">✕</button>
          <div class="modal-backdrop" :style="{ backgroundImage: `url(${selectedItem.backdrop})` }">
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
              <div class="modal-tag"><span>Genre</span> {{ selectedItem.genre }}</div>
              <div class="modal-tag"><span>Match</span> {{ selectedItem.match }}%</div>
              <div class="modal-tag"><span>Year</span> {{ selectedItem.year }}</div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
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
    const handleScroll = () => { isScrolled.value = window.scrollY > 50; };
    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));
    return { isScrolled, categories, featured, selectedItem };
  },
};
</script>
