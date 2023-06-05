### three-vite-tweakpane-shader-template 

# A template to quickly prototype full-screen shaders with UI using Tweakpane, Three.js and Vite 🎉

[Live Demo](https://three-vite-tweakpane-shader-template.netlify.app/)

Define your uniforms 1 time in [state.js](./js/state.js) and use them in both the shader and the UI without needing to update them in your render loop.

Easily add UI for your uniforms in [ui.js](./js/ui.js).

Uses a [single triangle](https://michaldrobot.com/2014/04/01/gcn-execution-patterns-in-full-screen-passes/) to render the shader to the screen for optimization instead of a Quad.

There's a nifty helper function [createMeshWithUniforms](./js/shaderCreationHelpers.js) that handles updating all your uniforms from your state every frame so you don't need to update them in your render loop.




### Setup

```
yarn install
```

### Dev
```
yarn dev
```

### Build

```
yarn build
```
