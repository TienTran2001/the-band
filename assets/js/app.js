const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const closeIcon = $(".close");
const closeBtn = $(".model-bottom-close");
const buyTickets = $$(".buy-ticket");
const model = $(".model-popup");
const layer = $(".layer");
const navbar = $(".navbar");
const header = $(".header");

function handleModelPopup() {
  // open
  let tickets = Array.from(buyTickets);
  tickets.forEach((ticket) => {
    ticket.onclick = function () {
      model.classList.add("active");
      layer.classList.add("active");
    };
  });
  // close
  layer.onclick =
    closeBtn.onclick =
    closeIcon.onclick =
      function () {
        model.classList.remove("active");
        layer.classList.remove("active");
      };
}

function handleMenuMobile() {
  let headerHeight = header.clientHeight;
  console.log(headerHeight);
  navbar.onclick = function () {
    let isClosed = header.clientHeight === headerHeight;
    console.log(isClosed);
    if (isClosed) {
      navbar.classList.add("open");
      header.style.height = "auto";
    } else {
      navbar.classList.remove("open");
      header.style.height = null;
    }
  };

  // dong khi an vao item
  let menuItems = $$('.header-menu .header-item a[href*="#"]');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = function (even) {
      let isParentMenu =
        this.nextElementSibling &&
        this.nextElementSibling.classList.contains("submenu");
      if (isParentMenu) {
        even.preventDefault();
      } else {
        navbar.classList.remove("open");
        header.style.height = null;
      }
    };
  }
}

function app() {
  handleModelPopup();
  handleMenuMobile();
}

app();
