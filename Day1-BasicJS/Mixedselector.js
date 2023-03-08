  ////selecting parent or grandparent
        // const child=document.querySelector(".child");
        // const parent=child.parentElement;
        // setColor(parent)
        
        //// accessing ancestor from child
        // const child=document.querySelector(".child");
        // const grandparent=child.closest(".grandparent");
        // setColor(grandparent)
        
        
        //// accessing siblings
        const childone=document.querySelector(".child");
        const childtwo=childone.nextElementSibling;
        setColor(childtwo)
        ////for previous siblings
        setColor(childtwo.previousElementSibling)

        function setColor(element){
          element.style.backgroundColor="#333";
      }