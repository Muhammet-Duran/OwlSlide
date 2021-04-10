$(document).ready(function(){

    const previcon =`<span class="icon-ifa ifa-116"></span>`;
    const nexticon =`<span class="icon-ifa ifa-115"></span>`;
    var owl=$(".content")
    owl.owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        items:1,
        navText:[previcon,nexticon],
        smartSpeed:1000,
        autoplay:true
       
        
    })
   

    
})