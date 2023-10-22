const parseUrl = 'https://api.rss2json.com/v1/api.json?rss_url='

const RSS_URL = `https://anchor.fm/s/5cf3cd00/podcast/rss`

let all_songs = []
fetch(parseUrl + RSS_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const item = data.items
    console.log(item.length)
    length = item.length
    // load_track(index_no)

    // return all_songs
  })

let previous = document.querySelector('#pre')
let play = document.querySelector('#play')
let next = document.querySelector('#next')
let title = document.querySelector('#title')
let recent_volume = document.querySelector('#volume')
let volume_show = document.querySelector('#volume_show')
let slider = document.querySelector('#duration_slider')
let show_duration = document.querySelector('#show_duration')
let track_image = document.querySelector('#track_image')
let auto_play = document.querySelector('#auto')
let present = document.querySelector('#present')
let total = document.querySelector('#total')
let artist = document.querySelector('#artist')

let timer
let autoplay = 0

let index_no = 0
let Playing_song = false

//create a audio Element
let track = document.createElement('audio')

//All songs list
let All_song = [
  {
    title: 'Mozzafiato',
    link: 'https://anchor.fm/s/5cf3cd00/podcast/play/35149697/https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-5-9/17f52244-9d27-3bd9-251f-1a307050ae7e.mp3',
    thumbnail:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/15494816/15494816-1623245862191-3c8ca984a541e.jpg',
    author: 'covidYODHA',
  },
  {
    title: 'Mozzafiato',
    link: 'https://anchor.fm/s/5cf3cd00/podcast/play/34818180/https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-5-4/193413570-44100-2-b8d985634a4ea.m4a',
    thumbnail:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/15494816/15494816-1622803287592-3cca2b40c0321.jpg',
    author: 'covidYODHA',
  },
  {
    title: 'Mozzafiato',
    link: 'https://anchor.fm/s/5cf3cd00/podcast/play/35667756/https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-5-17/e3102c77-5604-c8fd-8345-2f746ed2e122.mp3',
    thumbnail:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/15494816/15494816-1623943771040-f00627ecdae99.jpg',
    author: 'covidYODHA',
  },
]

// All functions

// function load the track
function load_track(index_no) {
  clearInterval(timer)
  reset_slider()

  track.src = All_song[index_no].link
  title.innerHTML = All_song[index_no].title
  track_image.src = All_song[index_no].thumbnail
  artist.innerHTML = All_song[index_no].author
  track.load()

  timer = setInterval(range_slider, 1000)
  total.innerHTML = All_song.length
  present.innerHTML = index_no + 1
}
load_track(index_no)

//mute sound function
function mute_sound() {
  track.volume = 0
  volume.value = 0
  volume_show.innerHTML = 0
}

// checking.. the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong()
  } else {
    pausesong()
  }
}

// reset song slider
function reset_slider() {
  slider.value = 0
}

// play song
function playsong() {
  track.play()
  Playing_song = true
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
}

//pause song
function pausesong() {
  track.pause()
  Playing_song = false
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
}

// next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1
    load_track(index_no)
    playsong()
  } else {
    index_no = 0
    load_track(index_no)
    playsong()
  }
}

// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1
    load_track(index_no)
    playsong()
  } else {
    index_no = All_song.length
    load_track(index_no)
    playsong()
  }
}

// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value
  track.volume = recent_volume.value / 100
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100)
  track.currentTime = slider_position
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0
    auto_play.style.background = 'rgba(255,255,255,0.2)'
  } else {
    autoplay = 1
    auto_play.style.background = '#FF8A65'
  }
}

function range_slider() {
  let position = 0

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration)
    slider.value = position
  }

  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
    if (autoplay == 1) {
      index_no += 1
      load_track(index_no)
      playsong()
    }
  }
}
