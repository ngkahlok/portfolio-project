//JavaScript file created
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sideMenu = document.getElementById("sideMenu");

const scriptURL = 'https://script.google.com/macros/s/AKfycbwTctpb6cm-3_k4mfQ0Mm-mwxXumKw8F1LxK4Wz6OvQ5GssZaQcT9MVW_4SANjKdyk_/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => {
        msg.innerHTML = "Messsage sent successfully";
        setTimeout(function(){
        msg.innerHTML = ""
        }, 5000)
        form.reset();
    })
   .catch(error => console.error('Error!', error.message))
})

function opentab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}

function openMenu(){
    sideMenu.style.right = "0";
}
 
