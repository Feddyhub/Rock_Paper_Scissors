const tas = document.getElementById("rock_but");
const kagit = document.getElementById("paper_but");
const makas = document.getElementById("scissors_but");
const sonuc =document.getElementById("te")
const scoreboard = document.getElementById("ha")
const currentboard = document.getElementById("YvsC")


function pickDisplay(_pick)
{
    let kullanicisecimi =_pick.id;
    console.log(kullanicisecimi)
    let randomCO = Math.floor(Math.random() * 3);
    let array = ["rock_but", "paper_but", "scissors_but"];
    bilgisayar_secimi =array[randomCO]
    console.log(bilgisayar_secimi)
    getResult(kullanicisecimi,bilgisayar_secimi)
}

    let a = 0;
    let b = 0;

function getResult(x,y)
{
   
    switch (x + y) {
        /*DRAW STATE*/
        case "rock_butrock_but":
        case "paper_butpaper_but":
        case "scissors_butscissors_but":
            console.log("Berabere")
            currentboard.innerHTML ="DRAW"
            currentboard.style.color="grey"
            break;
        
        /* ROCK WIN SCENARIO */
        case "rock_butscissors_but":
            a++;
            currentboard.style.color="green"
            currentboard.innerHTML ="YOU WIN (Rock win)"
            break;
        case "scissors_butrock_but":
            b++;
            currentboard.innerHTML ="COMPUTER WIN (Rock win) "
            currentboard.style.color="red"
            break;
            /* PAPER WIN SCENARIO */

            case "paper_butrock_but":
                a++;
                currentboard.innerHTML ="YOU WIN (Paper win)"
                currentboard.style.color="green"
                break;
            case "rock_butpaper_but": 
                b++;  
                currentboard.innerHTML = "COMPUTER WIN (Paper win)"
                currentboard.style.color="red"
                break;

                 /* SCISSORS WIN SCENARIO */
            case "scissors_butpaper_but":
                a++;
                currentboard.innerHTML ="YOU WIN (Scissors win)"
                currentboard.style.color="green"
                break;
            case "paper_butscissors_but":
                b++;
                currentboard.innerHTML ="COMPUTER WIN (Scissors win)"
                currentboard.style.color="red"
                break;
               
       
    }
    
    let cumulative = scoreboard.innerHTML = (a - b);
    if(cumulative==0)
    {
        sonuc.innerHTML="ESITLIK ";
    }
      else if (cumulative>0)
    {
        sonuc.innerHTML="KAZANIYORSUN ";
    }
    else
    {
        sonuc.innerHTML="KAYBEDIYORSUN ";
    }
}
