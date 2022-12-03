//  for (let i = 1; i<=10;i++){
//         console.log(i);
// }

// let i = 0;
// while (i<=10){
//     console.log(i)
//     i++;
// }
// do{
//     console.log(i)
//     i++
// } while (i<10)
// a='Javascript';
// b=8
// console.log(a,b )
// let yigindi = raqam.reduce(function(bosh,oxir){
    //     return bosh+oxir
    // },0);
    // console.log(yigindi);
//     let bum = 0;
// let raqam = [1,2,3,4,5,6,7,8]
    
// for(sum of raqam){
//     bum+=sum
// }
// console.log(bum)


// let umum=raqam.reduce(function(a,b){
    // return  a+b
// },0);
// console.log(umum)

// let pop=[23,45,65,21,23];
// let top = pop.reduce(function(x,y){
        // return x+y
    // },0)
    // let top=0
    // for(right of pop){
            // top+=right
        // }
// let top=new Date(2022,07,22,17,38,43,456)
// console.log(top);
// function callback(){
//     console.log('hello')
// }
// setTimeout(callback, 3000)\
// let sum = 0
// const numbers= [1,2,3,4,5,6]
// numbers.forEach(num => sum+=num)
 
// console.log(sum)
// const numbers = [1,2,3,4,5]
// const numberSquare = numbers.map((num)=> `${num} kvadrati : ${num*num}`)
// console.log(numbers)
// const countries = ['Uzbekistan','Kyrgstan','Kazakhstan']
// const threeletter = countries.map((country)=>country.toUpperCase().slice(0,3))
// console.log(threeletter);\
const scores = [
    {name:'Usmon', reyting:85},
    {name:'Sohib', reyting:90},
    {name:'Anvar', reyting:82},
    {name:'Sohiba', reyting:82}
]

const yuqori =scores.filter((score)=>score.reyting>80).reverse().map(b=>b.name)
console.log(yuqori)