const section1 = document.querySelector('.section1');
console.log(section1);

const infoBlok = document.querySelector('.infoBlok');
console.log(infoBlok);

const textInfo = document.querySelector('.textInfo');
console.log(textInfo);

const imgStyle = document.querySelector('.imgStyle');
console.log(imgStyle);


const arrayH1 = [
    'մեր մասին'
]
const arraySpan = [
    'Մենք մասնագիտացած ենք ծրագրային լուծումների մշակման և մատուցման գործում, որոնք թույլ են տալիս բիզնեսին և անհատներին զարգանալ թվային դարաշրջանում: Ընկերությունը կոնկրետ լուծումներ է տրամադրում բանկերի և վարկային կազմակերպությունների համալիր հաշվապահական և բանկային համակարգեր ունեցող ձեռնարկություններին: «Marksoft» ընկերությունը ձեր վստահելի գործընկերն է հաջողության հասնելու համար` տեխնոլոգիայի ուժն օգտագործելու գործում:'
]


arrayH1.forEach((item, index) => {

    const block = document.createElement('textInfo');
    block.setAttribute('class', 'wow animate__backInLeft');
    
    block.style.animationDelay = `${index * 0.2}s`;
    block.style.animationDuration = `0.4s`;

    const title = document.createElement('arrayH1');
    title.textContent = item;

    const p = document.createElement('arraySpan');
    p.textContent = arraySpan[index];

    textInfo.appendChild(title);
    textInfo.appendChild(p)
})

const imgStyles = [
    'assets/img/dzerqer.svg'
]

imgStyles.forEach((item, index) => {
    const block = document.createElement('imgStyles');
    block.setAttribute('class', 'wow animate__backInRight');
    block.style.animationDelay = `${index * 0.2}s`;
    block.style.animationDuration = `0.4s`;


    const img = document.createElement('imgStyles');
    img.src = imgStyles[index];
    img.alt = item;

    imgStyle.appendChild(img)
})


// ================section 2 start=================


const section2=document.querySelector('.section2');


const array = [
    'Հավելվածի անվտանգություն',
    'Տվյալների անվտանգություն',
    'Հաճախորդի անվտանգություն',
    
];

const arrayImg = [
    'assets/img/grup1.svg',
    'assets/img/grup2.svg',
    'assets/img/grup3.svg',
    
];

const arrayTittle = [
    'Կոդի վերլուծություն, Խոցելիության սկանավորում ,Հավելվածի ծրագրային վերանայում',
    'Տվյալների վերլուծություն,Տվյալների կոդավորում,Տվյալների արտահոսքի կանխարգելում',
    'Սպասարկման երաշխիք,Ծրագրային ապահովման,Անվտանգության և IP պաշտպանության քաղաքականություն',
];


array.forEach((item, index) => {
    const block = document.createElement('div');
    block.setAttribute('class','animate__backInLeft');
    block.style.animationDelay = `${index * 0.2}s`;
    block.style.animationDuration = `0.4s`; 

    block.classList.add('item');
    const img = document.createElement('img');
    img.src = arrayImg[index];
    img.alt = item;

    const title = document.createElement('h1');
    title.textContent = item;

    const p = document.createElement('p');
    p.textContent = arrayTittle[index];



    block.appendChild(img);
    block.appendChild(title);
    block.appendChild(p);
   section2.appendChild(block);

})
