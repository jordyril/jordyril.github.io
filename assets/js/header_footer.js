// alert(1)

class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="site-header">
        <nav>
            <ul>
                <li><a href="assets/pages/cv.html">CV</a></li>
                <li><a href="assets/pages/research.html">Research</a></li>
                <li><a href="assets/pages/links.html">Links</a></li>
                <li><a href="assets/pages/contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

        `
    }
}

customElements.define("my-header", myHeader)
