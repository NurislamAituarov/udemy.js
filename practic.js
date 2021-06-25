const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?')
        while(personalMovieDB.count == '' ||personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?')
        }
    },
    rememberMyFilms: function (){
        for(let i = 0; i < 2; i++){
            let a = prompt('Какой фильм последний раз посмотрели?'),
                b = prompt('оцениет этот фильм по 10 бальной шкале?');
                
            if(a!=null && b!=null & a!= '' && b!='' && a.length < 10){
                personalMovieDB.movies[a] = b;
                console.log('dane')
            }else{
                console.log('error')
                i--;
            }
        }
    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count <= 10){
            alert('вы не любитель фильмов')
        }else if(personalMovieDB.count > 30){
            alert('Вы оказывается киноман')
        }else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30){
            alert('Вы обычный кинолюбитель')
        }
    },
    showMyDB: function (hidden){
        if(!hidden){
            console.log(personalMovieDB)
        }
    },
    toogleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat =false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYouCenres: function (){
        for(let i = 1; i < 2; i++){
        //     let vop = prompt(`Ваш любимый жанр под номером ${i}?`)
        //     if(vop == '' || vop == null){
        //         i--
        //     }else{
        //         personalMovieDB.genres[i-1] = vop;
        //     }
               let vop = prompt(`Введите ваши любимые жанры через запятую`)
               if(vop == '' || vop == null){
                        i--
                    }else{
                        personalMovieDB.genres = vop.split(' ');
                        personalMovieDB.genres.sort()
                    }
        }

        personalMovieDB.genres.forEach(function(items,i,array){
        console.log(`Любимый жанр ${i+1} - это ${items}`)
        })
    }
};


// personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel()
// personalMovieDB.showMyDB(personalMovieDB.privat)
// personalMovieDB.toogleVisibleMyDB()
personalMovieDB.writeYouCenres()
console.log(personalMovieDB)















// let i = 0;
// while(i < 2){
//     let a = prompt('Какой фильм последний раз посмотрели?'),
//         b = prompt('оцениет этот фильм по 10 бальной шкале?');       
//     if(a!=null && b!= null && a!= '' && b!= '' && a.length < 10){
//         personalMovieDB.movies[a] = b;
//         console.log('dane')
//     }else{
//         console.log('error')
//         i--;
//     }i++;
// }
// let i = 0;
// do{
//     let a = prompt('Какой фильм последний раз посмотрели?'),
//         b = prompt('оцениет этот фильм по 10 бальной шкале?');
//         i++;
        
//         if(a!=null && b!= null && a!= '' && b!= '' && a.length < 10){
//             personalMovieDB.movies[a] = b;
//             console.log('dane')
//         }else{
//             console.log('error')
//             i--;
//         } 
// }
// while(i < 2)


