import { params } from './state.js';
import { Pane } from 'tweakpane';

export const initUI = () => {
    const pane = new Pane();
    const f1 = pane.addFolder({
        title: 'Shader1',
    });

    f1.addInput(params, 'speed', {
        min: -2.0,
        max: 2.0,
    });

    f1.addInput(params, 'color', {
        color: {type: 'float'},
    });

    f1.addInput(params, 'scale', {
        min: -2.0,
        max: 2,
    });
    
    f1.addInput(params, 'offset', {
        min: .01,
        max: .2,
    });
}