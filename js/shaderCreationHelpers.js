import { BackSide, DoubleSide, Mesh, ShaderMaterial } from "three";

export function createMeshWithUniforms(geometry, material, uniformCallbackFunc = ()=> ({})) {
    let mesh = new Mesh(geometry, material);
    mesh.onBeforeRender = (renderer, scene, camera,
        geometry, material, group) => {
        let uniformsToUpdate = uniformCallbackFunc();
        if (!(typeof uniformsToUpdate === "object")) {
            throw "createMeshWithUniforms takes, (geo, material, uniformCallbackFunc) the uniformCallbackFunc must be a function that returns a dictionary of uniforms to update";
        }

        for (const [uniform, value] of Object.entries(uniformsToUpdate)) {
            material.uniforms[uniform].value = value;
        }
    }
    return mesh;
}

// could use a scale parameter
export function makeShaderMaterial(vertexShader, fragmentShader, baseUniforms) {
    let uniforms = {};
    for (const [uniform, value] of Object.entries(baseUniforms)) {
        uniforms[uniform] = { value };
    }
    
    const material = new ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: false,
        side: DoubleSide,
    });
    // material.extensions.fragDepth = false;
    return material;
}