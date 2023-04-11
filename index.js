// let data = [9, 45, 23, 65, 33, 21, 66, 84, 90, 44, 13, 74];

// // for(let i=0;i<data.length;i++){
// //   document.write(`Arrya ${i} is ${data[i]} <br>`)
// // }

// function getElement() {
//   let val = document.getElementById("inputs").value;

//   if (val > 0) {
//     if (val < data.length && typeof parseInt(val) === "number") {
//       alert(data[val]);
//     } else {
//       alert("Enter a valid input");
//     }
//   } else {
//     alert("invalid input");
//   }
// }

// let x = 10;

// if (x > 0) {
//   console.log("x is grather then 0");
// } else {
//   console.log("x is less then 0");
// }

// function handleValue() {
//   let arr = [12, 54, 32, 87, 5, 42, 56, 31];
//   let newel = document.getElementById("newEl").value;
//   let postions = document.getElementById("position").value;
//   console.log(newel+" "+postions)
//   console.log(arr);

//   for (let i = arr.length - 1; i > 0; i--) {
//     if (i >= postions) {
//       arr[i + 1] = arr[i];
//       if (i == postions) {
//         arr[i] = newel;
//       }
//     }
// }
// console.log(arr);

// }

// let arr = [12, 54, 32, 87, 5, 42, 56, 31];
// let position = 3;

// for(let i=position;i<arr.length;i++){
//   arr[i] = arr[i+1];
// }

// arr.length=arr.length-1;
// console.log(arr);

// function handleValue(){
//   let arr = [12, 54, 32, 87, 5, 42, 56, 31];
//   console.log(arr)
//   let position = document.getElementById('position').value;
//   postition = parseInt(position);

//   for(let i=position;i<=arr.length-1;i++){
//     arr[i] = arr[i+1];
//   }
//   arr.length = arr.length-1;
//   console.log(arr);
// }

// find
// const tell =()=>{
//   let arr = [12, 54, 32, 87, 5, 42, 56, 31];
//   let item = 42;
//   let index = undefined;

//   for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]===item){
//     console.log(index = i);
//     break;
//     }
//   }
//   console.log(arr)
// console.log(arr.indexOf(item));
// console.log(arr.splice(2,1));
// console.log(arr)

// }

// search

// const search = ()=>{
//   let arr = [12, 54, 32, 87, 5, 42, 56, 31];
//   let ele = document.getElementById('searchs').value;

//   for(let i=0;i<=arr.length-1;i++){
//     if(arr[i] == ele){
//       console.log("item founded Position",i);
//       break;
//     }else{
//       console.log("item not found");
//     }
//   }
// }

// marge

// const marge = () =>{
//   let arr1 = [10,20,30];
//   let arr2 = [40,50,60];
//   let arr3 = [...arr1,...arr2];
//   console.log(arr3)

//   for(let i=0;i<=arr1.length-1;i++){
//     arr3[i] = arr1[i];
//   }
//   for(let j=0;j<=arr2.length-1;j++){
//     arr3[arr1.length+j] = arr2[j]
//   }
//   console.log(arr3)
// }
// marge();

// const mg = () =>{
//   let data1 = [10,20,30,40,50];
//   let data2 = [33,60,70,80];
//   let data3 = []
//   let d1=0,d2=0,d3=0;

//   while(d1<data1.length && d2<data2.length){
//    if(data1[d1]<data2[d2]){
//     data3[d3] = data1[d1]
//     d1++;
//    }else{
//     data3[d3] = data2[d2]
//     d2++;
//    }
//    d3++;
//   }
//   console.log(data3)
// }
// mg()

// const bubbleShort =()=>{
//       let data = [40,30,12,25];
//       let i,j,temp;

//       for(i=0;i<data.length;i++){
//             for(j=0;j<data.length;j++){
//                   console.log(data);
//                  if(data[j]>data[j+1]){
//                         temp = data[j];
//                         data[j] = data[j+1];
//                         data[j+1] = temp;
//                  }
//             }
//       }
//       console.log(data);
// }

