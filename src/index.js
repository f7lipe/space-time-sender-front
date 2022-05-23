import { createRoot } from  "react-dom/client"

import './css/reset.css';
import './css/style.css';
import App from './App';

const container = document.querySelector('.root')
const root = createRoot(container)
root.render(<App/>);