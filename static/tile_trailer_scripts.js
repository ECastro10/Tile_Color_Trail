/**
 * Created by emanuel on 6/1/17.
 */

function populatizeThisPage(){
    var wrapperElement = $('#wrapper');
    var tileSpace = $('#tile_div');
    var wrapperHeight = wrapperElement.height();
    var wrapperWidth = wrapperElement.width();
    var divHeight = tileSpace.height();
    var divWidth = tileSpace.width();

    // console.log("Screen Object", screen);
    // console.log("Screen Avail Ht: ", screen.availHeight);
    // console.log("Screen Avail width: ", screen.availWidth);
    //
    // console.log("div for tiles ht: ", tileSpace.height());
    // console.log("div for tiles width: ", tileSpace.width());
    //
    // console.log("wrapper ht: ", $('#wrapper').height());
    // console.log("wrapper width: ", $('#wrapper').width());

    while ((wrapperHeight - divHeight) >= 100 && (wrapperWidth - divWidth) >= 100){
        divHeight = tileSpace.height();
        divWidth = tileSpace.width();
        var widthDiff = wrapperWidth - divWidth;
        var heightDiff = wrapperHeight - divHeight;

        console.log("Height Diff: ", heightDiff);
        console.log("Width Diff: ", widthDiff);
        tileSpace.append('<div class="square"></div>')
    }
}