const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        
         id: 5,
         name: "Lucas Gabriel",
         job: "Student of front-end",
         img: "https://i.pinimg.com/564x/f1/39/30/f13930c358bd98da39abaa0a51a0b1a5.jpg",
         text:
            "Hello! I'm beginner in programmation front-end and this was one project using javascript! Thanks. =)"
    
    }
    
];
//buttons
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");
//info
const img = document.getElementById("img");
const author = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("description");
const random = document.getElementById("random")

let currentItem = 0; //profile array number

//updating the windows for first item of array 
window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    author.textContent = item.name;
    img.src = item.img;
    job.textContent = item.job;
    text.textContent = item.text;

})


const showPerson = (person) => {
    const item = reviews[person];
    author.textContent = item.name;
    img.src = item.img;
    job.textContent = item.job;
    text.textContent = item.text;
}

const nextItem = () => {
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem);
    console.log(currentItem);
}

const previousItem = () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
    console.log(currentItem);
}

const randomPerson = () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem)
}

console.log(currentItem);
nextBtn.addEventListener('click', nextItem);
previousBtn.addEventListener('click', previousItem);
random.addEventListener('click', randomPerson)
