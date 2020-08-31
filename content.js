class Content {
    constructor(title, text, date){
        this.title = title;
        this.text = text;
        this.date = date;
    }
} 

let text = null;
let content = [];
let allright = false;


$.ajax({url: "./zsources/blog%20text/texto.txt", success: function(result){
    text = result;
    allright = true;
    createContent(true);
}, error: function(){createContent(false); console.log("couldn't get the online .txt")}
});

function createContent(hasText){
    if(hasText == false){
        text = `T> I made an osu!Taiko Hack - hackdetaco
p> There is more info at <a href="https://github.com/calmylake/hackdetaco">github.com/calmylake/hackdetaco</a>.
I did it just today, I feel proud of finally doing something from start to finish. 
But also... I just wanna go sleep...

<img src="https://media.tenor.com/images/61dcf7e4d65440b06c8c901ace9924a6/tenor.gif">
DATE> 31/08/2020

T> UM TÍTULO MUUU U UU U UU UUUUUU ITO GRANDE
p> aaaaa 
hoje eu fiz um site
construi do zero muleke

blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 
<img style="margin: 30px;" src="https://a.ppy.sh/4689256_1596477920.gif">
blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 
aaaaaaaaaa
DATE> 28/08/2020


T> UM TÍTULO
p> blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 
blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 
blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 

blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 

blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 

blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 
blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 
blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 
blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah 


DATE> 27/08/2020
`;
    }


    content = text.split("T>");
    //filtered is the content with only the items that have "T>", "p>" and "DATE>"
    let filtered = content.filter(function(el){
        return (el != "" && el != null && (el.includes("p>") && el.includes("DATE>")));
    });
    
    let actContent = [];
    
    (() => {
        let i = 0;
        while(i < filtered.length){
            let title = filtered[i].split("p>")[0].trim();
            let text = filtered[i].split("p>")[1].split("DATE>")[0].trim().replace(/\n/g,"<br>");
            let date = "<br><br>"+filtered[i].split("p>")[1].split("DATE>")[1].trim();
            actContent.push(new Content(title, text, date));
            i++;
        }
    })();
    
    (() => {
        let i = 0;
        let htmlstring = ""
        while(i < actContent.length){
            htmlstring += `<div class="content-item">
            <h1>${actContent[i].title}</h1>
            <hr>
            ${actContent[i].text}
            <br>
            ${actContent[i].date}
            <br><br></div><br>`;
            i++;
        }
        document.getElementById("content").innerHTML = htmlstring.trim();
    })();

}