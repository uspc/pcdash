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
    get : (url) => {
        return $.ajax({
                url:url,
                dataType: 'json'
            });
    },
    post : (url,data) => {
        return $.ajax({
            url:url,
            type: 'post',
            contentType: 'application/json',
            data:data
        });
    }
}