function total(){        
        var sub1 = parseInt(document.getElementById('eng').value)
        var sub2 = parseInt(document.getElementById('math').value)
        var sub3 = parseInt(document.getElementById('phy').value)
        var sub4 = parseInt(document.getElementById('chem').value)
        var sub5 = parseInt(document.getElementById('comp').value)

        if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
            alert("Please enter mark in range of 100")
        }else{
            var total = sub1+sub2+sub3+sub4+sub5
            document.getElementById('total').innerHTML="English marks :"+sub1+"<br> Mathematics marks :"+sub2+"<br> Physics marks :"+sub3+"<br> Chemistry marks :"+sub4+"<br> Computer marks :"+sub5 +"<br>___________<br>"+"Total marks are :"+total
        }
}
function average(){
    var sub1 = parseInt(document.getElementById('eng').value)
        var sub2 = parseInt(document.getElementById('math').value)
        var sub3 = parseInt(document.getElementById('phy').value)
        var sub4 = parseInt(document.getElementById('chem').value)
        var sub5 = parseInt(document.getElementById('comp').value)

        if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
            alert("Please enter mark in range of 100")
        }else{
            var average = (sub1+sub2+sub3+sub4+sub5)/5
            document.getElementById('ave').innerHTML="Average marks :"+ average
        }
}
function grade(){
    var sub1 = parseInt(document.getElementById('eng').value)
    var sub2 = parseInt(document.getElementById('math').value)
    var sub3 = parseInt(document.getElementById('phy').value)
    var sub4 = parseInt(document.getElementById('chem').value)
    var sub5 = parseInt(document.getElementById('comp').value)

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please enter mark in range of 100")
    }else{
        var average = (sub1+sub2+sub3+sub4+sub5)/5
        if(average>=80 && average<=100){
            document.getElementById('grade').innerHTML="Grade : A"
        }else if (average>=60 && average<=79){
            document.getElementById('grade').innerHTML="Grade : B"
        }else if(average>=40 && average<=69){
            document.getElementById('grade').innerHTML="Grade : C"
        }else if(average>=20 && average<=39){
            document.getElementById('grade').innerHTML="Grade : D"
        }else if(average>=0 && average<=19){
            document.getElementById('grade').innerHTML="Grade : E"
        }
}
}