//bubbleShort()

// function apple (x){
//  if(x<=10){
//       apple(x+1)
//       console.log(x);
//  }
// }
// apple(5)

// function factorial(item) {
//   console.log(item);
//   if (item == 0) {
//     return 1;
//   } else {
//     return item * factorial(item - 1);
//   }
// }

// factorial(5);

//console.log(factorial(5));

// const bs = ()=> {
//   let data = [12, 78, 21, 1, 43, 64, 24, 98, 5, 22, 34];
//   let i, j, temp;

//   for (i = 0; i < data.length; i++) {
//     for (j = 0; j < data.length; j++) {
//       if (data[j] > data[j + 1]) {
//         temp = data[j];
//         data[j] = data[j + 1];
//         data[j + 1] = temp;
//       }
//     }
//   }
//   console.log(data);
// };

//bs();

// function color(){
//       let data = 20;
//       console.log(false);

//       if(true){
//             console.log(data*10);
//       }else{
//             console.log(data*2);
//       }
// }

// function days(){
//       color()
// }

// function fruts (){
//       days()
// }

// function topFunction(){
//       fruts()
// }

// topFunction()

// reverse a function with the help of recursion

// let data = [10,20,30,40,50,60];
// let temp;

// function reverse (data,start,end){
//       console.log(data)
//       if(start<=end){
//             temp = data[start];
//             data[start] = data[end];
//             data[end] = temp;
//             reverse(data,start+1,end-1)
//       }

// }

//reverse(data,0,data.length-1)

// stack inplementation like push and pop

// let data = [];
// let currentSize = data.length;
// let maxValueOfStack = 5;

// const addItem =()=>{
//       let newVal = document.getElementById('inputs').value;
//       if(currentSize>=maxValueOfStack){
//             alert("Stack is full cannot add value"+newVal)
//       }else{
//             data[currentSize] = newVal;
//             currentSize++;
//       }
//    console.log(data)
// }

// const removeItem =() =>{
//    if(currentSize<=0){
//       alert("stack is empty")
//    }else{
//       currentSize--;
//       data.length = currentSize;
//    }
//    console.log(data);
// }

// const displayElm =()=>{
//       for(let i=0;i<=currentSize-1;i++){
//             console.log(data[i]);
//       }
// }

// let data = [];
// let currentSize = data.length;

// function add(newVal){
//   data[currentSize] = newVal;
//   currentSize++;
//   console.log(data);
// }

// function remover(){
//       currentSize--;
//       data.length=currentSize;
//       console.log(data);
// }

// add(5)
// add(2)
// add(3)
// add(56)

// remover()

// let data = [];
// let currentSize = data.length;

// const push =(newVal) =>{
//   data[currentSize] = newVal;
//   currentSize++;
//   console.log(data)
// }

// const pop =()=>{
//   lastItemRemove = data[currentSize-1]
//   currentSize--;
//   data.length = currentSize;
//   return lastItemRemove;
// }

// const reverse = (item)=>{
//   for(i=0;i<item.length;i++){
//     push(item[i]);
//   }
//   for(i=0;i<item.length;i++){
//    item[i] = pop()
//   }
// }

// let str = "Hi"
// console.log(str)
// str = str.split("")
// // console.log(str);
// reverse(str)

// console.log(str.join(""));

// let data = [];
// let currentSize = data.length;

// const push =(newVal)=>{
//   data[currentSize] = newVal;
//   currentSize++;
//   console.log(data);
// }

// const pop = ()=>{
//   lastItemRemove =data[currentSize-1];
//   currentSize--;
//   data.length = currentSize;
//   return lastItemRemove;
// }

// const reverse = (item)=>{
//   for(i=0;i<item.length;i++){
//     push(item[i])
//   }
//   for(i=0;i<item.length;i++){
//     item[i] = pop()
//   }
// }

