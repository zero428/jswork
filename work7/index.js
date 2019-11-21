function sort(method){
<<<<<<< HEAD
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
=======
    //读取待排序数据
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else
        if(method=='insert'){
            logs = insertSort(origin)
        }
        showDiv = document.getElementById('Anim')
        showDiv.innerHTML = logs
>>>>>>> 799447371f88073cdd8481716ab182fbac117951
}