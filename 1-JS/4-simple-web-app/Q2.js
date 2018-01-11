
function doTeach() {
    let tnrName = "Nag";  // moved to heap
    try {
        console.log(tnrName + ' teaching topic-1');
        //throw new Error('hate topic1');

        setTimeout(function () {
            console.log(tnrName + ' teaching topic-2');
            //throw new Error('hate topic2');
            console.log('teaching topic-2 end');
        }, 5000);

        console.log('teaching topic-1 end');
    } catch (e) {
        console.log('i caught ' + e.message);
    }
}

doTeach();