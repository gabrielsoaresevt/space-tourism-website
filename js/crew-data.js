fetch("./data.json").then((response) => {
    response.json().then((datas) => {
        datas.crew.map((person) => {
            $(".owl-carousel").trigger('add.owl.carousel', [`
            <div class="crew__slideshow__item">
                <div class="crew__slideshow__item__text">
                    <div class="crew__slideshow__item__text__employee">
                        <span class="crew__slideshow__item__text__employee__role">${person.role}</span>
                        <h2 class="crew__slideshow__item__text__employee__name">${person.name}</h2>
                        <p class="crew__slideshow__item__text__employee__paragraph paragraph">
                            ${person.bio}
                        </p>
                    </div>
                </div>
                <div class="crew__slideshow__item__img">
                    <img id="${person.role.replace(' ', '-').toLowerCase()}" src="${person.images.png}" alt="${person.role} Image">
                </div>
            </div>`]).trigger("refresh.owl.carousel");
        });
    });
});