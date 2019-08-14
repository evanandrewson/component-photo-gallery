import Component from './Component.js';

class FilterHorns extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }
    
    
    
    renderHTML() {
        const images = this.props.images;
        const keywords = getUniqueTypes(images);
        const optionsHTML = renderOptionsHTML(keywords);
        return /*html*/`
            <select class="filter">
                <option value="all">All animals</option>
                ${optionsHTML}
            </select>
        `;
    }
}


function getUniqueTypes(images) {
    const keywords = [];
    images.forEach(image => {
        if(!keywords.includes(image.keyword)) {
            keywords.push(image.keyword);
        }
    });
    keywords.sort();
    return keywords;
}

function renderOptionsHTML(keywords) {
    const optionsArray = keywords.map(keyword => {
        return /*html*/`
            <option value="${keyword}">${keyword}</option>
        `;
    });
    return optionsArray.join('');
}
export default FilterHorns;