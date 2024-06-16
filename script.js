const homePage=document.getElementById("home-page")
const featurePost=document.getElementById("feature-post")
const aboutMe=document.getElementById("about-me")
const recentPosts=document.getElementById("recent-posts")
const homeBtn=document.getElementById("home-btn")
const aboutMeBtn = document.getElementById("about-me-btn")
const viewMoreContents = document.querySelectorAll(".view-more-content")
const viewMore = document.getElementById("view-more")

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

viewMore.addEventListener("click",function(){
    viewMore.classList.add("hidden")
    viewMoreContents.forEach(function(viewMoreContent){
        viewMoreContent.classList.remove("hidden")
    })
})