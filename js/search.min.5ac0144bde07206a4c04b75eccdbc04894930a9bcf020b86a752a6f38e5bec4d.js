(()=>{var e=class{constructor(){this.searchInput=document.getElementById("search-input"),this.resultsContainer=document.getElementById("search-results"),this.store=window.store,this.initEventListeners(),this.checkUrlParams()}initEventListeners(){const e=(e,t)=>{let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,s),t)}};this.searchInput.addEventListener("input",e(e=>{const t=e.target.value;this.performSearch(t),window.history.replaceState({},"",t?`?q=${encodeURIComponent(t)}`:window.location.pathname)},300))}checkUrlParams(){const t=new URLSearchParams(window.location.search),e=t.get("q");e&&(this.searchInput.value=e,this.performSearch(e))}performSearch(e){if(!this.store||!e){this.resultsContainer.innerHTML="";return}const t=e.trim().split(/\s+/),n=lunr(function(){this.ref("url"),this.field("title",{boost:15}),this.field("content"),this.field("tags"),Object.values(window.store).forEach(e=>{this.add({url:e.url,title:e.title,content:e.content,tags:e.tags.join(" ")})})}),s=n.query(function(e){t.forEach(t=>{e.term(t,{boost:100}),e.term(t,{boost:10,wildcard:lunr.Query.wildcard.TRAILING}),t.length>2&&e.term(t,{boost:1,wildcard:lunr.Query.wildcard.LEADING|lunr.Query.wildcard.TRAILING})})});this.displayResults(s)}displayResults(e){let t="";e.length?(t+=`<p class="text-cyan-400 mb-4 font-mono">Found ${e.length} result${e.length===1?"":"s"}</p>`,e.forEach(e=>{const n=this.store[e.ref];t+=`
            <article class="bg-gray-800/80 border-l-4 border-cyan-400 rounded-md p-4 shadow-[0_0_8px_#00ffe7_inset] hover:shadow-[0_0_16px_#00ffe7_inset] transition-all">
            <h2 class="font-vt323 text-xl text-cyan-200 hover:text-fuchsia-400 transition-colors">
                <a href="${n.url}">${n.title}</a>
            </h2>
            <div class="mt-2 text-cyan-400 font-mono text-sm">
                ${n.content.substring(0,120)}...
            </div>
            ${n.tags.length?`
            <div class="mt-2 flex flex-wrap gap-2">
                ${n.tags.map(e=>`
                <span class="px-2 py-1 text-xs border border-cyan-500 rounded-full text-cyan-300">
                    #${e}
                </span>
                `).join("")}
            </div>`:""}
            </article>
        `})):t='<p class="text-center text-cyan-400">No results found</p>',this.resultsContainer.innerHTML=t}};document.addEventListener("DOMContentLoaded",function(){new e})})()