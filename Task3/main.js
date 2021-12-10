var obj = {
    className: 'open menu menu zero'
}

function removeClass(obj, cls){
    if(!obj.className.includes(cls)) { return obj.className }
    else if(obj.className.includes(cls)){
        obj.className=obj.className.replaceAll(cls, '');

        obj.className= obj.className.replace(/\s+/g,' ').trim();

        if(obj.className[0]==' ')
            obj.className= obj.className.substring(1);
    }        
        
    return obj.className;
}

alert(removeClass(obj, 'menu'));

  