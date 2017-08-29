/**
 * @author mrdoob / http://mrdoob.com/
 */

var APP = {
	Player: function (updateCameraFn) {
		var loader = new THREE.ObjectLoader();
		var camera, scene, renderer;

		var controls, effect;

		this.dom = document.createElement('div');

		this.width = 500;
		this.height = 500;

		this.updateCamera = updateCameraFn;

		this.load = function (json) {
			renderer = new THREE.WebGLRenderer( { antialias: true });
			renderer.setClearColor(0x000000);
			renderer.setPixelRatio(window.devicePixelRatio);

			if (json.project.gammaInput) renderer.gammaInput = true;
			if (json.project.gammaOutput) renderer.gammaOutput = true;

			if (json.project.shadows) {
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;
			}

			this.dom.appendChild(renderer.domElement);

			this.setScene(loader.parse(json.scene));
			this.setCamera(loader.parse(json.camera));
		};

		this.setCamera = function (value) {
			camera = value;
			this.updateCamera(camera);
		};

		this.setScene = function (value) {
			scene = value;
		};

		this.getScene = function () {
			return scene;
		};

		this.setSize = function (width, height) {
			this.width = width;
			this.height = height;

			if (camera) {
				this.updateCamera(camera);
			}

			if (renderer) {
				renderer.setSize(width, height);
			}
		};


		var prevTime, request;

		function animate(time) {
			request = requestAnimationFrame(animate);
			TWEEN.update(time);
			renderer.render(scene, camera);
			prevTime = time;
		}

		this.play = function () {
			request = requestAnimationFrame(animate);
			prevTime = performance.now();
		};

		this.stop = function () {
			cancelAnimationFrame(request);
		};

		this.dispose = function () {
			while (this.dom.children.length) {
				this.dom.removeChild(this.dom.firstChild);
			}

			renderer.dispose();

			camera = undefined;
			scene = undefined;
			renderer = undefined;
		};
	}

};
