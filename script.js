function handlerOrientation(e){
    console.log(e.alpha);
    let alpha = e.alpha;
    // let beta = e.beta;
    // let gamma = e.gamma;

    let cube = document.querySelector('.face');
    cube.style.transform = 'rotateZ(' + alpha + 'rad )';
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