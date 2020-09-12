
//Открытие выбора + анимация
$(document).ready(function(){
    
    $("body").css("display", "none");
    
    

	$(".start_button").click(function(event){
        $('.start').fadeOut(1000);
        $(".select").fadeIn(2000);
		event.preventDefault();
		$('.select').css('display','flex');
		
	});
    // $('.start_button').click(function(){
    
    // // $('.start').css('display','none');
    
    // });
    
});

// $('.document').ready(function(){
//     $('.block').click(function(){
// var url = "/profession.html";
// $('.block').attr('href',url);

//Открытие окна профессии + анимация
$(document).ready(function() {
    profref ="../../Home/Profession";
    $("body").css("display", "none");

    $("body").fadeIn(2000);

	$(".block").click(function(event){
		event.preventDefault();
		linkLocation = profref; //this.href;
		$("body").fadeOut(1000, redirectPage(profref));
	});

	
});
    // function Mmki(element){
    //     alert(element);
    // }
function Update(){
    UpdProfile();
    var temp;
    
    // var catlist = '{"list_categories":[{"id":1, "name":"Литература"},{"id":2, "name":"Программирование"}]}list_first:[{id:1, name:”Программист”, image:”https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg”},{id:2, name:”Программист”, image:”https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg”}]';
    var catlist = '[{"id":1, "name":"Программирование","list_profession":[{"id":1, "name":"Программирование.1", "image":"https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg"},{"id":2, "name":"Прогр.2", "image":"https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg"}]},{"id":2, "name":"Литература","list_profession":[{"id":3, "name":"Литр1", "image":"https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg"},{"id":4, "name":"Литр2", "image":"https://sun9-57.userapi.com/T-_ZXCyq66z03gYjCpz16TolzLxmFO_a-y9aOg/YgpiNWAd-P8.jpg"}]}]';
    var data = JSON.parse(catlist);
    
    // alert(data.list_categories[1].name);
    $('.selected_skills').empty();
    // alert("Gigi");
    data.forEach(function (item){
        
        // $('.selected_skills').append('<div class=\"skill\">\n'+'<div id="skill_text">'+data[i].name+'</div>'+'</div>');
    //     temp='<div class=\"skill\"  onclick="Open(\"biba\")">\n'+'<div id="skill_text">'+element.name+'</div>'+'</div>';
    // // data.forEach(function(element){temp+='<div class=\"skill\">\n'+'<div id="skill_text">'+element.list_categories[0].name+'</div>'+'</div>';alert(element.list_categories[0].name);});
    //     $('.selected_skills').append(temp);
    // in item.list_profession[0]
    let div = document.createElement('div');
    div.addEventListener("click",function(){
        $('.carousel').empty();
        item.list_profession.forEach(function(item2)  {
        let cardo = document.createElement('div');
        cardo.className="card";
        cardo.innerHTML='<div class="card_image" style="background-image: url('+item2.image+');">'+'<div class="card_text">'+'<div id="card_text">'+item2.name+'</div>'+'</div>'+'</div>';    // alert(item2.name);
        $('.carousel').append(cardo);
        // name, surname, age
        // $('.card').click(function(event){
        //     var courseref = "./courses.html";
        //     event.preventDefault();
        //     // linkLocation = courseref; //this.href;
        //     $("body").fadeOut(1000);
        //     redirectPage(courseref);
        cardo.addEventListener("click", function(){
            var courseref = "../../Home/Courses";
            // event.preventDefault();
            // linkLocation = courseref; //this.href;
            $("body").fadeOut(1000);
            redirectPage(courseref);
        });    
        // });
      });
    });
    div.className = "skill";
    div.innerHTML = '<div id="skill_text">'+item.name+'</div>' ;   // alert("goga");
    $('.selected_skills').append(div);
    }
    );
    
    
    // $('.skill').click(function (){
    //     alert("HUUY");
    //     var temp2;
        
    //     $('.carousel').empty();
    //     data.forEach(function (element){
    //         // $('.selected_skills').append('<div class=\"skill\">\n'+'<div id="skill_text">'+data[i].name+'</div>'+'</div>');
    //         temp2+='<div class="card" >'+
    //                 '<div class="card_image">'+
    //                     '<div class="card_text">'+
    //                         '<div id="card_text">'+element.name+
    //                         '</div>'+
    //                     '</div>'+
    //                 '</div>'+
    //             '</div>';
    //             alert(String);
    //     // data.forEach(function(element){temp+='<div class=\"skill\">\n'+'<div id="skill_text">'+element.list_categories[0].name+'</div>'+'</div>';alert(element.list_categories[0].name);});
    //     $('.carousel').append(temp2);
    // });
    // });
}

    function UpdProfile(){
        var profjson = '{"id":1, "name":"Иван", "image":"https://sun9-56.userapi.com/LxtHVb96HUT6RwiIlhXbQ863pdsL78eCRZBHIQ/2KEw_yNSofk.jpg"}';
        profdata = JSON.parse(profjson);
        alert(profdata.image);
        $('.information').css('background','url('+profdata.image+')');
        $('#nickname_text').html(profdata.name);



    }

    // function Open(element){
    //     alert("Biba");
        

    // }

    function redirectPage(loca) {
		window.location = loca;
	}

    function CourseLoad(){
        alert("jija");
        var mjm = '[{"id":1,"cub_image":"https://sun1-47.userapi.com/GzPRod_alat5fm4fr67xEEPsu7borC9LgoB25A/t6E9uNTBaoI.jpg", "time":"2 МЕС.","name":"3д моделирование","skill_list":[{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"}],"time_list":[{"name":"13:00 - 15:00", "marker":"ВТ"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"}],"info":"Любите рисование? Игры? Современные фильмы? Тогда это >>>  вам нужно!","address":"Zooze, д.98","complexity":"0","image":"https://sun9-10.userapi.com/gdGMJCASruPs15MxNEao89erNDU-hw6aSNHtJw/aQcHKzzun3c.jpg"}]';
        
        //var dota = '[{"id":1, "cub_image":"https://sun1-47.userapi.com/GzPRod_alat5fm4fr67xEEPsu7borC9LgoB25A/t6E9uNTBaoI.jpg", "time":"2 МЕС.","name":"3д моделирование","skill_list":[{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"}],"time_list":[{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{name":"14:00 - 16:00", "marker":"ПН"},{name:"14:00 - 16:00", "marker":"ПН"}],"info":"Любите рисование? Игры? Современные фильмы?\n Тогда это то что вам нужно!","address":"Фрунзе, д.98","complexity":"0","image":"https://sun9-10.userapi.com/gdGMJCASruPs15MxNEao89erNDU-hw6aSNHtJw/aQcHKzzun3c.jpg"},{"id":2, "cub_image":"https://sun9-65.userapi.com/bjE1oWnV2F6EgvSncisr-FOwhgcEc8SHluv9Gw/6TcrWoCP0_Y.jpg", "time":"2 МЕС.","name":"3д моделирование","skill_list":[{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"}],"time_list":[{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{name":"14:00 - 16:00", "marker":"ПН"},{name:"14:00 - 16:00", "marker":"ПН"}],"info":"Любите рисование? Игры? Современные фильмы?\n Тогда это то что вам нужно!","address":"Фрунзе, д.98","complexity":"0","image":"https://sun9-10.userapi.com/gdGMJCASruPs15MxNEao89erNDU-hw6aSNHtJw/aQcHKzzun3c.jpg"},{"id":2, "cub_image":"https://sun9-13.userapi.com/UDvZEuU4ifgc02VAn8TAI8tEn_wt7LRys7ecZg/xv68_rmbtTM.jpg", "time":"2 МЕС.","name":"3д моделирование","skill_list":[{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"},{"name":"построение моделей"}],"time_list":[{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{"name":"14:00 - 16:00", "marker":"ПН"},{name":"14:00 - 16:00", "marker":"ПН"},{name:"14:00 - 16:00", "marker":"ПН"}],"info":"Любите рисование? Игры? Современные фильмы?\n Тогда это то что вам нужно!","address":"Фрунзе, д.98","complexity":"0","image":"https://sun9-10.userapi.com/gdGMJCASruPs15MxNEao89erNDU-hw6aSNHtJw/aQcHKzzun3c.jpg"}]';
        var dota = JSON.parse(mjm);
        alert("jj");
        // <div class="selected_course" id="first">
        //     <button class="course_button" disabled>
        //         <div class="image_border">
        //             <img src="Images\learn_profile.jpg" width="100%">
        //         </div>
        //     </button>
        //     <div class="term">
        //         <div class="period">
        //             2 мес.
        //         </div>
        //         <div class="period_line">
        //         </div>
        //     </div>
        // </div>
        dota.forEach(function (item){
        let div = document.createElement('div');
        div.className="selected_course";
        div.innerHTML='<button class="course_button" disabled><div class="image_border"><img src="'+item.cub_image+'" width="100%"></div></button><div class="term"><div class="period">'+item.time+'</div><div class="period_line"></div></div>';
        $('.phases').append(div);
        div.addEventListener("click", function(){
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
        $('.back_to_profile').click(function(){
            var profileref = "../../User";
            redirectPage(profileref);
        });
        });
        
    });
    $('.phases').append('<div class="finish">Финиш</div>');
}

function TipVisible(vis){
    $('.tip').css("display",vis);
}
function startDirecting(){
    $('.login_button').click(function(){
        var startref = "../../Home/Index"
        $("body").fadeOut(1000);
        redirectPage(startref);
    });
}