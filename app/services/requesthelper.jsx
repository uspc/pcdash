import $ from 'jquery';

export default {
    get : (url,funsuc,funcmp) => {
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