;(function () {
    function build() {
        let output = []
        questions.forEach((c,i) => {
            const A = []
            for (let l in c.a) {
                A.push(
                    `<label>
                    <input type="radio" name="q${i}" value="${l}">
                    ${l} :
                    ${c.a[l]}
                    </label>`
                )
            }
            output.push(
                `<div class="slide">
                    <div class="question">${c.q}</div>
                    <div class="answers">${A.join('')}</div>
                </div>`
            )
        })
        Q.innerHTML = output.join('')
    }
    function show() {
        const answers = document.querySelectorAll(".answers")
        let corrects = 0;
        questions.forEach((c,i) => {
            const answer = answers[i]
            const s = `input[name="q${i}"]:checked`
            const user = (answer.querySelector(s || {})).value
            if (user === c.c) {
                corrects++
                answers[i].style.color = "lightgreen"
            }
            else {
                answers[i].style.color = "red"
            }
        })
        let results = R
        results.innerHTML = corrects + "/30"
    }
    function show_slide(n) {
        slides[slide].classList.remove("active-slide")
        slides[n].classList.add("active-slide")
        slide = n
        if (slide == 0) {
            previous.style.display = "none"
        }
        else {
            previous.style.display = "inline-block"
        }
        if (slide == slides.length - 1) {
            next.style.display = "none"
            S.style.display = "inline-block"
        }
        else {
            next.style.display = "inline-block"
            S.style.display = "none"
        }
    }
    function next_slide() {
        show_slide(slide + 1)
    }
    function prev_slide() {
        show_slide(slide - 1)
    }
    
    const Q = document.getElementById("quiz")
    const R = document.getElementById("results")
    const S = document.getElementById("submit")
    const questions = [{
        q: "Какое из следующих животных не является млекопитающим?",
        a: {
        a: "Кошка",
        b: "Крокодил",
        c: "Кенгуру"
        },
        c: "b"
        },
        
        {
        q: "Что из перечисленного не является первичным цветом?",
        a: {
        a: "Красный",
        b: "Желтый",
        c: "Фиолетовый"
        },
        c: "c"
        },
        
        {
        q: "Как называется столица Франции?",
        a: {
        a: "Берлин",
        b: "Лондон",
        c: "Париж"
        },
        c: "c"
        },
        
        {
        q: "Какой газ является основным компонентом атмосферы Земли?",
        a: {
        a: "Кислород",
        b: "Азот",
        c: "Углекислый газ"
        },
        c: "b"
        },
        
        {
        q: "Кто написал произведение 'Преступление и наказание'?",
        a: {
        a: "Лев Толстой",
        b: "Федор Достоевский",
        c: "Александр Пушкин"
        },
        c: "b"
        },
        
        {
        q: "Что является химическим символом для золота?",
        a: {
        a: "Au",
        b: "Ag",
        c: "Cu"
        },
        c: "a"
        },
        
        {
        q: "Как называется самая большая планета в Солнечной системе?",
        a: {
        a: "Марс",
        b: "Юпитер",
        c: "Венера"
        },
        c: "b"
        },
        
        {
        q: "Какое из этих чисел является простым?",
        a: {
        a: "15",
        b: "21",
        c: "29"
        },
        c: "c"
        },
        
        {
        q: "Что из перечисленного является фруктом?",
        a: {
        a: "Картофель",
        b: "Помидор",
        c: "Огурец"
        },
        c: "b"
        },
        
        {
        q: "Как называется процесс превращения жидкости в газ?",
        a: {
        a: "Кристаллизация",
        b: "Испарение",
        c: "Конденсация"
        },
        c: "b"
        },
        
        {
        q: "Сколько знаков 'бит' составляет байт?",
        a: {
        a: "4",
        b: "8",
        c: "12"
        },
        c: "b"
        },
        
        {
        q: "Какой химический элемент является наиболее распространенным в человеческом организме?",
        a: {
        a: "Углерод",
        b: "Кислород",
        c: "Водород"
        },
        c: "b"
        },
        
        {
        q: "Кто из перечисленных является изобретателем телефона?",
        a: {
        a: "Томас Эдисон",
        b: "Никола Тесла",
        c: "Александр Грахам Белл"
        },
        c: "c"
        },
        
        {
        q: "Как называется самая длинная река в мире?",
        a: {
        a: "Нил",
        b: "Амазонка",
        c: "Янцзы"
        },
        c: "b"
        },
        
        {
        q: "Какой год был провозглашен Международным годом химии?",
        a: {
        a: "2011",
        b: "2019",
        c: "2023"
        },
        c: "a"
        },
        
        {
        q: "Какой город является столицей Японии?",
        a: {
        a: "Осака",
        b: "Токио",
        c: "Киото"
        },
        c: "b"
        },
        
        {
        q: "Какой вид спорта связан с рингом и перчатками?",
        a: {
        a: "Футбол",
        b: "Бокс",
        c: "Теннис"
        },
        c: "b"
        },
        
        {
        q: "Какая планета в Солнечной системе известна своими кольцами?",
        a: {
        a: "Юпитер",
        b: "Марс",
        c: "Сатурн"
        },
        c: "c"
        },
        
        {
        q: "Какое из этих животных летает?",
        a: {
        a: "Крокодил",
        b: "Пингвин",
        c: "Кенгуру"
        },
        c: "b"
        },
        
        {
        q: "Что является столицей России?",
        a: {
        a: "Санкт-Петербург",
        b: "Москва",
        c: "Киев"
        },
        c: "b"
        },
        
        {
        q: "Какой океан является самым большим по площади?",
        a: {
        a: "Тихий",
        b: "Атлантический",
        c: "Индийский"
        },
        c: "a"
        },
        
        {
        q: "Какая из перечисленных планет имеет кольца?",
        a: {
        a: "Марс",
        b: "Юпитер",
        c: "Уран"
        },
        c: "c"
        },
        
        {
        q: "Какой из следующих видов энергии является возобновляемым?",
        a: {
        a: "Нефтяная",
        b: "Солнечная",
        c: "Угольная"
        },
        c: "b"
        },
        
        {
        q: "Какой из перечисленных городов является столицей Франции?",
        a: {
        a: "Милан",
        b: "Мадрид",
        c: "Париж"
        },
        c: "c"
        },
        
        {
        q: "Как называется наибольшая пустыня в мире?",
        a: {
        a: "Сахара",
        b: "Гоби",
        c: "Атакама"
        },
        c: "a"
        },
        
        {
        q: "Какой из перечисленных элементов не является металлом?",
        a: {
        a: "Железо",
        b: "Сера",
        c: "Алюминий"
        },
        c: "b"
        },
        
        {
        q: "Какой фрукт обычно ассоциируется с выражением 'яблоко раздора'?",
        a: {
        a: "Апельсин",
        b: "Лимон",
        c: "Груша"
        },
        c: "c"
        },
        
        {
        q: "Какой металл является самым распространенным в коре Земли?",
        a: {
        a: "Железо",
        b: "Алюминий",
        c: "Медь"
        },
        c: "a"
        },
        
        {
        q: "Какой год был провозглашен Международным годом математики?",
        a: {
        a: "2000",
        b: "2012",
        c: "2021"
        },
        c: "b"
        },
        
        {
        q: "Что является химическим символом для кислорода?",
        a: {
        a: "O",
        b: "K",
        c: "C"
        },
        c: "a"
        }]
    
    build()
    
    const previous = document.getElementById("previous")
    const next = document.getElementById("next")
    const slides = document.getElementsByClassName("slide")
    let slide = 0;
    show_slide(slide)

    S.addEventListener("click", show)
    previous.addEventListener("click", prev_slide)
    next.addEventListener("click", next_slide)
})()