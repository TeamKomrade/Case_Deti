
//Открытие выбора + анимация ++
$(document).ready(function(){
    $("body").css("display", "none");
    $(".start_button").click(function(event){
        $('.start').fadeOut(0);
        $(".select").fadeIn(1000);
        event.preventDefault();
        $('.select').css('display','flex');

    });
});

//Открытие окна профессии + анимация
$(document).ready(function() {
    profref ="/../../Home/Profession";
    $("body").css("display", "none");

    $("body").fadeIn(2000);

    $(".block").click(function(event){
        event.preventDefault();
        linkLocation = profref; //this.href;
        $("body").fadeOut(1000, redirectPage(profref));
    });
});

function Update(){
    UpdProfile();
    var temp;
    // var catlist = '{"list_categories":[{"id":1, "name":"Литература"},{"id":2, "name":"Программирование"}]}list_first:[{id:1, name:”Программист”, image:”https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg”},{id:2, name:”Программист”, image:”https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg”}]';
    var catlist = '[{"id":1, "name":"Программирование","list_profession":[{"id":1, "name":"Программирование.1", "image":"https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg"},{"id":2, "name":"Прогр.2", "image":"https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg"}]},{"id":2, "name":"Литература","list_profession":[{"id":3, "name":"Литр1", "image":"https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg"},{"id":4, "name":"Литр2", "image":"https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg"}]}]';
    var data = JSON.parse(catlist);
    $('.selected_skills').empty();
    data.forEach(function (item){

            let div = document.createElement('div');
            div.addEventListener("click",function(){
                $('.carousel').empty();
                item.list_profession.forEach(function(item2)  {
                    let cardo = document.createElement('div');
                    cardo.className="card";
                    cardo.innerHTML='<div class="card_image" style="background-image: url('+item2.image+');">'+'<div class="card_text">'+'<div id="card_text">'+item2.name+'</div>'+'</div>'+'</div>';    // alert(item2.name);
                    $('.carousel').append(cardo);

                    cardo.addEventListener("click", function(){
                        var courseref = "/../../Home/Courses";

                        $("body").fadeOut(1000);
                        redirectPage(courseref);
                    });

                });
            });
            div.className = "skill";
            div.innerHTML = '<div id="skill_text">'+item.name+'</div>' ;   // alert("goga");
            $('.selected_skills').append(div);
        }
    );

}

function UpdProfile(){
    var profjson = '{"id":1, "name":"Иван", "image":"https://sun9-56.userapi.com/LxtHVb96HUT6RwiIlhXbQ863pdsL78eCRZBHIQ/2KEw_yNSofk.jpg"}';
    profdata = JSON.parse(profjson);
    $('.information').css('background','url('+profdata.image+')');
    $('#nickname_text').html(profdata.name);
}

function redirectPage(loca) {
    window.location = loca;
}

function CourseLoad(){
    var mjm = '[{"id":1,"cub_image":"https://sun1-47.userapi.com/GzPRod_alat5fm4fr67xEEPsu7borC9LgoB25A/t6E9uNTBaoI.jpg", "time":"2 МЕС.","name":"3д моделирование","skill_list":[{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"}],"time_list":[{"name":"13:00 - 15:00", "marker":"ВТ"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"}],"info":"Любите рисование? Игры? Современные фильмы? Тогда это >>>  вам нужно!","address":"Zooze, д.98","complexity":"0","image":"https://sun9-10.userapi.com/gdGMJCASruPs15MxNEao89erNDU-hw6aSNHtJw/aQcHKzzun3c.jpg"}]';
    //var dota = '[{"id":1, "cub_image":"https://sun1-47.userapi.com/GzPRod_alat5fm4fr67xEEPsu7borC9LgoB25A/t6E9uNTBaoI.jpg", "time":"2 МЕС.","name":"3д моделирование","skill_list":[{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"}],"time_list":[{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{name":"14:00 - 16:00", "marker":"ПН"},{name:"14:00 - 16:00", "marker":"ПН"}],"info":"Любите рисование? Игры? Современные фильмы?\n Тогда это то что вам нужно!","address":"Фрунзе, д.98","complexity":"0","image":"https://sun9-10.userapi.com/gdGMJCASruPs15MxNEao89erNDU-hw6aSNHtJw/aQcHKzzun3c.jpg"},{"id":2, "cub_image":"https://sun9-65.userapi.com/bjE1oWnV2F6EgvSncisr-FOwhgcEc8SHluv9Gw/6TcrWoCP0_Y.jpg", "time":"2 МЕС.","name":"3д моделирование","skill_list":[{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"}],"time_list":[{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{name":"14:00 - 16:00", "marker":"ПН"},{name:"14:00 - 16:00", "marker":"ПН"}],"info":"Любите рисование? Игры? Современные фильмы?\n Тогда это то что вам нужно!","address":"Фрунзе, д.98","complexity":"0","image":"https://sun9-10.userapi.com/gdGMJCASruPs15MxNEao89erNDU-hw6aSNHtJw/aQcHKzzun3c.jpg"},{"id":2, "cub_image":"https://sun9-13.userapi.com/UDvZEuU4ifgc02VAn8TAI8tEn_wt7LRys7ecZg/xv68_rmbtTM.jpg", "time":"2 МЕС.","name":"3д моделирование","skill_list":[{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"}],"time_list":[{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{name":"14:00 - 16:00", "marker":"ПН"},{name:"14:00 - 16:00", "marker":"ПН"}],"info":"Любите рисование? Игры? Современные фильмы?\n Тогда это то что вам нужно!","address":"Фрунзе, д.98","complexity":"0","image":"https://sun9-10.userapi.com/gdGMJCASruPs15MxNEao89erNDU-hw6aSNHtJw/aQcHKzzun3c.jpg"}]';
    var dota = JSON.parse(mjm);
let i =0;
    dota.forEach(function (item){
        let div = document.createElement('div');
        div.className="selected_course";
        div.innerHTML='<button class="course_button" disabled><div class="image_border"><img src="'+item.cub_image+'" width="100%"></div></button><div class="term"><div class="period">'+item.time+'</div><div class="period_line"></div></div>';
        $('.phases').append(div);
            const item_info= function(){
                $('.card_title').html(item.name);
                $('.schedule').empty();
                item.time_list.forEach(function(timeStamp){
                    $('.schedule').append('<div class="schedule_day"><div class="time text_stroke">'+timeStamp.name+'</div><div class="week_day text_stroke">'+timeStamp.marker+'</div></div>');
                });
                $('.tip').empty();

                item.skill_list.forEach(function(skillItem){
                    $('.tip').append(skillItem.name+'\n');

                });
                $('.description').html(item.info);
                $('.address').html(item.address);
                $('.cost').html(item.complexity);
                $('.courses_card').css("background",'url('+item.image+')');

            };
            if(i==0)
            {
                item_info();
            }
            i++;
        div.addEventListener("click", item_info);
        $('.back_to_profile').click(function () {
            var profileref = "/../../User/Index";
            redirectPage(profileref);
        });

    });
    $('.phases').append('<div class="finish">Финиш</div>');
}

