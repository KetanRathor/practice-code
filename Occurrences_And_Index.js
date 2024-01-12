



// let str = "acvcecacevcareca?";
// let indexs = [];
// for(let i = 0; i<str.length; i++){
//     if()
// }

// console.log("all matches of 'c': " + (str.match(/ca/g)));
// let index = text.indexOf('c');
// console.log(index);


// const string = "scissors";
// const matches = [...string.matchAll(/s/g)];
// const indexes = matches.map(match => match.index);
// console.log(matches);

// const string = "scissors";
// const matches = Array.from(string.matchAll(/s/g));
// const indexes = matches.map(match => match.index);
// console.log(matches);
// console.log("Indexes: " + indexes);

// let indices = [];
// let array = "scissors".split('');
// let element = 's';
    
// let idx = array.indexOf(element);
    
// while (idx !== -1) {
//    indices.push(idx+1);
//    idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);


// let string = "acabavacbnacbgac";
// let pattern = /ac/g;
// let match;

// for(let i= 0; (match=pattern.exec(string))!== null; i++){
//    let index = match.index;
//    let matchedChar=  match[0];
//    console.log(matchedChar+ "- Index " + index);
// }


// let string = "abcdzfgimabcdkopdo";
// let pattern = /abcd/g;
// let match;

// for(let i = 0; (match = pattern.exec(string)) !== null; i++){
//       let index = match.index;
//       let matchedChar = match[0];
//       let count = 0;
//       if(pattern.source === matchedChar ){
//          count++;
         
//       }
//       console.log(matchedChar+count);
     
// }


// let string = "abcdzfgimabcdkopdo";
// let substring = /abc/g;
// let match;
// let count = 0;

// for (let i = 0; (match = substring.exec(string)) !== null; i++) {
   
//     let matchedChar = match[0];

//     if (substring.source === matchedChar) {
//         count++;
        
//     }

    
// }
// console.log(substring.source +" - " + count);

// let string = "abcdzfgimabcdkopdo";
// let match;
// let count = 0;

// for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j <= string.length; j++) {
//         let substring = string.substring(i, j);
//         let regex = new RegExp(substring, 'g');
//         let matches = string.match(regex);

//         if (matches && matches.length > 1) {
//             count++;
//             console.log(substring + count);
//         }
//     }
// }

// function findLargestRepeatedSubstring(inputString) {
//     let maxLength = 0;
//     let largestSubstring = "";
  
//     for (let i = 0; i < inputString.length; i++) {
//       for (let j = i + 1; j < inputString.length; j++) {
//         let substring = inputString.substring(i, j);
        
//         if (inputString.indexOf(substring, j) !== -1) {
//           if (substring.length > maxLength) {
//             maxLength = substring.length;
//             largestSubstring = substring;
//           }
//         }
//       }
//     }
  
//     return { largestSubstring, count: maxLength > 0 ? (inputString.match(new RegExp(largestSubstring, 'g')) || []).length : 0 };

//   }
  
//   const inputString = "KETANYHGWQSYABTRDKOKETANLKTV";
//   const result = findLargestRepeatedSubstring(inputString);
  
//   console.log("Largest Repeated Substring:", result.largestSubstring);
//   console.log("Count:", result.count);
  



function findLargestRepeatedSubstring(inputString) {
    let maxLength = 0;
    let largestSubstring = "";
    let count = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      for (let j = i + 1; j < inputString.length; j++) {
        let substring = inputString.substring(i, j);
  
        
        if (inputString.indexOf(substring, j) !== -1) {
          if (substring.length >= maxLength) {
           
            maxLength = substring.length;
            largestSubstring = substring;
  
            
            count = inputString.split(largestSubstring).length - 1;
          }
        }
      }
    }
  
    return { largestSubstring, count };
  }
  
  const inputString = "ketanYHGWQSYABTRDKOketanLKTV";
  const result = findLargestRepeatedSubstring(inputString);
  
  console.log("Largest Repeated Substring:", result.largestSubstring);
  console.log("Count:", result.count);
  