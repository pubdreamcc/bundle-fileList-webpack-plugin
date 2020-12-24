import func from './a';

// 引入样式文件
import './index.css';

const sun = func(1, 2);
console.log('ha');

const div = document.getElementById('root');

div.innerHTML = sun;
