function abc() {
    let std_name = prompt("enter your name")
    let std_total_marks = document.getElementById("tm1").value;
    let std_obt_marks = document.getElementById("obt1").value;
    res = std_obt_marks / std_total_marks * 100;
    alert(` Dear ${std_name} you have got it ${res} `)
    document.write(`<h1> Dear ${std_name} you have got it ${res} </h1>  `) 
    console.log(`<h1> Dear ${std_name} you have got it ${res} </h1> `)    
    }