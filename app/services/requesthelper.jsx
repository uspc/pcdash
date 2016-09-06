import $ from 'jquery';

//export default {
//     get : (url) => {
//        return new Promise((success,error)=>{
//            $.ajax({
//                url:url,
//                dataType: 'json',
//                success:success,
//                error:error
//            })
//        })
//    }
//}


export default {
    get : (url,funsuc,funcmp,storageag,k,alt) => {
        return $.ajax({
                url:url,
                type: 'GET',
                contentType: 'application/json',
                dataType: 'text',
                success: funsuc,
                complete: funcmp
            });
    },
    post : (url,data,err) => {
        return $.ajax({
            url:url,
            type: 'post',
            contentType: 'application/json',
            data:data,
            error: err
        });
    }
}