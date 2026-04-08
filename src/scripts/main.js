import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// ─── Accordion ────────────────────────────────────────────────────────────────
function initAccordion() {
  const list = document.querySelector('#accordion ul')
  if (!list) return

  const items = Array.from(list.querySelectorAll('li'))

  // Hide all content divs initially
  items.forEach(item => {
    const div = item.querySelector('div')
    if (div) div.style.display = 'none'
  })

  // Open the item marked current (or first item as fallback)
  const initial = list.querySelector('li.current') || items[0]
  if (initial) {
    initial.classList.add('active')
    const div = initial.querySelector('div')
    if (div) div.style.display = 'block'
  }

  // Click handlers
  list.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const li = link.closest('li')

      // Close all
      items.forEach(item => {
        item.classList.remove('active', 'current')
        const d = item.querySelector('div')
        if (d) d.style.display = 'none'
      })

      // Open clicked
      li.classList.add('active')
      const div = li.querySelector('div')
      if (div) div.style.display = 'block'
    })
  })
}

// ─── Portfolio filter ─────────────────────────────────────────────────────────
function initPortfolioFilter() {
  const filterLinks = document.querySelectorAll('ul#filter a')
  if (!filterLinks.length) return

  filterLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()

      // Update active state
      document.querySelector('ul#filter .current')?.classList.remove('current')
      link.parentElement.classList.add('current')

      const filterVal = link.textContent.trim().toLowerCase().replace(/\s+/g, '-')
      const items = document.querySelectorAll('ul#portfolio li')

      items.forEach(item => {
        const show = filterVal === 'all' || item.classList.contains(filterVal)
        item.style.display = show ? '' : 'none'
      })
    })
  })
}

// ─── Swiper (home page slider) ────────────────────────────────────────────────
function initSlider() {
  if (!document.querySelector('#slider')) return

  new Swiper('#slider', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

// ─── GLightbox (portfolio page) ───────────────────────────────────────────────
function initLightbox() {
  if (!document.querySelector('.glightbox')) return

  GLightbox({
    selector: '.glightbox',
    loop: true,
  })
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAccordion()
  initPortfolioFilter()
  initSlider()
  initLightbox()
})
