import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_PATHS = ["/models/board.glb", "/models/logo_l.glb", "/models/logo_r.glb" ];

export default function ThreeDisplay() {

	const containerRef = useRef(null);
	let scrollY = 0;

	//-----------
	const cloneInstance = ( model	) => {
		if ( model.type == "Group"){ 

			let group = new THREE.Object3D();
			group.scale.set( model.scale.x, model.scale.y, model.scale.z );
			group.rotation.set( model.rotation.x, model.rotation.y, model.rotation.z );
			group.position.set( model.position.x, model.position.y, model.position.z );
			
			for ( let i = 0 ; i < model.children.length ; i++ ) {
				let child_item	= model.children[i];
				let cloned_child_item =	cloneInstance( child_item );
				group.add( cloned_child_item );
			};
			return group;
		} else { 
			
			let mesh_instance = new THREE.InstancedMesh( model.geometry , model.material, 10);
			mesh_instance.scale.set( model.scale.x, model.scale.y, model.scale.z );
			mesh_instance.rotation.set( model.rotation.x, model.rotation.y, model.rotation.z );
			mesh_instance.position.set( model.position.x, model.position.y, model.position.z );
			//mesh_instance.receiveShadow = true;
			
			return mesh_instance;
		}

	}

	//---------------
	useEffect(() => {

		const container = containerRef.current;
		if (!container) return undefined;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 1000);
		camera.position.set(-4, 3, 3);
		camera.lookAt(-1,0,0);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: false,
			powerPreference: "high-performance",
		});
		renderer.setClearColor(0x000000, 0);
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.15;
		//renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Add to dom
		container.appendChild(renderer.domElement);
		
		const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
		keyLight.position.set(3, 4, 5);
		scene.add(keyLight);

		const fillLight = new THREE.DirectionalLight(0xffc08a, 1.5);
		fillLight.position.set(-4, 2, 3);
		scene.add(fillLight);

		const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
		scene.add(ambientLight);

		
		const loader = new GLTFLoader();
		let disposed = false;
		let frameId;

		const resize = () => {
            const { width, height } = container.getBoundingClientRect();

			renderer.setSize(width, height, false);
            //camera.aspect = width / height || 1;
            camera.aspect = 1;
			camera.updateProjectionMatrix();
		};

		let LRs = [];
		const objgroup = new THREE.Object3D();
		scene.add(objgroup);

		
		Promise.all(
			MODEL_PATHS.map(
			(path) =>
				new Promise((resolve, reject) => {
					loader.load(path, resolve, undefined, reject);
				})
			)
		)
		.then( ( models ) => {
			if (disposed) return;

			

			models.forEach((gltf) => {

				
				objgroup.add(gltf.scene);
				
				if ( ["L","R"].indexOf( gltf.scene.children[0].name ) > -1 ) {
					
					LRs.push( gltf.scene );
					
					
					let cloneObj = cloneInstance( gltf.scene );
					objgroup.add( cloneObj );
					cloneObj.rotation.x = Math.PI / 2;
					cloneObj.position.z += 0.25
					cloneObj.position.y += 0.45
					cloneObj.oz = cloneObj.position.z;
					cloneObj.tick = 0;
					LRs.push( cloneObj );

					cloneObj = cloneInstance( gltf.scene );
					objgroup.add( cloneObj );
					cloneObj.rotation.z = Math.PI / 2;
					cloneObj.rotation.x = Math.PI / 2;
					cloneObj.position.x -= 0.25
					cloneObj.position.y += 0.45
					cloneObj.ox = cloneObj.position.x;
					cloneObj.tick = 0;

					LRs.push( cloneObj );

					gltf.scene.position.y += 0.70;
					gltf.scene.oy = gltf.scene.position.y; 
					gltf.scene.tick = 0;
					
				} 
				
			});
			console.log( LRs.length );
			
		})
		.catch( ( error ) => {
			console.error("Failed to load hero GLB models:", error);
		});

		const clock = new THREE.Clock();
		const animate = () => {
		
			const elapsed = clock.getElapsedTime();
			let amplitude = 0.02;
			for ( let i = 0 ; i < LRs.length ; i++ ) {
				let obj = LRs[i];
				if ( obj.ox ) {
					obj.position.x = obj.ox + Math.sin( obj.tick ) * amplitude ;
				}
				if ( obj.oy ) {
					obj.position.y = obj.oy + Math.sin( obj.tick  ) * amplitude;
				}
				if ( obj.oz ) {
					obj.position.z = obj.oz + Math.sin( obj.tick ) * amplitude ;
				}
				obj.tick += 0.01
				
			}
			objgroup.rotation.y = scrollY / 300;
				
			renderer.render(scene, camera);
			frameId = requestAnimationFrame(animate);
		};

		resize();
		animate();
		window.addEventListener("resize", resize);

		return () => {
			disposed = true;
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(frameId);

			scene.traverse((object) => {
			if (object.geometry) object.geometry.dispose();
			if (object.material) {
				const materials = Array.isArray(object.material)
				? object.material
				: [object.material];
				materials.forEach((material) => material.dispose());
			}
			});

			renderer.dispose();
			renderer.domElement.remove();
		};
	}, []);


	//------------------------------
	useEffect(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);


	return (
		<div
			ref={containerRef}
			className="h-full w-full"
			aria-hidden="true"
		/>
	);
}
