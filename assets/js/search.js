// assets/js/search.js
class AI4PolymerSearch {
  constructor() {
    this.searchIndex = {};
    this.initializeSearch();
  }
  
  async initializeSearch() {
    // Load search index from JSON
    const response = await fetch('/assets/data/search-index.json');
    this.searchIndex = await response.json();
    this.setupSearchUI();
  }
  
  setupSearchUI() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      this.displayResults(this.search(query), searchResults);
    });
  }
  
  search(query) {
    // Implement search logic across papers, databases, tutorials
    return this.searchIndex.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AI4PolymerSearch();
});