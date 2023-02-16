export default 'foldOut';

// const title = document.querySelector('.setTitle');

function foldOut(){
    const title = document.querySelector('.setTitle');

    title.addEventListener('click', function(){
        console.log('click');
    })

// this gets the cards to change to active class

    const worksCards = document.getElementsByClassName('worksContainer');

    for(var i = 0; i < worksCards.length; i++) {
        worksCards[i].addEventListener('click', openCards)
    };

    function openCards(e) {
        e.target.classList.add('active')
            // if(worksCards[i].classList = 'active'){
            //     // e.target.removeEventListener('click', openCards)
            //     worksCards[i].classList.remove('active');
            // }
    }
}




console.log('card')



foldOut();