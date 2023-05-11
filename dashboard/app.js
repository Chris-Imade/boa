// Tabs
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");
const tab5 = document.querySelector(".tab5");
const tab6 = document.querySelector(".tab6");
const tab7 = document.querySelector(".tab7");
// Tabs Content
const content1 = document.querySelector(".tab__content1");
const content2 = document.querySelector(".tab__content2");
const content3 = document.querySelector(".tab__content3");
const content4 = document.querySelector(".tab__content4");
const content5 = document.querySelector(".tab__content5");
const content6 = document.querySelector(".tab__content6");
const content7 = document.querySelector(".tab__content7");


let activeTab = "";

tab1.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    activeTab = e.target.id;
    addEventListener("click", (style) => {
        if(style.target == e.target) {
            e.target.style.backgroundColor = "#F9F7F6";
        } else {
            e.target.style.backgroundColor = "#E6E2DB";
        }
    });
});

tab2.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    activeTab = e.target.id;
    addEventListener("click", (style) => {
        if(style.target == e.target) {
            e.target.style.backgroundColor = "#F9F7F6";
        } else {
            e.target.style.backgroundColor = "#E6E2DB";
        }
    });
});

tab3.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    activeTab = e.target.id;
    addEventListener("click", (style) => {
        if(style.target == e.target) {
            e.target.style.backgroundColor = "#F9F7F6";
        } else {
            e.target.style.backgroundColor = "#E6E2DB";
        }
    });
});

tab4.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    activeTab = e.target.id;
    addEventListener("click", (style) => {
        if(style.target == e.target) {
            e.target.style.backgroundColor = "#F9F7F6";
        } else {
            e.target.style.backgroundColor = "#E6E2DB";
        }
    });
});

tab5.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    activeTab = e.target.id;
    addEventListener("click", (style) => {
        if(style.target == e.target) {
            e.target.style.backgroundColor = "#F9F7F6";
        } else {
            e.target.style.backgroundColor = "#E6E2DB";
        }
    });
});

tab6.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    activeTab = e.target.id;
    addEventListener("click", (style) => {
        if(style.target == e.target) {
            e.target.style.backgroundColor = "#F9F7F6";
        } else {
            e.target.style.backgroundColor = "#E6E2DB";
        }
    });
});

tab7.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.id);
    activeTab = e.target.id;
    addEventListener("click", (style) => {
        if(style.target == e.target) {
            e.target.style.backgroundColor = "#F9F7F6";
        } else {
            e.target.style.backgroundColor = "#E6E2DB";
        }
    });
});

addEventListener("click", (e) => {
    e.preventDefault();
    if(activeTab == "tab1") {
        // Main
        content1.classList.remove("hide");
        // Others
        content2.classList.add("hide");
        content3.classList.add("hide");
        content4.classList.add("hide");
        content5.classList.add("hide");
        content6.classList.add("hide");
        content7.classList.add("hide");
    } else if(activeTab == "tab2") {
        // Main
        content2.classList.remove("hide");
        // Others
        content1.classList.add("hide");
        content3.classList.add("hide");
        content4.classList.add("hide");
        content5.classList.add("hide");
        content6.classList.add("hide");
        content7.classList.add("hide");
    } else if(activeTab == "tab3") {
        // Main
        content3.classList.remove("hide");
        // Others
        content1.classList.add("hide");
        content2.classList.add("hide");
        content4.classList.add("hide");
        content5.classList.add("hide");
        content6.classList.add("hide");
        content7.classList.add("hide");
    } else if(activeTab == "tab4") {
        // Main
        content4.classList.remove("hide");
        // Others
        content1.classList.add("hide");
        content3.classList.add("hide");
        content2.classList.add("hide");
        content5.classList.add("hide");
        content6.classList.add("hide");
        content7.classList.add("hide");
    } else if(activeTab == "tab5") {
        // Main
        content5.classList.remove("hide");
        // Others
        content1.classList.add("hide");
        content3.classList.add("hide");
        content4.classList.add("hide");
        content2.classList.add("hide");
        content6.classList.add("hide");
        content7.classList.add("hide");
    } else if(activeTab == "tab6") {
        // Main
        content6.classList.remove("hide");
        // Others
        content1.classList.add("hide");
        content3.classList.add("hide");
        content4.classList.add("hide");
        content5.classList.add("hide");
        content2.classList.add("hide");
        content7.classList.add("hide");
    } else if(activeTab == "tab7") {
        // Main
        content7.classList.remove("hide");
        // Others
        content1.classList.add("hide");
        content3.classList.add("hide");
        content4.classList.add("hide");
        content5.classList.add("hide");
        content6.classList.add("hide");
        content2.classList.add("hide");
    } else {
        content1.classList.remove("hide");
        content1.classList.add("show");
    }
});

// if () {
    
// } else {
    
// }