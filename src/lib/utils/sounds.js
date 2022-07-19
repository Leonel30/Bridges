import backSound from "../../assets/sounds/Background/birdsBg.mp3"

import typewriter from "../../assets/sounds/typewriter.mp3"
import hover from "../../assets/sounds/buttons/hover.wav"

import clickBasic from "../../assets/sounds/buttons/clickBasic.wav"
import shortClick from "../../assets/sounds/buttons/shortClick.wav"
import confirm from "../../assets/sounds/buttons/confirm.wav"
import midiGood from "../../assets/sounds/buttons/midiGood.wav"

import positive from "../../assets/sounds/buttons/positivo.wav"
import negative from "../../assets/sounds/buttons/negativo.wav"
import dice from "../../assets/sounds/buttons/dice.mp3"

import fanfare from "../../assets/sounds/feedback/fanfare.wav"
import fanfareCard from "../../assets/sounds/feedback/fanfareCard.wav"
import shortFanfare from "../../assets/sounds/feedback/shortFanfare.wav"
import roll from "../../assets/sounds/feedback/roll.mp3"

import welcome1 from "../../assets/sounds/narrative/welcome1.mp3"
import welcome2 from "../../assets/sounds/narrative/welcome2.mp3"
import welcome3 from "../../assets/sounds/narrative/welcome3.mp3"
import welcome4 from "../../assets/sounds/narrative/welcome4.mp3"
import welcome5 from "../../assets/sounds/narrative/welcome5.mp3"
import welcome6 from "../../assets/sounds/narrative/welcome6.mp3"

import CardSlide from "../../assets/sounds/slider/CardSlide.mp3"
import strongFast from "../../assets/sounds/slider/strongFast.wav" 

const s = {
  typewriter, hover, clickBasic, negative, positive, confirm, dice, midiGood,
  //narrative
  welcome1, welcome2, welcome3, welcome4, welcome5, welcome6,
}
//volume set defaults... you should only change general volume
const sounds = {
  //Current states: are mutable. On change should revisit the whole tree
  volume: 1,
  muted: false,
  test: false,

  //Audio library <<<<<<<<<<<<<<<<<<<<<<<<<<<
  bg: {
    muted: false,
    current: "main",
    channels: {
      main: {
        muted: false,
        tracks: [
          {volume: 0.01, track: new Audio(backSound)}
        ] //volume is percentage of general volume
      }
    }
  }, 
  sfx: { //modulated by general volume or volume sent through func
    shortClick: {volume: 0.5, track: new Audio(shortClick)},
    CardSlide: {volume: 1, track: new Audio(CardSlide)},
    strongFast: {volume: 1, track: new Audio(strongFast)},
    fanfare: {volume: 0.3, track: new Audio(fanfare)},
    shortFanfare: {volume: 0.5, track: new Audio(shortFanfare)},
    fanfareCard: {volume: 0.5, track: new Audio(fanfareCard)},
    roll: {volume: 0.3, track: new Audio(roll)},
  },
  //TODO:
  channels: { //groups audios that should play in conjunction
    //name: {volume: 1, muted: false, tracks: [
      //{volume: 1, track: new Audio(something)]}
  },
  
  //Controls:
  pauseAll: function(){for(const key in this.sfx) this.sfx[key].track.pause()}, //REFACTOR
  toggleMute: function(set){this.muted = set !== undefined ? set : !this.muted; this.changeVolume(); return this.muted}, 
  changeVolume: function(vol, key, channel, track){ //Send without vol to just update changes
    if(vol){
      if(!key) this.volume = vol
      else {
        const _type = this[key]
        if(!channel) _type.volume = vol
        else {
          const ch = _type[channel]
          if(!track) ch.volume = vol
          else ch[track].volume = vol
        }
      }
    }
    //Change bg Volumes
    setBgVolume()
    //Now SFX
    for( const key in this.sfx) this.sfx[key].track.volume = this.muted ? 0 : this.volume * this.sfx[key].volume
    //Now channels
    for(let key in this.channels){
      for( let track in this.channels[key]) this.channels[key][track].track.volume = this.muted ? 
        0 : this.channels[key].muted ? 0 : this.channels[key][track].muted ? 0 : 
        this.volume * this.channels[key].volume * this.channels[key][track].volume
    }
  },
  
  //SFX
  set: function(key, volume){this.sfx[key] = {volume: volume !== undefined ? volume : 1, track: new Audio(s[key])}},
  play: function(key, volume, loop = false){ //Only SFX
    if(!this.sfx[key]) this.set(key, volume)
    const vol = this.muted ? 0 : this.volume * (volume !== undefined ?  volume : this.sfx[key].volume)
    this.sfx[key].track.currentTime = 0
    this.sfx[key].track.volume = vol
    this.sfx[key].track.loop = loop
    this.sfx[key].track.play()
  },
  pause: function(key){ //ONLY FOR SFX
    if(this.sfx[key]) this.sfx[key].track.pause()
  },
  
  pauseAllSfx: function(){
    for(const key in this.sfx) this.sfx[key].track.pause()
  },
  playAllSfx: function(){
    for(const key in this.sfx) this.sfx[key].track.play()
  },
  //Channels
  playChannel: () =>{
    for(let key in this.channels){
      for( let track in this.channels[key]){ 
        this.channels[key][track].track.volume = this.muted ? 
          0 : this.channels[key].muted ? 0 : this.channels[key][track].muted ? 0 : 
          this.volume * this.channels[key].volume * this.channels[key][track].volume
        this.channels[key][track].track.play()
      }
    }
  },
  
}

const volume = (vol) => sounds.volume * vol

const setBgVolume = (play, reset) => {
  for(const tag in sounds.bg.channels){
    const channel = sounds.bg.channels[tag]
    const tracks = channel.tracks
    for(const track of tracks){
      if(play) track.track.loop = true
      if(reset) track.track.currentTime = 0
      track.track.volume = sounds.test ? 0 : sounds.muted ? 0 : channel.muted ? 0 : track.muted ? 0 : volume(track.volume || 1)
      if(play && track.track.paused) track.track.play()
    }
  }
}

const playBackground = () =>{
  window.removeEventListener("click", playBackground)
  console.log("Playing BG", sounds.bg)
  setBgVolume(true, true) //true plays and set loop, second true reset
}

window.addEventListener("click", playBackground)

export default sounds;