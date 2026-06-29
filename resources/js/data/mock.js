export const categories = [
  {
    id: 'trending',
    title: 'Trending Now',
    items: [
      { id: 1, title: 'Squid Game', year: 2021, rating: 'TV-MA', duration: '3 Seasons', description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games.', thumbnail: 'https://picsum.photos/seed/sg1/400/225', backdrop: 'https://picsum.photos/seed/sg1b/800/450', genre: 'Thriller', match: 97 },
      { id: 2, title: 'Stranger Things', year: 2016, rating: 'TV-14', duration: '4 Seasons', description: 'When a young boy disappears, his mother and friends must confront terrifying supernatural forces.', thumbnail: 'https://picsum.photos/seed/st1/400/225', backdrop: 'https://picsum.photos/seed/st1b/800/450', genre: 'Sci-Fi', match: 95 },
      { id: 3, title: 'The Witcher', year: 2019, rating: 'TV-MA', duration: '3 Seasons', description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world.', thumbnail: 'https://picsum.photos/seed/tw1/400/225', backdrop: 'https://picsum.photos/seed/tw1b/800/450', genre: 'Fantasy', match: 93 },
      { id: 4, title: 'Wednesday', year: 2022, rating: 'TV-14', duration: '1 Season', description: 'Follows Wednesday Addams\' years as a student at Nevermore Academy.', thumbnail: 'https://picsum.photos/seed/wd1/400/225', backdrop: 'https://picsum.photos/seed/wd1b/800/450', genre: 'Comedy', match: 91 },
      { id: 5, title: 'Bridgerton', year: 2020, rating: 'TV-MA', duration: '3 Seasons', description: 'The eight close-knit siblings of the Bridgerton family look for love and happiness.', thumbnail: 'https://picsum.photos/seed/br1/400/225', backdrop: 'https://picsum.photos/seed/br1b/800/450', genre: 'Romance', match: 89 },
      { id: 6, title: 'Money Heist', year: 2017, rating: 'TV-MA', duration: '5 Seasons', description: 'An unusual group of robbers attempt to carry out the most perfect robbery.', thumbnail: 'https://picsum.photos/seed/mh1/400/225', backdrop: 'https://picsum.photos/seed/mh1b/800/450', genre: 'Crime', match: 96 },
    ],
  },
  {
    id: 'netflix-originals',
    title: 'Netflix Originals',
    items: [
      { id: 7, title: 'The Crown', year: 2016, rating: 'TV-MA', duration: '6 Seasons', description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign.', thumbnail: 'https://picsum.photos/seed/tc1/400/225', backdrop: 'https://picsum.photos/seed/tc1b/800/450', genre: 'Drama', match: 94 },
      { id: 8, title: 'Ozark', year: 2017, rating: 'TV-MA', duration: '4 Seasons', description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks.', thumbnail: 'https://picsum.photos/seed/oz1/400/225', backdrop: 'https://picsum.photos/seed/oz1b/800/450', genre: 'Thriller', match: 92 },
      { id: 9, title: 'You', year: 2018, rating: 'TV-MA', duration: '4 Seasons', description: 'A dangerously charming, intensely obsessive young man goes to extreme measures.', thumbnail: 'https://picsum.photos/seed/yo1/400/225', backdrop: 'https://picsum.photos/seed/yo1b/800/450', genre: 'Thriller', match: 88 },
      { id: 10, title: 'Dark', year: 2017, rating: 'TV-MA', duration: '3 Seasons', description: 'A family saga with a supernatural twist, set in a German town.', thumbnail: 'https://picsum.photos/seed/dk1/400/225', backdrop: 'https://picsum.photos/seed/dk1b/800/450', genre: 'Sci-Fi', match: 95 },
      { id: 11, title: 'Narcos', year: 2015, rating: 'TV-MA', duration: '3 Seasons', description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.', thumbnail: 'https://picsum.photos/seed/nc1/400/225', backdrop: 'https://picsum.photos/seed/nc1b/800/450', genre: 'Crime', match: 90 },
      { id: 12, title: 'Black Mirror', year: 2011, rating: 'TV-MA', duration: '6 Seasons', description: 'An anthology series exploring a twisted, high-tech multiverse.', thumbnail: 'https://picsum.photos/seed/bm1/400/225', backdrop: 'https://picsum.photos/seed/bm1b/800/450', genre: 'Sci-Fi', match: 93 },
    ],
  },
  {
    id: 'action',
    title: 'Action & Adventure',
    items: [
      { id: 13, title: 'Extraction', year: 2020, rating: 'R', duration: '1h 56m', description: 'A black market mercenary who has nothing to lose is hired to rescue the kidnapped son.', thumbnail: 'https://picsum.photos/seed/ex1/400/225', backdrop: 'https://picsum.photos/seed/ex1b/800/450', genre: 'Action', match: 87 },
      { id: 14, title: 'The Gray Man', year: 2022, rating: 'PG-13', duration: '2h 2m', description: 'When a shadowy CIA agent uncovers compromising agency secrets, he becomes a target.', thumbnail: 'https://picsum.photos/seed/gm1/400/225', backdrop: 'https://picsum.photos/seed/gm1b/800/450', genre: 'Action', match: 85 },
      { id: 15, title: 'Red Notice', year: 2021, rating: 'PG-13', duration: '1h 58m', description: 'An FBI profiler pursuing the world\'s most wanted art thief becomes his reluctant partner.', thumbnail: 'https://picsum.photos/seed/rn1/400/225', backdrop: 'https://picsum.photos/seed/rn1b/800/450', genre: 'Action', match: 82 },
      { id: 16, title: '6 Underground', year: 2019, rating: 'R', duration: '2h 8m', description: 'Six billionaires fake their deaths and form an elite vigilante squad.', thumbnail: 'https://picsum.photos/seed/6u1/400/225', backdrop: 'https://picsum.photos/seed/6u1b/800/450', genre: 'Action', match: 80 },
      { id: 17, title: 'The Old Guard', year: 2020, rating: 'R', duration: '2h 5m', description: 'A covert team of immortal mercenaries is suddenly exposed and hunted down.', thumbnail: 'https://picsum.photos/seed/to1/400/225', backdrop: 'https://picsum.photos/seed/to1b/800/450', genre: 'Action', match: 88 },
      { id: 18, title: 'Army of the Dead', year: 2021, rating: 'R', duration: '2h 28m', description: 'Following a zombie outbreak in Las Vegas, a group of mercenaries takes the ultimate gamble.', thumbnail: 'https://picsum.photos/seed/aw1/400/225', backdrop: 'https://picsum.photos/seed/aw1b/800/450', genre: 'Horror', match: 79 },
    ],
  },
  {
    id: 'comedy',
    title: 'Comedies',
    items: [
      { id: 19, title: 'Glass Onion', year: 2022, rating: 'PG-13', duration: '2h 19m', description: 'World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery.', thumbnail: 'https://picsum.photos/seed/go1/400/225', backdrop: 'https://picsum.photos/seed/go1b/800/450', genre: 'Comedy', match: 91 },
      { id: 20, title: 'Don\'t Look Up', year: 2021, rating: 'R', duration: '2h 18m', description: 'Two low-level astronomers must go on a media tour to warn mankind of an approaching comet.', thumbnail: 'https://picsum.photos/seed/dl1/400/225', backdrop: 'https://picsum.photos/seed/dl1b/800/450', genre: 'Comedy', match: 86 },
      { id: 21, title: 'The Unbearable Weight of Talent', year: 2022, rating: 'R', duration: '1h 42m', description: 'An aging action star must play the world\'s biggest Nicolas Cage fan.', thumbnail: 'https://picsum.photos/seed/uc1/400/225', backdrop: 'https://picsum.photos/seed/uc1b/800/450', genre: 'Comedy', match: 84 },
      { id: 22, title: 'Murder Mystery', year: 2019, rating: 'PG-13', duration: '1h 37m', description: 'A cop and his wife go on a European vacation to invigorate their marriage.', thumbnail: 'https://picsum.photos/seed/ms1/400/225', backdrop: 'https://picsum.photos/seed/ms1b/800/450', genre: 'Comedy', match: 81 },
      { id: 23, title: 'The Adam Project', year: 2022, rating: 'PG-13', duration: '1h 46m', description: 'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self.', thumbnail: 'https://picsum.photos/seed/ar1/400/225', backdrop: 'https://picsum.photos/seed/ar1b/800/450', genre: 'Sci-Fi', match: 83 },
      { id: 24, title: 'Always Be My Maybe', year: 2019, rating: 'PG-13', duration: '1h 41m', description: 'Reunited after 15 years, famous chef Sasha and hometown musician Marcus feel the old sparks.', thumbnail: 'https://picsum.photos/seed/am1/400/225', backdrop: 'https://picsum.photos/seed/am1b/800/450', genre: 'Romance', match: 85 },
    ],
  },
  {
    id: 'horror',
    title: 'Horror Movies',
    items: [
      { id: 25, title: 'Bird Box', year: 2018, rating: 'R', duration: '2h 4m', description: 'Five years after an ominous unseen presence drives most of society to suicide.', thumbnail: 'https://picsum.photos/seed/bb1/400/225', backdrop: 'https://picsum.photos/seed/bb1b/800/450', genre: 'Horror', match: 87 },
      { id: 26, title: 'His House', year: 2020, rating: 'R', duration: '1h 33m', description: 'A refugee couple struggle to adjust to their new life in an English town with a dark secret.', thumbnail: 'https://picsum.photos/seed/hb1/400/225', backdrop: 'https://picsum.photos/seed/hb1b/800/450', genre: 'Horror', match: 89 },
      { id: 27, title: 'No One Gets Out Alive', year: 2021, rating: 'R', duration: '1h 40m', description: 'An immigrant in search of the American dream is forced to take a room in a boarding house.', thumbnail: 'https://picsum.photos/seed/ng1/400/225', backdrop: 'https://picsum.photos/seed/ng1b/800/450', genre: 'Horror', match: 78 },
      { id: 28, title: 'Fear Street', year: 2021, rating: 'R', duration: '1h 52m', description: 'In 1994, a group of teenagers discovers that the terrifying events happening in their town.', thumbnail: 'https://picsum.photos/seed/fs1/400/225', backdrop: 'https://picsum.photos/seed/fs1b/800/450', genre: 'Horror', match: 82 },
      { id: 29, title: 'The Ritual', year: 2017, rating: 'R', duration: '1h 34m', description: 'A group of old college friends reunite for a hike through the Scandinavian wilderness.', thumbnail: 'https://picsum.photos/seed/tr1/400/225', backdrop: 'https://picsum.photos/seed/tr1b/800/450', genre: 'Horror', match: 84 },
      { id: 30, title: 'Gerald\'s Game', year: 2017, rating: 'R', duration: '2h 10m', description: 'A woman turns a romantic weekend getaway into a fight for survival when her husband dies.', thumbnail: 'https://picsum.photos/seed/gg1/400/225', backdrop: 'https://picsum.photos/seed/gg1b/800/450', genre: 'Horror', match: 80 },
    ],
  },
  {
    id: 'documentaries',
    title: 'Documentaries',
    items: [
      { id: 31, title: 'The Social Dilemma', year: 2020, rating: 'PG-13', duration: '1h 34m', description: 'Explores the dangerous human impact of social networking.', thumbnail: 'https://picsum.photos/seed/sd1/400/225', backdrop: 'https://picsum.photos/seed/sd1b/800/450', genre: 'Documentary', match: 92 },
      { id: 32, title: 'Seaspiracy', year: 2021, rating: 'PG', duration: '1h 29m', description: 'Passionate about ocean life, a filmmaker sets out to document the environmental harm of fishing.', thumbnail: 'https://picsum.photos/seed/sp1/400/225', backdrop: 'https://picsum.photos/seed/sp1b/800/450', genre: 'Documentary', match: 88 },
      { id: 33, title: 'My Octopus Teacher', year: 2020, rating: 'PG', duration: '1h 25m', description: 'A forager forms an unlikely friendship with an octopus in a South African kelp forest.', thumbnail: 'https://picsum.photos/seed/ot1/400/225', backdrop: 'https://picsum.photos/seed/ot1b/800/450', genre: 'Documentary', match: 90 },
      { id: 34, title: 'The Tinder Swindler', year: 2022, rating: 'TV-14', duration: '1h 44m', description: 'A group of women devise a plan to hunt down the man who conned them.', thumbnail: 'https://picsum.photos/seed/ts1/400/225', backdrop: 'https://picsum.photos/seed/ts1b/800/450', genre: 'Documentary', match: 86 },
      { id: 35, title: 'Our Planet', year: 2019, rating: 'TV-PG', duration: '1 Season', description: 'Experience our planet\'s natural beauty and examine how climate change impacts all living creatures.', thumbnail: 'https://picsum.photos/seed/op1/400/225', backdrop: 'https://picsum.photos/seed/op1b/800/450', genre: 'Documentary', match: 94 },
      { id: 36, title: 'Abstract', year: 2017, rating: 'TV-PG', duration: '2 Seasons', description: 'The art of design explores the world\'s most innovative designers.', thumbnail: 'https://picsum.photos/seed/ab1/400/225', backdrop: 'https://picsum.photos/seed/ab1b/800/450', genre: 'Documentary', match: 85 },
    ],
  },
];

export const featured = {
  id: 7,
  title: 'The Crown',
  year: 2016,
  rating: 'TV-MA',
  duration: '6 Seasons',
  description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
  backdrop: 'https://picsum.photos/seed/featured1/1920/1080',
  genre: 'Drama',
  match: 94,
};
