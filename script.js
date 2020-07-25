// Unsplash API
const count = 10
const apiKey = 'ZE2yJ-usuSebjRqAXuFdt8tB0mbGBpfo7PY6Y1v0_yQ'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from Unspash API
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  } catch (error) {}
}

getPhotos()
