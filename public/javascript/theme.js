// Alterna entre tema claro y oscuro
document.addEventListener('DOMContentLoaded', function () {
	const toggleBtn = document.getElementById('theme-toggle');
	const themeIcon = document.getElementById('theme-icon');
	const body = document.body;

	// Detectar preferencia previa
	if (localStorage.getItem('theme') === 'dark') {
		body.classList.add('bg-dark', 'text-white');
		themeIcon.classList.remove('bi-moon-stars-fill');
		themeIcon.classList.add('bi-brightness-high-fill');
	}

	toggleBtn?.addEventListener('click', function () {
		const isDark = body.classList.contains('bg-dark');
		if (isDark) {
			body.classList.remove('bg-dark', 'text-white');
			themeIcon.classList.remove('bi-brightness-high-fill');
			themeIcon.classList.add('bi-moon-stars-fill');
			localStorage.setItem('theme', 'light');
		} else {
			body.classList.add('bg-dark', 'text-white');
			themeIcon.classList.remove('bi-moon-stars-fill');
			themeIcon.classList.add('bi-brightness-high-fill');
			localStorage.setItem('theme', 'dark');
		}
	});
});

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = theme => {
    const activeThemeIcon = document.querySelector('.theme-icon-active use')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
    })

    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
      })
  })
})()