window.addEventListener("DOMContentLoaded",function(){document.querySelector("#burger").addEventListener("click",function(){document.querySelector("#menu").classList.toggle("navigation-list-active")})}),document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".tabs"),e=document.querySelectorAll(".section-work__list-btn"),n=document.querySelectorAll(".tabs__content");t&&t.addEventListener("click",t=>{if(t.target.classList.contains("section-work__list-btn")){const e=t.target.dataset.tabsPath;o(e)}});const o=t=>{e.forEach(t=>{t.classList.remove("section-work__list-btn-active")}),document.querySelector(`[data-tabs-path="${t}"]`).classList.add("section-work__list-btn-active"),n.forEach(t=>{t.classList.remove("tabs__content-active")}),document.querySelector(`[data-tabs-target="${t}"]`).classList.add("tabs__content-active")}});const swiper=new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});$(function(){$("#accordion").accordion({collapsible:!0,heightStyle:"content",active:"Boolean"})});