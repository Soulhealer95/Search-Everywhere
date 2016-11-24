/**
 * Created by shisaxena on 11/23/2016.
 */
$(document).ready(function(){


    //Execute the Search function when submit button is clicked
    $("#Sub_button").click(function () {
        Search_what();
    });

    /*
    *   Bool function that searches various search-engines for a query
    *   @args: none
    * */

    function Search_what()
    {
        //assigning id's to variables for easier access
        var goo_check = $("#Google");
        var edx_check = $("#edX");
        var youtube_check = $("#UTube");
        var gmail_check = $("#GMail");
        var wiki_check = $("#Wiki");

        //storing the query in a vaiable
        var query = $("#query").val();

        //do something only if query exists
        if(query != "" && query != undefined)
        {
            //wikipedia search
            if(wiki_check.is(':selected'))
            {
                window.open("https://en.wikipedia.org/wiki/"+ encodeURI(query) , '_blank');
            }
            //edX search
            if(edx_check.is(':selected'))
            {
                window.open("https://www.edx.org/course?search_query="+ encodeURI(query), '_blank');
            }
            //YouTube search
            if(youtube_check.is(':selected'))
            {
                window.open("https://www.youtube.com/results?search_query="+ encodeURI(query), '_blank');
            }
            //Google search
            if(goo_check.is(':selected'))
            {
                window.open("https://www.google.ca/#q="+ encodeURI(query), '_blank');
            }
            //GMail search
            if(gmail_check.is(':selected'))
            {
                window.open("https://mail.google.com/mail/u/0/#advanced-search/has="+ encodeURI(query), '_blank');
            }
            return true;
        }

        return false;


    }


});
