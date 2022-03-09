    // count = 0
    const getValueInput = () =>{
        let inputValue = document.getElementById("domTextElement").value;
        if (inputValue == "ma"){
            document.getElementById("valueInput").innerHTML = "O"; 
        }else{
            document.getElementById("valueInput").innerHTML = "X";   
        }

      }