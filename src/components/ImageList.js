import Component from './Component.js';
import HornItem from './HornItem.js';
import images from '../../assets/images.js';

class ImageList extends Component {
    onRender(dom) {
        const images = this.props.images;

        images.forEach(image => {
            const props = { images: images };
            const hornItem = new HornItem(props);
            const hornItemDOM = hornItem.renderDOM();
            dom.appendChild(hornItemDOM);
        });
    }
    
    renderHTML() {
        return /*html*/`
            <ul class="horns"></ul>
        `;
    }
}

export default ImageList;