// function addItem(){
//   let str = document.getElementById('inputs').value;
//   str = str.split("");
//   console.log(str);
//   reverse(str);
//   console.log(str.join(""))
// }

// class Stack{
//   item = [];
//   currenSize;
//   maxSize
//   constructor(size){
//     this.maxSize = size;
//     this.currenSize = this.item.length;
//   }
//    push(newVal){
//     if(this.currenSize>=this.maxSize){
//       alert("Stack is full")
//     }else{
//       this.item[this.currenSize]=newVal;
//       this.currenSize++;
//     }
//    }
//    pop(){
//     if(this.item<=0){
//       alert("Stack is full")
//     }else{
//       this.currenSize--;
//       this.item.length = this.currenSize;
//     }
//    }

//    display(){
//     console.log(this.item)
//    }
// }

// let st1 =new Stack(5)
// // st1.push(20);
// // st1.display()

// class Reverse{
//   str = "HELLO"
//   str = this.str.split("")
//   data = []
//   currentSize = this.data.length
//   constructor(){

//     push(newVal){
//       this.data[this.currentSize] = newVal
//       this.currentSize++;
//     }
//     pop(){
//       lastItem = this.currentSize-1
//       this.currentSize--
//       this.data.length = this.currentSize;
//       return lastItem
//     }
//     reverse(item){
//       for(let i=0;i<=item.length;i++){
//         push(item[i])
//       }
//       for(let i=0;i<=item.length;i++){
//         item[i] = pop()
//       }
//     }
//   }
// }

// let rv1 = new Reverse();
// rv1.reverse();

// let queue = [];
// let currentSize = queue.length;
// let maxSize = 5;

// const enqueue = ()=>{
//   let newVal = document.getElementById('inputs').value;
//   if(currentSize>=maxSize){
//     alert("Queue are full")
//   }else{
//     queue[currentSize] = newVal;
//     currentSize++;
//   }
// }

// const dequeue =()=>{
//   for(let i=0;i<queue.length;i++){
//     queue[i]=queue[i+1];
//   }
//   currentSize--;
//   queue.length = currentSize;
// }
// const front = ()=>{
//   if(currentSize>0){
//     console.log(queue[0])
//   }else{
//     alert("queue is alrady full")
//   }
// }

// const rare = ()=>{
//   if(currentSize>0){
//     console.log(queue[currentSize-1])
//   }else{
//     alert("queue is alrady full")

//   }
// }

// const displayElm =()=>{
//   console.log(queue)
// }

// class CircularQueue{
//   constructor(size){
//     this.max = size;
//     this.item = new Array(size)
//     this.currentSize = 0;
//     this.front = -1;
//     this.rare = -1;
//   }
//   enqueue(val){
//     if(this.currentSize!=this.max){
//       if(this.rare == this.max-1){
//         this.rare = 0;
//       }else{
//       this.rare++;
//       }
//       this.item[this.rare] = val;
//       this.currentSize++;
//       if(this.front == -1){
//         this.front = this.rare;
//       }
//     }else{
//       alert("CircularQueue are alrady full");
//     }
//   }

//   dequeue(){
//     if(this.currentSize!=0){
//       this.item[this.front] = null;
//       if(this.front == this.max-1){
//         this.front = 0;
//       }else{
//         this.front++;
//       }
//       this.currentSize--;
//     }else{
//       this.front=-1;
//       this.rare=-1;
//       alert("queue is empty");
//     }
//   }
// }

// let obj = new CircularQueue(5);

// obj.enqueue(10)
// obj.enqueue(20)
// obj.enqueue(30)
// obj.enqueue(40)
// obj.enqueue(50)

// console.log(this.currentSize!=this.max);
// console.log(4!=4)

// class Queue{
//   constructor(size){
//     this.max = size;
//     this.item = new Array(size);
//     this.currentSize=0;
//     this.front = -1;
//     this.rare =-1
//   }
//   enqueue(val){
//     if(this.currentSize!=0){
//       if(this.rare == max-1){
//         this.rare = 0;
//       }else{
//         this.rare == this.rare;
//       }
//       this.item[this.rare] = val;
//       this.currentSize++;
//       if(this.front == -1){
//         this.front++;
//       }
//     }else{
//       alert("Circle are full");
//     }
//   }
// }

