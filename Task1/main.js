var obj = {
    className: 'open menu new'
}

function addClass(obj, cls){
    if(obj.className==='')
        return obj.className+=cls;

    if(!obj.className.includes(cls))
        obj.className+=' '+cls;
        
    return obj.className;
}

alert(addClass(obj, 'me'));
