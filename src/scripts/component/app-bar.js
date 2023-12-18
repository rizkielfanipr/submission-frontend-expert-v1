class AppBar extends HTMLElement {
    constructor() {
      super()
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <a href="#main-content" class="skip-link">SKIP TO CONTENT</a>
      <div class="menu-mobile">
          <div class="toggle-menu" id="toggle-menu" aria-label="navigation-menu"><a href="#">&#9776;</a></div>
          <div class="text-logo-mobile">MaemYuk!</div>
          <div class="text-logo-mobile">&nbsp;</div>
        </div>
  
        <nav id="drawer" class="nav-mobile">
          <ul class="nav-list-mobile">
            <li class="nav-item-mobile"><a href="">Home</a></li>
            <li class="nav-item-mobile"><a href="#">Favorite</a></li>
            <li class="nav-item-mobile"><a href="https://www.linkedin.com/in/rizki-elfani-prasetya-99750b235" target="_blank">About Us</a></li>
          </ul>
        </nav>
  
      <nav class="app-bar">
          <h4 class="app-bar-icon">MaemYuk!</h4>
          <ul class="nav-list">
              <li class="nav-items"><a href="">Home</a></li>
              <li class="nav-items"><a href="#">Favorites</a></li>
              <li class="nav-items"><a href="https://www.linkedin.com/in/rizki-elfani-prasetya-99750b235" target="_blank">About Us</a></li>
          </ul>
      </nav>
          `
    }
  }
  
  customElements.define('app-bar', AppBar);