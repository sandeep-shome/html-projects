const addBtn = document.querySelector(".addBtn"), addInput = document.querySelector("input"), Ol = document.querySelector("ol"), removeBtn = document.querySelector(".rmvAll");
let listEle = "";

window.addEventListener("load", () => {
    listEle = "";
    Ol.innerHTML = listEle;
    loadData(localStorage.length);
})

addInput.addEventListener("keyup", () => {
    if (addInput.value.trim() != "") {
        addBtn.classList.add("active");
    }
    else {
        addBtn.classList.remove("active");
    }
})

let key = "key";

function loadData(list) {
    for (let i = 1; i <= list; i++) {
        if (localStorage.getItem(key + i) == "") {
            continue;
        }
        else {
            listEle += `<li><p>${localStorage.getItem(key + i)}</p> <span class="material-symbols-outlined delBnt" data-key="${key + i}"> delete </span></li>`;
        }
    }
    Ol.innerHTML = listEle;
    loadDelBTn();
    showRemove(list);
}

function showRemove(size) {
    if (size >= 1) {
        removeBtn.classList.add("active");
    }
    else {
        removeBtn.classList.remove("active");
    }
}

addBtn.addEventListener("click", () => {
    Ol.style.display = "block";
    storeItem();
    addInput.value = " ";
    addBtn.classList.remove("active");
})

function storeItem() {
    listEle = "";
    Ol.innerHTML = listEle;
    let objLen = localStorage.length;
    window.localStorage.setItem(`key${objLen + 1}`, addInput.value.trim());
    console.log(localStorage.length);
    loadData(localStorage.length);
}


const loadAgain = (l) => {
    for (let j = 1; j <= l; j++) {
        if (localStorage.getItem(key + j) == "") {
            continue;
        }
        else {
            listEle += `<li><p>${localStorage.getItem(key + j)}</p> <span class="material-symbols-outlined delBnt" data-key="${key + j}"> delete </span></li>`;
        }
    }
    Ol.innerHTML = listEle;
    loadDelBTn();
    showRemove(l);
}

removeBtn.addEventListener("click", () => {
    if (confirm("Are you sure to remove all tasks?")) {
        window.localStorage.clear();
        removeBtn.classList.remove("active");
        Ol.style.display = "none";
    }
})

const loadDelBTn = () => {
    let delBtn = document.querySelectorAll(".delBnt");
    console.log(delBtn);
    delBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            listEle = "";
            Ol.innerHTML = listEle;
            window.localStorage.setItem(btn.dataset.key, "");
            loadAgain(localStorage.length);
        })
    })
}