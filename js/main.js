'use strict';

const body = document.body;
const modalbg = document.getElementById('modal-bgarea');
const images = document.querySelectorAll('div.bread > img');
const modal = document.querySelectorAll('.modal');
const close = document.querySelectorAll('.close');

const item = document.querySelectorAll('.item');
const cartText = document.querySelectorAll('.cart-text');


// 画像のサムネ
images.forEach((target, index) => {
    target.addEventListener('click', () => {
        modal[index].classList.remove('-hide');
        modal[index].classList.add('-visible');
        modalbg.classList.add('modal-bg');
        body.classList.add('scroll-lock');
    });
});

// モーダル内のクローズボタン
close.forEach((target, index) => {
    target.addEventListener('click', () => {
        modal[index].classList.add('-hide');
            body.classList.remove('scroll-lock');
            modalbg.classList.remove('modal-bg');
    });
});

// モーダルの外をクリックした時の処理
modal.forEach((target) => {
    modalbg.addEventListener('click', () => {
        target.classList.add('-hide');
        body.classList.remove('scroll-lock');
        modalbg.classList.remove('modal-bg');
    });
});

// 買い物かごの処理
const cartModal = document.querySelector('.cart-modal');
const cancel = document.querySelector('.cancel');
const cart = document.querySelectorAll('.cart');

// 買い物かごをクリック
cart.forEach((target, index) => {
    target.addEventListener('click', () => {
        cartModal.classList.remove('-hide');
        cartModal.classList.add('-visible');
        modalbg.classList.add('modal-bg');
        body.classList.add('scroll-lock');

    });
});

//買い物かごモーダル内の処理
//買い物かごモーダルの閉じるをクリック
cancel.addEventListener('click', () => {
    closeCart();
});

// モーダルの外をクリックした時の処理
modalbg.addEventListener('click', () => {
    closeCart();
});

//買い物かごを閉じる処理
function closeCart() {
    cartModal.classList.add('-hide');
    body.classList.remove('scroll-lock');
    modalbg.classList.remove('modal-bg');
}