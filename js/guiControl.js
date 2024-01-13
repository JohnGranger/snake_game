import GUI from "./lil-gui.esm.js";

export let gui = new GUI();
export const gui_controls = {
    speed: 1
};
gui.add(gui_controls, 'speed', 0, 10);