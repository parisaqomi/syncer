//var serviceBaseUrl = "http://tripapi2.papdemo.ir/api/";
var serviceBaseUrl = $('#serviceBaseUrl').text();


$('.flight-readmore').click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(this).html(" کمتر   <i data-toggle='collapse' data-target='#flight' type='button' class='fas fa-chevron-up'></i>");
    } else {
        $(this).html(" بیشتر  <i data-toggle='collapse' data-target='#flight' type='button' class='fas fa-chevron-down'></i>");
    }
});

$('.hotel-readmore').click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(this).html(" کمتر   <i data-toggle='collapse' data-target='#hotel' type='button' class='fas fa-chevron-up'></i>");
    } else {
        $(this).html(" بیشتر  <i data-toggle='collapse' data-target='#hotel' type='button' class='fas fa-chevron-down'></i>");
    }
});

$('.guid-readmore').click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(this).html(" کمتر   <i data-toggle='collapse' data-target='#PageP' type='button' class='fas fa-chevron-up'></i>");
    } else {
        $(this).html(" بیشتر  <i data-toggle='collapse' data-target='#PageP' type='button' class='fas fa-chevron-down'></i>");
    }
});
$('#faqBtn').click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(this).html(" سوالات متداول   <i data-toggle='collapse' data-target='#FAQItemsPartial' type='button' class='fas fa-chevron-up'></i>");
    } else {
        $(this).html(" سوالات متداول  <i data-toggle='collapse' data-target='#FAQItemsPartial' type='button' class='fas fa-chevron-down'></i>");
    }
});

$('#cityToCityBtn').click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(this).html(" مسیرهای پروازی     <i data-toggle='collapse' data-target='#cityToCity' type='button' class='fas fa-chevron-up'></i>");
    } else {
        $(this).html(" مسیرهای پروازی  <i data-toggle='collapse' data-target='#cityToCity' type='button' class='fas fa-chevron-down'></i>");
    }
});

function scroller(scrollId) {
    var offsetTop = $(scrollId).offset().top - 30;
    $("html, body").animate({ scrollTop: offsetTop }, 800);
}
function initHotelSlider() {
    $('.hotel-offers').slick({
        rtl: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });
}

function onHotelTabClick(thisEl) {
    debugger;
    $(".ho-tab").css("display", "none");
    var target = $(thisEl.hash);
    target.fadeIn("200", function () {
        $('.hotel-offers').slick("setPosition", 0);
    });
    this.initHotelSlider();
}

$(document).ready(function () {
    $('.hotel-offers').slick({
        rtl: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.brands-slider').slick({
        arrows: false,
        rtl: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 5
                }
            }
        ]
    });
    $('.similar-tours').slick({
        rtl: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });
    debugger;
    $('#airline-brands-slider').slick({
        rtl: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000

    });


    //initTourSlider();
    initHotelSlider();
});



function searchAll() {
    debugger;
    var sr = $("#searchKey").val();
    window.location = "/SearchResult/" + sr;
}

function getDataByEnter(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13)
        searchAll();
}

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".user-profile").hasClass("collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.userMenu").click();
        }
    });

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    $("#logoutButton").click(function () {

        localStorage.clear();
        sessionStorage.clear();
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++)
            createCookie(cookies[i].split("=")[0], "", -1);

        document.location.href = "/";
    });

    function setHeader(xhr) {
        var getAccessToken = localStorage.getItem("access_token.js");
        xhr.setRequestHeader('Authorization', 'bearer ' + getAccessToken);
    }

    window.getUserDataInLayout = function () {

        $.ajax({
            url: serviceBaseUrl + "users/user",
            type: 'GET',
            datatype: 'json',
            success: function (data) {
                $('#userLogin').css("display", "block");
                $('#userNotLogin').css("display", "none");
                debugger;
                var userName = (data.Name == null || data.Name == " " || data.Name == undefined) ? ' پروفایل کاربر' : data.Name;
                $("#userName").text(userName);
                $("#userPhone").text(data.Phone);
                $.ajax({
                    url: serviceBaseUrl + "Transactions/CustomerBalance",
                    type: 'GET',
                    datatype: 'json',
                    success: function (data) {
                        $("#userBalance").text(data.Balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' تومان')
                    },
                    beforeSend: setHeader
                });
            },
            error: function () {
                $('#userNotLogin').css("display", "block");
                $('#userLogin').css("display", "none");
            },
            beforeSend: setHeader
        });
    }


    var accessToken = localStorage.getItem("access_token.js");
    if (!accessToken) {
        $('#userNotLogin').show();
        $('#userLogin').hide();
    }
    else {
        debugger;
        window.getUserDataInLayout();
    }

});
$(window).scroll(function () {
    if ($('#flightScrollable').length && $('#flighResault').length) {
        var fixmeTop = $('#flighResault').offset().top;
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixmeTop) {
            $('#resultStatus').addClass('stickyResultBar');
            $("#resultStatus").removeClass("container-fluid custom-padding");
        } else {
            $('#resultStatus').removeClass('stickyResultBar');
            $("#resultStatus").addClass("container-fluid custom-padding");
        }
    }
});
