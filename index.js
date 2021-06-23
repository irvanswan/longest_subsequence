/* const data = [35,27,13,3,12,25,45]
const newData = []
function longest_subsequence (value,count1 = 0, count2 = 0){
    if(value[count1] > data[count2 + 1]){
        newData.push(value.cou);
    }
} */
const data = [13,14,15,12,21,22,23,24]
let newData = [];
console.log(longest_subsequence(data));

function longest_subsequence(data, index = 1) {
  if(index == data.length - 1){
    console.log('perulangan udah selesai')
    return newData;
  }
  let newArr = [];
    /* for (let i = index; i > 0; i--) {
      if (data[i-1] < data[i]) {
        newArr.push(data[index-i]);
      }
    } */

    for (let i = index; i < data.length - 1; i++) {
        newArr.push(data[i])
        for(let j=0; j < data.length - 1; j++){
            if (data[j] > data[i+1]) {
                newArr.push(data[j])
            }
        }
       /*  if (data[i+1] > data[i]) {
            // newArr.push(data[i]);
            for(let j = data[i+1]; j < data.length; j++){
                newArr.push(data[j])
            }
        } */
    }

    if (newData.length < newArr.length) {
      element = index
      newData = newArr;
    }
    return longest_subsequence(data, index + 1);
}
