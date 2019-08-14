import Component from './Component.js';
import HornItem from './HornItem.js';

class ImageList extends Component {
    onRender(dom) {
        const imageList = this.props.images;
        imageList.forEach(image => {
            const props = { image: image };
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