// let queue = new Queue(5)

// let data = [12, 3, 4, 31, 35, 65, 32, 22, 76, 43, 335, 66];
//  let search = 335;
// let pos = undefined;

// for (let i = 0; i < data.length; i++) {
//   if (data[i] == search) {
//     // console.log("element founded",data[i]);
//     pos = i;
//     console.log(pos);
//     break;
//   }
// }

// let data = [12, 3, 4, 31, 35, 65, 32, 22, 76, 43, 335, 66];
// console.log(data);
// let position = undefined;
// const Search = () => {
//   let search = document.getElementById("inputs").value;

//   for(let i=0;i<=data.length;i++){
//     if(data[i]==search){
//       console.log("Elm founded",data[i])
//        position = i;
//       break;
//     }
//   }
//   if(!position){
//     console.log("elm can't found");
//    }
//  else{
//     alert("Elm postion is"+ +position);
//   }
// };

// let data = [10,11,12,13,14,15];
// let find = 10;
// let start =0;
// let end = data.length-1;
// let position = undefined;

// while(start<=end){
//   let mid = Math.floor((start+end)/2);

//   if(data[mid] == find){
//     position = mid;
//     break;
//   }else if(data[mid]<find){
//     start = mid+1;
//   }else{
//     end = mid-1;
//   }
// }
// console.log(position);

// let data = [10,20,30,40];
// let search = 10;
// let start = 0;
// let end = data.length-1;
// let position = undefined;

// while(start<=end){
//   let mid = Math.floor((start+end)/2);
//   if(data[mid] == search){
//     position = mid;
//      break;
//   }else if(data[mid]<search){
//     mid=mid+1;
//   }else{
//     end=mid-1;
//   }
// }
//   console.log(position)

//  let data = [10,20,30,40,47,59,61,66,98];
//  let start =0;
//  let end = data.length-1;
//  let find = 20;
//  let position = undefined;

//  function recersiveBinary(data,start,end){
//   let mid = Math.floor((start+end)/2);
//   if(data[mid]==find){
//     position = mid;
//     return true;
//   }else if(data[mid]<find){
//     recersiveBinary(data,mid+1,end)
//   }else{
//     recersiveBinary(data,start,mid-1)
//   }
//  }

//  recersiveBinary(data,start,end)
//  console.log(position)

// let item = [45, 12, 34, 67];

// function selectionShort(data) {
//   for (let i = 0; i < data.length; i++) {
//     minVal = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] < data[minVal])
//       minVal = j;
//     }
//     let temp = data[minVal];
//     data[minVal] = data[i];
//     data [i] = temp;
//   }
// }
// selectionShort(item);
// console.log(item)

// let items = [78,23,11,45,22,33,21,43,12,44];

// const selectionShort=(data)=>{
//   for(let i=0;i<data.length;i++){
//     minElm = i;
//     for(let j=i+1;j<data.length;j++){
//       if(data[j]>data[minElm])
//       minElm = j;
//     }
//     let temp = data[minElm];
//     data[minElm] = data[i];
//     data[i] = temp;
//   }

// }
// selectionShort(items)
// console.log(items)

//REVERSE-SELECTION-SHORT

// let items = [78,23,11,45,22,33,21,43,12,44];

// const short =(data)=>{
//    for(let i=0;i<data.length;i++){
//     bigElm = i;
//     for(let j=i+1;j<data.length;j++){
//       if(data[j]>data[bigElm]){
//         bigElm = j;
//       }
//     }
//     let temp = data[bigElm];
//     data[bigElm] = data[i];
//     data[i] = temp;
//    }
// }

// short(items);
// console.log(items)

// let items = [78,23,11,45,22,33,21,43,12,44];