function TipVisible(vis){
    $('.tip').css("display",vis);
}
function startDirecting(){
    $('.login_button').click(function(){
        var startref = "/../../Home/Index"
        $("body").fadeOut(1000);
        redirectPage(startref);
    });
}

function selectMenu(){
    $('.menu_button').click(function(){
        var htmlcont = $(this).html();
        // alert(htmlcont);
        if(htmlcont == "Достижения"){

            $('.achievement_list').css("display","flex");
            $('.menu').css("display","none");

            $('.menu_back').click(function(){
                $('.achievement_list').css("display","none");
                $('.menu').css("display","flex");
            });
        }
        else if(htmlcont == "Мои навыки"){

            $('.skills_list').css("display","flex");
            $('.menu').css("display","none");
            $('.menu_back').click(function(){
                $('.skills_list').css("display","none");
                $('.menu').css("display","flex");
            });
        } else if(htmlcont == "Мои курсы"){

            $('.vector').css("display","flex");
            $('.menu').css("display","none");
            $('.menu_back').click(function(){
                $('.vector').css("display","none");
                $('.menu').css("display","flex");
            });
        }
        else if(htmlcont == "Рейтинг"){

            var ratref = "/../../User/Rating";
            $("body").fadeOut(1000);
            redirectPage(ratref);


        }
        else if(htmlcont == "Успеваемость"){
            var courlistref = "/../../User/CoursesList";
            $("body").fadeOut(1000);
            redirectPage(courlistref);
        }
    });
}

function directToProgress(){
    $(".card_slot").click(function(){
        var progressref = "/../../User/Progress";
        $("body").fadeOut(1000);
        redirectPage(progressref);
    });
}

var now_disabled;

function progressLoad(){
    var progressjson = '{"name":"3д моделирование","list_lesson":[{"id":1, "info":"Урок 1: создание магического шара","score":5, "average_score":4.2},{"id":2, "info":"Урок 2: создание магического шара","score":5, "average_score":4.2, "count_people":12},{"id":3, "info":"Урок 3: создание магического шара", "average_score":4.2, "count_people":12},{"id":4, "info":"Урок 4: создание магического шара", "average_score":4.1, "count_people":12},{"id":5, "info":"Урок 5: создание магического шара", "average_score":4.2, "count_people":12}],"now_position":3}';
    var progrdata = JSON.parse(progressjson);
    var position = progrdata.now_position;
    var i = 1;
    $('#progress_title').html(progrdata.name);
    progrdata.list_lesson.forEach(function(itemLesson){
        let lesson = document.createElement('div');
        lesson.className="lesson";

        if(itemLesson.count_people != undefined){
            let peopnum = document.createElement('div');
            peopnum.className = "peoples_number";
            peopnum.innerHTML = itemLesson.count_people;
            lesson.append(peopnum);
        }
        let scores = document.createElement('div');
        scores.className = "scores";
        lesson.append(scores);

        if(itemLesson.average_score != undefined)
        {
            let averagescores = document.createElement("div");
            averagescores.className = "average_score";
            averagescores.innerHTML ="~"+ itemLesson.average_score;
            scores.append(averagescores);

        }

        let scoreplacebutt = document.createElement("button");
        scoreplacebutt.className = "score";

        if(i == position){
            scoreplacebutt.id = "current_place";
            scores.append(scoreplacebutt);
            scoreplacebutt.disabled = true;
            now_disabled = scoreplacebutt;
            $("#lesson_title").html(itemLesson.info);
        }

        else if (itemLesson.score != undefined ){


            scoreplacebutt.innerHTML = itemLesson.score;
            scores.append(scoreplacebutt);
        }

        else{
            scoreplacebutt.innerHTML = "Х";
            scores.append(scoreplacebutt);
        }

        scoreplacebutt.addEventListener('click',function(){
            scoreplacebutt.disabled = true;
            now_disabled.disabled = false;
            now_disabled = scoreplacebutt;

            $("#lesson_title").html(itemLesson.info);
        });

        $('.lessons').append(lesson);

        i++;

    });

}