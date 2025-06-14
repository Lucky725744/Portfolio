// Smooth scrolling and navigation
document.addEventListener("DOMContentLoaded", () => {
  // Custom cursor
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  // Hide cursor on mobile
  if (window.innerWidth <= 768) {
    cursor.style.display = "none"
    cursorFollower.style.display = "none"
  }

  // Navigation functionality
  const navbar = document.querySelector(".navbar")
  const navLinks = document.querySelectorAll(".nav-link")
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      // Close mobile menu
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")

      // Update active link
      navLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
    })
  })

  // Update active navigation link on scroll
  const sections = document.querySelectorAll("section")

  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // Skill bars animation
  const skillBars = document.querySelectorAll(".skill-progress")
  const animateSkillBars = () => {
    skillBars.forEach((bar) => {
      const rect = bar.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const width = bar.getAttribute("data-width")
        bar.style.width = width + "%"
      }
    })
  }

  window.addEventListener("scroll", animateSkillBars)
  animateSkillBars() // Initial check

  // Portfolio filter
  const filterBtns = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      const filterValue = btn.getAttribute("data-filter")

      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.classList.remove("hide")
        } else {
          item.classList.add("hide")
        }
      })
    })
  })

  // Contact form
  const contactForm = document.querySelector(".contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields")
      return
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.")
      contactForm.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Add animation classes to elements
  const animatedElements = document.querySelectorAll(
    ".section-header, .about-text, .about-image, .skill-category, .timeline-item, .portfolio-item, .contact-info, .contact-form",
  )

  animatedElements.forEach((el, index) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })

  // Typing effect for hero subtitle
  const subtitle = document.querySelector(".hero-subtitle")
  const text = subtitle.textContent
  subtitle.textContent = ""

  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  setTimeout(typeWriter, 1000)

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroParticles = document.querySelector(".hero-particles")

    if (heroParticles) {
      heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Add hover effects to social links
  const socialLinks = document.querySelectorAll(".social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)"
      cursorFollower.style.transform = "scale(1.5)"
    })

    link.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)"
      cursorFollower.style.transform = "scale(1)"
    })
  })

  // Smooth reveal animations for timeline items
  const timelineItems = document.querySelectorAll(".timeline-item")

  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`
  })

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })
})

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Performance optimization for scroll events
const optimizedScroll = debounce(() => {
  // Scroll-based animations and effects
}, 10)

window.addEventListener("scroll", optimizedScroll)
