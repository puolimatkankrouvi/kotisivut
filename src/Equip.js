import React,{Component} from 'react';
import './Equip.css';
import Image from './Image.js';

class Equip extends Component{

  render(){
    return(
      <div>
        <h1>Musical Equipment</h1>
        <h2>Korg M50 Synth</h2>
        <a href={require("./m50.jpg")}>
          <img class="equip" src={require("./m50.jpg")} />
        </a>
        <div class="equip_text">
          <p>Bought this one new in November 2008, right when it was released. It has become a solid workhorse with many custom made patches. Right now the joystick is broken so it sticks to the left a bit, making it out of tune (flat), but I have disabled the pitch bend to the left on the patches I use.</p>
          <p>Best sounds are pads, choirs, bells — classic Korg sounds. Pianos are noticeably better than Triton series, overall the pianos seem to be the sound that improves on newer modules in any manufacturer. Organs can sound plastic in spite of programming, a far cry from clonewheel.</p>
        </div>
        <h2>Schecter Solo-6 Standard guitar</h2>
        <a href={require("./kitarakamat.jpg")}>
          <img class="equip" src={require("./kitarakamat.jpg")} />
        </a>
        <div class="equip_text">
          <p>With hardtail bridge there is no need to adjust with Floyd Rose. The pickups might get changed some day.</p>
        </div>

        <h2>Blackstar ID15 Guitar amp</h2>
        <p>Mostly using the OD1, OD2 and Clean Warm channels. 15 watts is enough for bedroom rock n' roll. On effects I use delay and occasionally flanger and delay.</p>
      </div>
		);
	}
}

export default Equip;