function myfunction(){
    var val1= document.getElementById('val1');
    var val2= document.getElementById('val2');
    var val3= document.getElementById('val3');
    var val4= document.getElementById('val4');
    var points=0;
    if (val1.checked==true){
        alert('Wrong Answer ');
        points=points-1;
        document.getElementById("btn1").disabled = true;
        document.getElementById('point1').innerHTML= 'Points Awarded: ' + points;
    }
    else if (val2.checked==true){
        alert('Right Answer');
        points=points+4;
        document.getElementById("btn1").disabled = true;
        document.getElementById('point1').innerHTML= 'Points Awarded: '+points;
    }
    else if (val3.checked==true){
        alert('Wrong Answer ');
        points=points-1;
        document.getElementById("btn1").disabled = true;
        document.getElementById('point1').innerHTML= 'Points Awarded: '+points;
    }
    else if (val4.checked==true){
        alert('Wrong Answer ');
        points=points-1;
        document.getElementById("btn1").disabled = true;
        document.getElementById('point1').innerHTML= 'Points Awarded: '+points;
    }
    else if (val1.checked==false && val2.checked==false && val3.checked==false && val4.checked==false){
        alert('No option is selected');
    }
    }
    
        
    
    
    