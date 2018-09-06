module.exports=function(title,noteList){
const _=require('lodash')
const fs=require('fs')
let indx=_.findIndex(noteList, function(o) { return o.title == title; });

if(indx==-1)
{console.log("note not found")}
else{
console.log("note found")
 console.log("--")
 console.log("Title:",title)
 console.log("Body:",noteList[indx].body)
}
}