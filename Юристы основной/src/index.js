// Jquery

// import 'jquery/dist/jquery.js'

// Bootstrap

// import 'bootstrap/dist/js/bootstrap.min.js'


// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./assets/img/svg/', true, /\.svg$/));