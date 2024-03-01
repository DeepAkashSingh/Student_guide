<template>
  <MainPageLayout>
    <StudentNavBar />
    <div id="app">
      <input
        v-model="searchText"
        placeholder="Search..."
        @input="searchCards"
      />
      <div class="card-container">
        <div v-for="card in filteredCards" :key="card.id" class="card">
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </MainPageLayout>
</template>

<script>
import MainPageLayout from "../LandingPageLayouts/MainPageLayout.vue";
import StudentNavBar from "../StudentLayouts/StudentNavBar.vue";

export default {
  name: "SearchCards",
  components: {
    MainPageLayout,
    StudentNavBar,
  },
  data() {
    return {
      searchText: "",
      cards: [
        { id: 1, title: "Card 1", description: "Description for Card 1" },
        { id: 2, title: "Card 2", description: "Description for Card 2" },
        { id: 3, title: "Card 3", description: "Description for Card 3" },
        { id: 4, title: "Card 4", description: "Description for Card 4" },
        { id: 5, title: "Card 5", description: "Description for Card 5" },
        { id: 6, title: "Card 6", description: "Description for Card 6" },
      ],
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter((card) =>
        card.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    searchCards() {
      // Perform additional search logic if needed
    },
  },
};
</script>
