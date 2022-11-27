// themes

function changeTheme(){
    theme=document.getElementById("themes").value
    if (theme=="dark"){
        document.body.style.background="rgb(20,20,20)"
        document.getElementById("themes").style=`
        background:grey;
        color:black;
        border-color:white;
        `;
        document.querySelector("header").style=`
        background:black;
        border-color:white;
        `;
        document.querySelectorAll("td").forEach(td=>{
            td.style=`
background: black;
color: white;
        `
            td.onmouseover=()=>{
                td.style.color="black"
                td.style.background="white"
            }
            td.onmouseout=()=>{
                td.style.color="white"
                td.style.background="black"
            }
    }
        )
        document.querySelector("th").style=`
        background: black;
        color: white;
                `
    }
    else {
        document.body.style.background="white"
        document.getElementById("themes").style=`
        background:white;
        color:black;
        border-color:black;
        `;
        document.querySelector("header").style=`
        background:white;
        border:2px solid black;
        `;
        document.querySelectorAll("td").forEach(td=>{
            td.style=`
background: white;
color: black;
border: 1px solid black
        `
            td.onmouseover=()=>{
                td.style.color="white"
                td.style.background="black"
            }
            td.onmouseout=()=>{
                td.style.color="black"
                td.style.background="white"
            }
    }
        )
        document.querySelector("th").style=`
        background: white;
        color: black;
        border: 1px solid black;
                `
    }
}
changeTheme()

document.getElementById("themes").addEventListener("change",changeTheme)

// calculator
val=[]
function changeValue() {
    document.getElementById("answer").innerText=val.join("");
    if (val.length==0) {
        document.getElementById("answer").innerText="0";
    }
}

// NUMBERS
document.getElementById("1").addEventListener("click",func=>{
    val.push("1");
    changeValue();
})
document.getElementById("2").addEventListener("click",func=>{
    val.push("2");
    changeValue();
})
document.getElementById("3").addEventListener("click",func=>{
    val.push("3");
    changeValue();
})
document.getElementById("4").addEventListener("click",func=>{
    val.push("4");
    changeValue();
})
document.getElementById("5").addEventListener("click",func=>{
    val.push("5");
    changeValue();
})
document.getElementById("6").addEventListener("click",func=>{
    val.push("6");
    changeValue();
})
document.getElementById("7").addEventListener("click",func=>{
    val.push("7");
    changeValue();
})
document.getElementById("8").addEventListener("click",func=>{
    val.push("8");
    changeValue();
})
document.getElementById("9").addEventListener("click",func=>{
    val.push("9");
    changeValue();
})
document.getElementById("0").addEventListener("click",func=>{
    val.push("0");
    changeValue();
})

// OPERATORS
document.getElementById("+").addEventListener("click",func=>{
    let last=val[val.length-1];
    if ((last=="+"||last=="-"||last=="*"||last=="/"||val.length==0)==false) {
        val.push("+");
    }
    changeValue();
})
document.getElementById("-").addEventListener("click",func=>{
    let last=val[val.length-1];
    if ((last=="-")==false) {
        val.push("-");
    }
    changeValue();
})
document.getElementById("x").addEventListener("click",func=>{
    let last=val[val.length-1];
    if ((last=="+"||last=="-"||last=="*"||last=="/"||val.length==0)==false) {
        val.push("*");
    }
    changeValue();
})
document.getElementById("div").addEventListener("click",func=>{
    let last=val[val.length-1];
    if ((last=="+"||last=="-"||last=="*"||last=="/"||val.length==0)==false) {
        val.push("/");
    }
    changeValue();
})

// del
document.getElementById("del").addEventListener("click",func=>{
    val.pop();
    changeValue();
})
document.getElementById("ac").addEventListener("click",func=>{
    val=[];
    changeValue();
})
document.getElementById("(").addEventListener("click",func=>{
    val.push("(")
    changeValue();
})
document.getElementById(")").addEventListener("click",func=>{
    val.push(")")
    changeValue();
})
// equal
document.getElementById("=").addEventListener("click",func=>{
    try {
        let answer=eval(val.join(""));
        if (val.length>0) {
                val=String(answer).split("");
                changeValue();
            }
    }
    catch (SyntaxError) {}
})