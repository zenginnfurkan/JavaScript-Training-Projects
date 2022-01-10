let models = [
    {
        name: 'Mercedes',
        image: 'img/1.jpg',
        content: '523 horsepower',
        link: '#'
    },
    {
        name: 'Audi',
        image: 'img/2.jpg',
        content: '300 horsepower',
        link: '#'
    },
    {
        name: 'Ferrari',
        image: 'img/3.jpg',
        content: '350 horsepower',
        link: '#'
    },
    {
        name: 'Nissan',
        image: 'img/4.jpg',
        content: '450 horsepower',
        link: '#'
    },
    {
        name: 'Bmw',
        image: 'img/5.jpg',
        content: '500 horsepower',
        link: '#'
    },
    {
        name: 'Dodge',
        image: 'img/6.jpg',
        content: '600 horsepower',
        link: '#'
    }
]

let index = 0;

let slideCount = models.length;
let interval;

let settings = {
    duration: '2000',
    random: false
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
});

function init(settings) {
    let prev;
    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev);
            prev = index;

        } else {
            if (slideCount == index + 1) {
                index = 0;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slideCount - 1;
    }

    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-text').textContent = models[index].content;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}