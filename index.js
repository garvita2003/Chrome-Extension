/*CHROME EXTENSION APP*/
let myarray=[];
//input button
const ibtn=document.getElementById("inputbtn");
//list
const ulel=document.getElementById("ul-el");
//input message
const info=document.getElementById("inputel");
//delete button
const delb=document.getElementById("delbtn");
//tab button
const taBtn=document.getElementById("tabbtn");
//
const leadFromLogacalStorage = JSON.parse(localStorage.getItem("myarray"));
//true value that is if not null then save in myarray and render array
if(leadFromLogacalStorage)
{
    myarray=leadFromLogacalStorage;
    renderarray();
}

taBtn.addEventListener('click',function()
{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs)
    {
    myarray.push(tabs[0].url);
    localStorage.setItem("myarray",JSON.stringify(myarray));
    renderarray();
    })
})

//delete button to clear everything from local storage console and array
delb.addEventListener('dblclick',function()
{
    localStorage.clear();
    myarray=[];
    renderarray();
    console.log(myarray);
})
//to add events to local storage console and array
ibtn.addEventListener('click',function()
{
    //taking input
    myarray.push(info.value);
    console.log(myarray);
    //clear the value
    info.value="";
    //save the vale to the local storage
    localStorage.setItem("myarray",JSON.stringify(myarray));
    //call the render function 
    renderarray();
}
)
//function to modify the list along with thw anchor tag
function renderarray()
{
    let listitem="";
    for(let i=0;i<myarray.length;i++)
    {
        //template string
        listitem+=`
        <li>
            <a href='${myarray[i]}' target='_blank'>
                ${myarray[i]}
            </a>
        </li>
        `
    }
    //to understand that it contains html tags and implemnet it as html tags and store in ulel
    ulel.innerHTML=listitem;
}
