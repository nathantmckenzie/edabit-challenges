//https://leetcode.com/problems/longest-common-prefix/
//easy
//unsolved

var longestCommonPrefix = function (strs) {
   let prefix = "";
   if (strs.length === 0) return prefix;
   for (let i = 0; i < strs[0]; i++) {
     const character = strs[0][i];
     for (let j = 0; j < strs.length; j++) {
       if (strs[j][i]) 
     }
   }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
