//Required package
var pdf = require("pdf-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("96_template.html", "utf8");

var options = {
    format : "A3",
    orientation: "portrait",
    border: "10mm",
    Header: {
        height: "45mm",
        contents: '<div style = "text-align: center;">Author: Shyam Harjeet</div>'
    },
    footer: {
        height: "28mm",
        contents:{
            first: 'cover page',
            2: 'Second Page', // any page number is working. 1 based index
            default: '<span style = "color: #444;"> {{page}} </span>/ <span>{{pages}} </span>', // feedback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
        name : "tom",
        age : "21",
    },
    {
        name : "dick",
        age : "23",
    },
    {
        name : "harry",
        age : "28s",
    },
];

var document = {
    html: html,
    data: {
        users: users,
    },
    path: "./output.pdf",
    type: "pdf",
};

// by default a file is created but you could switch between Buffer and strea,s by using " buffer" or "stream" respectively.
 
pdf
.create(document, options)
.then((res) =>{
    console.log(res)
})
.catch((error) =>{
    console.log(error)
})