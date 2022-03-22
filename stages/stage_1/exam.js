    
    
    const getValueInput_1_4 = () =>{
        let inputValue = document.getElementById("domTextElement").value;
        if (inputValue == "ma"){
            var audio = document.createElement("audio");
            audio.src = "../../media/music/true.m4a";
            audio.playbackRate = 1.7;audio.play();
            document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
            setTimeout(function(){ javascript:window.location.href='learn_1_5.html'; }, 2000);    
            correct_count_stage_1_1 += 1;
        }else{ 
            var audio = document.createElement("audio");
            audio.src = "../../media/music/false.m4a";
            audio.playbackRate = 1.7;audio.play();
            document.getElementById("valueInput").innerHTML = "答錯了!請重新挑戰!";  
            setTimeout(function(){ javascript:window.location.href='learn_1_4_entry.html'; }, 2000); 
        }

      }

      const getValueInput_1_5 = () =>{
        let inputValue = document.getElementById("domTextElement").value;
        if (inputValue == "nu"){
            var audio = document.createElement("audio");
            audio.src = "../../media/music/true.m4a";
            audio.playbackRate = 1.7;audio.play();
            document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
            setTimeout(function(){ javascript:window.location.href='learn_1_6.html'; }, 2000);
              
            
        }else{
            var audio = document.createElement("audio");
            audio.src = "../../media/music/false.m4a";
            audio.playbackRate = 1.7;audio.play();
            document.getElementById("valueInput").innerHTML = "XXXX";  
            setTimeout(function(){ javascript:window.location.href='learn_1_4_entry.html'; }, 2000); 
        }

      }


     
      const getValueInput_1_6 = () =>{
        let inputValue = document.getElementById("domTextElement").value;
        if (inputValue == "ro"){
            var audio = document.createElement("audio");
            audio.src = "../../media/music/true.m4a";
            audio.playbackRate = 1.7;audio.play();
            document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
            setTimeout(function(){ javascript:window.location.href='learn_1_7.html'; }, 2000);  
        }else{
            var audio = document.createElement("audio");
            audio.src = "../../media/music/false.m4a";
            audio.playbackRate = 1.7;audio.play();
            document.getElementById("valueInput").innerHTML = "XXXX";  
            setTimeout(function(){ javascript:window.location.href='learn_1_4_entry.html'; }, 2000); 
            
        }

      }


      const getValueInput_1_7 = () =>{
        let inputValue = document.getElementById("domTextElement").value;
        if (inputValue == "ro"){
            var audio = document.createElement("audio");
            audio.src = "../../media/music/true.m4a";
            audio.playbackRate = 1.7;audio.play();
            document.getElementById("valueInput").innerHTML = correct_count_stage_1_1; 
            setTimeout(function(){ javascript:window.location.href='learn_1_7.html'; }, 2000);  
            correct_count_stage_1_1 += 1; 
        }else{
            var audio = document.createElement("audio");
            audio.src = "../../media/music/false.m4a";
            audio.playbackRate = 1.7;audio.play();
            document.getElementById("valueInput").innerHTML = correct_count_stage_1_1;  
        
        }

      }
// ***************************************************************

const getValueInput2_1_4 = () =>{
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "ma"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
        setTimeout(function(){ javascript:window.location.href='learn_2_5.html'; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "答錯了!請重新挑戰!";  
        setTimeout(function(){ javascript:window.location.href='learn_2_4_entry.html'; }, 2000); 
    }

  }

  const getValueInput2_1_5 = () =>{
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "nu"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
        setTimeout(function(){ javascript:window.location.href='learn_2_6.html'; }, 2000);
        correct_count_stage_1_1 += 1;    
        
    }else{
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "XXXX";  
        setTimeout(function(){ javascript:window.location.href='learn_2_4_entry.html'; }, 2000); 
    }

  }


 
  const getValueInput2_1_6 = () =>{
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "ro"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
        setTimeout(function(){ javascript:window.location.href='learn_2_7.html'; }, 2000);  
    }else{
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "XXXX";  
        setTimeout(function(){ javascript:window.location.href='learn_2_4_entry.html'; }, 2000); 
        
    }

  }


