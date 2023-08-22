$(function(){
    
    let banner_left = 0;
    let img_cnt = 0;
    let first=1;
    let last=0;  

    $(".rollingWrap>img").each(function(){
        $(this).css("left", banner_left);
        banner_left += $(this).width()+120;
        $(this).attr("id","content"+(++img_cnt));
    })
    last = img_cnt;
    startRolling(); 

    // 슬릭1

    $('.content5 .slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        centerMode: true
    })

    // 슬릭2

    $('.content6 .slick').slick({
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        prevArrow: "<button type='button' class='slick-prev'><img src='https://www.home-learn.co.kr/front/imgs/main_2023/btn_review_arrow.png'></button>",
        nextArrow: "<button type='button' class='slick-next'><img src='https://www.home-learn.co.kr/front/imgs/main_2023/btn_review_arrow_on.png'></button>",
        scrollToScroll: 1
    })


    $('.content6 .slick').on('beforeChange', function(event, { slideCount: count }, currentSlide, nextSlide){
        let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');

        $('.slick-now').removeClass('slick-now');
        $('.slick-now').find('.star-now').addClass('star-now');
        
        $(selectors).addClass('slick-now');
        $(selectors).find('.star-now').addClass('star-now');
    });

    $('[data-slick-index="0"]').addClass('slick-now');
    $('[data-slick-index="0"]').find('.star-now').addClass('star-now');


    // 하단 타이머
    
    setInterval (function(){
        timer();
    },1);

    // 무료체험신청하기
$("#apply").click(function(){
    let reg;

    const userName = $("#userName");
    const phone = $("#phone");
    const chkPhone = $("#chkPhone");
    const age = $("input[type=radio]:checked");
    const check1 = $("#check1");
    const check2 = $("#check2");
    const check3 = $("#check3");


    
    if ( userName.val() == "" ) {
        alert("학부모님 성함을 입력해 주세요.")
        userName.focus();
        return;
    }

    if ( phone.val() == "" ) {
        alert ("휴대폰 번호를 입력해 주세요.")
        phone.focus();
        return;
    }

    reg = RegExp(/^\d{11,12}$/);
    if ( !reg.test(phone.val()) ) {
        alert ("휴대폰번호의 길이가 맞지 않습니다.");
        return;
    }

    reg = RegExp(/^01([0|1])\d{3,4}\d{4}$/);
    if ( !reg.test(phone.val()) ) {
        alert ("잘못된 휴대폰 번호입니다.");
        return;
    }

    if ( chkPhone.val() == "" ) {
        alert ("인증번호 발송을 누르시어 수신된 인증번호를 입력해 주세요.")
        chkPhone.focus();
        return;
    }

    if ( chkPhone.val() != 1234 ) {
        alert ("인증번호가 맞지 않습니다.")
        chkPhone.focus();
        return;
    }
    if ( age.length == 0 ) {
        alert ("자녀 학년을 선택해주세요")
        return;
    }
    if ( ! (check1.prop("checked") && check2.prop("checked") && check3.prop("checked")) ) {
        alert ("필수 항목에 체크해주세요")
        return;
    }

    

})

$(".number").click(function(){
    const phone = $("#phone");
    reg = RegExp(/^\d{11,12}$/);

    if ( !reg.test(phone.val()) ) {
        alert ("휴대폰번호의 길이가 맞지 않습니다.");
        return;
    }
    alert ("입력하신 핸드폰 번호로 인증번호를 전송하였습니다");
});

$("#allCheck").click(function(){
    if ( $("#allCheck").is(":checked") ) {
        $("input[name=agree]").prop("checked",true);
    } else {
        $("input[name=agree]").prop("checked",false);
    }
});

$(".detail").click(function(){
    $(this).parent().next().find("div").slideToggle();
})

        
})
function startRolling(){
    
    setInterval(function(){
        $(".rollingWrap>img").each(function(){
            $(this).css("left",$(this).position().left-1);
        });

        let firstContent = $("#content"+first);
        let lastContent = $("#content"+last);

        if (firstContent.position().left < "-" + $(firstContent).width()){
            firstContent.css("left",lastContent.position().left+lastContent.width()+120);
            first++;
            last++;
            if(last>img_cnt) { last=1; }
            if(first>img_cnt) { first=1; }  
        }

    }, 10);

    
}


    $(window).on("scroll", function(){
    if ( $(document).scrollTop() > 200 && $(document).scrollTop() < 330 ) {
        
        $(".bubble1>img").animate({zoom: "110%", opacity: 1},'fast').animate({zoom:"100%"},'fast').queue(function(){
            $(".bubble2>img").animate({zoom: "110%", opacity: 1},'fast').animate({zoom:"100%"},'fast').queue(function(){
                $(".bubble3>img").animate({zoom: "110%", opacity: 1},'fast').animate({zoom:"100%"},'fast').queue(function(){
                    $(".bubble4>img").animate({zoom: "110%", opacity: 1},'fast').animate({zoom:"100%"},'fast').queue(function(){
                        $(".bubble5>img").animate({zoom: "110%", opacity: 1},'fast').animate({zoom:"100%"},'fast').queue(function(){
                            $(".bubble6>img").animate({zoom: "110%", opacity: 1},'fast').animate({zoom:"100%"},'fast');
                        })
                    })
                })
            })
        });
    }
})


// timer
function timer(){
    let today = new Date();
    let hour = 23-today.getHours();
    let minutes = 59-today.getMinutes();
    let seconds = 59-today.getSeconds();
    let millies = 99-Math.floor(today.getMilliseconds()/100);

    if ( hour < 10 ) {
        hour = "0" + hour;
    }
    if ( minutes < 10 ) {
        minutes = "0"+minutes;
    }
    if ( seconds < 10 ) {
        seconds = "0"+seconds;
    }
    if ( millies < 10 ) {
        millies = "0"+millies;
    }

    $(".time").text( hour + ":" + minutes + ":" + seconds + ":" + millies);

}
