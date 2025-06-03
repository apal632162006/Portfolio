<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Awesome WebPage</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav class="navbar">
      <h1 class="logo">🌟 MySite</h1>
      <ul class="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <section id="hero" class="hero-section">
    <div class="hero-content">
      <h2>Welcome to MySite</h2>
      <p>Your one-stop solution for web magic ✨</p>
      <a href="#contact" class="btn">Get in Touch</a>
    </div>
  </section>
  <section id="features" class="features-section">
    <h2>Our Features</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <h3>Speed</h3>
        <p>Lightning-fast performance for all devices.</p>
      </div>
      <div class="feature-card">
        <h3>Design</h3>
        <p>Modern, responsive and accessible UI/UX.</p>
      </div>
      <div class="feature-card">
        <h3>Support</h3>
        <p>We are here 24/7 to help you succeed.</p>
      </div>
    </div>
  </section>
  <section class="cta-section">
    <h2>Join Us Today!</h2>
    <p>Sign up now and start your journey with us.</p>
    <a href="#contact" class="btn">Sign Up</a>
  </section>
  <section class="testimonials-section">
    <h2>What Our Users Say</h2>
    <div class="testimonial-grid">
      <div class="testimonial-card">
        <p>"This site changed my life! Highly recommend."</p>
        <span>- Alex</span>
      </div>
      <div class="testimonial-card">
        <p>"Amazing features and great support team."</p>
        <span>- Jamie</span>
      </div>
      <div class="testimonial-card">
        <p>"A must-try for anyone looking to enhance their web experience."</p>
        <span>- Taylor</span>
      </div>
    </div>
  </section>
  <section class="faq-section">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-item">
      <h3>What is MySite?</h3>
      <p>MySite is a platform that offers various web solutions to enhance your online presence.</p>
    </div>
    <div class="faq-item">
      <h3>How can I contact support?</h3>
      <p>You can reach our support team via the contact form below or through our email support.</p>
    </div>
    <div class="faq-item">
      <h3>Is there a mobile app available?</h3>
      <p>Yes, we have a mobile app available for both iOS and Android devices.</p>
    </div>
  </section>
  <section class="newsletter-section">
    <h2>Subscribe to Our Newsletter</h2>
    <p>Stay updated with the latest news and offers.</p>
    <form id="newsletter-form">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  </section>
  <section class="blog-section">
    <h2>Latest Blog Posts</h2>
    <div class="blog-posts">
      <article class="blog-post">
        <h3>Understanding Web Development</h3>
        <p>Web development is a broad field...</p>
      </article>
      <article class="blog-post">
        <h3>10 Tips for Effective SEO</h3>
        <p>SEO is crucial for online visibility...</p>
      </article>
      <article class="blog-post">
        <h3>How to Choose the Right Hosting</h3>
        <p>Choosing the right hosting provider is essential...</p>
      </article>
    </div>
  </section>
  <footer>
    <p>&copy; 2023 MySite. All rights reserved.</p>
  </footer>

  <!-- Modal HTML -->
  <div id="modal-overlay" class="modal-overlay"></div>
  <div id="signin-modal" class="modal">
    <div class="modal-content">
      <span id="closeSignin" class="close">&times;</span>
      <h2>Sign In</h2>
      <form id="signin-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  </div>
  <div id="signup-modal" class="modal">
    <div class="modal-content">
      <span id="closeSignup" class="close">&times;</span>
      <h2>Sign Up</h2>
      <form id="signup-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>