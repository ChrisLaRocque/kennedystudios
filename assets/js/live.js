const session = document.querySelectorAll('session');

for (var i = 0; i < session.length; i++){
	var id = session[i].id;
	var title = session[i].title;
	var tube = session[i].dataset.tube;
	var name = session[i].dataset.name;

	const template = `
	<div class="col-xl-6 col-12 vid-img ` +  id +`-cover anim d-flex justify-content-center" data-delay=".75s" title="` + title + `">
		<i class="fas fa-play-circle align-self-center"></i>
		<h2 class="align-self-end">` + name + `</h2>
		<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/` + tube + `?rel=0"
				allowfullscreen></iframe>
		</div>
	</div>
	`;
	
	// select the element that will be replaced
	var el = document.querySelector('session');

	// replace el with newEL
	el.replaceWith(template)
};
