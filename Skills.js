window.onload = function myloadfunctionality(){

    //Accordion that allows only one open at a time
    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove');
            
            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }


    //Changing the sources of images
    var btn1 = document.getElementsByClassName("GA4btn");
    
        for (var i = 0; i < btn1.length; i++){
            btn1[i].addEventListener("click",function(){   
                document.getElementById("GA4skillimg").src = this.id + ".JPG";
                
            });       
        }

    var btn2 = document.getElementsByClassName("GSCbtn");

    for (var i = 0; i < btn2.length; i++){
        btn2[i].addEventListener("click",function(){   
            document.getElementById("GSCskillimg").src = this.id + ".JPG";
            
        });       
    }


}