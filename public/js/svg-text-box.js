function svgTextBox() {

    // Get an array of all objects using of svg-text-box
    var objectsCallingCenterText = $('.svg-text-box--center');
    var objectsCallingLeftText = $('.svg-text-box--left');
    var objectsCallingRightText = $('.svg-text-box--right');


    // Find all centering boxes
    for (var i= 0; i< objectsCallingCenterText.length; i++) {

        // Get box and text for this svg-text-box
        var thisSVGTextBox = $(objectsCallingCenterText[i]);
        var useBox = thisSVGTextBox.find('.svg-text-box__box');
        var useText = thisSVGTextBox.find('.svg-text-box__text');

        // Send to aligning function
        alignSVGTextToBox (useBox, useText, 'center');
    }


    // Find all lefting boxes
    for (var i= 0; i< objectsCallingLeftText.length; i++) {

        // Get box and text for this svg-text-box
        var thisSVGTextBox = $(objectsCallingLeftText[i]);
        var useBox = thisSVGTextBox.find('.svg-text-box__box');
        var useText = thisSVGTextBox.find('.svg-text-box__text');

        // Send to aligning function
        alignSVGTextToBox (useBox, useText, 'left');
    }


    // Find all righting boxes
    for (var i= 0; i< objectsCallingRightText.length; i++) {

        // Get box and text for this svg-text-box
        var thisSVGTextBox = $(objectsCallingRightText[i]);
        var useBox = thisSVGTextBox.find('.svg-text-box__box');
        var useText = thisSVGTextBox.find('.svg-text-box__text');

        // Send to aligning function
        alignSVGTextToBox (useBox, useText, 'right');
    }



function alignSVGTextToBox (thisBox, thisText, alignmentType) {

    /*
    **    THERE NEEDS TO BE A FXN TO ENSURE TEXT-WIDTH < BOX WIDTH
    */


    // Get box dimension/placement
    var boxWidth = thisBox.attr("width");
    var boxLeft = parseFloat(thisBox.attr("x"));
    var boxCenter = boxLeft + (boxWidth / 2);


    // Get text dimension/placement
    var textWidth = thisText.width();
    var textLeft = thisText.position().left;
    var textHalf = textWidth / 2;


    // Get the value the tranlation needs to be chaged by
    var addTextTranslateX = boxCenter - textHalf - boxLeft;


    // Split up the initial translate info to get x/y
    var initialTranslate = thisText.attr('transform');
    initialTranslate = initialTranslate.split('(');
    initialTranslate =initialTranslate[1];
    initialTranslate = initialTranslate.split(')');
    initialTranslate = initialTranslate[0];
    initialTranslate = initialTranslate.split(' ');


    // Generate a new transform string based on alignmentType
    var newTransformString = '';


    // Create the new translate y input
    var initialTranslateX;
    var initialTranslateY = initialTranslate[1];


    // Center -> left of text aligns to left of box +/- half the difference in box/text width
    if (alignmentType === 'center') {
        initialTranslateX = boxLeft + addTextTranslateX;
        newTransformString = 'translate(' + initialTranslateX + ' ' + initialTranslateY +')';
    }

    // Left -> left of text aligns to left of box
    else if (alignmentType === 'left') {
        initialTranslateX = boxLeft;
        newTransformString = 'translate(' + initialTranslateX + ' ' + initialTranslateY +')';
    }

    // Right -> right of text aligns to right of box
    else if (alignmentType === 'right') {

        // Get boxRight, by adding boxLeft with it's width
        var boxRight = parseFloat(boxLeft) + parseFloat(boxWidth);

        // transform defines text left, so we need boxRight minus textWidth
        var textShiftRight = boxRight - textWidth;

        // Update translate
        initialTranslateX = textShiftRight;
        newTransformString = 'translate(' + initialTranslateX + ' ' + initialTranslateY +')';
    }

    else {
        console.log("WARNING from svg-text-box.js");
        console.log("Invalid alignmentType was entered");
    }




    // Update text transform
    thisText.attr('transform', newTransformString);
}









}
