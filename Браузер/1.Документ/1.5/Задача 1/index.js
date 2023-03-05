const li = document.querySelectorAll('li')

li.forEach(li=>{
    let title = li.firstChild.data;

    title = title.trim();


    let count = li.querySelectorAll('li').length;

    console.log(title + ': ' + count);
})