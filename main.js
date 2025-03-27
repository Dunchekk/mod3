import * as THREE from 'https://cdn.jsdelivr.net/npm/three@v0.174.0/build/three.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



 

// ACTIONS 


// -- screens
let main_screen = document.getElementById('main_screen')
let add_main_screen1 = document.getElementById('add_main_screen1')



// -- load and reload scroll
window.onload = function() {
    window.scrollTo(0, 0);
};
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};


// -- raycaster click

const raycaster1 = new THREE.Raycaster();
const pointer1 = new THREE.Vector2();
var subtext1 = document.getElementById('subtext1')
var subtext2 = document.getElementById('subtext2')

var info_block1 = document.getElementById('info_block1') 
var info_block2 = document.getElementById('info_block2') 
var info_block3 = document.getElementById('info_block3') 
var info_block4 = document.getElementById('info_block4') 


    window.addEventListener('click', event => {

        pointer1.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        pointer1.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        raycaster1.setFromCamera( pointer1, camera1 );
        const intersects1 = raycaster1.intersectObjects( scene1.children );

        if (intersects1.length && (renderer1.domElement.style.display == 'block' ||  renderer2.domElement.style.display == 'block')> 0) {

            console.log('true')

            renderer1.domElement.style.display = 'none' 
            renderer2.domElement.style.display = 'none' 
            renderer3.domElement.style.display = 'block' 
            renderer4.domElement.style.display = 'none' 
            renderer5.domElement.style.display = 'none' 
            renderer6.domElement.style.display = 'none' 

            subtext1.style.display = 'none'
            subtext2.style.display = 'none'

            info_block1.style.display = 'block'
            add_main_screen1.style.display = 'block'
        }
    })

// -- swich between two sensors

var next_button1 = document.getElementById('next_button1')
var previous_button1 = document.getElementById('previous_button1')

    next_button1.addEventListener('click', function() {

        console.log('true1')

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'block' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'none' 

        document.getElementById('subtext1').innerHTML = 'item/ sensor<br>    number/ 002<br>    station connection/ 1<br>    release/ 31/01/2025'

    })

    previous_button1.addEventListener('click', function() {

        console.log('true2')

        renderer1.domElement.style.display = 'block' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'none' 

        document.getElementById('subtext1').innerHTML = 'item/ station<br>    number/ 001<br>    station connection/ 1<br>    release/ 31/01/2025'
    })



// -- swich between sencor parts

var next_IB1 = document.getElementById('next_IB1')
var previous_IB1 =document.getElementById('previous_IB1')

var next_IB2 = document.getElementById('next_IB2')
var previous_IB2 =document.getElementById('previous_IB2')

var next_IB3 = document.getElementById('next_IB3')
var previous_IB3 =document.getElementById('previous_IB3')

var next_IB4 = document.getElementById('next_IB4')
var previous_IB4 =document.getElementById('previous_IB4')

    next_IB1.addEventListener ('click', function(){

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'block' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'none' 

        info_block1.style.display = 'none'
        info_block2.style.display = 'block'
        info_block3.style.display = 'none'
        info_block4.style.display = 'none'

    })
    previous_IB2.addEventListener ('click', function(){

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'block' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'none' 

        info_block1.style.display = 'block'
        info_block2.style.display = 'none'
        info_block3.style.display = 'none'
        info_block4.style.display = 'none'

    })

    next_IB2.addEventListener ('click', function(){

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'block' 
        renderer6.domElement.style.display = 'none' 

        info_block1.style.display = 'none'
        info_block2.style.display = 'none'
        info_block3.style.display = 'block'
        info_block4.style.display = 'none'

    })

    previous_IB3.addEventListener ('click', function(){

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'block' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'none' 

        info_block1.style.display = 'none'
        info_block2.style.display = 'block'
        info_block3.style.display = 'none'
        info_block4.style.display = 'none'

    })

    next_IB3.addEventListener ('click', function(){

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'block' 

        info_block1.style.display = 'none'
        info_block2.style.display = 'none'
        info_block3.style.display = 'none'
        info_block4.style.display = 'block'

    })

    previous_IB4.addEventListener ('click', function(){

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'block' 
        renderer6.domElement.style.display = 'none' 

        info_block1.style.display = 'none'
        info_block2.style.display = 'none'
        info_block3.style.display = 'block'
        info_block4.style.display = 'none'

    })

    next_IB4.addEventListener ('click', function(){

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'block' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'none' 

        info_block1.style.display = 'block'
        info_block2.style.display = 'none'
        info_block3.style.display = 'none'
        info_block4.style.display = 'none'

    })

    previous_IB1.addEventListener ('click', function(){

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'block' 

        info_block1.style.display = 'none'
        info_block2.style.display = 'none'
        info_block3.style.display = 'none'
        info_block4.style.display = 'block'

    })


