import Component from './Component.js';
import Header from './Header.js';
import images from '../../assets/images.js';
import ImageList from './ImageList.js';

class App extends Component {
    onRender(dom) {
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = { images: images };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);
    }
    
    
    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->

                <main>
                    <section class="options-section"></section>
                    <section class="list-section"></section>
                </main>
            </div>
        `;
    }
}

export default App;