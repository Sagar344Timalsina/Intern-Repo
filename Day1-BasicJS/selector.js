   
        //same as css selector should give class or id selector
        //class=.
        // const grandparent=document.querySelector(".grandparent")
        //id=#
        // const grandparent=document.querySelector("#grand-parent")
        
        //query selector select only first child
        //selects first child only
        const parent=document.querySelector(".parent")
        setColor(parent)

        
        function setColor(element){
            element.style.backgroundColor="#333";
        }