
/* MENU SHOW/HIDE */
//create event listener
let isShown = true;

// "document.getElementById": tells Javascript what to listen for
//"addEventListener("eventType", function): listens for click action and then runs function
document.getElementById("menuIcon").addEventListener("click", showHide);

//actual function

function showHide() 
{
    //default behavior: asks whether sidebar is currently being shown or not

    //container that is beind hidden/shown
    //classes return as an ARRAY so we can call on the (only) obj in our array
    let sideBarHideShow = document.getElementsByClassName('sidebar')[0];

    // get Content html obj
    let content = document.getElementsByClassName('content')[0];

    if(isShown) {

        sideBarHideShow.style.display = "none";
        
        if(window.innerWidth <= 1000) {
            content.style.position = "absolute";
        content.style.left = "0px";
        content.style.width = "100%";
        isShown = false;
        }
        else {content.style.position = "absolute";
        content.style.left = "50px";
        content.style.width = "calc(100%-50px)";
        isShown = false;
        }
    }
    
    else {
        sideBarHideShow.style.display = "block";

        if(window.innerWidth <= 1000) {
            content.style.position = "absolute";
        content.style.left = "0px"
        content.style.width = "100%";
        isShown = true;
        }
        else {content.style.position = "absolute";
        content.style.left = "200px"
        content.style.width = "calc(100%-200px)";
        isShown = true;
        }
    }
}

//CHANGING COLORS
document.getElementById("one").addEventListener("click", changeColors);

function changeColors() {
    let content = document.getElementsByClassName('content')[0];

    console.log(content.style.color)

    if (content.style.color == '')
    {
        content.style.color = 'var(--chili-red)'
    }

    if(content.style.color == 'var(--chili-red)')
    {
        content.style.color = 'white';
    }
    else if(content.style.color == 'white')
    {
        content.style.color = 'var(--chili-red)';
    }
}
