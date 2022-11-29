function randRange(x, y){
    x=Math.round(x);
    y=Math.round(y)

    if (x>y) {
        z=x;x=y;y=z;
    }

    let randomNum=x-1;

    while (randomNum<x||randomNum>y)
        randomNum=Math.round(Math.random()*y)

    return randomNum;
}

getChar=()=>{
    return [
        String.fromCharCode(randRange(97,122)),
        String.fromCharCode(randRange(65,90))
    ];
}
getSymbol=()=>{
    let Arr=["!","@","#","$","%","^","&","*","(",")","-","_","=","+","<",">",".","/","|"];
    return Arr[Math.round(randRange(0,Arr.length-1))];
}

function getRandPass(){
    pass="";
    
    minlength=document.getElementById("min").value<3?3:document.getElementById("min").value;
    maxlength=document.getElementById("max").value>20?20:document.getElementById("max").value;

    for (var i=0;i<randRange(minlength,maxlength);i++){
        let chars=[getChar()[0]];

        if (document.getElementById("numbers").checked)
            chars.push(randRange(0,9))
        if (document.getElementById("capitals").checked)
            chars.push(getChar()[1])
        if (document.getElementById("symbols").checked)
            chars.push(getSymbol())
        
        pass+=chars[randRange(0,chars.length-1)]
    }
    return pass;
}

document.getElementById("generate").addEventListener("click",()=>{
    document.getElementById("password").value=getRandPass();
})

document.getElementById("copy").addEventListener("click",()=>{
    navigator.clipboard.writeText(document.getElementById("password").value);
    document.getElementById("success").style.opacity="1";
    document.getElementById("success").style.display="block";
    
    setTimeout(()=>{
    document.getElementById("success").style.opacity="0";
    document.getElementById("success").style.display="none";
    },2000)
})