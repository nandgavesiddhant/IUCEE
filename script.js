// Data for dynamic content - EASILY EDITABLE
const achievements = [
  {
    id: 1,
    title: "Best Student Chapter Award 2024",
    image: "/community-impact-award-ceremony.png",
    description:
      "Recognized by IUCEE for outstanding contribution to engineering education and student development initiatives.",
  },
  {
    id: 2,
    title: "Innovation Excellence Prize",
    image: "/green-innovation-technology-display.png",
    description:
      "Awarded for developing cutting-edge engineering solutions and promoting innovation in technical education.",
  },
  {
    id: 3,
    title: "Leadership Development Recognition",
    image: "/youth-leadership-conference-stage.png",
    description: "Honored for empowering engineering students and fostering next-generation technical leadership.",
  },
]

const galleryImages = [
  {
    src: "/environmental-event-.png",
    title: "Technical Workshop",
    description: "Hands-on learning session with industry experts",
  },
  {
    src: "/community-impact-award-ceremony.png",
    title: "Award Ceremony",
    description: "Recognition event celebrating achievements",
  },
  {
    src: "/green-innovation-technology-display.png",
    title: "Innovation Showcase",
    description: "Student projects and technology demonstrations",
  },
  {
    src: "/youth-leadership-conference-stage.png",
    title: "Leadership Conference",
    description: "Student leadership development and networking",
  },
  { src: "/environmental-event-.png", title: "Industry Visit", description: "Corporate exposure and learning program" },
  {
    src: "/community-impact-award-ceremony.png",
    title: "Research Presentation",
    description: "Academic research showcase and competition",
  },
]

const chatResponses = {
  "How do I join IUCEE-RIT?":
    "Great question! You can join IUCEE-RIT by attending our orientation sessions, filling out our membership form, or contacting us directly. We welcome all engineering students who are passionate about innovation and learning. Would you like me to provide more details about our membership process?",
  "Tell me about upcoming events":
    "We have several exciting events coming up! Our Technical Symposium 2024 is on March 15th, followed by a Coding Bootcamp on March 22nd, and our Industry Connect Summit on April 5th. Each event offers unique learning and networking opportunities. Which event interests you most?",
  "What programs do you offer?":
    "IUCEE-RIT offers diverse programs including technical workshops, industry partnerships, research initiatives, leadership development, and skill-building sessions. We focus on bridging the gap between academic knowledge and industry requirements. Our programs are designed to enhance your engineering skills and career prospects.",
  default:
    "Thank you for your question! I'm here to help you learn more about IUCEE-RIT. You can ask me about our programs, events, membership, or anything else related to our chapter. How can I assist you today?",
}

// State variables
let currentAchievement = 0
let currentGalleryIndex = 0
let chatbotOpen = false

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  initializeAchievements()
  initializeGallery()
  initializeAnimations()
  initializeChatbot()
})

// Achievement Gallery Functions
function initializeAchievements() {
  updateAchievementDisplay()
  createAchievementIndicators()
}

function updateAchievementDisplay() {
  const achievement = achievements[currentAchievement]
  document.getElementById("achievement-image").src = achievement.image
  document.getElementById("achievement-image").alt = achievement.title
  document.getElementById("achievement-title").textContent = achievement.title
  document.getElementById("achievement-description").textContent = achievement.description

  updateAchievementIndicators()
}

function createAchievementIndicators() {
  const indicatorsContainer = document.getElementById("achievement-indicators")
  indicatorsContainer.innerHTML = ""

  achievements.forEach((_, index) => {
    const indicator = document.createElement("button")
    indicator.className = `achievement-indicator ${index === currentAchievement ? "active" : ""}`
    indicator.onclick = () => setCurrentAchievement(index)
    indicatorsContainer.appendChild(indicator)
  })
}

function updateAchievementIndicators() {
  const indicators = document.querySelectorAll(".achievement-indicator")
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentAchievement)
  })
}

function nextAchievement() {
  currentAchievement = (currentAchievement + 1) % achievements.length
  updateAchievementDisplay()
}

function prevAchievement() {
  currentAchievement = (currentAchievement - 1 + achievements.length) % achievements.length
  updateAchievementDisplay()
}

function setCurrentAchievement(index) {
  currentAchievement = index
  updateAchievementDisplay()
}

// Gallery Functions
function initializeGallery() {
  updateGalleryDisplay()
  createGalleryThumbnails()
}

function updateGalleryDisplay() {
  const image = galleryImages[currentGalleryIndex]
  document.getElementById("gallery-main-image").src = image.src
  document.getElementById("gallery-main-image").alt = image.title
  document.getElementById("gallery-main-title").textContent = image.title
  document.getElementById("gallery-main-description").textContent = image.description

  updateGalleryThumbnails()
}

