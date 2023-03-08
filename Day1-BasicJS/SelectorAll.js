   
        // to select multiple child should use query selector all
        const parent=document.querySelectorAll(".parent")
        parent.forEach(setColor);

        
        function setColor(element){
            element.style.backgroundColor="#333";
        }