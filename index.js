function getHomeNames(m) {
    return home.map(function(item) {
        return m= item.homeName;
    });

}

function searchHome(home,idx) {
    var  result = home.find(function(item) {
         return item._id === idx;
    }) || -1;
    return ( result );

}

