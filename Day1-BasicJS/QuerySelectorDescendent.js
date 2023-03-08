   
        // //Sellecting all children
        // const grandparent=document.querySelector(".grandparent")
        // const parent=Array.from(grandparent.children);
        // const parentone=parent[0]
        // const parenttwo=parent[1]
        // const children=parenttwo.children
        // // //for second child of second parent
        // setColor(children[1])

        // accessing all the grandchild or descendent
        const grandparent=document.querySelector(".grandparent");
        const children=grandparent.querySelectorAll(".child");
        children.forEach(setColor)

        function setColor(element){
            element.style.backgroundColor="#333";
        }