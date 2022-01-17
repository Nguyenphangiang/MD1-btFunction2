function addNumReverse(array,value,index){
    array[index]= value;
   let first = 0;
   let last = [array.length-1];
   while (first<last){
       let bot = array[first];
       array[first] = array[last];
       array[last]= bot;
       first++;
       last--;
   }
}
let arrs = [1,2,3,4]
addNumReverse(arrs,5,arrs.length-1);
console.log(arrs);
