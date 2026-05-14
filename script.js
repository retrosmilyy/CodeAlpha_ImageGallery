const photos = [
  {
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80",
    full: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1400&q=90",
    title: "Golden Hour Reverie",
    sub: "Elena Voss · 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600&q=80",
    full: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1400&q=90",
    title: "Cerulean Depths",
    sub: "Marco Albini · 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=80",
    full: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1400&q=90",
    title: "Verdant Stillness",
    sub: "Saoirse Flynn · 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&q=80",
    full: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1400&q=90",
    title: "Ember Song",
    sub: "Jude Ramirez · 2022",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    full: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=90",
    title: "Alpine Solitude",
    sub: "Freya Nordström · 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    full: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=90",
    title: "Summit Light",
    sub: "Kai Watanabe · 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&q=80",
    full: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1400&q=90",
    title: "Autumn Threshold",
    sub: "Amara Diallo · 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    full: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=90",
    title: "Shore at Dusk",
    sub: "Tomás Rivera · 2022",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    full: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=90",
    title: "Passage of Gold",
    sub: "Nina Osei · 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1735405659018-b63cdfc215de?q=80",
    full: "https://images.unsplash.com/photo-1735405659018-b63cdfc215de?q=90",
    title: "Portrait in Blue",
    sub: "Isabelle Caron · 2024",
  },
]

let current = 0

const imgA = document.getElementById("imgA")
const imgB = document.getElementById("imgB")
const title = document.getElementById("cardTitle")
const sub = document.getElementById("cardSub")
const counter = document.getElementById("counter")
const counterSmall = document.getElementById("counterSmall")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightboxImg")
const closeBtn = document.getElementById("lightboxClose")
const backdrop = document.getElementById("lightboxBackdrop")
const wrap = document.getElementById("imageWrap")
const bg = document.getElementById("background")

photos.forEach((p, i) => {
  const div = document.createElement("div")
  div.className = "bg-layer" + (i === 0 ? " active" : "")
  div.style.backgroundImage = `url(${p.full})`
  div.id = "bg-" + i
  bg.appendChild(div)
})

function showPhoto(i) {
  const p = photos[i]

  const show = imgA.classList.contains("active") ? imgB : imgA
  const hide = imgA.classList.contains("active") ? imgA : imgB

  show.src = p.src
  show.onload = () => {
    show.classList.add("active")
    hide.classList.remove("active")
  }

  document
    .querySelectorAll(".bg-layer")
    .forEach(b => b.classList.remove("active"))
  document.getElementById("bg-" + i).classList.add("active")

  title.textContent = p.title
  sub.textContent = p.sub

  counter.textContent = `${i + 1} / ${photos.length}`
  counterSmall.textContent = `${i + 1} / ${photos.length}`

  prevBtn.disabled = i === 0
  nextBtn.disabled = i === photos.length - 1
}

nextBtn.onclick = () => current < photos.length - 1 && showPhoto(++current)
prevBtn.onclick = () => current > 0 && showPhoto(--current)

wrap.onclick = () => {
  lightbox.classList.add("open")
  lightboxImg.src = photos[current].full
}

closeBtn.onclick = () => lightbox.classList.remove("open")
backdrop.onclick = () => lightbox.classList.remove("open")

document.onkeydown = e => {
  if (e.key === "ArrowRight") nextBtn.click()
  if (e.key === "ArrowLeft") prevBtn.click()
  if (e.key === "Escape") lightbox.classList.remove("open")
}

showPhoto(current)
