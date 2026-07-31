// console.log('js Connected successfully');

alert('Welecome to EV Station Finder');

const searchBox = document.querySelector('input');
const cards = document.querySelectorAll('.station-card');
const noResult = document.querySelector('#noResult');
const clearBtn = document.querySelector('#clearBtn');

// console.log('cards');

searchBox.addEventListener('keyup', function(){

    // console.log(searchBox.value);

    let search = searchBox.value.toLowerCase().trim();
    let found = false;
    
    cards.forEach(function(card){

        let stationName = card.querySelector('h3').innerText.toLowerCase();

        if(stationName.includes(search)){

            card.style.display = 'flex';
             found = true;


        }else{

            card.style.display = 'none';

        };

    });

    if(found){

        noResult.style.diaplay = 'none';

    }else{

        noResult.style.display = 'block';

    };

    if(search === ""){

        cards.forEach(function(card){


            card.style.display="flex";

        });

        noResult.style.display="none";
        
        return;
    }
   
});

clearBtn.addEventListener('click', function(){

    searchBox.value = '';

});