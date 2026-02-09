// let hii=[1,2,3];

// let [a,...d]=hii;
// console.log(a,d);


// swapping

// let p=5;
// let q=10;
// [q,p]=[p,q];
// console.log(p,q);
// let aryan={
//     name:"aryan",
//     age:22,
//     city:"delhi"    
// }
// aryan.name="Sanya";



// let employee={
//     name: "Aryan",
//     empID: 12345,
//     departmentId: 89
// }
// let hello=employee.name;
// console.log(hello);

// let {name: empName, departmentId}=employee
// console.log(empName, departmentId);
// let {name: empName, ...rest}=employee
// console.log(rest);



// function show({name,age}){
//     console.log(name,age);
//     console.log(`My name is ${name} and ${age}`);
     
// }
// show(aryan);

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[...arr1,...arr2];
// console.log(arr3);
// let hii=()=>{
//     setTimeout(()=>{
//         console.log("hello aryan");
//     },2000);
//     setTimeout(()=>{
//         console.log("hello arpit");
//     },4000);
// }
// hii();

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = Math.random() > 0.5;
//         if (success) {
//             console.log("promise1 resolved");
//             resolve("Data loaded successfully!");
//         } else {
//             console.log("promise1 rejected");
//             reject("Something went wrong!");
//         }
//     }, 3000);
// });

// promise1
//     .then((result) => {
//         console.log("promise1 then:", result);
//     })
//     .catch((error) => {
//         console.log("promise1 catch:", error);
//     });
// async function fetchData() {
//     try {
//         await promise1
        
//     }
//     catch (error) {
//         console.log("Error in fetchData:", error);
//     }
// }

//  write a function to check whether i can go to kasmir or not based on the petrol if i have more than 100lt.

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let petrol=180;
        if(petrol>=100){
            resolve("you're good to go")
        }
        else{
            reject("You should abandon the trip")
        }
    }, 2000);
});

async function hii(){
    try{
        const res = await promise1;
        console.log(res);
    }
    catch(error){
            console.log("Naah!!",error);
    }
}

hii();
