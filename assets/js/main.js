// HTML Loader
var ids = $(".load").map(function() {
  return $(this).attr("id");
});

for (var i = 0; i < ids.length; i++) {
  const id = ids[i];
  $.get(id + ".html", function(data) {
    $("#" + id).replaceWith(data);
  });
}

// Anim Down
const animDown = document.querySelectorAll(".anim-down");

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = `none`;
    }
  });
});
animDown.forEach(image => {
  observer.observe(image);
});

// Anim Right
const animRight = document.querySelectorAll(".anim-right");

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim2 2s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = `none`;
    }
  });
});
animRight.forEach(image => {
  observer.observe(image);
});

// Anim Left
const animLeft = document.querySelectorAll(".anim-left");

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim3 1s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = `none`;
    }
  });
});
animLeft.forEach(image => {
  observer.observe(image);
});
