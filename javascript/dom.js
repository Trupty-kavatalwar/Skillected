// // ! selecting an element ;

// // ? tagname ;
// // const elements= document.getElementsByTagName('h2')
// // console.log(elements[1])
// // elements[0].innerHTML='javascript'
// // elements[0].styke.color='red'
// // elements[0].styke.backgroundColor='blue'

// // ? Classname ;
// // const allTags= document.getElementsByClassName('a')
// // // console.log(allTags[2])
// // for(let tag of allTags){
// // tag.style.backgroundColor="blue"
// // }

// // ? id ;
// // const head= document.getElementsById('heading')
// // console.log(head)
// // // ? Query selector ;
// // const elements= document.querySelector('.a')
// // console.log(elements)

// // // ? Query selectorAll ;
// // const element= document.querySelector('.a')
// // console.log(element)


// // ! setting attribute :
// // class , id :


// // ! crate and remove :


// // ! events :

// // const btnClicked= function(){
// //     console.log('clicked')
// // }

// // let count=0
// // function increase(){
// //     count++
// //     console.log(count)
// // }



// // Homework 1 :
// // ? crate box without using html :

// // const box= document.createElement('div')
// // box.style.backgroundColor="red"
// // box.style.color="white"
// // box.style.padding="10px"
// // box.style.width="120px"
// // box.style.height="120px"
// // box.style.textAlign="center"
// // box.style.display = 'flex';
// // box.style.alignItems = 'center';     // vertical centering
// // box.style.justifyContent = 'center'; // optional: horizontal centering
 
// // // Add some text
// // box.textContent = "Box";

// // // Append it to the body
// // document.body.appendChild(box);


// // Homework 2 :
// // Create button
//   const createBtn = document.createElement('button');
//   createBtn.innerText = 'Change Bg';
//   document.body.append(createBtn);

//   // Define function
//   function changeBG() {
//     createBtn.style.backgroundColor = 'blue';
//      createBtn.style.color = 'white';
//   }
 

//   // Add event listener
//   createBtn.addEventListener('click', changeBG);

// // task :
// // button click red
// // 
// // Homework 3 :
// // const btnClickedRed=document.createElement('button');
// // btnClickedRed.innerText='change Bg red';
// // document.body.append(btnClickedRed);

// // function changeBgRed(){
// // btnClickedRed.style.backgroundColor='red'
// // btnClickedRed.style.border='2px solid red'
// // }
// // btnClickedRed.addEventListener('click',changeBgRed)


// // 26-10-2025

// const quizQuestions = [
//     {
//       question: "What is the capital of India ?",
//       options: ["Delhi", "Lucknow", "Kashi", "Mumbai"],
//       answer: "Delhi"
//     },
//     {
//       question: "Which is the largest planet?",
//       options: ["Earth", "Jupiter", "Mars", "Venus"],
//       answer: "Jupiter"
//     },
//     {
//       question: "What language runs in a web browser?",
//       options: ["Java", "C", "Python", "JavaScript"],
//       answer: "JavaScript"
//     },
//     {
//       question: "Which language is used not in frontend?",
//       options: ["Redux", "Java", "HTML" ,"TypeScript"],
//       answer: "Java"
//     },
//     {
//       question: "Which is not part of India ",
//       options: ["Punjab", 'Nagaland' , 'Tripura', 'Myanmaar'],
//       answer: "Myanmaar"
//     },
//     {
//       question: "Which is best place to go in winters in Maharastra ",
//       options: ['omkareshwar','Mahableshwar' ,'kokan', 'Lonavala'],
//       answer: "omkareshwar"
//     },
//      ];



// --------------------------------------------

// 11-08-2025  :: ->

// sum of all number?
// function hello(...nums){
//   let sum = 0;
//   for(let n of nums){
//     sum = sum + n;
//   }
//   console.log(sum);
// }

// hello(56,52,89,45,63,4,52);  

// greae than 50? :

function hello(...nums){
  let count = [];
  for(let n of nums){
    if(n > 50){
      count.push(n);
    }
  }
  console.log(count);
}

hello(56,52,89,45,63,4,52);  // Output: 5