function createGalleryThumbnails() {
  const thumbnailsContainer = document.getElementById("gallery-thumbnails")
  thumbnailsContainer.innerHTML = ""

  galleryImages.forEach((image, index) => {
    const thumbnail = document.createElement("div")
    thumbnail.className = `gallery-thumbnail ${index === currentGalleryIndex ? "active" : ""}`
    thumbnail.onclick = () => setCurrentGalleryIndex(index)

    const img = document.createElement("img")
    img.src = image.src
    img.alt = image.title

    thumbnail.appendChild(img)
    thumbnailsContainer.appendChild(thumbnail)
  })
}

function updateGalleryThumbnails() {
  const thumbnails = document.querySelectorAll(".gallery-thumbnail")
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.toggle("active", index === currentGalleryIndex)
  })
}

function nextGalleryImage() {
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length
  updateGalleryDisplay()
}

function prevGalleryImage() {
  currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length
  updateGalleryDisplay()
}

function setCurrentGalleryIndex(index) {
  currentGalleryIndex = index
  updateGalleryDisplay()
}

// Tab Functions
function showTab(tabName) {
  // Hide all tab panels
  const panels = document.querySelectorAll(".tab-panel")
  panels.forEach((panel) => panel.classList.remove("active"))

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".tab-button")
  buttons.forEach((button) => button.classList.remove("active"))

  // Show selected tab panel
  document.getElementById(tabName).classList.add("active")

  // Add active class to clicked button
  event.target.classList.add("active")
}

// Enhanced Chatbot Functions
function initializeChatbot() {
  // Hide notification after 5 seconds
  setTimeout(() => {
    const notification = document.getElementById("chatbot-notification")
    if (notification) {
      notification.style.display = "none"
    }
  }, 5000)
}

function toggleChatbot() {
  chatbotOpen = !chatbotOpen
  const panel = document.getElementById("chatbot-panel")
  panel.classList.toggle("active", chatbotOpen)

  if (chatbotOpen) {
    // Focus on input when opened
    setTimeout(() => {
      document.getElementById("chatbot-input").focus()
    }, 300)
  }
}

function sendQuickMessage(message) {
  addUserMessage(message)
  setTimeout(() => {
    const response = chatResponses[message] || chatResponses["default"]
    addBotMessage(response)
  }, 1000)
}

function sendMessage() {
  const input = document.getElementById("chatbot-input")
  const message = input.value.trim()

  if (message) {
    addUserMessage(message)
    input.value = ""

    // Simulate typing delay
    setTimeout(() => {
      const response = findBestResponse(message)
      addBotMessage(response)
    }, 1000)
  }
}

function handleChatKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage()
  }
}

function addUserMessage(message) {
  const messagesContainer = document.getElementById("chatbot-messages")
  const messageDiv = document.createElement("div")
  messageDiv.className = "chatbot-message chatbot-message-user"

  messageDiv.innerHTML = `
    <div class="chatbot-message-content">
      <p>${message}</p>
    </div>
    <span class="chatbot-message-time">${getCurrentTime()}</span>
  `

  messagesContainer.appendChild(messageDiv)
  scrollToBottom()
}

function addBotMessage(message) {
  const messagesContainer = document.getElementById("chatbot-messages")
  const messageDiv = document.createElement("div")
  messageDiv.className = "chatbot-message chatbot-message-bot"

  messageDiv.innerHTML = `
    <div class="chatbot-message-content">
      <p>${message}</p>
    </div>
    <span class="chatbot-message-time">${getCurrentTime()}</span>
  `

  messagesContainer.appendChild(messageDiv)
  scrollToBottom()
}

function findBestResponse(message) {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("join") || lowerMessage.includes("member")) {
    return chatResponses["How do I join IUCEE-RIT?"]
  } else if (lowerMessage.includes("event") || lowerMessage.includes("upcoming")) {
    return chatResponses["Tell me about upcoming events"]
  } else if (lowerMessage.includes("program") || lowerMessage.includes("course") || lowerMessage.includes("workshop")) {
    return chatResponses["What programs do you offer?"]
  } else {
    return chatResponses["default"]
  }
}

function getCurrentTime() {
  const now = new Date()
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

function scrollToBottom() {
  const messagesContainer = document.getElementById("chatbot-messages")
  messagesContainer.scrollTop = messagesContainer.scrollHeight
}

// Animation Functions
function initializeAnimations() {
  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
      }
    })
  }, observerOptions)

  // Observe sections for animations
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Team section horizontal scroll with mouse wheel
const teamScroll = document.getElementById("team-scroll")
if (teamScroll) {
  teamScroll.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault()
      teamScroll.scrollLeft += e.deltaY
    }
  })
}

// Auto-advance achievement gallery every 5 seconds
setInterval(() => {
  nextAchievement()
}, 5000)

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevAchievement()
    prevGalleryImage()
  } else if (e.key === "ArrowRight") {
    nextAchievement()
    nextGalleryImage()
  } else if (e.key === "Escape") {
    if (chatbotOpen) {
      toggleChatbot()
    }
  }
})
