'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let filmBg = document.querySelectorAll('.promo__bg'),
        interectiveBlockTitle = document.getElementsByClassName('promo__interactive-title'),
        adv = document.querySelectorAll('.promo__adv img'),
        nameGenre = document.querySelectorAll('.promo__genre'),
        textInput = document.querySelector('.adding__input'),
        checkboxInput = document.querySelector('.favorite__input'),
        formButton = document.querySelector('.add button'),
        filmDiv = document.getElementById('filmDiv');

    filmBg[0].style.cssText = ` background: url('img/bg.jpg') `;

    const movieDB = {
        movies: [
            "логан",
            "лига справедливости",
            "ла-ла лэнд",
            "одержимость",
            "скотт пилигрим против...",
        ]
    };

    formButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (textInput.value != '') {
            movieDB.movies.push(textInput.value.toLowerCase());
            filmList.innerHTML = '';
            addFilmList(movieDB.movies, filmList);
        }

        if (checkboxInput.checked) {
            console.log(`Ваш любимый фильм: ${textInput.value}`)
        }

        textInput.value = '';
    });

    const filmList = document.createElement('ul');
    filmList.classList.add('promo__interactive-list');
    interectiveBlockTitle[0].after(filmList);

    // let numberOfFilms = 1;
    // function movieIt(array) {
    //     for (let i = 0; i < array.length; i++) {
    //         let filmItem = document.createElement('li');
    //         filmItem.classList.add('promo__interactive-item');
    //         filmItem.innerHTML = `${numberOfFilms++} ${array[i]}`;
    //         filmList.appendChild(filmItem);
    //         let deleteBtn = document.createElement('div');
    //         deleteBtn.classList.add('delete');
    //         filmItem.appendChild(deleteBtn);
    //     }
    // };

    function addFilmList(array, list) {
        list.innerHTML = ``;
        array.sort();

        array.forEach((film, i) => {
            film = film.toLowerCase();

            if (film.length > 21) {
                film = film.substring(0, 22) + '...';
            };

            list.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                array.splice(i, 1);

                addFilmList(array, list);
            });
        });
    };

    // filmDiv.addEventListener('click', e => {
    //     if (e.target.className == 'delete') {
    //         e.target.parentElement.remove();
    //         movieDB.movies.forEach((i) => {
    //             movieDB.movies[i];
    //             addFilmList();
    //         })
    //     }
    // });

    // movieIt(movieDB.movies);

    // function deletePromo(array) {
    //     for (let el = 0; el < array.length; el++) {
    //         array[el].remove();
    //     }
    // }

    // deletePromo(adv);

    function deleteAdv(arr) {
        arr.forEach(item => {
            item.remove();
        });
    };

    nameGenre[0].textContent = 'драма';

    deleteAdv(adv);
    addFilmList(movieDB.movies, filmList);
});



