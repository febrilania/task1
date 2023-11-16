class Testimonial {
  constructor(author, content, image) {
    this.author = author;
    this.content = content;
    this.image = image;
  }
  html() {
    return `<div class="testimonial">
      <img style="width: 100%; height: 70%" src="${this.image}" alt="" />
      <q>${this.content}</q>
      <h4>- ${this.author}</h4>
    </div>`;
  }
}
const testimonial1 = new Testimonial(
  "Abing",
  "wah, wagu men!!!",
  "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600"
);

const testimonial2 = new Testimonial(
  "Diaz",
  "waw, biasa bae!!",
  "https://images.pexels.com/photos/701773/pexels-photo-701773.jpeg?auto=compress&cs=tinysrgb&w=600"
);

const testimonial3 = new Testimonial(
  "Reno",
  "hmmmm, hebat sih!!",
  "https://images.pexels.com/photos/3651674/pexels-photo-3651674.jpeg?auto=compress&cs=tinysrgb&w=600"
);
const testimonial4 = new Testimonial(
  "marlina",
  "hahahaha",
  "https://images.pexels.com/photos/5609026/pexels-photo-5609026.jpeg?auto=compress&cs=tinysrgb&w=600"
);

const testimonials = [testimonial1, testimonial2, testimonial3, testimonial4];

let testimonialHtml = "";

for (let index = 0; index < testimonials.length; index++) {
  testimonialHtml += testimonials[index].html();
}

document.getElementById("testimonials").innerHTML = testimonialHtml;
