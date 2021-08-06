const reviewsContainer = document.getElementById('reviews');

async function fetchReviews() {
  const res = await fetch('https://recipe-keeper-server.herokuapp.com/reviews');
  const reviews = await res.json();

  reviews.map(review => {
    const markup = `
    <article class="card">
      <p class="text mb-4">
       ${review.review}
      </p>
      <p class="card--author">${review.author}</p>
    </article>
    `;

    reviewsContainer.insertAdjacentHTML('beforeend', markup);
  });
}

fetchReviews();
