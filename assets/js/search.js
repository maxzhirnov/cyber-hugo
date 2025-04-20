// Search functionality for Lunr.js
class LunrSearch {
    constructor() {
      this.searchInput = document.getElementById('search-input');
      this.resultsContainer = document.getElementById('search-results');
      this.store = window.store;
      this.initEventListeners();
      this.checkUrlParams();
    }

    initEventListeners() {
    // Debounce function
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    // Live search on typing with debounce
    this.searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value;
        this.performSearch(query);
        window.history.replaceState({}, '', query ? `?q=${encodeURIComponent(query)}` : window.location.pathname);
    }, 300)); // 300ms debounce
    }


    checkUrlParams() {
    // Handle URL query param
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    if (queryParam) {
        this.searchInput.value = queryParam;
        this.performSearch(queryParam);
    }
    }

    performSearch(query) {
    if (!this.store || !query) {
        this.resultsContainer.innerHTML = '';
        return;
    }
    
    const terms = query.trim().split(/\s+/);
    
    const idx = lunr(function() {
        this.ref('url');
        this.field('title', { boost: 15 });
        this.field('content');
        this.field('tags');
        
        Object.values(window.store).forEach(page => {
        this.add({
            url: page.url,
            title: page.title,
            content: page.content,
            tags: page.tags.join(' ')
        });
        });
    });
    
    const results = idx.query(function(q) {
        terms.forEach(term => {
        // Exact match (highest boost)
        q.term(term, { boost: 100 });
        
        // Prefix match (beginning of word)
        q.term(term, { 
            boost: 10,
            wildcard: lunr.Query.wildcard.TRAILING
        });
        
        // Contains match (partial anywhere in word)
        if (term.length > 2) { // Only for terms with 3+ characters
            q.term(term, { 
            boost: 1,
            wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
            });
        }
        });
    });
    
    this.displayResults(results);
    }

    displayResults(results) {
    let html = '';
    
    if (results.length) {
        html += `<p class="text-cyan-400 mb-4 font-mono">Found ${results.length} result${results.length === 1 ? '' : 's'}</p>`;
        
        results.forEach(result => {
        const item = this.store[result.ref];
        html += `
            <article class="bg-gray-800/80 border-l-4 border-cyan-400 rounded-md p-4 shadow-[0_0_8px_#00ffe7_inset] hover:shadow-[0_0_16px_#00ffe7_inset] transition-all">
            <h2 class="font-vt323 text-xl text-cyan-200 hover:text-fuchsia-400 transition-colors">
                <a href="${item.url}">${item.title}</a>
            </h2>
            <div class="mt-2 text-cyan-400 font-mono text-sm">
                ${item.content.substring(0, 120)}...
            </div>
            ${item.tags.length ? `
            <div class="mt-2 flex flex-wrap gap-2">
                ${item.tags.map(tag => `
                <span class="px-2 py-1 text-xs border border-cyan-500 rounded-full text-cyan-300">
                    #${tag}
                </span>
                `).join('')}
            </div>` : ''}
            </article>
        `;
        });
    } else {
        html = '<p class="text-center text-cyan-400">No results found</p>';
    }
    
    this.resultsContainer.innerHTML = html;
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new LunrSearch();
});
  