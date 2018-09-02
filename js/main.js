"use strict";
document.addEventListener("DOMContentLoaded", function() {
  LoadHome();
  let botonHome = document.querySelectorAll(".js-loadhome");
  botonHome.forEach(e=> e.addEventListener("click", LoadHome));

  let botonAbout = document.querySelectorAll(".js-loadabout");
  botonAbout.forEach(e=> e.addEventListener("click", LoadAbout));

  let botonInformation = document.querySelectorAll(".js-loadinformation");
  botonInformation.forEach(e=> e.addEventListener("click", LoadInformation));

  let botonBlog = document.querySelectorAll(".js-loadblog");
  botonBlog.forEach(e=> e.addEventListener("click", LoadBlog));

  let botonGallery = document.querySelectorAll(".js-loadgallery");
  botonGallery.forEach(e=> e.addEventListener("click", LoadGallery));

  let botonContacts = document.querySelectorAll(".js-loadcontacts");
  botonContacts.forEach(e=> e.addEventListener("click", LoadContacts));

  function Loading() {
    let _container = document.querySelector('.container');
    _container.innerHTML = "<h1 class:'loading'>Loading...</h1>";
  }

  function LoadHome(){
    let _container = document.querySelector(".container");
    Loading();
    fetch("/Web ArgA 2018/html/home.html").then( function(response){
      if(response.ok){
        response.text().then(t=> _container.innerHTML = t);
      }else{
        container.innerHTML = "Error 404 file not found :(";
      }
    }).catch(function(response) {
      container.innerHTML = "No estas conectado a internet :("
    });
  }

  function LoadAbout(){
    let _container = document.querySelector(".container");
    Loading();
    fetch("/Web ArgA 2018/html/about.html").then( function(response){
      if(response.ok){
        response.text().then(t=> _container.innerHTML = t);
      }else{
        container.innerHTML = "Error 404 file not found :(";
      }
    }).catch(function(response) {
      container.innerHTML = "No estas conectado a internet :("
    });
  }

  function LoadInformation(){
    let _container = document.querySelector(".container");
    Loading();
    fetch("/Web ArgA 2018/html/information.html").then( function(response){
      if(response.ok){
        response.text().then(t=> _container.innerHTML = t);
      }else{
        container.innerHTML = "Error 404 file not found :(";
      }
    }).catch(function(response) {
      container.innerHTML = "No estas conectado a internet :("
    });
  }

  function LoadBlog(){
    let _container = document.querySelector(".container");
    Loading();
    fetch("/Web ArgA 2018/html/blog.html").then( function(response){
      if(response.ok){
        response.text().then(t=> _container.innerHTML = t);
      }else{
        container.innerHTML = "Error 404 file not found :(";
      }
    }).catch(function(response) {
      container.innerHTML = "No estas conectado a internet :("
    });
  }

  function LoadGallery(){
    let _container = document.querySelector(".container");
    Loading();
    fetch("/Web ArgA 2018/html/gallery.html").then( function(response){
      if(response.ok){
        response.text().then(t=> _container.innerHTML = t);
      }else{
        container.innerHTML = "Error 404 file not found :(";
      }
    }).catch(function(response) {
      container.innerHTML = "No estas conectado a internet :("
    });
  }

  function LoadContacts(){
    let _container = document.querySelector(".container");
    Loading();
    fetch("/Web ArgA 2018/html/contacts.html").then( function(response){
      if(response.ok){
        response.text().then(t=> _container.innerHTML = t);
      }else{
        container.innerHTML = "Error 404 file not found :(";
      }
    }).catch(function(response) {
      container.innerHTML = "No estas conectado a internet :("
    });
  }
});
