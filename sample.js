const para=document.getElementById("para")
const changes=document.getElementById("changes")
function changecolor(){
    const colorvalue=document.getElementById("colorvalue").value;
    para.style.color=colorvalue
}
function changebackcolor(){
    const backcolor=document.getElementById("backcolor").value
    changes.style.backgroundColor=backcolor
}
function changepadding(){
    const paddingnum=document.getElementById("paddingnum").value
    changes.style.padding=paddingnum
}
function changesize(){
    const sizevalue=document.getElementById('sizevalue').value
    para.style.fontSize=sizevalue;
}
function changeweight(){
    const weightvalue = document.getElementById('weightvalue').value
    para.style.fontWeight=weightvalue;
}