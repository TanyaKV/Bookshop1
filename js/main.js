// в меню выбор города присутствия магазина
const menu__location = document.querySelector(".menu__location"),
    selectBtn = menu__location.querySelector(".menu__location-btn"),
    searchInp = menu__location.querySelector("input"),
    options = menu__location.querySelector(".options");
let countries = ["Анапа", "Балашиха", "Волгодонск", "Зеленоград", "Казань", "Липецк", "Москва", "Орел", "Санкт-Петербург"];
function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();
function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    menu__location.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Такой город не найден</p>`;
});
selectBtn.addEventListener("click", () => menu__location.classList.toggle("active"));

$(function () {
    
$('.menu__cart').on('click', function () {
    $('.window-cart').removeClass('window-cart--close');
});
$('.window-cart__close').on('click', function () {
    $('.window-cart').addClass('window-cart--close');
});
// slick
$('.supply__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
})

$('.popular__heart').click(function () {
    $(this).toggleClass('clicked');
})
$('.popular__delete').click(function () {
    $(this).toggleClass('clicked');
})
$('#line-view-style-button').click(function(){
    $(this).addClass('active');
    $('#block-view-style-button').removeClass('active');
    $('#item-list-style').addClass('active-list-style-view');
});
$('#block-view-style-button').click(function () {
    $(this).addClass('active');
    $('#line-view-style-button').removeClass('active');
    $('#item-list-style').removeClass('active-list-style-view');
});
    
// slider https://swiperjs.com/get-started
const mySwiper = new Swiper('.slider-block', {
    slidesPerView: 1,
})
// при нажатии в левом меню картинка будет отображаться в правом квадрате- большая картинка
const sliderNavItems = document.querySelectorAll('.slider-nav__item');
sliderNavItems.forEach((el, index) => {
    el.setAttribute('data-index', index);
    el.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.index);
        mySwiper.slideTo(index);
    })
})  
})

const acc = document.getElementsByClassName("catalog__filters-title");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

    // фильтр цена от до
const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    progress = document.querySelector(".slider .progress");
// разрыв между значениями
let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(priceInput[0].value),
            maxVal = parseInt(priceInput[1].value);        
        if ((maxVal - minVal >= priceGap) && maxVal <= 10000){
            if (e.target.className === "input-min") {
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

window.onclick = function (event) {
    if (!event.target.matches('.catalog__setting-viewsfilter')) {

        var dropdowns = document.getElementsByClassName("catalog__settings-list");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$('.annotation .annotation__text-btn').on('click', function () {
    /*записываем в переменную блок с контентом*/
    let thisContentBlock = $(this).parent().find('.descElem');
    /*проверяем есть ли у блока с контентом класс active
      если есть то удаляем, если нет то добавляем */
    if (thisContentBlock.hasClass('active')) {
        thisContentBlock.removeClass('active')
    }
    else {
        thisContentBlock.addClass('active')
    }
})
