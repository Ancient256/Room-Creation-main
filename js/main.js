const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

camera.position.y = 0; //0
camera.position.z = -25; //-25
camera.position.x = 5; // 5

///walls
const bottomWallGeometry = new THREE.BoxGeometry( 30, 1, 15 );
const bottomWallMaterial = new THREE.MeshBasicMaterial( { color: 'rgb(250,217,194)'} );
const bottomWall = new THREE.Mesh( bottomWallGeometry, bottomWallMaterial );
scene.add( bottomWall );

const rightWallGeometry = new THREE.BoxGeometry( 1, 30, 30 );
const rightWallMaterial = new THREE.MeshBasicMaterial( { color: 'rgb(225,198,179)'} );
const rightWall = new THREE.Mesh( rightWallGeometry, rightWallMaterial );
scene.add( rightWall );

const leftWallGeometry = new THREE.BoxGeometry(1,25,30);
const leftWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(225,198,179)'});
const leftWall = new THREE.Mesh(leftWallGeometry,leftWallMaterial);
scene.add(leftWall);

const backWallGeometry = new THREE.PlaneGeometry(30,20);
const backWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(225,198,179)'});
const backWall = new THREE.Mesh(backWallGeometry,backWallMaterial);
scene.add(backWall);

const topWallGeometry = new THREE.BoxGeometry(30,30,1);
const topWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(225,198,179)'});
const topWall = new THREE.Mesh(topWallGeometry,topWallMaterial);
scene.add(topWall);




//drawer
const drawerGeometry = new THREE.BoxGeometry(6,15,5);
const drawerMaterial = new THREE.MeshBasicMaterial({color: 'rgb(158, 158, 152)'});
const drawer = new THREE.Mesh(drawerGeometry,drawerMaterial);
scene.add(drawer);

const drawerHandleGeometry = new THREE.CapsuleGeometry(1,2,1,6);
const drawerHandleMaterial = new THREE.MeshBasicMaterial({color: 'rgb(112, 112, 111)'});
const drawerHandle = new THREE.Mesh(drawerHandleGeometry,drawerHandleMaterial);
scene.add(drawerHandle);

const drawerLineGeometry = new THREE.BoxGeometry(1,14,1);
const drawerLineMaterial = new THREE.MeshBasicMaterial({color:'rgb(201, 201, 193)'});
const drawerLine = new THREE.Mesh(drawerLineGeometry,drawerLineMaterial);
scene.add(drawerLine);

//mat
const matGeometry = new THREE.BoxGeometry(15,1,7);
const matMaterial = new THREE.MeshBasicMaterial({color: 'rgb(148, 38, 38)'});
const mat = new THREE.Mesh(matGeometry,matMaterial);
scene.add(mat);

//bed
const bedGeometry = new THREE.BoxGeometry(14.5,1,7);
const bedMaterial = new THREE.MeshBasicMaterial({color: 'rgb(221,217,207)'});
const bed = new THREE.Mesh(bedGeometry,bedMaterial);
scene.add(bed);

const bedHolderGeometry = new THREE.BoxGeometry(15,5,7);
const bedHolderMaterial = new THREE.MeshBasicMaterial({color: 'rgb(56, 53, 51)'});
const bedHolder = new THREE.Mesh(bedHolderGeometry,bedHolderMaterial);
scene.add(bedHolder);

const bedWallGeometry = new THREE.PlaneGeometry(15,5);
const bedWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(66, 66, 65)'});
const bedWall = new THREE.Mesh(bedWallGeometry,bedWallMaterial);
scene.add(bedWall);

//pillow
const pillowGeometry = new THREE.CylinderGeometry(2,2,10);
const pillowMaterial = new THREE.MeshBasicMaterial({color: 'rgb(229,228,226)'});
const pillow = new THREE.Mesh(pillowGeometry,pillowMaterial);
scene.add(pillow);

