let arrowLeft = document.getElementById('leftArrow');
let arrowRight = document.getElementById('rightArrow');
let sliderContent = document.getElementById('sliderContent');
let sliderDot = document.getElementsByClassName('sliderDot');
let sliderIndex = 0;

let sliderData =  [
    {
        id: 1,
        imgUrl: 'https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg',
        title: 'Image Title 1',
        url: 'https://www.google.com/'
    },
    {   id: 2,
        imgUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dnclMjBidXN8ZW58MHx8MHx8&w=1000&q=80',
        title: 'Image Title 2',
        url: 'https://www.google.com/'
    },
    {
        id: 3,
        imgUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/091102-kilimanjaro-hmed12p.jpg',
        title: 'Image Title 3',
        url: 'https://www.google.com/'
    },
    {
        id: 4,
        imgUrl: 'https://recommend.com/wp-content/uploads/2019/09/italy-4093227_1280.jpg',
        title: 'Image Title 4',
        url: 'https://www.google.com/'
    }
];

function createSliderImg(item) {
    let sliderImg = document.createElement('div');
    sliderImg.classList.add('slider-BgImage')
    sliderImg.style.backgroundImage = `url(${item.imgUrl})`;

    return sliderImg;
}
function createSliderTitle(item) {
    let sliderTitle = document.createElement('h2');
    sliderTitle.classList.add('slider-title');
    sliderTitle.textContent = item.title;

    return sliderTitle;
}
function createSliderLink(item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slider-link');

    return aTag;
}

function arrowRightClick() {
    if(sliderIndex == sliderData.length -1){
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex ++;
    setSlide();
}
arrowRight.addEventListener('click', arrowRightClick);

function arrowLeftClick() {
    if(sliderIndex == 0) {
        sliderIndex = sliderData.length - 1;
        setSlide();
        return;
    }
    sliderIndex --;
    setSlide();
}
arrowLeft.addEventListener('click', arrowLeftClick);

function createDots(item) {
    let dotsWrapper = document.createElement('div');
    dotsWrapper.classList.add('dots-wrapper');

    sliderData.forEach((element) => {
        let dot = document.createElement('div');
        dot.classList.add('sliderDot');
        dot.setAttribute('sliderData-id', element.id-1);

        dot.onclick = function(event){
            let id = event.target.getAttribute('sliderData-id');
            sliderIndex = id;
            setSlide();
        }
        dotsWrapper.appendChild(dot);
    });
    return dotsWrapper;
}
function currentDotItem() {
    sliderDot[sliderIndex].classList.add('active');

}


// Main Function
function setSlide() {
    sliderContent.innerHTML = '';
    let slideImg = createSliderImg(sliderData[sliderIndex]);
    let sliderTitle = createSliderTitle(sliderData[sliderIndex]);
    let sliderLink = createSliderLink(sliderData[sliderIndex]);
    let sliderDots = createDots();

    sliderContent.appendChild(slideImg);
    sliderContent.appendChild(sliderTitle);
    sliderContent.appendChild(sliderDots);
    sliderContent.appendChild(sliderLink);
    currentDotItem();
}

setSlide();

