import Component from './Component.js';

class HornItem extends Component {
    renderHTML() {
        const image = this.props.image;
        return /*html*/`
        <li>
           <h2>${image.title}</h2>
           <div class="image-container">
               <img src="${image.url}" alt="${image.description}" title="${image.description}">
           </div>
           <p>Number of Horns: ${image.horns}</p>
       </li>
        `;
    }
}

export default HornItem;