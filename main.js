$("input").keypress(function(){
    if(event.which === 13){
        let todo = $(this).val()
        $("ul").append('<li><span><i class="far fa-trash-alt"></i></span> ' + todo + '</li>');
        $(this).val('')
    }
})
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(400, function(){
       $(this).remove();
    })
})

$("ul").on("click", "li", function(){
    $(this).toggleClass('strike');
})

document.querySelector('.scrollP5').addEventListener('click', function(e){
    e.preventDefault;
    document.querySelector("#p5").scrollIntoView({ behavior: 'smooth' }).scrollBy({ top: 500, left: 0, behavior: 'smooth' });
   
})
document.querySelector('.scrollP4').addEventListener('click', function(e){
    e.preventDefault;
    document.querySelector("#p4").scrollIntoView({ behavior: 'smooth' });
})
document.querySelector('.scrollP3').addEventListener('click', function(e){
    e.preventDefault;
    document.querySelector("#p3").scrollIntoView({ behavior: 'smooth' });
})