//table
const tableGeometry = new THREE.BoxGeometry(10,1,7);
const tableMaterial = new THREE.MeshBasicMaterial({color: 'rgb(229,228,226)'});
const table = new THREE.Mesh(tableGeometry,tableMaterial);
scene.add(table);
const tableStandGeometry = new THREE.BoxGeometry(10,5,1,1,1);
const tableStandMaterial = new THREE.MeshBasicMaterial({color: 'rgb(66, 66, 65)'}); 
const tableStand = new THREE.Mesh(tableStandGeometry,tableStandMaterial);
scene.add(tableStand);

//chair
const chairGeometry = new THREE.BoxGeometry(5,5,3);
const chairMaterial = new THREE.MeshBasicMaterial({color: 'rgb(46, 39, 39)'});
const chair = new THREE.Mesh(chairGeometry,chairMaterial);
scene.add(chair);

//lights
const lightGeometry = new THREE.CylinderGeometry(3,1,3);
const lightMaterial = new THREE.MeshBasicMaterial({color: 'rgb(247, 241, 146)'});
const light = new THREE.Mesh(lightGeometry,lightMaterial);
scene.add(light);

//big Window
const bigWindowGeometry = new THREE.BoxGeometry(1,10,5);
const bigWindowMaterial = new THREE.MeshBasicMaterial({color: 'rgb(66, 66, 65)'});
const bigWindow = new THREE.Mesh(bigWindowGeometry,bigWindowMaterial);
scene.add(bigWindow);

const bigWindowInnerGeometry = new THREE.BoxGeometry(1,9,4);
const bigWindowInnerMaterial = new THREE.MeshBasicMaterial({color: 'rgb(129,247,241)'});
const bigWindowInner = new THREE.Mesh(bigWindowInnerGeometry,bigWindowInnerMaterial);
scene.add(bigWindowInner);


///Insert Code here



function animate() {
	requestAnimationFrame( animate );
    bottomWall.position.x = 0;
    bottomWall.position.y = -10;
    bottomWall.position.z = -38;

    rightWall.position.x = 15;
    rightWall.position.y = 0;
    rightWall.position.z = -45;
    
    leftWall.position.x = -15;
    leftWall.position.y = 0;
    leftWall.position.z = -35;
    leftWall.rotation.y = 245;
   
    backWall.position.x = 0;
    backWall.position.y = 0;
    backWall.position.z = -45;
    
    topWall.position.x = 2.5;
    topWall.position.y = 12;
    topWall.position.z = -45;
    topWall.rotation.x = 1.6;

  

    

    // drawer
    drawer.position.x = -11;
    drawer.position.y = -2;
    drawer.position.z = -40;
    drawerHandle.position.x = -8.5;
    drawerHandle.position.y = -2;
    drawerHandle.position.z = -40;

    drawerLine.position.x  = -8.5;
    drawerLine.position.y  = -2;
    drawerLine.position.z  = -40;


    //mat
    mat.position.x = 1;
    mat.position.y = -9.5;
    mat.position.z = -40;

    //bed
    bed.position.x = 8;
    bed.position.y = -6;
    bed.position.z = -40;

    bedHolder.position.x = 8;
    bedHolder.position.y = -9;
    bedHolder.position.z = -40;

    bedWall.position.x = 8;
    bedWall.position.y = -5;
    bedWall.position.z = -40;

    //pillow
    pillow.position.x= 7;
    pillow.position.y= -5;
    pillow.position.z= -40;
  
    pillow.rotation.x = 7.5;
    pillow.rotation.y = 6.2;
    pillow.rotation.z = 4.6;
 
    //table
    table.position.x= -10;
    table.position.y= -5;
    table.position.z= -33;
    
    tableStand.position.x= -10.1;
    tableStand.position.y= -7.1;
    tableStand.position.z= -36;

    //chair
    chair.position.x = -4;
    chair.position.y = -8;
    chair.position.z = -32;

    //light
    light.position.x = 1;
    light.position.y = 12;
    light.position.z = -40;

    //big window
    bigWindow.position.x = 13.5;
    bigWindow.position.y = 0;
    bigWindow.position.z = -31;

    bigWindowInner.position.x = 13;
    bigWindowInner.position.y = 0;
    bigWindowInner.position.z = -30.8;

    renderer.render( scene, camera );
}

animate();