// -- swich to main

var main_button = document.getElementById('main_button')

    main_button.addEventListener('click', function() {

        console.log('true2')

        renderer1.domElement.style.display = 'block' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'none' 

        document.getElementById('subtext1').innerHTML = 'item/ station<br>    number/ 001<br>    station connection/ 1<br>    release/ 31/01/2025'

        document.getElementById('add_main_screen1').style.display = 'none'
        document.getElementById('main_screen').style.display = 'block'
        document.getElementById('main_screen').style.display = 'block'
            subtext1.style.display = 'block'
            subtext2.style.display = 'block'
        add_main_screen1.style.display = 'none'

        info_block1.style.display = 'none'
        info_block2.style.display = 'none'
        info_block3.style.display = 'none'
        info_block4.style.display = 'none'

        document.getElementById('about_block').style.display = 'none'
        document.getElementById('author_block').style.display = 'none'
        document.getElementById('tech_block').style.display = 'none'
            
        window.scrollTo(0, 0);
        document.getElementById('body').style.overflowY = 'hidden'

        document.getElementById('main_button').innerHTML = '[main]'
        document.getElementById('about_button').innerHTML = 'about'
        document.getElementById('author_button').innerHTML = 'author'
        document.getElementById('tech_button').innerHTML = 'tech'


    })

// -- swich to about

var about_button = document.getElementById('about_button')
var previous_IB5 = document.getElementById('previous_IB5')
var next_IB5 = document.getElementById('next_IB5')

    about_button.addEventListener('click', function() {

        console.log('true2')

        renderer1.domElement.style.display = 'none' 
        renderer2.domElement.style.display = 'none' 
        renderer3.domElement.style.display = 'none' 
        renderer4.domElement.style.display = 'none' 
        renderer5.domElement.style.display = 'none' 
        renderer6.domElement.style.display = 'none' 

        document.getElementById('add_main_screen1').style.display = 'none'
        document.getElementById('main_screen').style.display = 'none'
        document.getElementById('main_screen').style.display = 'none'
            subtext1.style.display = 'none'
            subtext2.style.display = 'none'
        add_main_screen1.style.display = 'none'

        info_block1.style.display = 'none'
        info_block2.style.display = 'none'
        info_block3.style.display = 'none'
        info_block4.style.display = 'none'

        document.getElementById('about_block').style.display = 'block'
        document.getElementById('author_block').style.display = 'none'
        document.getElementById('tech_block').style.display = 'none'
    
        window.scrollTo(0, 0);
        document.getElementById('body').style.overflowY = 'visible'
    
        document.getElementById('main_button').innerHTML = 'main'
        document.getElementById('about_button').innerHTML = '[about]'
        document.getElementById('author_button').innerHTML = 'author'
        document.getElementById('tech_button').innerHTML = 'tech'
    })

    previous_IB5.addEventListener('click', function() {
        main_button.dispatchEvent(new Event('click'));
    })

    next_IB5.addEventListener('click', function() {
        author_button.dispatchEvent(new Event('click'));
    })


// -- swich to author

var author_button = document.getElementById('author_button')
var previous_IB6 = document.getElementById('previous_IB6')
var next_IB6 = document.getElementById('next_IB6')

