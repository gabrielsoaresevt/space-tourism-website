jQuery(document).ready(function($) {
    class MobileNavBar {
        constructor(mobileMenu, navList) {
            this.mobileMenu = document.querySelectorAll(mobileMenu);
            this.navList = document.querySelector(navList);
            this.activeClass = "active";
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            this.navList.classList.toggle(this.activeClass);
        }
        addClickEvent() {
            this.mobileMenu.forEach((item)=> {
                item.addEventListener("click", this.handleClick);
            });
        }
        init() { 
            if(this.mobileMenu) {
                this.addClickEvent();
            }
            return this;
        }
    }

    const mobileNavBar = new MobileNavBar(
        ".menu-icon",
        ".header__menu"
    );

    mobileNavBar.init();
});
