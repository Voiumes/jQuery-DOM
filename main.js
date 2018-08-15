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