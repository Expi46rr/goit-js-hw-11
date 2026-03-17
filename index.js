import{a as d,S as m,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="55066237-5cfe5caa7f2d484b58f1c4e04";async function h(i){return(await d.get(g,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${f}</p>
            <p><b>Downloads</b> ${p}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}S(),w(),h(r).then(o=>{if(!o.hits||o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{q()}),u.reset()}
//# sourceMappingURL=index.js.map
