const categories = {
  Cars: [
    {
      src: "https://cdn.pixabay.com/photo/2016/11/18/12/51/automobile-1834274_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/11/18/12/51/automobile-1834274_1280.jpg",
      title: "Midnight Racer",
      sub: "Studio Shot · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
      full: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg",
      title: "Open Road",
      sub: "Highway Series · 2023",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/04/03/14/15/car-5000554_640.jpg",
      full: "https://cdn.pixabay.com/photo/2020/04/03/14/15/car-5000554_1280.jpg",
      title: "Classic Lines",
      sub: "Vintage Series · 2022",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/02/21/03/15/sunset-3169364_640.jpg",
      full: "https://cdn.pixabay.com/photo/2018/02/21/03/15/sunset-3169364_1280.jpg",
      title: "Speed & Form",
      sub: "Track Day · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/04/01/12/11/car-1300629_640.png",
      full: "https://cdn.pixabay.com/photo/2016/04/01/12/11/car-1300629_1280.png",
      title: "Red Beast",
      sub: "Supercar Series · 2023",
    },
  ],
  Animals: [
    {
      src: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
      title: "Gentle Giant",
      sub: "Safari · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_640.jpg",
      full: "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg",
      title: "Kingfisher",
      sub: "Wildlife · 2023",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/08/19/06/18/lion-4415196_640.jpg",
      full: "https://cdn.pixabay.com/photo/2019/08/19/06/18/lion-4415196_1280.jpg",
      title: "King of the Plains",
      sub: "Safari · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/29/09/16/hummingbird-1868052_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/11/29/09/16/hummingbird-1868052_1280.jpg",
      title: "Hummingbird",
      sub: "Birds · 2022",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_640.jpg",
      full: "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg",
      title: "Arctic Stare",
      sub: "Polar Series · 2022",
    },
  ],
  Nature: [
    {
      src: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
      full: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      title: "Autumn Road",
      sub: "Seasonal · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
      title: "Golden Sunset",
      sub: "Landscape · 2023",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_640.jpg",
      full: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      title: "Milky Way",
      sub: "Night Sky · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg",
      title: "Alpine Solitude",
      sub: "Mountain Series · 2023",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/09/14/11/07/forest-2748937_640.jpg",
      full: "https://cdn.pixabay.com/photo/2017/09/14/11/07/forest-2748937_1280.jpg",
      title: "Forest Light",
      sub: "Forest Series · 2022",
    },
  ],
  Cities: [
    {
      src: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
      title: "City Lights",
      sub: "Urban Series · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/22/19/08/budapest-1850010_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/11/22/19/08/budapest-1850010_1280.jpg",
      title: "Budapest Night",
      sub: "Night Series · 2023",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_640.jpg",
      full: "https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_1280.jpg",
      title: "Hong Kong",
      sub: "Asia Series · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/10/12/23/37/architecture-1736972_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/10/12/23/37/architecture-1736972_1280.jpg",
      title: "Glass & Steel",
      sub: "Architecture · 2023",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/02/13/24/city-919049_640.jpg",
      full: "https://cdn.pixabay.com/photo/2015/09/02/13/24/city-919049_1280.jpg",
      title: "The Grid",
      sub: "Aerial View · 2022",
    },
  ],
  Food: [
    {
      src: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_640.jpg",
      full: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
      title: "Perfect Pizza",
      sub: "Italian · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/07/14/15/27/fantasy-3537357_640.jpg",
      full: "https://cdn.pixabay.com/photo/2018/07/14/15/27/fantasy-3537357_1280.jpg",
      title: "Sweet Layers",
      sub: "Dessert · 2023",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/06/23/19/spaghetti-1804457_640.jpg",
      full: "https://cdn.pixabay.com/photo/2016/11/06/23/19/spaghetti-1804457_1280.jpg",
      title: "Pasta Night",
      sub: "Italian · 2024",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/06/29/20/09/the-sushi-2456981_640.jpg",
      full: "https://cdn.pixabay.com/photo/2017/06/29/20/09/the-sushi-2456981_1280.jpg",
      title: "Sushi Art",
      sub: "Japanese · 2023",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg",
      full: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg",
      title: "Plated Perfection",
      sub: "Fine Dining · 2022",
    },
  ],
}

let activeCategory = "Cars"
let currentIndex = 0
let activeImg = "A"

const imgA = document.getElementById("imgA")
const imgB = document.getElementById("imgB")
const cardTitle = document.getElementById("cardTitle")
const cardSub = document.getElementById("cardSub")
const counter = document.getElementById("counter")
const catBadge = document.getElementById("catBadge")
const counterSmall = document.getElementById("counterSmall")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightboxImg")
const lightboxClose = document.getElementById("lightboxClose")
const lightboxBackdrop = document.getElementById("lightboxBackdrop")
const imageWrap = document.getElementById("imageWrap")
const myBackground = document.getElementById("background")
const myCategories = document.getElementById("categories")

Object.entries(categories).forEach(([catName, photos]) => {
  photos.forEach((photo, i) => {
    const layer = document.createElement("div")
    layer.className = "by-layer"
    layer.style.backgroundImage = "url(${photo.full})"
    layer.id = "bg-${catName}-${i}"
    myBackground.appendChild(layer)
  })
})

Object.keys(categories).forEach(catName => {
  const btn = document.createElement("button")
  btn.className = "cat-btn" + (catName === activeCategory ? " active" : "")
  btn.textContent = catName

  btn.addEventListener("click", () => {
    activeCategory = catName
    currentIndex = 0
    document
      .querySelectorAll(".cat-btn")
      .forEach(b => b.classList.remove("active"))
    btn.classList.add("active")
    showPhoto(0)
  })

  myCategories.appendChild(btn)
})

function showPhoto(index) {
  const photos = categories[activeCategory]
  const photo = photos[index]

  const incoming = activeImg === "A" ? imgB : imgA
}
//showing photos//
function showPhoto(index) {
  const photos = categories[activeCategory]
  const photo = photos[index]

  const incoming = activeImg === "A" ? imgB : imgA
  const outgoing = activeImg === "A" ? imgA : imgB

  incoming.src = photo.src
  incoming.onload = () => {
    // start loading the image // wait until it has fully loaded, THEN run this //
    incoming.classList.add("active")
    outgoing.classList.remove("active")
    activeImg = activeImg === "A" ? "B" : "A"
  }

  document
    .querySelectorAll(".bg-layer")
    .forEach(l => l.classList.remove("active"))
  document
    .getElementById(`bg-${activeCategory}-${index}`)
    .classList.add("active")

  cardTitle.textContent = photo.title
  cardSub.textContent = photo.sub
  catBadge.textContent = activeCategory
  counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`
  counterSmall.textContent = `${index + 1} / ${photos.length}`
  prevBtn.disabled = index === 0
  nextBtn.disabled = index === photos.length - 1
}

//buttons
nextBtn.addEventListener("click", () => {
  const total = categories[activeCategory].length
  if (currentIndex < total - 1) {
    currentIndex++
    showPhoto(currentIndex)
  }
})

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--
    showPhoto(currentIndex)
  }
})

//keyboard
document.addEventListener("keydown", e => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "Escape") closeLightbox()
    return
  }
  if (e.key === "ArrowRight") nextBtn.click()
  if (e.key === "ArrowLeft") prevBtn.click()
})
