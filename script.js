const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('laoder')

let photosArray = []

// Unsplash API
const count = 10
const apiKey = 'ZE2yJ-usuSebjRqAXuFdt8tB0mbGBpfo7PY6Y1v0_yQ'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Create Elements for Links and Photos

const displayPhotos = () => {
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a')
    item.setAttribute('href', photo.links.html)
    item.setAttribute('target', '_blank')
    // Create <img> for photo
    const img = document.createElement('img')
    img.setAttribute('src', photo.urls.regular)
    img.setAttribute('alt', photo.alt_description)
    img.setAttribute('title', photo.alt_description)
    // Put <img> inside <a>, then put both inside imageContainer element
    item.appendChild(img)
    imageContainer.appendChild(item)
  })
}

// Get photos from Unspash API
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhotos()
  } catch (error) {}
}

// check to see if scrolling near bottom of page
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos()
  }
})

getPhotos()
