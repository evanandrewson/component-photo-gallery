import Component from './Component.js';
import Header from './Header.js';

class App extends Component {
    onRender(dom) {
        const header = new Header;
        const headerDOM = header.renderDom;
        dom.prepend(headerDOM);
    }
    
    
    
    renderHTML() {
        return /*html*/`
            
        `;
    }
}

export default App;