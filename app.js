
//let command=process.argv[2]
let fs=require('fs')

const yargs = require('yargs')
const argv = yargs.command('add','adding new note',{
	title:{
		describe:'title of note',
		demand:false,
		alias:'t'    
	},
	body:{
		describe:'body of note',
		demand:true,
		alias:'b'    
	}


}).command('list','listing note' ).command('remove','removing note',{
	title:{
		describe:'title of note',
		demand:false,
		alias:'t'    
	}})
.command('read','reading note',{
	title:{
		describe:'title of note',
		demand:false,
		alias:'t'    
	}})
.help()
.argv


const command = argv._[0]

/**add a note**/
if(command =="add")
	{

		let note={
			title:argv.title,
			body:argv.body
		}


		let noteList=JSON.parse(fs.readFileSync("note.json"))
			noteList.push(note)
		  let data=JSON.stringify(noteList)
	      fs.writeFileSync("note.json",data)
	      console.log("Note created")
	      console.log("--")
	      console.log("Title:",process.argv[4])
	      console.log("Body:",process.argv[6])


	}
	


if(command=="list")
{
			let noteList=JSON.parse(fs.readFileSync("note.json"))
			console.log(`Printing `+noteList.length+` note(s)`)
			for(let i=0;i<noteList.length;i++)
			{
			console.log("--")
	      console.log("Title:",noteList[i].title)
	      console.log("Body:",noteList[i].body)
			}
}
/*****remove a note*****/

if (command=="remove")
{
	
let remove=require('./remove.js')
let noteList=JSON.parse(fs.readFileSync("note.json"))
remove(argv.title,noteList)	
}



/************ read a note***********/
if(command=="read")
{

console.log(argv.title)
let read=require('./read.js')
let noteList=JSON.parse(fs.readFileSync("note.json"))
read(argv.title,noteList)	
}

