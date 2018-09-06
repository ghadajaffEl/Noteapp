

module.exports=function(title,noteList){
const _=require('lodash')
const fs=require('fs')
let indx=_.findIndex(noteList, function(o) { return o.title == title; });

if(indx==-1)
{console.log("note not found")}
else{
let listfiltred=noteList.filter(el=>{return el.title!=title})

console.log("note was removed")
 let data=JSON.stringify(listfiltred)
  fs.writeFileSync("note.json",data)
}
}