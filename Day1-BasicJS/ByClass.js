//By ClassName
        //class name can be multiple and class name doesnot return in array so convert in array before using all at once
        const parent=Array.from(document.getElementsByClassName('parent'));

        parent.forEach(setColor)
        
        function setColor(element){
            element.style.backgroundColor="#333";
        }