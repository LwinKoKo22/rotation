function handlerOrientation(e){
    console.log(e.alpha);
    let alpha = e.alpha;
    // let beta = e.beta;
    // let gamma = e.gamma;

    let cube = document.querySelector('.face');
    if (alpha <= 10) {
        cube.style.transform = 'rotateZ(' + 0 + 'turn)';
    } else {
        cube.style.transform = 'rotateZ(' + alpha + 'turn )';
    }
   
}

async function requestDeviceOrientation(){
    if(typeof DeviceOrientationEvent != 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function'){
        try {
            const permissionState = await DeviceOrientationEvent.requestPermission();
            if(permissionState === 'granted'){
                window.addEventListener('deviceorientation',handlerOrientation);
            }
        } catch (error) {
            console.error(error);
        }
    }else{
        window.addEventListener('deviceorientation',handlerOrientation);
    }
}