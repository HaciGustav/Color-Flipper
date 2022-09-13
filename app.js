const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]
const color = document.querySelectorAll(".color")
const hexValue = document.querySelectorAll(".hex-value")


console.log(hexValue)
console.log(color)
//random number creator to pick an item from hex array
const randomNumber = () =>{
    return Math.floor(Math.random() * hex.length)
} 
//event handler
    color.forEach((item) =>{

        document.body.addEventListener("click", (event)=>{
            let hexColor = "#"
            for(i = 0; i<6; i++){
                
                hexColor += hex[randomNumber()]
            }
            // document.body.style.backgroundColor = hexColor
            console.log(hexColor)
            item.style.background = hexColor
            //hexValue.innerText = hexColor
        })

    } )

    
    
    
    
    
    
    
    
    
    //? BACKUP
    /*
    document.body.addEventListener("click", (event)=>{
        let hexColor = "#"
        for(i = 0; i<6; i++){
            
            hexColor += hex[randomNumber()]
        }
        // document.body.style.backgroundColor = hexColor
        console.log(hexColor)
        color.style.background = hexColor
    })
    */    
    








