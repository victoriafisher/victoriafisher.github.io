$(document).ready(function() {

  $(".meme1").hover(
    function(){
      var number = Math.round(Math.random() * 4);
        $(".meme_img_wrapper").append(
          "<img class='meme_img' src='assets/images/article1/" + number + ".jpg' />"
        )
    },
    function(){
      $(".meme_img").remove();
    }
  );

  $(".meme2").hover(
    function(){
      var number = Math.round(Math.random() * 4);
        $(".meme_img_wrapper").append(
          "<img class='meme_img' src='assets/images/article2/" + number + ".jpg' />"
        )
    },
    function(){
      $(".meme_img").remove();
    }
  );

  $(".meme3").hover(
    function(){
      var number = Math.round(Math.random() * 4);
        $(".meme_img_wrapper").append(
          "<img class='meme_img' src='assets/images/article3/" + number + ".jpg' />"
        )
    },
    function(){
      $(".meme_img").remove();
    }
  );
});