// const short =(data)=>{
//    for(let i=data.length-1;i>=0;i--){
//     bigElm = i;
//     for(let j=i-1;j>=0;j--){
//       if(data[j]<data[bigElm]){
//         bigElm = j;
//       }
//     }
//     let temp = data[bigElm];
//     data[bigElm] = data[i];
//     data[i] = temp;
//    }
// }

// short(items);
// console.log(items)

// let arr = [12,34,21,2,45,64,1,4,2,9,14];

// let a = [50,40,30,20,10];
// console.log(a)

// let temp,ptr;

// const insertionShort =(a,temp,ptr)=>{
//   for(let i=1;i<=a.length-1;i++){
//     temp = a[i];
//     ptr = i-1;

//     while(temp<a[ptr] && ptr!=-1){
//       a[ptr+1] = a[ptr];
//       ptr = ptr-1;
//     }
//     a[ptr+1] = temp;
//   }
// }

// insertionShort(a,temp,ptr)
// console.log(a)

// let arr = [30,20,10];

// let inserctionShort =(data)=>{
//   let i,j,current;
//   for(i=1;i<data.length;i++){
//     current = data[i];
//     j = i-1;

//     while(j>=0 && data[j]>current){
//       data[j+1] = data[j];
//       j=j-1;
//     }
//     data[j+1] = current;
//   }
// }

// inserctionShort(arr)
// console.log(arr)

//let arr = [30,20,10];

// let short =(data) =>{
//   let i,j,current;
//   for(i=1;i<data.length;i++){
//     current = data[i];
//     j=i-1;
//     while(j>=0 && data[j]>current){
//       data[j+1] = data[j];
//       j=j-1;
//     }
//     data[j+1] = current;
//   }
// }

// short(arr);
// console.log(arr)

// let a = [5,4,3,2,1];

// function short(data){
//   let i,j,current;
//   for(i=1;i<data.length;i++){
//     current = data[i];
//     j = i-1;
//     while(j>=0 && data[j]>current){
//       data[j+1] = data[j];
//       j = j-1;
//     }
//     data[j+1]= current
//   }
// }
// short(a)
// console.log(a);

// let arr = [10,23,4,11,66,44,21,8,3];
// let data = [];
// let counter =0;

// console.log(arr)

// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     console.log(arr[i])
//    data.push(arr[i]*2)
//    counter++
//   }
// }
// console.log(data)
// console.log(counter)

// const anagram = (str1,str2)=>{
//   let obj = {};
//   if(str1.length !== str2.length){
//     return false;
//   }

//   for(ch of str1){
//     obj[ch] = (obj[ch] || 0)+1;
//     console.log(obj[ch])
//   }
//   console.log(obj)

//   for(ch of str2){
//     if(!obj[ch]){
//      return false
//     }
//     obj[ch]--;
//   }
//   return true;
// }

// console.log(anagram("hello","elloh"))

// const fun =(str1,str2)=>{
//   let objstr = {};

//    if(str1.length!==str2.length){
//     return false;
//    }

//    for(ch of str1){
//     console.warn(ch)
//     objstr[ch] = (objstr[ch] || 0) +1
//    }
//    console.log(objstr)

//    for(ch of str2){
//     if(!objstr[ch]){
//       return false;
//     }
//     objstr[ch]--;
//    }
//    return true;

// }

// console.log(fun("hello","ohell"))

// const pelindorm =(str)=>{
//   let start = 0;
//   let end = str.length-1;
//   let result = true;
//     while(end>start){
//       if(data[start]!=data[end]){
//         return false;
//       }
//       start++;
//       end--;
//     }
//    return result;
// }
// let data = "level";

// console.log(pelindorm(data))

// const fun =()=>{
//   let str = document.getElementById('inputs').value;
//   let start =0;
//   let end = str.length-1;
//   let result = true

//   while(end > start){
//     if(str[start] != str[end]){
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return result;
// }

// let str = "indiansi";

