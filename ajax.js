//penggabungan promises dan ajax
const promise = new Promise((resolve, rejected) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/d92dfe4c08abab30bcde", true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      rejected();
    }
  };
  xhr.onerror = () => {
    console.log("network error");
  };
  xhr.send();
});

function html(item) {
  return `<div class="testimonial">
  <img style="width: 100%; height: 70%" src="${item.image}" alt="" />
   <q>${item.content}</q>
   <h4>- ${item.author}</h4>
   <h4>${item.rating} <i class="fa-solid fa-star"></i></h4>
 </div>`;
}

async function allTestimonial() {
  let testimonialHtml = "";
  const testimonialData = await promise;
  testimonialData.forEach((item) => {
    testimonialHtml += `<div class="testimonial">
    <img style="width: 100%; height: 70%" src="${item.image}" alt="" />
     <q>${item.content}</q>
     <h4>- ${item.author}</h4>
     <h4>${item.rating} <i class="fa-solid fa-star"></i></h4>
   </div>`;
  });
  document.getElementById("testimonials").innerHTML = testimonialHtml;
}
allTestimonial();

async function filterTestimonial(rating) {
  let testimonialHtml = "";
  const testimonialData = await promise;
  const testimonialFiltered = testimonialData.filter((item) => {
    return item.rating === rating;
  });
  if (testimonialFiltered.length === 0) {
    testimonialHtml = `<h3>Data Not Found</h3>`;
  } else {
    testimonialFiltered.forEach((item) => {
      testimonialHtml += `<div class="testimonial">
                  <img style="width: 100%; height: 70%" src="${item.image}" alt="" />
                   <q>${item.content}</q>
                   <h4>- ${item.author}</h4>
                   <h4>${item.rating} <i class="fa-solid fa-star"></i></h4>
                 </div>`;
    });
  }
  document.getElementById("testimonials").innerHTML = testimonialHtml;
}
