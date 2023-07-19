/* Loader Coding */

window.onload = function() 
{
    $(document).ready(
        function() 
        {
            $(".loader-con-cover").animate({
                "opacity":"0"
            },1000,function() {
                $(".loader-con-cover").css("display","none");
            });
        }
    );
}

/* End Loader Coding */


        function tab() 
        {
            "use strict";
            var type_btn = document.getElementsByClassName("type-btn");
            var hide = document.getElementsByClassName("hide");
            var i,j; 

            for(i = 0; i < type_btn.length; i++) 
            {
                type_btn[i].onclick = function() 
                {
                    for(j = 0; j < hide.length; j++) 
                    {
                        hide[j].style.display = "none";
                    } 

                    for(j = 0; j < type_btn.length; j++) 
                    {
                        type_btn[j].className = "type-btn";
                    }

                    document.getElementById(this.getAttribute("name")).style.display = "block";
                    document.getElementById(this.getAttribute("name")).className = "hide fade";

                    this.className = "type-btn active";
                }

            }
            type_btn[0].click();

        }

        tab();

        var result = document.getElementsByClassName("result");

        function type_I() 
        {
            var type = document.getElementById("type-i");
            var input = type.getElementsByTagName("input");
            input[2].onclick = function() 
            {
                result[0].innerHTML = (input[0].value*input[1].value)/100+" &#8377;";
            }
        }

        type_I();


        function type_II() 
        {
            var type = document.getElementById("type-ii");
            var input = type.getElementsByTagName("input");
            input[2].onclick = function() 
            {
                result[1].innerHTML = (input[1].value*100)/input[0].value+" %";
            }
        }

        type_II();


        function type_III() 
        {
            var type = document.getElementById("type-iii");
            var input = type.getElementsByTagName("input");
            input[2].onclick = function() 
            {
                result[2].innerHTML = (input[1].value*100)/input[0].value+" %";
            }
        }

        type_III();


        function type_IV() 
        {
            var type = document.getElementById("type-iv");
            var input = type.getElementsByTagName("input");
            input[2].onclick = function() 
            {
                var add = Number(input[1].value)+Number(100);
                var cal = (input[0].value*100)/add;
                result[3].innerHTML = cal.toFixed(2)+" &#8377;";
            }
        }

        type_IV();