author_button.addEventListener('click', function() {

    console.log('true2')

    renderer1.domElement.style.display = 'none' 
    renderer2.domElement.style.display = 'none' 
    renderer3.domElement.style.display = 'none' 
    renderer4.domElement.style.display = 'none' 
    renderer5.domElement.style.display = 'none' 
    renderer6.domElement.style.display = 'none' 

    document.getElementById('add_main_screen1').style.display = 'none'
    document.getElementById('main_screen').style.display = 'none'
    document.getElementById('main_screen').style.display = 'none'
        subtext1.style.display = 'none'
        subtext2.style.display = 'none'
    add_main_screen1.style.display = 'none'

    info_block1.style.display = 'none'
    info_block2.style.display = 'none'
    info_block3.style.display = 'none'
    info_block4.style.display = 'none'

    document.getElementById('about_block').style.display = 'none'
    document.getElementById('author_block').style.display = 'block'
    document.getElementById('tech_block').style.display = 'none'

    window.scrollTo(0, 0);
    document.getElementById('body').style.overflowY = 'visible'

    document.getElementById('main_button').innerHTML = 'main'
    document.getElementById('about_button').innerHTML = 'about'
    document.getElementById('author_button').innerHTML = '[author]'
    document.getElementById('tech_button').innerHTML = 'tech'

})

previous_IB6.addEventListener('click', function() {
    about_button.dispatchEvent(new Event('click'));

})

next_IB6.addEventListener('click', function() {
    tech_button.dispatchEvent(new Event('click'));
})

// -- swich to tech (and actions on tech)

var tech_button = document.getElementById('tech_button')
var previous_IB7 = document.getElementById('previous_IB7')
var next_IB7 = document.getElementById('next_IB7')



