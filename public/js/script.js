/* eslint-disable no-undef */
'use strict'

// import { addEventOnElems } from './utils.js'

const $searchField = document.querySelector('[data-search-field]')
const $searchClear = document.querySelector('[data-search-clear]')

$searchClear?.addEventListener('click', function () {
  $searchField.value = ''
})

// Animacion logo mobile

const $logo = document.querySelector('[data-logo]')

if ($logo && !sessionStorage.getItem('logoAnimated')) {
  $logo.classList.add('animate')
  sessionStorage.setItem('logoAnimated', true)
}

// Menu toggle

const $menuWrapper = document.querySelector('[data-menu-wrapper]')
const $menuTogler = document.querySelector('[data-menu-toggler]')

$menuTogler?.addEventListener('click', function () {
  $menuWrapper.classList.toggle('active')
})

// Ocultar barra superior al hacer scroll

const $page = document.querySelector('[data-page]')
let lastScrollPos = 0

$page?.addEventListener('scroll', function () {
  if (lastScrollPos < this.scrollTop) {
    this.classList.add('header-hide')
  } else {
    this.classList.remove('header-hide')
  }
  lastScrollPos = this.scrollTop
})

// Ripple effect

const ripple = function ($rippleElem) {
  $rippleElem.addEventListener('pointerdown', function (event) {
    event.stopImmediatePropagation()

    const $ripple = document.createElement('div')
    $ripple.classList.add('ripple')

    this.appendChild($ripple)

    const removeRipple = () => {
      $ripple.animate({
        opacity: 0
      }, { fill: 'forwards', duration: 200 })

      setTimeout(() => {
        $ripple.remove()
      }, 1000)
    }

    this.addEventListener('pointerup', removeRipple)
    this.addEventListener('pointerleave', removeRipple)

    // const rippleSize = Math.max(this.clientWidth, this.clientHeight)

    $ripple.style.top = `${event.layerY}px`
    $ripple.style.left = `${event.layerX}px`
    $ripple.style.width = `${event.layer}px`
    $ripple.style.height = `${event.layer}px`
  })
}

const $rippleElems = document.querySelectorAll('[data-ripple]')
$rippleElems?.forEach(item => ripple(item))
