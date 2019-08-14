import HornItem from '../src/components/HornItem.js';

const test = QUnit.test;

QUnit.module('render horn item');

test('test name', assert => {
    // arrange
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };
    const expected = `
    <li>
       <h2>UniWhal</h2>
       <div class="image-container">
           <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns" title="A unicorn and a narwhal nuzzling their horns">
       </div>
       <p>Number of Horns: ${image.horns}</p>
   </li>
    `;
    
    // act
    const props = { image: image };
    const hornItem = new HornItem(props);
    const html = hornItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});