// let obj = {};
// let maxkey = '';

// for(let i=0;i<str.length;i++){
//   let key = str[i];
//   if(!obj[key]){
//     obj[key]= 0;
//   }
//   obj[key]++;
//   if(maxkey == ''||obj[key]>obj[maxkey]){
//     maxkey = key;
//   }
//   console.warn(maxkey)
//   // console.warn(obj)
// }

// let data = new Map([
//   ["name","vijay"],
//   [false,"bool"],
//   [123,"number"]
// ])

// data.set("roll",112)
// console.log(data.get(123))
// console.log(data)

// data.forEach((val,key)=>{
//    console.log(key)
// })

// data.delete("name");
// console.log(data)

// let data = new Set(["name","vijay","mithelish"])
// console.log(data.add("nikhilesh"))
// console.log(data.has('vijay'))
// // console.log(data.delete('name'))
// console.log(data.entries())

// for(let x of data){
//   console.log(x)
// }

// data.forEach((key,val)=>{
//    console.log(val)
// })

// class List{
//   constructor(data){
//     this.head={
//       value:data,
//       next:null,
//     }
//     this.tail = this.head;
//   }
//  addNode(newData){
//      this.newNode={
//       value:newData,
//       next:null,
//      };
//      this.tail.next = this.newNode;
//      this.tail = this.newNode;
//  }
// };

// let obj = new List(100)
// obj.addNode(200)
// obj.addNode(300)
// obj.addNode(400)
// obj.addNode(500)
// obj.addNode(600)
// obj.addNode(700)

// console.log(obj)

// class LinkedList{
//   constructor(data){
//    this.head = {
//     value:data,
//     next:null,
//    }
//    this.tail = this.head;
//    this.size = 1;
//   }
//   addNode(newData){
//     this.newNode={
//       value:newData,
//       next: null,
//     }
//     this.tail.next = this.newNode;
//     this.tail = this.newNode;
//     this.size++;
//   }
//   terversing(){
//     let counter = 0;
//     let currentNode = this.head;
//     while(counter<this.size){
//       console.log(currentNode)
//       currentNode = currentNode.next;
//       counter++;
//     }
//   }
//   insertNode(index,value){
//     let counter = 1;
//     let currentNode = this.head;
//     while(counter>index){
//       counter++;
//       currentNode = currentNode.next;
//     }
//     let nextNode = currentNode.next;
//     currentNode.next = {
//       value:value,
//       next:nextNode,
//     }
//   }
//   // searchNode(data){
//   //   let lead = this.head;
//   //   let result = undefined;
//   //   let loop = true;
//   //   while(loop){
//   //     lead = lead.next;
//   //     loop = !!lead;
//   //     if(loop && lead.value === data){
//   //         loop = false;
//   //         result=lead;
//   //     }
//   //   }
//   //   console.log(result)
//   // }
//   Search(node){
//     let lead = this.head;
//     let result = undefined;
//     let loop = true;
//     while(loop){
//       lead = lead.next;
//       loop = !! lead;
//      if(loop && lead ===node){
//       loop = flase;
//       result= lead;
//      }
//     }
//     console.log(result)
//   }
// }

// let list = new LinkedList(100);
// list.addNode(200)
// list.addNode(300)
// list.addNode(400)
// list.addNode(500)
// list.addNode(600)
// list.addNode(700)
// // list.terversing();
// // list.insertNode(2,40000)

// //  list.searchNode(500)

// list.Search(2)

// console.log(list)

// class Node{
//   constructor(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BSTree {
//   constructor() {
//     this.root = null;
//   }

