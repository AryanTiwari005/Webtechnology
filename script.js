// for(let i=0;i<5;i++){
//     console.log("hello",i);
// }
// let a=4,b=5;
// let hii = (a,b) => {
//     let c=a+b;
//     console.log(c);
// }
// hii(a,b);
// (function aryan(){
//     console.log("hello aryan");
// })();
// let hiii=function(){
//     console.log("hello aryan");
// }
// hiii();
// let sum = (x,y=5) => {
//     return x+y;
// }
// console.log(sum(4));
// console.log(sum(4,6));

// let obj={
//     name:"aryan",
//     greet: function(){
//         console.log("hello "+this.name);
//     }
// }
// obj.greet();
// console.log(obj.name);

// let a=()=>({name:"aryan"});
// console.log(a().name);
// class Person{
//     constructor(name,marks){
//         this.name=name;
//         this.marks=marks;
//     }
// }
// let person1=new Person("aryan",60);
// let person2=new Person("Arpit",90);
// let person3=new Person("Ankit",80);
// let person4=new Person("Anshul",70);
// let persons=[person1,person2,person3,person4];
// persons.sort((a,b)=>b.marks - a.marks);
// for(let i=0;i<persons.length;i++){
//     if(i==3){
//         console.log("forth highest marks is "+persons[i].name+" with marks "+persons[i].marks);
//         break;
//     }
// }

// let arrowFunction=()=>{
//     let x=50;
//     let odd=0;
//     let even=0;
//     for(let i=1;i<=x;i++){
//         if(i%2==0){
//             even+=i;

//         }
//         else{
//             odd+=i;
//         }
//     }
//     console.log(even);
//     console.log(odd);
// };
// arrowFunction();

// let arrow=(a,b,c)=>{
//     return a>b?a:b || c>b?c:b;
// }
// console.log(arrow(6,9,67));


// let arr=(i)=>{
//     return i%2==0?"even":"odd";
// }
// console.log(arr(5));


let calulator=(num1,num2,operation)=>{
    switch(operation){
        case "add":
            return ()=>{
               return num1+num2;
            }
        case "subtract":
            return num1-num2;
        case "multiply":
            return num1*num2;
        case "divide":
            return num1/num2;
        default:
            "bye bye";
    
    }
}
let addi=calulator(2,3,"add");
console.log(addi(2,3));


