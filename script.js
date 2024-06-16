const homePage=document.getElementById("home-page")
const featurePost=document.getElementById("feature-post")
const aboutMe=document.getElementById("about-me")
const recentPosts=document.getElementById("recent-posts")
const homeBtn=document.getElementById("home-btn")
const aboutMeBtn = document.getElementById("about-me-btn")

aboutMeBtn.addEventListener("click",function(){
    homePage.classList.add("hidden")
    recentPosts.classList.remove("hidden")
    aboutMe.classList.remove("hidden")
    featurePost.classList.add("hidden")
})

homeBtn.addEventListener("click",function(){
    homePage.classList.remove("hidden")
    recentPosts.classList.add("hidden")
    aboutMe.classList.add("hidden")
    featurePost.classList.add("hidden")
})

homePage.addEventListener("click",function(){
    homePage.classList.add("hidden")
    recentPosts.classList.remove("hidden")
    featurePost.classList.remove("hidden")
})