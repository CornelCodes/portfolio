import './assets/css/main.css'

//imports
// Importing CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';  // Assuming custom styles are in an 'assets' folder
import './assets/css/responsive.css';
// import './assets/css/jquery.mCustomScrollbar.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

// Importing Google Fonts (This is usually done in `index.html` or `main.tsx`)
const link = document.createElement('link');
link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// Importing JavaScript libraries
import jQuery from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './assets/js/jquery.mCustomScrollbar.concat.min.js';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
