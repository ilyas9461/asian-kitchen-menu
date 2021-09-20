import { menu} from './data.js';


function createMenuItemLeftHtml(item) {
    return `
  <div class="container menu-items">
  <div class="row row-cols-2 ">
    <div class="col">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img class="photo"
              src=${item.img}
              alt="">
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col menu-title">
                <h4>${item.title}</h4>
                <h4>${item.price}</h4>
              </div>
              <p class="menu-info">
                ${item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createMenuItemRigtHtml(item) {
    return `
     <div class="col">
        <div class="container">
        <div class="row">
            <div class="col-4">
            <img class="photo"
                src=${item.img}
                alt="">
            </div>
            <div class="col-8">
            <div class="row">
                <div class="col menu-title">
                <h4>${item.title}</h4>
                <h4>${item.price}</h4>
                </div>
                <p class="menu-info">
                ${item.desc}
                </p>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>

    </div>`;
}

//console.log(menu);

function allItems() {
    menuObjCreate();

    let html = ``;

    for (let index = 0; index < menu.length; index++) {
        if (index % 2 == 0)

            html += createMenuItemLeftHtml(menu[index]);
        else

            html += createMenuItemRigtHtml(menu[index]);

    }

    //console.log(html);
    document.getElementById("menu2").innerHTML = html;
}

const koreaMenuArr = menu.filter(function (item) {
    if (item.category == "Korea") {
        return true;
    }
});

function koreaItems() {
    menuObjCreate();

    let html = ``;

    for (let index = 0; index < koreaMenuArr.length; index++) {
        if (index % 2 == 0)

            html += createMenuItemLeftHtml(koreaMenuArr[index]);
        else

            html += createMenuItemRigtHtml(koreaMenuArr[index]);

    }

    //console.log(html);
    document.getElementById("menu2").innerHTML = html;
}

const japanMenuArr = menu.filter((item) => {
    if (item.category == "Japan") {
        return true;
    }
});

function japanItems() {
    menuObjCreate();

    let html = ``;

    for (let index = 0; index < japanMenuArr.length; index++) {
        if (index % 2 == 0)

            html += createMenuItemLeftHtml(japanMenuArr[index]);
        else

            html += createMenuItemRigtHtml(japanMenuArr[index]);

    }

    //console.log(html);
    document.getElementById("menu2").innerHTML = html;
}

const chinaMenuArr = menu.filter((item) => {
    if (item.category == "China") {
        return true;
    }
});

function chinaItems() {
    menuObjCreate();

    let html = ``;

    for (let index = 0; index < chinaMenuArr.length; index++) {
        if (index % 2 == 0)

            html += createMenuItemLeftHtml(chinaMenuArr[index]);
        else

            html += createMenuItemRigtHtml(chinaMenuArr[index]);

    }

    //console.log(html);
    document.getElementById("menu2").innerHTML = html;
}

function menuObjCreate() {

    const myobj = document.getElementById("menu2");
    console.log(myobj);
    if (myobj !== null)
        myobj.remove();

    const menu = document.getElementById("menu");
    let div = document.createElement('div');
    div.id = 'menu2';

    menu.appendChild(div);
}

allItems();

document.getElementById("allBtn").addEventListener("click", function () {
    allItems();
});

document.getElementById("koreaBtn").addEventListener("click", function () {
koreaItems();
});

document.getElementById("japanBtn").addEventListener("click", function () {
    japanItems();
});

document.getElementById("chinaBtn").addEventListener("click", function () {
    chinaItems();
});