// ***************************************************************


    const getValueInput_2_4 = () =>{
        let inputValue = document.getElementById("domTextElement").value;
        if (inputValue == "se"){
            document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
        }else{
            document.getElementById("valueInput").innerHTML = "答錯了!請重新挑戰!";   
        }

      }


    const getValueInput_3_9 = () =>{
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "pu"){
        document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
    }else{
        document.getElementById("valueInput").innerHTML = "答錯了!請重新挑戰!";   
    }

    }


    
    const getValueInput_4_13 = () =>{
        let inputValue = document.getElementById("domTextElement").value;
        if (inputValue == "hyu"){
            document.getElementById("valueInput").innerHTML = "答對了! 前進下一關!"; 
        }else{
            document.getElementById("valueInput").innerHTML = "答錯了!請重新挑戰!";   
        }
    
        }



        // *****************************************************************

function start_1_4(){
    //   按下 start 後 id 為 timer 的 DIV 內容可以開始倒數到到 0。 
        var timer = document.querySelector("#timer");
        var number = 20;
        setInterval(function(){
        number -- ;
        if(number <= 0 ){
            number = 0;
            javascript:window.location.href='learn_1_4_entry.html';}
            
        timer.innerText = number + 0 }, 1000);
    }

function start_1_5(){
    //   按下 start 後 id 為 timer 的 DIV 內容可以開始倒數到到 0。 
        var timer = document.querySelector("#timer");
        var number = 20;
        setInterval(function(){
        number -- ;
        if(number <= 0 ){
            number = 0;
            javascript:window.location.href='learn_1_4_entry.html';}
            
        timer.innerText = number + 0 }, 1000);
    }



    function start_1_6(){
        //   按下 start 後 id 為 timer 的 DIV 內容可以開始倒數到到 0。 
            var timer = document.querySelector("#timer");
            var number = 20;
            setInterval(function(){
            number -- ;
            if(number <= 0 ){
                number = 0;
                javascript:window.location.href='learn_1_4_entry.html';}
                
            timer.innerText = number + 0 }, 1000);
        }

        // *****************************************************************

        function start2_1_4(){
            //   按下 start 後 id 為 timer 的 DIV 內容可以開始倒數到到 0。 
                var timer = document.querySelector("#timer");
                var number = 20;
                setInterval(function(){
                number -- ;
                if(number <= 0 ){
                    number = 0;
                    javascript:window.location.href='learn_2_4_entry.html';}
                    
                timer.innerText = number + 0 }, 1000);
            }
        
        function start2_1_5(){
            //   按下 start 後 id 為 timer 的 DIV 內容可以開始倒數到到 0。 
                var timer = document.querySelector("#timer");
                var number = 20;
                setInterval(function(){
                number -- ;
                if(number <= 0 ){
                    number = 0;
                    javascript:window.location.href='learn_2_4_entry.html';}
                    
                timer.innerText = number + 0 }, 1000);
            }
        
        
        
            function start2_1_6(){
                //   按下 start 後 id 為 timer 的 DIV 內容可以開始倒數到到 0。 
                    var timer = document.querySelector("#timer");
                    var number = 20;
                    setInterval(function(){
                    number -- ;
                    if(number <= 0 ){
                        number = 0;
                        javascript:window.location.href='learn_2_4_entry.html';}
                        
                    timer.innerText = number + 0 }, 1000);
                }

function start_1_10(){
    //   按下 start 後 id 為 timer 的 DIV 內容可以開始倒數到到 0。 
        var timer = document.querySelector("#timer");
        var number = 15;
        setInterval(function(){
        number -- ;
        if(number <= 0 ){
            number = 0;
            javascript:window.location.href='learn_1_9_entry.html';}
            
        timer.innerText = number + 0 }, 1000);
    }

    function my_true(){
    var audio = document.createElement("audio");
            audio.src = "../../media/music/true.m4a";
            audio.playbackRate = 1.7;audio.play();
            // setTimeout(function(){ javascript:window.location.href='learn_1_9_entry.html'; }, 1000); 
            // javascript:window.location.href='learn_1_9_entry.html';

    }


    function my_false(){
        var audio = document.createElement("audio");
                audio.src = "../../media/music/false.m4a";
                audio.playbackRate = 1.7;audio.play();
    
        }