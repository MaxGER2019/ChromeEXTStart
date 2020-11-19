(function() {
    // var inv = setInterval(() => {
    //     console.log("running")
    //     var elements = document.getElementsByTagName("input");
    //     for (let index = 0; index < elements.length; index++) {
    //         const element = elements[index];
    //         if(element.hasAttribute("type") && element.getAttribute("type") == "password") {
    //             chrome.storage.sync.get('color', function(data) {
    //                 element.focus();
    //                 element.value = JSON.stringify(data);
    //                 element.style.backgroundColor = "#FFDC00";
    //                 clearInterval(inv);
    //             });
    //         }
    //     }
    //     elements = document.getElementsByTagName("button");
    //     for (let index = 0; index < elements.length; index++) {
    //         const element = elements[index];
    //         if(element.hasAttribute("type") && element.getAttribute("type") == "submit") {
    //             element.style.outline = "none";
    //             element.addEventListener('click', function(ev) {
    //                 ev.preventDefault();
    //             })
    //         }
    //     }
    // }, 1000);
    document.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        console.log(target)   
    }, false);
    
    var style = document.createElement("style");
    style.innerHTML = `
    #MLinkPopUp {
        transition: right 0.5s, top 0.1s;
        z-index: 2147483646;
        background-color: white;
        width: 300px;
        height: fit-content;
        position: fixed;
        top: 50px;
        right: -300px;
        border-radius: 0 0 0 5px;
        box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
    }
    #MLinkPopUp div {
        text-align: center;
        padding: 10px;
    }
    #MLinkPopUp div h1 {
        font-weight: normal;
        color: black;
        margin: 0;
        padding: 0;
        font-size: 25px;
    }
    #MLinkPopUp div p {
        padding: 0;
        margin: 0;
    }
    #MLinkPopUp div hr {
        padding: 0;
        margin: 0;
        border: 0.5px solid gray;
    }
    #MLinkPopUp div .butn {
        background-color: #28a745;
        color: white;
        width: 80%;
        border: 1px solid #28a745;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }
    #MLinkPopUp div .butn:hover {
        background-color: #218838;
        border-color: #1e7e34;
    }
    #MLinkHover {
        transition: right 0.5s, top 0.1s;
        user-select: none !important;
        background-color: white;
        width: 50px;
        height: 50px;
        padding: 5px;
        position: fixed;
        top: 50px;
        right: 0px;
        border-radius: 5px 0 0 5px;
        box-shadow: -3rem 1rem 3rem rgba(0,0,0,.075)!important;
        cursor: move;
        z-index: 2147483647;
    }
    #MLinkHover img {
        user-drag: none; 
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        height: 100%;
    }`;
    var popup = document.createElement("div");
    popup.id = "MLinkPopUp";
    var hover = document.createElement("div");
    hover.id = "MLinkHover";
    var icon = document.createElement("img");
    icon.src = "https://i.ibb.co/GnmQ35G/Inkedfacebook-profile-image-LI-removebg.png";
    popup.innerHTML = `
    <div>
        <h1>Welcome to MLink</h1>
        <hr>
        <p>What would you like to do?</p>
        </br>
        </br>
        <button class="butn">Save Password</button>
        <br/>
        <br/>
        <button class="butn">Save Password</button>
        <br/>
    </div>
    `;
    hover.appendChild(icon);
    document.body.insertBefore(style, document.body.firstChild);
    document.body.insertBefore(popup, document.body.firstChild);
    document.body.insertBefore(hover, document.body.firstChild);
    var startX = 0;
    var diffX = 0;
    document.getElementById("MLinkHover").onmousedown = function(e) {
        e = e || window.event;
        var start = 0;
        var diff = 0;
        if(e.pageX) startX = e.pageX;
        else if(e.clientX) startX = e.clientX;
    
        document.body.onmousemove = function(e) {
            e = e || window.event;
            var end = 0;
            var endX = 0;
            if( e.pageY) end = e.pageY;
            else if( e.clientY) end = e.clientY;
            
            if( e.pageX) endX = e.pageX;
            else if( e.clientX) endX = e.clientX;
    
            diff = end - start;
            diffX = endX - startX;
            if(diffX < -70 && diffX > -300) {
                document.getElementById("MLinkHover").style.right = "300px";
                document.getElementById("MLinkPopUp").style.right = "0px";
            } else {
                if(diffX > -70) {
                    document.getElementById("MLinkHover").style.right = "0px";
                    document.getElementById("MLinkPopUp").style.right = "-300px";
                }
            }
            if(diff > 25 && diffX > -70) {
                document.getElementById("MLinkHover").style.top = diff + "px";
                document.getElementById("MLinkPopUp").style.top = (diff) + "px";
            }
            console.log(diffX);
        };
        document.body.onmouseup = function() {
            // do something with the action here
            // elem has been moved by diff pixels in the X axis
            document.body.onmousemove = document.body.onmouseup = null;
        };
    }
 })();