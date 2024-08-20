$(document).ready(function(){
    // counter up start 
    $('.counter').counterUp();
    // ex number two 
    window.addEventListener('load', function () {
        // console.log("Windows loading");
    
        //Getting dashboard  ( Checking if we are in dashboard or not)
        var dashboard = document.getElementById("page_name");
        //Start button 
        var start_button = document.getElementById("start_button");
        //Stop button
        var stop_button = document.getElementById("timer_submit");
        //timer 
        var hour = document.getElementById("hour");
        var mint = document.getElementById("min");
        var secd = document.getElementById("sec");
    
        // console.log(timer.innerHTML);
    
        if (dashboard != null && localStorage.getItem('start_button') == null) {
            // console.log("in Dashboard and start button not clicked");
            //Declaring variable  
            var hr = 0;
            var min = 0;
            var sec = 0;
    
        } else if ((dashboard != null && localStorage.getItem('start_button') != null)) {
            $("#start_button").prop("disabled", true);
            $("#start_button").removeClass("btn-outline-success");
            $("#start_button").addClass("btn-light");
            start_button.innerHTML = "Running";
    
        }
        if (start_button) {
            start_button.addEventListener('click', function () {
                // console.log('start button working');
                localStorage.setItem('start_button', 'clicked');
                $("#start_button").prop("disabled", true);
                $("#start_button").removeClass("btn-outline-success");
                $("#start_button").addClass("btn-light");
                start_button.innerHTML = "Running";
                var total_time = document.getElementById("total_time");
                if (total_time) {
                    total_time.innerHTML = "Counting...";
                }
                timerCycle();
    
            })
        }
        if (stop_button) {
            stop_button.addEventListener('click', function () {
    
                // saveData(hr, min, sec);                          
                localStorage.clear();
                hour.innerHTML = '00';
                mint.innerHTML = '00';
                secd.innerHTML = '00';
                var total_time = document.getElementById("total_time");
                if (total_time) {
                    total_time.innerHTML = hr + ':' + min + ':' + sec;
                }
                //Stopping the cycle
                clearTimeout(cycle);
                hr = 0;
                min = 0;
                sec = 0;
                $("#start_button").prop("disabled", false);
                $("#start_button").addClass("btn-success");
                $("#start_button").removeClass("btn-light");
                start_button.innerHTML = "Start";
    
    
            })
        }
        //continue timer on other pages 
        if (dashboard == null && localStorage.getItem('start_button') != null) {
            sec = localStorage.getItem('sec');
            min = localStorage.getItem('min');
            hr = localStorage.getItem('hr');
            timerCycle();
            //continue timer on coming back Dashboard
        } else if (dashboard != null && localStorage.getItem('start_button') != null) {
            sec = localStorage.getItem('sec');
            min = localStorage.getItem('min');
            hr = localStorage.getItem('hr');
            timerCycle();
        }
        function timerCycle() {
            sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);
    
            sec = sec + 1;
    
            if (sec == 60) {
                min = min + 1;
                sec = 0;
            }
            if (min == 60) {
                hr = hr + 1;
                min = 0;
                sec = 0;
            }
    
            if (sec < 10 || sec == 0) {
                sec = '0' + sec;
            }
            if (min < 10 || min == 0) {
                min = '0' + min;
            }
            if (hr < 10 || hr == 0) {
                hr = '0' + hr;
            }
    
            localStorage.setItem('hr', hr);
            localStorage.setItem('min', min);
            localStorage.setItem('sec', sec);
    
            hour.innerHTML = hr;
            mint.innerHTML = min;
            secd.innerHTML = sec;
    
          
    
    
            cycle = setTimeout(timerCycle, 1000);
        }
    
    });
      // preloader start
    $(window).load(function () {
        $("#loading").fadeOut(600);
      });
     // preloader end

    //   mixitup start
     var mixerhello = mixitup('#hello', {
          
        animation: {
            duration: 300
        }
    });
     //   mixitup end

    
})






  
  
    $(document).ready(function(){
        lightbox.option({
            'resizeDuration': 300,
            'wrapAround': true
          })        
        
    })

    $(document).ready(function(){
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });
    })

      // filter functions
   $(document).ready(function(){
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
        }
      };
      // bind filter button click
      $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
     })
     
     $(document).ready(function(){
         var arc = function (t)
         {
             return {
                 x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
                 y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
             };
         };
     
         $('#text1').curvedText({
             curve:    arc,
             domain:   [-0.2, 0.2],
             viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
         });
        })
       