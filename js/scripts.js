menu.onclick = function myFunction(){
    var x = document.getElementById("myTopnav");
    
    if(x.className === "topnav") {
    x.className += " responsive";        
    } else{
        x.className = "topnav";
    }
}

let count = 0;

$(".cart-btn").on("click", function(){
    let cart = $(".cart-nav");
    let imgtograg = $(this)
        .parent(".buttons")
        .parent(".content")
        .parent(".card")
        .find("img")
        .eq(0);
    if (imgtograg) {
        var imgclone = imgtograg
        .clone()
        .offset({
        top: imgtograg.offset().top,
        left: imgtograg.offset().left,
        })
        .ccs({
        opacity: "0.8",
        position: "absolute",
        height: "150px",
        width: "150px",
        objectFit: "cover",
        "z-index": "100"
    })
    
    .appendTo($("body"))
    .animate(
        {
        top: cart.offset().top + 20,
        left: cart.offset().left + 30,
        width: 75,
        height: 75
        },
        1000,
        "easeInOutExpo"     
    );

    setTimeout(function(){
        count++;
        $(".cart-nav .item-count").text(count);
    }, 1500);

    imgclone.animate(
        {
            width: 0,
            height: 0
        },
        function () {
            $(this).detach();
        }
    );
}
});