var week = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"]
var mounths = ["jan", "feb", "march", "apr", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"]

var live_strings = ["curiosity is a key","concentration gives results","abstracting is sometimes useful","proper analysis leads to a good solution","research takes time","it's useful to be able to look from a different angle","isn't it too noisy here?","you can listen even to the silence","look around you","how was your day?","everyone is so annoying, right?","the ability not to listen on time is also necessary","cover your ears","it's never too late to buy earplugs","interest wins","it's okey to change the way you look at things"]
var life_string = getLiveString()

var img_paths = ["./imgs/IMG1.png","./imgs/IMG2.png","./imgs/IMG3.png","./imgs/IMG4.png","./imgs/IMG5.png","./imgs/IMG6.png","./imgs/IMG7.png","./imgs/IMG8.png","./imgs/IMG9.png","./imgs/IMG10.png","./imgs/IMG11.png",]



function getDayName (j) {
    return week[j];
}
function getMounthyName (j) {
    return mounths[j];
}
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getLiveString() {

    var j = getRandomInRange(0, 14);
    return life_string = live_strings[j]

}

function changeImg() {
    var j = getRandomInRange(0, 10)
    return img_paths[j]
}

function changeTime() {

    var date = new Date()

    var year = date.getFullYear();
    var mounth = date.getMonth();
    var day = date.getDay();
    var dateNum = date.getDate();
    var hours = date.getHours()
    var minutes = date.getMinutes();
    var sec = date.getSeconds();
    var milisec = date.getMilliseconds();
    var UTShours = date.getUTCHours();
    var UTSminutes = date.getUTCMinutes();
    var UTSsec = date.getUTCSeconds();
    var UTSmilisec = date.getUTCMilliseconds();

    document.getElementById('run_tech1').innerHTML = getDayName(day) + ", " + dateNum + " " + getMounthyName(mounth) + ", " + year;
    document.getElementById('run_tech2').innerHTML = hours + ":" + minutes + ":" + sec + " ." + milisec;
    document.getElementById('run_tech3').innerHTML = UTShours + ":" + UTSminutes + ":" + UTSsec + " ." + UTSmilisec;

}


tech_button.addEventListener('click', function() {

    console.log('true2')

    renderer1.domElement.style.display = 'none' 
    renderer2.domElement.style.display = 'none' 
    renderer3.domElement.style.display = 'none' 
    renderer4.domElement.style.display = 'none' 
    renderer5.domElement.style.display = 'none' 
    renderer6.domElement.style.display = 'none' 

    document.getElementById('add_main_screen1').style.display = 'none'
    document.getElementById('main_screen').style.display = 'none'
    document.getElementById('main_screen').style.display = 'none'
        subtext1.style.display = 'none'
        subtext2.style.display = 'none'
    add_main_screen1.style.display = 'none'

    info_block1.style.display = 'none'
    info_block2.style.display = 'none'
    info_block3.style.display = 'none'
    info_block4.style.display = 'none'

    document.getElementById('about_block').style.display = 'none'
    document.getElementById('author_block').style.display = 'none'
    document.getElementById('tech_block').style.display = 'block'

    window.scrollTo(0, 0);
    document.getElementById('body').style.overflowY = 'hidden'

    document.getElementById('main_button').innerHTML = 'main'
    document.getElementById('about_button').innerHTML = 'about'
    document.getElementById('author_button').innerHTML = 'author'
    document.getElementById('tech_button').innerHTML = '[tech]'

    document.getElementById('run_tech4').innerHTML = life_string 

    document.getElementById('tech_img').src = changeImg()
})

    setInterval(changeTime, 100)

previous_IB7.addEventListener('click', function() {
    author_button.dispatchEvent(new Event('click'));
})

next_IB7.addEventListener('click', function() {
    main_button.dispatchEvent(new Event('click'));
})





// THREE JS PART

const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();
const scene4 = new THREE.Scene();
const scene5 = new THREE.Scene();
const scene6 = new THREE.Scene();

const loader1 = new GLTFLoader()
const loader2 = new GLTFLoader()
const loader3 = new GLTFLoader()
const loader4 = new GLTFLoader()
const loader5 = new GLTFLoader()
const loader6 = new GLTFLoader()


var sizes = {

    width1: window.innerWidth * 1,
    width2: window.innerWidth * 1,
    width3: window.innerWidth * 1,
    width4: window.innerWidth * 1,
    width5: window.innerWidth * 1,
    width6: window.innerWidth * 1,
    height1: window.innerHeight * 0.85,
    height2: window.innerHeight * 0.85,
    height3: window.innerHeight * 1,
    height4: window.innerHeight * 1,
    height5: window.innerHeight * 1,
    height6: window.innerHeight * 1

    };

    window.addEventListener('resize', () =>  {

            // Update sizes
            sizes.width1 = window.innerWidth * 1;
            sizes.width2 = window.innerWidth * 1;
            sizes.width3 = window.innerWidth * 1;
            sizes.width4 = window.innerWidth * 1;
            sizes.width5 = window.innerWidth * 1;
            sizes.width6 = window.innerWidth * 1;

            sizes.height1 = window.innerHeight * 0.85;
            sizes.height2 = window.innerHeight * 0.85;
            sizes.height3 = window.innerHeight * 1;
            sizes.height4 = window.innerHeight * 1;
            sizes.height5 = window.innerHeight * 1;
            sizes.height6 = window.innerHeight * 1;

            // cameras
            camera1.aspect = sizes.width1 /  sizes.height1
            camera1.updateProjectionMatrix()      

            camera2.aspect = sizes.width2 / sizes.height2
            camera2.updateProjectionMatrix()

            camera3.aspect = sizes.width3 / sizes.height3
            camera3.updateProjectionMatrix()

            camera4.aspect = sizes.width4 / sizes.height4
            camera4.updateProjectionMatrix()

            camera5.aspect = sizes.width5 / sizes.height5
            camera5.updateProjectionMatrix()

            camera6.aspect = sizes.width6 / sizes.height6
            camera6.updateProjectionMatrix()

//!!!!      //renderer
            renderer1.setSize(sizes.width1, sizes.height1)
            renderer1.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            renderer2.setSize(sizes.width2, sizes.height2)
            renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            
            renderer3.setSize(sizes.width3, sizes.height3)
            renderer3.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            renderer4.setSize(sizes.width4, sizes.height4)
            renderer4.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            renderer5.setSize(sizes.width5, sizes.height5)
            renderer5.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            
            renderer6.setSize(sizes.width6, sizes.height6)
            renderer6.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      })    

// -- models path

var paths = {
    "model_cube1" : "./models/cubea1.glb",
    "model_cube2" : "./models/cubea2.glb",
    "model_cube3" : "./models/cubea1.glb",
    "model_bat" : "./models/bat2.glb",
    "model_plat" : "./models/plat2.glb",
    "model_mic" : "./models/mic2.glb",
}


// -- cameras

const camera1 = new THREE.PerspectiveCamera(50, sizes.width1 / sizes.height1, 0.01, 10);
const camera2 = new THREE.PerspectiveCamera(50, sizes.width2 / sizes.height2, 0.01, 10);
const camera3 = new THREE.PerspectiveCamera(28, sizes.width3 / sizes.height3, 0.01, 10);
const camera4 = new THREE.PerspectiveCamera(28, sizes.width4 / sizes.height4, 0.01, 10);
const camera5 = new THREE.PerspectiveCamera(28, sizes.width5 / sizes.height5, 0.01, 10);
const camera6 = new THREE.PerspectiveCamera(28, sizes.width6 / sizes.height6, 0.01, 10);


// -- renderers

const renderer1 = new THREE.WebGLRenderer( { antialias: true } );
renderer1.setSize( sizes.width1, sizes.height1 );

const renderer2 = new THREE.WebGLRenderer( { antialias: true } );
renderer2.setSize( sizes.width2, sizes.height2 );

const renderer3 = new THREE.WebGLRenderer( { antialias: true } );
renderer3.setSize( sizes.width3, sizes.height3 );

const renderer4 = new THREE.WebGLRenderer( { antialias: true } );
renderer4.setSize( sizes.width4, sizes.height4 );

const renderer5 = new THREE.WebGLRenderer( { antialias: true } );
renderer5.setSize( sizes.width5, sizes.height5 );

const renderer6 = new THREE.WebGLRenderer( { antialias: true } );
renderer6.setSize( sizes.width6, sizes.height6 );


// -- create canvases

model_cont1.appendChild(renderer1.domElement).id = 'canvas1';
model_cont2.appendChild(renderer2.domElement).id = 'canvas2';
model_cont3.appendChild(renderer3.domElement).id = 'canvas3';
model_cont4.appendChild(renderer4.domElement).id = 'canvas4';
model_cont5.appendChild(renderer5.domElement).id = 'canvas5';
model_cont6.appendChild(renderer6.domElement).id = 'canvas6';

renderer1.domElement.style.position = 'absolute'
renderer1.domElement.style.top = '0'
renderer1.domElement.style.right = '0'
renderer1.domElement.style.zIndex = '0' 
// renderer1.domElement.style.display = 'none' 

renderer2.domElement.style.position = 'absolute'
renderer2.domElement.style.top = '0'
renderer2.domElement.style.right = '0'
renderer2.domElement.style.zIndex = '1' 
renderer2.domElement.style.display = 'none' 

renderer3.domElement.style.position = 'absolute'
renderer3.domElement.style.top = '-1vw'
renderer3.domElement.style.right = '-20vw'
renderer3.domElement.style.zIndex = '2' 
renderer3.domElement.style.display = 'none' 

renderer4.domElement.style.position = 'absolute'
renderer4.domElement.style.top = '-1vw'
renderer4.domElement.style.right = '-20vw'
renderer4.domElement.style.zIndex = '3'
renderer4.domElement.style.display = 'none' 


renderer5.domElement.style.position = 'absolute'
renderer5.domElement.style.top = '-1vw'
renderer5.domElement.style.right = '-20vw'
renderer5.domElement.style.zIndex = '4'
renderer5.domElement.style.display = 'none' 

renderer6.domElement.style.position = 'absolute'
renderer6.domElement.style.top = '-1vw'
renderer6.domElement.style.right = '-20vw'
renderer6.domElement.style.zIndex = '5' 
renderer6.domElement.style.display = 'none' 






// -- load models + orbit controls



var mixer1;
var Player_anim_IDLE1;

loader1.load( paths.model_cube1, function ( gltf1 ) {

    let model1 = gltf1.scene;


    mixer1 = new THREE.AnimationMixer(model1);
    Player_anim_IDLE1 = gltf1.animations[ 0]
    mixer1.clipAction( Player_anim_IDLE1).play();

    scene1.add( model1 );
	
    model1.rotation.y = 0.6;
    var controls1 = new OrbitControls( camera1  , renderer1.domElement );
    controls1.enableDumping = true;
    controls1.enableZoom = false;


}, undefined, function ( error ) {

	console.error( error );

} );


var mixer2;
var Player_anim_IDLE2;

loader2.load( paths.model_cube2, function ( gltf2 ) {

    let model2 = gltf2.scene;


    mixer2 = new THREE.AnimationMixer(model2);
    Player_anim_IDLE2 = gltf2.animations[ 0]
    mixer2.clipAction( Player_anim_IDLE2).play();

    scene2.add( model2 );
	
    model2.rotation.y = 0.6;
    var controls2 = new OrbitControls( camera2  , renderer2.domElement );
    controls2.enableDumping = true;
    controls2.enableZoom = false;


}, undefined, function ( error ) {

	console.error( error );

} );


var mixer3;
var Player_anim_IDLE3;

loader3.load( paths.model_cube1, function ( gltf3 ) {

    let model3 = gltf3.scene;


    mixer3 = new THREE.AnimationMixer(model3);
    Player_anim_IDLE3 = gltf3.animations[ 0]
    mixer3.clipAction( Player_anim_IDLE3).play();

    scene3.add( model3 );
	
    model3.rotation.y = 0.6;
    var controls3 = new OrbitControls( camera3  , renderer3.domElement );
    controls3.enableDumping = true;
    controls3.enableZoom = false;


}, undefined, function ( error ) {

	console.error( error );

} );

var mixer4;
var Player_anim_IDLE4;

loader4.load( paths.model_bat, function ( gltf4 ) {

    let model4 = gltf4.scene;


    mixer4 = new THREE.AnimationMixer(model4);
    Player_anim_IDLE4 = gltf4.animations[ 0]
    mixer4.clipAction( Player_anim_IDLE4).play();

    scene4.add( model4 );
	
    model4.rotation.y = 0.6;
    var controls4 = new OrbitControls( camera4  , renderer4.domElement );
    controls4.enableDumping = true;
    controls4.enableZoom = false;


}, undefined, function ( error ) {

	console.error( error );

} );

var mixer5;
var Player_anim_IDLE5;

loader5.load( paths.model_plat, function ( gltf5 ) {

    let model5 = gltf5.scene;


    mixer5 = new THREE.AnimationMixer(model5);
    Player_anim_IDLE5 = gltf5.animations[ 0]
    mixer5.clipAction( Player_anim_IDLE5).play();

    scene5.add( model5 );
	
    model5.rotation.y = 0.6;
    var controls5 = new OrbitControls( camera5  , renderer5.domElement );
    controls5.enableDumping = true;
    controls5.enableZoom = false;


}, undefined, function ( error ) {

	console.error( error );

} );

var mixer6;
var Player_anim_IDLE6;

loader6.load( paths.model_mic, function ( gltf6 ) {

    let model6 = gltf6.scene;


    mixer6 = new THREE.AnimationMixer(model6);
    Player_anim_IDLE6 = gltf6.animations[ 0]
    mixer6.clipAction( Player_anim_IDLE6).play();

    scene6.add( model6 );
	
    model6.rotation.y = 0.6;
    var controls6 = new OrbitControls( camera6 , renderer6.domElement );
    controls6.enableDumping = true;
    controls6.enableZoom = false;


}, undefined, function ( error ) {

	console.error( error );

} );

// -- light -- dL1 -- directionalLight1
const dL11 = new THREE.DirectionalLight( 0xffffff, 40 );
dL11.position.x = 0.25;
dL11.position.y = 0.8;
dL11.position.z = 0.35;

const dL12 = new THREE.DirectionalLight( 0xffffff, 20 );
dL12.position.x = -0.25;
dL12.position.y = -0.8;
dL12.position.z = -0.35;

//
const dL21 = new THREE.DirectionalLight( 0xffffff, 40 );
dL21.position.x = 0.25;
dL21.position.y = 0.8;
dL21.position.z = 0.35;

const dL22 = new THREE.DirectionalLight( 0xffffff, 20 );
dL22.position.x = -0.25;
dL22.position.y = -0.8;
dL22.position.z = -0.35;
//
const dL31 = new THREE.DirectionalLight( 0xffffff, 40 );
dL31.position.x = 0.25;
dL31.position.y = 0.8;
dL31.position.z = 0.35;

const dL32 = new THREE.DirectionalLight( 0xffffff, 20 );
dL32.position.x = -0.25;
dL32.position.y = -0.8;
dL32.position.z = -0.35;
//
const dL41 = new THREE.DirectionalLight( 0xffffff, 40 );
dL41.position.x = 0.25;
dL41.position.y = 0.8;
dL41.position.z = 0.35;

const dL42 = new THREE.DirectionalLight( 0xffffff, 20 );
dL42.position.x = -0.25;
dL42.position.y = -0.8;
dL42.position.z = -0.35;
//
const dL51 = new THREE.DirectionalLight( 0xffffff, 40 );
dL51.position.x = 0.25;
dL51.position.y = 0.8;
dL51.position.z = 0.35;

const dL52 = new THREE.DirectionalLight( 0xffffff, 20 );
dL52.position.x = -0.25;
dL52.position.y = -0.8;
dL52.position.z = -0.35;
//
const dL61 = new THREE.DirectionalLight( 0xffffff, 40 );
dL61.position.x = 0.25;
dL61.position.y = 0.8;
dL61.position.z = 0.35;

const dL62 = new THREE.DirectionalLight( 0xffffff, 20 );
dL62.position.x = -0.25;
dL62.position.y = -0.8;
dL62.position.z = -0.35;



scene1.add(dL11)
scene1.add(dL12)
camera1.position.set(0, 0.13, 0.55);

scene2.add(dL21)
scene2.add(dL22)
camera2.position.set(0, 0.13, 0.55);

scene3.add(dL31)
scene3.add(dL32)
camera3.position.set(0, 0.01, 0.55);

scene4.add(dL41)
scene4.add(dL42)
camera4.position.set(0, 0.01, 0.55);

scene5.add(dL51)
scene5.add(dL52)
camera5.position.set(0, 0.01, 0.55);

scene6.add(dL61)
scene6.add(dL62)
camera6.position.set(0, 0.01, 0.55);



// ANIMATION
const clock1 = new THREE.Clock();
const clock2 = new THREE.Clock();
const clock3 = new THREE.Clock();
const clock4 = new THREE.Clock();
const clock5 = new THREE.Clock();
const clock6 = new THREE.Clock();

function animate1() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta1 = clock1.getDelta();
    if (mixer1) mixer1.update( delta1 );
	renderer1.render( scene1, camera1 );
}

renderer1.setAnimationLoop( animate1 );

function animate2() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta2 = clock2.getDelta();
    if (mixer2) mixer2.update( delta2 );
	renderer2.render( scene2, camera2 );
}
renderer2.setAnimationLoop( animate2 );

function animate3() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta3 = clock3.getDelta();
    if (mixer3) mixer3.update( delta3 );
	renderer3.render( scene3, camera3 );
}
renderer3.setAnimationLoop( animate3 );

function animate4() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta4 = clock4.getDelta();
    if (mixer4) mixer4.update( delta4 );
	renderer4.render( scene4, camera4 );
}
renderer4.setAnimationLoop( animate4 );


function animate5() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta5 = clock5.getDelta();
    if (mixer5) mixer5.update( delta5 );
	renderer5.render( scene5, camera5 );
}

renderer5.setAnimationLoop( animate5 );



function animate6() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    var delta6 = clock6.getDelta();
    if (mixer6) mixer6.update( delta6 );
	renderer6.render( scene6, camera6 );
}
renderer6.setAnimationLoop( animate6 );

