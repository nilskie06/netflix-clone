<template>
  <div class="netflix-app">
    <div class="bg-grid"></div>
    <div class="bg-glow"></div>

    <!-- Navbar -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-left">
        <h1 class="logo" @click="currentTab = 'home'">NETFLIX</h1>
        <ul class="nav-links">
          <li :class="{ active: currentTab === 'home' }" @click="currentTab = 'home'">Home</li>
          <li :class="{ active: currentTab === 'tv' }" @click="currentTab = 'tv'">TV Shows</li>
          <li :class="{ active: currentTab === 'movies' }" @click="currentTab = 'movies'">Movies</li>
          <li :class="{ active: currentTab === 'new' }" @click="currentTab = 'new'">New & Popular</li>
          <li :class="{ active: currentTab === 'mylist' }" @click="currentTab = 'mylist'">My List</li>
        </ul>
      </div>
      <div class="nav-right">
        <div class="nav-icon" @click="showSearch = !showSearch">🔍</div>
        <div class="nav-icon">🔔</div>
        <div class="avatar">N</div>
      </div>
    </nav>

    <!-- Search Bar -->
    <div v-if="showSearch" class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search titles, genres..." autofocus @input="handleSearch">
      <button @click="showSearch = false; searchQuery = ''">✕</button>
    </div>

    <!-- HOME TAB -->
    <template v-if="currentTab === 'home'">
      <div class="hero" :style="{ backgroundImage: `url(${featured.backdrop})` }">
        <div class="hero-particles">
          <div v-for="n in 20" :key="n" class="particle" :style="{ left: Math.random()*100+'%', animationDelay: Math.random()*5+'s', animationDuration: 4+Math.random()*4+'s' }"></div>
        </div>
        <div class="hero-content">
          <div class="hero-badge"><span class="dot"></span> ORIGINAL SERIES</div>
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
      <div class="rows-container">
        <ContentRow v-for="cat in categories" :key="cat.id" :category="cat" @select="selectedItem = $event" />
      </div>
    </template>

    <!-- TV SHOWS TAB -->
    <template v-if="currentTab === 'tv'">
      <ContentPage :items="filteredTvShows" :heroItem="tvShows[0]" @select="selectedItem = $event" />
    </template>

    <!-- MOVIES TAB -->
    <template v-if="currentTab === 'movies'">
      <ContentPage :items="filteredMovies" :heroItem="movies[0]" @select="selectedItem = $event" />
    </template>

    <!-- NEW & POPULAR TAB -->
    <template v-if="currentTab === 'new'">
      <ContentPage :items="filteredNew" :heroItem="newPopular[0]" @select="selectedItem = $event" />
    </template>

    <!-- MY LIST TAB -->
    <template v-if="currentTab === 'mylist'">
      <div class="mylist-page">
        <div class="mylist-header">
          <h1>My List</h1>
          <p>{{ myList.length }} titles</p>
        </div>
        <div v-if="myList.length === 0" class="mylist-empty">
          <div class="empty-icon">📋</div>
          <h3>Your list is empty</h3>
          <p>Add titles from any tab to keep track of what you want to watch.</p>
          <button class="btn btn-play" @click="currentTab = 'home'">Browse Titles</button>
        </div>
        <div v-else class="page-grid">
          <div class="page-card" v-for="item in myList" :key="item.id" @click="selectedItem = item">
            <img :src="item.thumbnail" :alt="item.title" loading="lazy">
            <div class="page-card-info">
              <h3>{{ item.title }}</h3>
              <button class="remove-btn" @click.stop="removeFromList(item)">✕ Remove</button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="selectedItem" class="modal-overlay" @click.self="selectedItem = null">
        <div class="modal">
          <button class="modal-close" @click="selectedItem = null">✕</button>
          <div class="modal-backdrop" :style="{ backgroundImage: `url(${selectedItem.backdrop})` }">
            <div class="modal-backdrop-content"><h2>{{ selectedItem.title }}</h2></div>
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
              <div class="modal-actions">
                <button class="btn btn-play" @click="playItem(selectedItem)">▶ Play</button>
                <button class="btn btn-add" :class="{ added: isInList(selectedItem) }" @click="toggleList(selectedItem)">
                  {{ isInList(selectedItem) ? '✓ In My List' : '+ My List' }}
                </button>
                <button class="btn btn-info">ℹ More Info</button>
              </div>
            </div>
            <div class="modal-sidebar">
              <div class="modal-tag"><span>Genre</span> {{ selectedItem.genre }}</div>
              <div class="modal-tag"><span>Match</span> {{ selectedItem.match }}%</div>
              <div class="modal-tag"><span>Year</span> {{ selectedItem.year }}</div>
              <div class="modal-tag"><span>Duration</span> {{ selectedItem.duration }}</div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { categories, featured } from '../data/mock.js';
import { tvShows, movies, newPopular } from '../data/pages.js';
import ContentRow from './ContentRow.vue';
import ContentPage from './ContentPage.vue';

export default {
  name: 'NetflixApp',
  components: { ContentRow, ContentPage },
  setup() {
    const isScrolled = ref(false);
    const currentTab = ref('home');
    const selectedItem = ref(null);
    const myList = ref([]);
    const showSearch = ref(false);
    const searchQuery = ref('');

    const handleScroll = () => { isScrolled.value = window.scrollY > 50; };
    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));

    const filteredTvShows = computed(() => {
      if (!searchQuery.value) return tvShows;
      const q = searchQuery.value.toLowerCase();
      return tvShows.filter(i => i.title.toLowerCase().includes(q) || i.genre.toLowerCase().includes(q));
    });
    const filteredMovies = computed(() => {
      if (!searchQuery.value) return movies;
      const q = searchQuery.value.toLowerCase();
      return movies.filter(i => i.title.toLowerCase().includes(q) || i.genre.toLowerCase().includes(q));
    });
    const filteredNew = computed(() => {
      if (!searchQuery.value) return newPopular;
      const q = searchQuery.value.toLowerCase();
      return newPopular.filter(i => i.title.toLowerCase().includes(q) || i.genre.toLowerCase().includes(q));
    });

    const handleSearch = () => {};
    const toggleList = (item) => {
      const idx = myList.value.findIndex(i => i.id === item.id);
      if (idx >= 0) myList.value.splice(idx, 1);
      else myList.value.push({ ...item });
    };
    const removeFromList = (item) => {
      myList.value = myList.value.filter(i => i.id !== item.id);
    };
    const isInList = (item) => myList.value.some(i => i.id === item.id);
    const playItem = (item) => { alert(`Now playing: ${item.title}`); };

    return { isScrolled, currentTab, selectedItem, myList, showSearch, searchQuery,
      categories, featured, tvShows, movies, newPopular,
      filteredTvShows, filteredMovies, filteredNew,
      handleSearch, toggleList, removeFromList, isInList, playItem };
  },
};
</script>
