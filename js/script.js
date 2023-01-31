// jQuery(document).ready(function($) {
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

    $('.planets__slideshow.owl-carousel').owlCarousel({
        smartSpeed: 1200,
        items:1,
        nav: false,
        dots: true,
        dotsData: true,
        margin: 50
    });

    $('.crew__slideshow.owl-carousel').owlCarousel({
        smartSpeed: 1200,
        items:1,
        nav: false,
        dots: true,
        margin: 50
    });

    $('.technology__slideshow.owl-carousel').owlCarousel({
        smartSpeed: 1200,
        items:1,
        nav: false,
        dots: true,
        dotsData: true,
        margin: 50
    });
// });