//   isTreeEmpty() {
//     return this.root === null;
//   }
//   makeTree(val) {
//     let newNode = new Node(val);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, newNode) {
//     if (root.val > newNode.val) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }
//   search(root,val){
//       if(root === null){
//         return false;
//       }else if(root.val === val){
//         return true;
//       }else if(root.val > val){
//         return this.search(root.left,val)
//       }else{
//         return this.search(root.right,val)
//       }
//   }
//   preOrder(root){
//     if(root){
//     console.log(root);
//     this.preOrder(root.left)
//     this.preOrder(root.right)
//     }
//   }
//   inOrder(root){
//     if(root){
//       this.inOrder(root.left)
//       console.log(root)
//       this.inOrder(root.right)
//     }
//   }
//   postOrder(root){
//     if(root){
//       this.inOrder(root.left)
//       this.inOrder(root.right)
//       console.log(root)
//     }
//   }

//   Bfsearch(){
//     let queue = [];
//     queue.push(this.root)
//     while(queue.length){
//       let current = queue.shift();
//       if(current.left){
//         queue.push(current.left)
//       }
//       if(current.right){
//         queue.push(current.right)
//       }
//       console.log(current.val)
//     }
//   }
//   minElm(root){
//     if(!root.left){
//       return root;
//     }else{
//       return this.minElm(root.left)
//     }
//   }
//   maxElem(root){
//     if(!root.right){
//       return root;
//     }else{
//       return this.maxElem(root.right);
//     }
//   }
//   removeNode(value){
//     this.root = this.deletNode(this.root,value)
//   }

//   deletNode(root,value){
//     if(root === null){
//       return null
//     }
//     if(value < this.root){
//       root.left = this.deletNode(root.left,value);
//     }else if(value > this.root){
//       root.right = this.deletNode(root.right,value)
//     }else{
//       if(!root.left && !root.right){
//         return null;
//       }else if(!root.left){
//         return root.right
//       }else if(!root.right){
//         return root.left
//       }
//       root.value = this.minElm(root.right);
//       root.vlaue = this.deletNode(root.right,root.value);
//     }
//     return root;
//   }

// }

// let bst = new BSTree();
//       bst.makeTree(20);
//       bst.makeTree(10);
//       bst.makeTree(5);
//       bst.makeTree(11);
//       bst.makeTree(30);
//       bst.makeTree(40);
//       bst.makeTree(23);
//       // bst.preOrder(bst.root)
//       // bst.inOrder(bst.root)
//       // bst.postOrder(bst.root)
//       // bst.Bfsearch()
//       //  console.log(bst.minElm(bst.root))
//       // console.log(bst.maxElem(bst.root))
//        bst.removeNode(40);
//       // console.log(bst.root);
//       // console.log(bst.this.root);
// //  console.log(bst.search(bst.root,490))

// console.log(bst)

// let data = [
//   [0,1,1,0],
//   [1,0,1,0],
//   [0,0,1,1],
//   [1,1,0,0]
// ];
// console.log(data)
// console.log(data[3][3]);

// let adjList = {
//   a:['b','c'],
//   b:['a','c'],
//   c:['c','d'],
//   d:['a','b']
// }

// console.log(adjList)
// console.log(adjList.a[1])

// class Graph{
//   constructor(){
//     this.data = {}
//   }
//   addVertex(vertex){
//     if(!this.data[vertex]){
//       this.data[vertex] = [];
//     }
//   }
//   addEdg(v1,v2){
//     console.log(v1,v2)
//     if(!this.data[v1]){
//       this.addVertex(v1);
//     }
//     if(!this.data[v2]){
//       this.addVertex(v2);
//     }
//     this.data[v1].push(v2);
//     this.data[v2].push(v1);
//   }

// }

// let graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");

// graph.addEdg('A','C')

// console.log(graph)

let isGameStarted = false;

const startGame = () => {
  isGameStarted= true;
  hitCount = 0;
  let mosquito = document.getElementById("mosquito");
  let time = setInterval(() => {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    mosquito.style.left = i + "px";
    mosquito.style.top = j + "px";
  },1000);
};

setTimeout(()=>{
  clearTimeout(time)
},20000)

let hitCount = 0;

const hitMosquito = ()=>{
  if(isGameStarted){
    hitCount++;
  document.getElementById('totalHit').innerHTML = hitCount;
  }
  
}
