export default {
    getMovieList(){
        var url = "https://api.douban.com/v2/movie/in_theaters";
        return new Promise((resolve,reject)=>{
            fetch(url).then((response)=>{
                return response.json()
            }).then((data)=>{
            resolve(data)
        })
    })
},
/*getMovieInfo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var data = require('../services/movie_info');
            resolve(data);
        },1500)
    })
},*/
getMovieInfo(id){
    var url = "https://api.douban.com//v2/movie/subject/"+id;    
    return new Promise((resolve,reject)=>{
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            resolve(data);
        })
    })
}

}