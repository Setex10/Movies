

const generateCarucel = (value) => {
	window.addEventListener('load', function(){
		new Glider(document.querySelector(`.carousel__lista${value}`), {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: `.carousel__indicadores${value}`,
			arrows: {
				prev: `.carousel__anterior${value}`,
				next: `.carousel__siguiente${value}`
			},
			responsive: [
				{
				  // screens greater than >= 775px
				  breakpoint: 450,
				  settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},{
				  // screens greater than >= 1024px
				  breakpoint: 800,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				  }
				}
			]
		});
	});
}

let valueFor = 9

for (let i = 1; i < valueFor; i++) {
	generateCarucel(i)
}