class MainContent extends HTMLElement {
    constructor() {
      super()
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <main id="main-content">
      <section class="content-title">
          <h1>Rekomendasi Tempat Makan Terfavorit</h1>
          <div class="card"></div>
      </section>
  </main>

          `
    }
  }
  
  customElements.define('main-content', MainContent);