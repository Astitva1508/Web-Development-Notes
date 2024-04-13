// local reviews data
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
  ];

  var names=document.querySelector(".name");
  var job=document.querySelector(".job");
  var text=document.querySelector(".text");
  var img=document.querySelector(".img");

document.addEventListener("DOMContentLoaded",function(){
    text.textContent=reviews[0].text;
    job.textContent=reviews[0].job;
    names.textContent=reviews[0].name;
    img.setAttribute("src",reviews[0].img);
})
var i=0;
buttons=document.querySelectorAll("button");
buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
        index(e.currentTarget);
        console.log(i);
        text.textContent=reviews[i].text;
        job.textContent=reviews[i].job;
        names.textContent=reviews[i].name;
        img.setAttribute("src",reviews[i].img);
    })
})

function index(btn){
    if (btn.classList.contains("prev-btn")){
        i-=1;
    }
    else if (btn.classList.contains("next-btn")){
        i+=1;
    }
    else if (btn.classList.contains("random-btn")){
        i=Math.floor(Math.random()*4);
    }
    if (i>=reviews.length){
        i=0;
    }
    if (i<0){
        i=reviews.length-1;
    }
}