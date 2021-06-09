let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

// var prevPos
// $('body').on('mousedown', function (evt) {
//   $(this).on('mousemove', drag)
//   prevPos = {x:evt.clientX, y:evt.clientY}
// }).on('mouseup mouseout', function() {
//   $(this).off('mousemove', drag)
// })
 
// function drag(evt) {
//   window.scrollBy(prevPos.x - evt.clientX, prevPos.y - evt.clientY)
//   prevPos = {x:evt.clientX, y:evt.clientY}
// }

// var prevPos
// $('body').on('mousedown', function (evt) {
//     $(this).on('mousemove', drag)
//     prevPos = {x:evt.clientX, y:evt.clientY}
// }).on('mouseup mouseout', function() {
//     $(this).off('mousemove', drag)
// })

// function drag(evt) {
//     window.scrollBy(prevPos.x - evt.clientX, prevPos.y - evt.clientY) // вся магия здесь
//     prevPos = {x:evt.clientX, y:evt.clientY}
// }
// var scr = $(".scroll");
// scr.mousedown(function () {
//     var startX = this.scrollLeft + event.pageX;
//     var startY = this.scrollTop + event.pageY;
//     scr.mousemove(function () {
//         this.scrollLeft = startX - event.pageX;
//         this.scrollTop = startY - event.pageY;
//         return false;

//     });
// });
// $(window).mouseup(function () {
//     scr.off("mousemove");
// });

// $( document ).ready(function() {
//     var $doc = $('.main'),
//     ratio = $doc.height() / $(window).height() //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//         mousepos, to;
//     $doc.on('mousedown', '#content', dragstart);
 
//     function dragstart(e) {
//         e.preventDefault();
//         mousepos = e.screenY;
//         $doc.on('mousemove.drag', drag);
//         $doc.one('mouseup.drag mouseout.drag', dragstop);
//     }
 
//     function drag(e) {
//         clearTimeout(to);
//         var delta = (e.screenY - mousepos) * ratio;
//         to = setTimeout(function () { // таймаут чтобы события от мыши не перекрывали друг друга, 
//             $doc.scrollLeft($doc.scrollLeft() + delta);
//             mousepos = e.screenY;
//         }, 1);
//     }
 
//     function dragstop(e) {
//         $doc.off('mousemove.drag mouseup.drag mouseout.drag');
//     }
 
 
// });

