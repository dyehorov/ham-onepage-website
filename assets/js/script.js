"use strict";

const ourServicesMenuList = document.querySelector( '.our_services_menu_list' );
const ourServicesImageParagraphBlocks = document.querySelectorAll( '.our_services_image_paragraph_blocks' )

ourServicesImageParagraphBlocks.forEach( item => {
    item.classList.add( 'clear_image_paragraph' );
    if ( item.classList.contains( 'active_image_paragraph' ) ) {
        item.classList.remove( 'clear_image_paragraph' );
    }
} )

ourServicesMenuList.addEventListener( "click", function ( event ) {
    ourServicesMenuList.querySelector( '.our_services_active' ).classList.remove( 'our_services_active' );
    event.target.classList.add( 'our_services_active' );
    const elemId = event.target.id;
    ourServicesImageParagraphBlocks.forEach( item => {
        item.classList.add( 'clear_image_paragraph' );
        item.classList.remove( 'active_image_paragraph' )
        if ( elemId === item.dataset.filter ) {
            item.classList.remove( 'clear_image_paragraph' );
        }
    } )
} )

const ourAmazingItems = document.querySelector( '.our_amazing_list' );
const amazingImages = document.querySelectorAll( '.images_amazing' );

ourAmazingItems.addEventListener( 'click', function ( event ) {
    ourAmazingItems.querySelector( '.active_btn' ).classList.remove( 'active_btn' );
    event.target.classList.add( 'active_btn' );
    const elemId = event.target.id;
    amazingImages.forEach( item => {
        item.hidden = true;
        if ( elemId === item.dataset.filter ) {
            item.hidden = false;
        }
    } )
} )

const loadMore = document.querySelector( '.our_amazing_button' );
const loadMoreImages = document.querySelectorAll( '.more_images' );

loadMore.addEventListener( 'click', function () {
    loadMoreImages.forEach( item => {
        item.hidden = false;
    } )
    loadMore.hidden = true;
} )

const mainImage = document.querySelectorAll( '.main_image' );
const peopleImage = document.querySelector( '.carousel_image_block' );
const peopleNameJob = document.querySelectorAll( '.name_job' );
const peopleComment = document.querySelectorAll( '.people_comment' );


peopleImage.addEventListener( 'click', function ( event ) {
    document.querySelector( ".translated_image" ).classList.remove( 'translated_image' );
    event.target.classList.add( 'translated_image' );
    const elemId = event.target.id;
    mainImage.forEach( item => {
        item.hidden = true;
        if ( elemId === item.dataset.filter ) {
            item.hidden = false;
        }
    } )
    peopleNameJob.forEach( item => {
        item.hidden = true;
        if ( elemId === item.dataset.filter ) {
            item.hidden = false;
        }
    } )
    peopleComment.forEach( item => {
        item.hidden = true;
        if ( elemId === item.dataset.filter ) {
            item.hidden = false;
        }
    } )
} )

