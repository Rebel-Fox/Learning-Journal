
const viewMoreContents = document.querySelectorAll(".view-more-content")
const viewMore = document.getElementById("view-more")

viewMore.addEventListener("click",function(e){
    e.preventDefault()
    viewMore.classList.add("hidden")
    viewMoreContents.forEach(function(viewMoreContent){
        viewMoreContent.classList.remove("hidden")
    })
})