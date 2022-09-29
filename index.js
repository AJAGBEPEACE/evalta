function cal() {
    fr= ""
    fr+="<table><tr>"
    for (var i = 1; i <= row.value; i++){
        fr+="<td>"+i+"times"
        fr+="<table>"
        for(var j = 1; j <= column.value; j++){
            fr +="<tr><td> " +i+ "X"+j+ "="+ i*j + "</td></tr>" 
        }
        fr+="<table>"
        fr+="</tr></table>"
    }
    evalTable.innerHTML = fr
    
}