/*CHROME EXTENSION APP*/

let myarray=[];
const ibtn=document.getElementById("input-btn");
const ulel=document.getElementById("ul-el");
const info=document.getElementById("input-el");
const delb=document.getElementById("delete-btn");
const taBtn=document.getElementById("tab-btn");

const leadFromLogacalStorage = JSON.parse(localStorage.getItem("myarray"));

//true value i.e if not null then save in myarray and render array
if(leadFromLogacalStorage)
{
    myarray=leadFromLogacalStorage;
    renderarray(myarray);
}

//save tab button
taBtn.addEventListener('click',function()
{
    //fetch the url of the website opened along with the extension
    chrome.tabs.query({active:true,currentWindow:true},function(tabs)
    {
    myarray.push(tabs[0].url);//push url of current window
    localStorage.setItem("myarray",JSON.stringify(myarray));
    renderarray(myarray);
    })
})

//delete button to clear everything from local storage console and array on double click only
delb.addEventListener('dblclick',function()//on double click of mouse
{
    localStorage.clear();
    myarray=[];//empty the list
    renderarray(myarray);
})

//to add events to local storage and array
ibtn.addEventListener('click',function()
{
    //taking input
    myarray.push(info.value);
    info.value="";
    //save the value to the local storage by formating it into string type
    localStorage.setItem("myarray",JSON.stringify(myarray));
    renderarray(myarray);
})

//function to modify the list along with thw anchor tag
function renderarray(myarray)
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
