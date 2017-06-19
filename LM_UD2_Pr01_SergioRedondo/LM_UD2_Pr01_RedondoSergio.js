var xmlhttp = new XMLHttpRequest();
var url = "dibujos.json";
var myArr;

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myArr = JSON.parse(this.responseText);
        imprimirDatos(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function imprimirDatos(arr){
    var section = document.getElementById("resultado");
    
    for (i = 0; i < arr.length; i++) {
          
        if(arr[i].dibujantes!=null){
            var arrDibujantes = arr[i].dibujantes;
           
            for (j = 0; j < arrDibujantes.length; j++) {
                var article = document.createElement("article");
                var h2 = document.createElement("h2");
                var a = document.createElement("a");
                var nodeA = document.createTextNode(arrDibujantes[j].nombre);
                var img = document.createElement("img");
                var li = document.createElement("li");
                var nodeLi = document.createTextNode(arrDibujantes[j].nombre);
                if(arrDibujantes[j].todos!=undefined){
                    a.setAttribute("href", arrDibujantes[j].todos);
                    a.setAttribute("target", "_blank");
                }
                img.setAttribute("src",arrDibujantes[j].ultimo);
                img.setAttribute("alt",arrDibujantes[j].ultimos);
                section.appendChild(article);
                article.appendChild(h2);
                article.appendChild(img);
                dibujantes.appendChild(li);
                li.appendChild(nodeLi);
                h2.appendChild(a);
                a.appendChild(nodeA);
            }
        } 
    }
    var medios = document.getElementById("medio");
        for (i = 0; i < arr.length; i++) {
            var option = document.createElement("option");
            var nombre = document.createTextNode(arr[i].nombre);
            medios.appendChild(option);
            
            option.appendChild(nombre);
        }
}

function datos(){
    var selectClave = document.getElementById("medio").value;
    var section = document.getElementById("resultado");
    var dibujantes = document.getElementById("dibujantes");
    
    while (section.firstChild){
      section.removeChild(section.firstChild);  
    }
    if(selectClave=="todo"){
        for (i = 0; i < myArr.length; i++) {
          
        if(myArr[i].dibujantes!=null){
            var arrDibujantes = myArr[i].dibujantes;
            
            
            for (j = 0; j < arrDibujantes.length; j++) {
                var article = document.createElement("article");
                var h2 = document.createElement("h2");
                var a = document.createElement("a");
                var nodeA = document.createTextNode(arrDibujantes[j].nombre);
                var img = document.createElement("img");
                var li = document.createElement("li");
                var nodeLi = document.createTextNode(arrDibujantes[j].nombre);
                if(arrDibujantes[j].todos!=undefined){
                    a.setAttribute("href", arrDibujantes[j].todos);
                    a.setAttribute("target", "_blank");
                }
                
                img.setAttribute("src",arrDibujantes[j].ultimo);
                img.setAttribute("alt",arrDibujantes[j].ultimos);
                section.appendChild(article);
                article.appendChild(h2);
                article.appendChild(img);
                dibujantes.appendChild(li);
                li.appendChild(nodeLi);
                h2.appendChild(a);
                a.appendChild(nodeA);
            }
        } 
    }
    }else{
        
        for (i = 0; i < myArr.length; i++) {
            if(myArr[i].nombre==selectClave){
                
                
                if(myArr[i].dibujantes!=null){
                    var arrDibujantes = myArr[i].dibujantes;
                    
                    for (j = 0; j < arrDibujantes.length; j++) {
                        var article = document.createElement("article");
                        var h2 = document.createElement("h2");
                        var a = document.createElement("a");
                        var nodeA = document.createTextNode(arrDibujantes[j].nombre);
                        var img = document.createElement("img");
                        var li = document.createElement("li");
                        var nodeLi = document.createTextNode(arrDibujantes[j].nombre);
                        if(arrDibujantes[j].todos!=undefined){
                            a.setAttribute("href", arrDibujantes[j].todos);
                            a.setAttribute("target", "_blank");
                        }
                        img.setAttribute("src",arrDibujantes[j].ultimo);
                        img.setAttribute("alt",arrDibujantes[j].ultimos);
                        section.appendChild(article);
                        article.appendChild(h2);
                        article.appendChild(img);
                        dibujantes.appendChild(li);
                li.appendChild(nodeLi);
                        h2.appendChild(a);
                        a.appendChild(nodeA);
                    }
                }else{
                    var h3 = document.createElement("h3");
                    var nodeh3 = document.createTextNode("No se encontraron dibujantes para el medio seleccionado");
                    section.appendChild(h3);
                    h3.appendChild(nodeh3);
                }   
            }
        }
    }
}