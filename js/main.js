// optional
		$('#blogCarousel').carousel({
				interval: 1500
        });



  

  $(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
  });

  $('.first').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:2,
            nav:false,
        },
        600:{
            items:3,
            nav:false,
        },
        1000:{
            items:4,
            
        }
    }
})

$('.Column-list').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:2,
          nav:false,
      },
      600:{
          items:3,
      },
      1000:{
          items:5,     
      }
  }
})

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}





  

           
