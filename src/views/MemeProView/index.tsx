import { FC, useState } from "react"
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'

export const MemeProView: FC = ({ }) => {

  //MemeGenerator related
  const [rcpage, setRudeCansPage] = useState(1)
  const nextRudeCansPage = async () => {
    if (rcpage < 7) {
      setRudeCansPage(rcpage + 1)
    }
    else {
      setRudeCansPage(1)
    }
  }

  const prevRudeCansPage = async () => {
    if (rcpage > 1) {
      setRudeCansPage(rcpage - 1)
    }
    else {
      setRudeCansPage(7)
    }
  }

  const [dead_left, setDead_left] = useState(false)
  const [dead_right, setDead_right] = useState(false)

  //GEN2
  const bg1 = './gen2_layer/bg/blue.png';
  const bg2 = './gen2_layer/bg/grey.png';
  const bg3 = './gen2_layer/bg/invertedsolana.png';
  const bg4 = './gen2_layer/bg/pink.png';
  const bg5 = './gen2_layer/bg/red.png';
  const bg6 = './gen2_layer/bg/solana.png';
  const bg7 = './gen2_layer/bg/turqoise.png';
  const bg8 = './gen2_layer/bg/violet.png';
  const bg9 = './gen2_layer/bg/yellow.png';
  const bgs = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9]
  const [selectedGen2BG, setselectedGen2BG] = useState(bgs[0])
  const handleBGChange = (e: any) => {
    setselectedGen2BG(bgs[e.target.value])
  };

  const body1_left = './gen2_layer/body_left/none.png';
  const body2_left = './gen2_layer/body_left/ese.png';
  const body3_left = './gen2_layer/body_left/illness.png';
  const body4_left = './gen2_layer/body_left/invertedsolana.png';
  const body5_left = './gen2_layer/body_left/invisiblerich.png';
  const body6_left = './gen2_layer/body_left/multipleillness.png';
  const body7_left = './gen2_layer/body_left/solana.png';
  const body8_left = './gen2_layer/body_left/white.png';
  const body9_left = './gen2_layer/body_left/bro.png';
  const bodies_left = [body1_left, body2_left, body3_left, body4_left, body5_left, body6_left, body7_left, body8_left, body9_left]
  const [selectedGen2Body_left, setselectedGen2Body_left] = useState(bodies_left[0])
  const handleBodyLeftChange = (e: any) => {
    setselectedGen2Body_left(bodies_left[e.target.value])
  };

  const body1_right = './gen2_layer/body_right/none.png';
  const body2_right = './gen2_layer/body_right/ese.png';
  const body3_right = './gen2_layer/body_right/illness.png';
  const body4_right = './gen2_layer/body_right/invertedsolana.png';
  const body5_right = './gen2_layer/body_right/invisiblerich.png';
  const body6_right = './gen2_layer/body_right/multipleillness.png';
  const body7_right = './gen2_layer/body_right/solana.png';
  const body8_right = './gen2_layer/body_right/white.png';
  const body9_right = './gen2_layer/body_right/bro.png';
  const bodies_right = [body1_right, body2_right, body3_right, body4_right, body5_right, body6_right, body7_right, body8_right, body9_right]
  const [selectedGen2Body_right, setselectedGen2Body_right] = useState(bodies_right[0])
  const handleBodyRightChange = (e: any) => {
    setselectedGen2Body_right(bodies_right[e.target.value])
  };

  const dna1_left = './gen2_layer/dna_left/nakedtruth.png';
  const dna2_left = './gen2_layer/dna_left/420boi.png';
  const dna3_left = './gen2_layer/dna_left/agent47.png';
  const dna4_left = './gen2_layer/dna_left/blood.png';
  const dna5_left = './gen2_layer/dna_left/burner.png';
  const dna6_left = './gen2_layer/dna_left/chapo.png';
  const dna7_left = './gen2_layer/dna_left/crip.png';
  const dna8_left = './gen2_layer/dna_left/escobar.png';
  const dna9_left = './gen2_layer/dna_left/ese.png';
  const dna10_left = './gen2_layer/dna_left/fisherman.png';
  const dna11_left = './gen2_layer/dna_left/gamer.png';
  const dna12_left = './gen2_layer/dna_left/heisenberg.png';
  const dna13_left = './gen2_layer/dna_left/king.png';
  const dna14_left = './gen2_layer/dna_left/metaboi.png';
  const dna15_left = './gen2_layer/dna_left/$SOLwarrior.png';
  const dna16_left = './gen2_layer/dna_left/pissedpants.png';
  const dna17_left = './gen2_layer/dna_left/pnsqrtboi.png';
  const dna18_left = './gen2_layer/dna_left/scarface.png';
  const dna19_left = './gen2_layer/dna_left/soljunkboi.png';
  const dna20_left = './gen2_layer/dna_left/soljunkgirl.png';
  const dna21_left = './gen2_layer/dna_left/soljunkgirlblonde.png';
  const dnas_left = [dna1_left, dna2_left, dna3_left, dna4_left, dna5_left, dna6_left, dna7_left, dna8_left, dna9_left, dna10_left, dna11_left, dna12_left, dna13_left,
    dna14_left, dna15_left, dna16_left, dna17_left, dna18_left, dna19_left, dna20_left, dna21_left]
  const [selectedGen2DNA_left, setselectedGen2DNA_left] = useState(dnas_left[0])
  const handleDNALeftChange = (e: any) => {
    setselectedGen2DNA_left(dnas_left[e.target.value])
  };

  const dna1_right = './gen2_layer/dna_right/nakedtruth.png';
  const dna2_right = './gen2_layer/dna_right/420boi.png';
  const dna3_right = './gen2_layer/dna_right/agent47.png';
  const dna4_right = './gen2_layer/dna_right/blood.png';
  const dna5_right = './gen2_layer/dna_right/burner.png';
  const dna6_right = './gen2_layer/dna_right/chapo.png';
  const dna7_right = './gen2_layer/dna_right/crip.png';
  const dna8_right = './gen2_layer/dna_right/escobar.png';
  const dna9_right = './gen2_layer/dna_right/ese.png';
  const dna10_right = './gen2_layer/dna_right/fisherman.png';
  const dna11_right = './gen2_layer/dna_right/gamer.png';
  const dna12_right = './gen2_layer/dna_right/heisenberg.png';
  const dna13_right = './gen2_layer/dna_right/king.png';
  const dna14_right = './gen2_layer/dna_right/metaboi.png';
  const dna15_right = './gen2_layer/dna_right/$SOLwarrior.png';
  const dna16_right = './gen2_layer/dna_right/pissedpants.png';
  const dna17_right = './gen2_layer/dna_right/pnsqrtboi.png';
  const dna18_right = './gen2_layer/dna_right/scarface.png';
  const dna19_right = './gen2_layer/dna_right/soljunkboi.png';
  const dna20_right = './gen2_layer/dna_right/soljunkgirl.png';
  const dna21_right = './gen2_layer/dna_right/soljunkgirlblonde.png';
  const dnas_right = [dna1_right, dna2_right, dna3_right, dna4_right, dna5_right, dna6_right, dna7_right, dna8_right, dna9_right, dna10_right,
    dna11_right, dna12_right, dna13_right, dna14_right, dna15_right, dna16_right, dna17_right, dna18_right, dna19_right, dna20_right, dna21_right]
  const [selectedGen2DNA_right, setselectedGen2DNA_right] = useState(dnas_right[0])
  const handleDNARightChange = (e: any) => {
    setselectedGen2DNA_right(dnas_right[e.target.value])
  };

  const mouth1_left = './gen2_layer/mouth_left/none.png';
  const mouth2_left = './gen2_layer/mouth_left/blunt.png';
  const mouth3_left = './gen2_layer/mouth_left/cigarette.png';
  const mouth4_left = './gen2_layer/mouth_left/goldegrillz.png';
  const mouth5_left = './gen2_layer/mouth_left/metaspliff.png';
  const mouth6_left = './gen2_layer/mouth_left/opened.png';
  const mouth7_left = './gen2_layer/mouth_left/sad.png';
  const mouth8_left = './gen2_layer/mouth_left/shineywhiteteeth.png';
  const mouth9_left = './gen2_layer/mouth_left/vapoballon.png';
  const mouth10_left = './gen2_layer/mouth_left/zomblunt.png';
  const mouth11_left = './gen2_layer/mouth_left/alienspliff.png';
  const mouth12_left = './gen2_layer/mouth_left/normal.png';
  const mouths_left = [mouth1_left, mouth2_left, mouth3_left, mouth4_left, mouth5_left, mouth6_left, mouth7_left, mouth8_left, mouth9_left, mouth10_left, mouth11_left, mouth12_left]
  const [selectedGen2Mouth_left, setselectedGen2Mouth_left] = useState(mouths_left[0])
  const handleMouthLeftChange = (e: any) => {
    setselectedGen2Mouth_left(mouths_left[e.target.value])
  };

  const mouth1_right = './gen2_layer/mouth_right/none.png';
  const mouth2_right = './gen2_layer/mouth_right/blunt.png';
  const mouth3_right = './gen2_layer/mouth_right/cigarette.png';
  const mouth4_right = './gen2_layer/mouth_right/goldengrillz.png';
  const mouth5_right = './gen2_layer/mouth_right/metaspliff.png';
  const mouth6_right = './gen2_layer/mouth_right/opened.png';
  const mouth7_right = './gen2_layer/mouth_right/sad.png';
  const mouth8_right = './gen2_layer/mouth_right/shineywhiteteeth.png';
  const mouth9_right = './gen2_layer/mouth_right/vapoballon.png';
  const mouth10_right = './gen2_layer/mouth_right/zomblunt.png';
  const mouth11_right = './gen2_layer/mouth_right/alienspliff.png';
  const mouth12_right = './gen2_layer/mouth_right/normal.png';
  const mouths_right = [mouth1_right, mouth2_right, mouth3_right, mouth4_right, mouth5_right, mouth6_right, mouth7_right, mouth8_right, mouth9_right, mouth10_right, mouth11_right, mouth12_right]
  const [selectedGen2Mouth_right, setselectedGen2Mouth_right] = useState(mouths_right[0])
  const handleMouthRightChange = (e: any) => {
    setselectedGen2Mouth_right(mouths_right[e.target.value])
  };

  const eye1_left = './gen2_layer/eyes_left/none.png';
  const eye2_left = './gen2_layer/eyes_left/bullish.png';
  const eye3_left = './gen2_layer/eyes_left/heisenberg.png';
  const eye4_left = './gen2_layer/eyes_left/heisenstoned.png';
  const eye5_left = './gen2_layer/eyes_left/left.png';
  const eye6_left = './gen2_layer/eyes_left/metaglasses.png';
  const eye7_left = './gen2_layer/eyes_left/normal.png';
  const eye8_left = './gen2_layer/eyes_left/red.png';
  const eye9_left = './gen2_layer/eyes_left/right.png';
  const eye10_left = './gen2_layer/eyes_left/soltear.png';
  const eye11_left = './gen2_layer/eyes_left/stoner.png';
  const eye12_left = './gen2_layer/eyes_left/stonergreen.png';
  const eye13_left = './gen2_layer/eyes_left/tee.png';
  const eye14_left = './gen2_layer/eyes_left/zombeyes.png';
  const eye15_left = './gen2_layer/eyes_left/alien.png';
  const eyes_left = [eye1_left, eye2_left, eye3_left, eye4_left, eye5_left, eye6_left, eye7_left, eye8_left, eye9_left,
    eye10_left, eye11_left, eye12_left, eye13_left, eye14_left, eye15_left]
  const [selectedGen2Eye_left, setselectedGen2Eye_left] = useState(eyes_left[0])
  const handleEyesLeftChange = (e: any) => {
    setselectedGen2Eye_left(eyes_left[e.target.value])
  };

  const eye1_right = './gen2_layer/eyes_right/none.png';
  const eye2_right = './gen2_layer/eyes_right/bullish.png';
  const eye3_right = './gen2_layer/eyes_right/heisenberg.png';
  const eye4_right = './gen2_layer/eyes_right/heisenstoned.png';
  const eye5_right = './gen2_layer/eyes_right/left.png';
  const eye6_right = './gen2_layer/eyes_right/metaglasses.png';
  const eye7_right = './gen2_layer/eyes_right/normal.png';
  const eye8_right = './gen2_layer/eyes_right/red.png';
  const eye9_right = './gen2_layer/eyes_right/right.png';
  const eye10_right = './gen2_layer/eyes_right/soltear.png';
  const eye11_right = './gen2_layer/eyes_right/stoner.png';
  const eye12_right = './gen2_layer/eyes_right/stonergreen.png';
  const eye13_right = './gen2_layer/eyes_right/tee.png';
  const eye14_right = './gen2_layer/eyes_right/zombeyes.png';
  const eye15_right = './gen2_layer/eyes_right/alien.png';
  const eyes_right = [eye1_right, eye2_right, eye3_right, eye4_right, eye5_right, eye6_right, eye7_right, eye8_right, eye9_right,
    eye10_right, eye11_right, eye12_right, eye13_right, eye14_right, eye15_right]
  const [selectedGen2Eye_right, setselectedGen2Eye_right] = useState(eyes_right[0])
  const handleEyesRightChange = (e: any) => {
    setselectedGen2Eye_right(eyes_right[e.target.value])
  };

  const chain1_left = './gen2_layer/chains_left/none.png';
  const chain2_left = './gen2_layer/chains_left/2chainz.png';
  const chain3_left = './gen2_layer/chains_left/alien.png';
  const chain4_left = './gen2_layer/chains_left/gamer.png';
  const chain5_left = './gen2_layer/chains_left/gold.png';
  const chain6_left = './gen2_layer/chains_left/inforthetech.png';
  const chain7_left = './gen2_layer/chains_left/silver.png';
  const chain8_left = './gen2_layer/chains_left/silvergoldcross.png';
  const chain9_left = './gen2_layer/chains_left/solchain.png';
  const chain10_left = './gen2_layer/chains_left/$SOLCross.png';
  const chains_left = [chain1_left, chain2_left, chain3_left, chain4_left, chain5_left, chain6_left, chain7_left, chain8_left, chain9_left, chain10_left]
  const [selectedGen2Chain_left, setselectedGen2Chain_left] = useState(chains_left[0])
  const handleChainLeftChange = (e: any) => {
    setselectedGen2Chain_left(chains_left[e.target.value])
  };

  const chain1_right = './gen2_layer/chains_right/none.png';
  const chain2_right = './gen2_layer/chains_right/2chainz.png';
  const chain3_right = './gen2_layer/chains_right/alien.png';
  const chain4_right = './gen2_layer/chains_right/gamer.png';
  const chain5_right = './gen2_layer/chains_right/gold.png';
  const chain6_right = './gen2_layer/chains_right/inforthetech.png';
  const chain7_right = './gen2_layer/chains_right/silver.png';
  const chain8_right = './gen2_layer/chains_right/silvergoldcross.png';
  const chain9_right = './gen2_layer/chains_right/solchain.png';
  const chain10_right = './gen2_layer/chains_right/$SOLCross.png';
  const chains_right = [chain1_right, chain2_right, chain3_right, chain4_right, chain5_right, chain6_right, chain7_right, chain8_right, chain9_right, chain10_right]
  const [selectedGen2Chain_right, setselectedGen2Chain_right] = useState(chains_right[0])
  const handleChainRightChange = (e: any) => {
    setselectedGen2Chain_right(chains_right[e.target.value])
  };

  const object1_left = './gen2_layer/object_left/none.png';
  const object2_left = './gen2_layer/object_left/axe.png';
  const object3_left = './gen2_layer/object_left/bat.png';
  const object4_left = './gen2_layer/object_left/bloodybat.png';
  const object5_left = './gen2_layer/object_left/bloodyknife.png';
  const object6_left = './gen2_layer/object_left/bloodymarill.png';
  const object7_left = './gen2_layer/object_left/bottle.png';
  const object8_left = './gen2_layer/object_left/burner.png';
  const object9_left = './gen2_layer/object_left/butcher.png';
  const object10_left = './gen2_layer/object_left/granade.png';
  const object11_left = './gen2_layer/object_left/gun.png';
  const object12_left = './gen2_layer/bobject_left/hammer.png';
  const object13_left = './gen2_layer/object_left/knife.png';
  const object14_left = './gen2_layer/object_left/lean.png';
  const object15_left = './gen2_layer/object_left/lid.png';
  const object16_left = './gen2_layer/object_left/lucille.png';
  const object17_left = './gen2_layer/object_left/machinegun.png';
  const object18_left = './gen2_layer/object_left/molotov.png';
  const object19_left = './gen2_layer/object_left/plunger.png';
  const object20_left = './gen2_layer/object_left/scepter.png';
  const object21_left = './gen2_layer/object_left/solwarrior.png';
  const object22_left = './gen2_layer/object_left/sword.png';
  const object23_left = './gen2_layer/object_left/taser.png';
  const object24_left = './gen2_layer/object_left/ak.png';
  const objects_left = [object1_left, object2_left, object3_left, object4_left, object5_left, object6_left, object7_left, object8_left, object9_left, object10_left, object11_left,
    object12_left, object13_left, object14_left, object15_left, object16_left, object17_left, object18_left, object19_left,
    object20_left, object21_left, object22_left, object23_left, object24_left]
  const [selectedGen2Object_left, setselectedGen2Object_left] = useState(objects_left[0])
  const handleGen2ObjectLeftChange = (e: any) => {
    setselectedGen2Object_left(objects_left[e.target.value])
  };

  const object1_right = './gen2_layer/object_right/none.png';
  const object2_right = './gen2_layer/object_right/axe.png';
  const object3_right = './gen2_layer/object_right/bat.png';
  const object4_right = './gen2_layer/object_right/bloodybat.png';
  const object5_right = './gen2_layer/object_right/bloodyknife.png';
  const object6_right = './gen2_layer/object_right/bloodymarill.png';
  const object7_right = './gen2_layer/object_right/bottle.png';
  const object8_right = './gen2_layer/object_right/burner.png';
  const object9_right = './gen2_layer/object_right/butcher.png';
  const object10_right = './gen2_layer/object_right/granade.png';
  const object11_right = './gen2_layer/object_right/gun.png';
  const object12_right = './gen2_layer/bobject_right/hammer.png';
  const object13_right = './gen2_layer/object_right/knife.png';
  const object14_right = './gen2_layer/object_right/lean.png';
  const object15_right = './gen2_layer/object_right/lid.png';
  const object16_right = './gen2_layer/object_right/lucille.png';
  const object17_right = './gen2_layer/object_right/machinegun.png';
  const object18_right = './gen2_layer/object_right/molotov.png';
  const object19_right = './gen2_layer/object_right/plunger.png';
  const object20_right = './gen2_layer/object_right/scepter.png';
  const object21_right = './gen2_layer/object_right/solwarrior.png';
  const object22_right = './gen2_layer/object_right/sword.png';
  const object23_right = './gen2_layer/object_right/taser.png';
  const object24_right = './gen2_layer/object_right/ak.png';
  const objects_right = [object1_right, object2_right, object3_right, object4_right, object5_right, object6_right, object7_right, object8_right, object9_right, object10_right, object11_right,
    object12_right, object13_right, object14_right, object15_right, object16_right, object17_right, object18_right, object19_right,
    object20_right, object21_right, object22_right, object23_right, object24_right]
  const [selectedGen2Object_right, setselectedGen2Object_right] = useState(objects_right[0])
  const handleGen2ObjectRightChange = (e: any) => {
    setselectedGen2Object_right(objects_right[e.target.value])
  };

  const prob1 = './gen2_layer/probs/none.png';
  const prob2 = './gen2_layer/probs/0xsol1d.png';
  const prob3 = './gen2_layer/probs/0xsold1er.png';
  const prob4 = './gen2_layer/probs/can.png';
  const prob5 = './gen2_layer/probs/cet.png';
  const prob6 = './gen2_layer/probs/cetjunk.png';
  const prob7 = './gen2_layer/probs/cets.png';
  const prob8 = './gen2_layer/probs/customer.png';
  const prob9 = './gen2_layer/probs/deadtrash.png';
  const prob10 = './gen2_layer/probs/invisiblesolanaboi.png';
  const prob11 = './gen2_layer/probs/king.png';
  const prob12 = './gen2_layer/probs/lean.png';
  const prob13 = './gen2_layer/probs/rug.png';
  const prob14 = './gen2_layer/probs/tarde.png';
  const prob15 = './gen2_layer/probs/temporaryg.png';
  const prob16 = './gen2_layer/probs/truk.png';
  const prob17 = './gen2_layer/probs/truktrukjunk.png';
  const prob18 = './gen2_layer/probs/zombiecustomer.png';
  const prob19 = './gen2_layer/probs/420.png';
  const probs = [prob1, prob2, prob3, prob4, prob5, prob6, prob7, prob8, prob9, prob10, prob11, prob12, prob13, prob14, prob15, prob16, prob17, prob18, prob19]
  const [selectedGen2Prob, setselectedGen2Prob] = useState(probs[0])
  const handleProbChange = (e: any) => {
    setselectedGen2Prob(probs[e.target.value])
  };

  const daylight_gen2_1 = './gen2_layer/daylight/day.png';
  const daylight_gen2_2 = './gen2_layer/daylight/night.png';
  const daylights_gen2 = [daylight_gen2_1, daylight_gen2_2]
  const [selectedGen2Daylight, setselectedGen2Daylight] = useState(daylights_gen2[0])
  const handleGen2DaylightChange = (e: any) => {
    console.log(e)
    setselectedGen2Daylight(daylights_gen2[e])
  };

  const speechbubble1_left = './gen2_layer/speechbubbles_left/1.png';
  const speechbubble2_left = './gen2_layer/speechbubbles_left/2.png';
  const speechbubble3_left = './gen2_layer/speechbubbles_left/3.png';
  const speechbubble4_left = './gen2_layer/speechbubbles_left/4.png';
  const speechbubble5_left = './gen2_layer/speechbubbles_left/5.png';
  const speechbubbles_left = [speechbubble1_left, speechbubble2_left, speechbubble3_left, speechbubble4_left, speechbubble5_left]
  const [selectedGen2Speechbubble_left, setselectedGen2Speechbubble_left] = useState(speechbubbles_left[5])
  const handleSpeechbubbleLeftChange = (e: any) => {
    setselectedGen2Speechbubble_left(speechbubbles_left[e.target.value])
  };

  const speechbubble1_right = './gen2_layer/speechbubbles_right/1.png';
  const speechbubble2_right = './gen2_layer/speechbubbles_right/2.png';
  const speechbubble3_right = './gen2_layer/speechbubbles_right/3.png';
  const speechbubble4_right = './gen2_layer/speechbubbles_right/4.png';
  const speechbubble5_right = './gen2_layer/speechbubbles_right/5.png';
  const speechbubbles_right = [speechbubble1_right, speechbubble2_right, speechbubble3_right, speechbubble4_right, speechbubble5_right]
  const [selectedGen2Speechbubble_right, setselectedGen2Speechbubble_right] = useState(speechbubbles_right[5])
  const handleSpeechbubbleRightChange = (e: any) => {
    setselectedGen2Speechbubble_right(speechbubbles_right[e.target.value])
  };

  const dead1_left = './gen2_layer/deads_left/none.png';
  const dead2_left = './gen2_layer/deads_left/ese.png';
  const dead3_left = './gen2_layer/deads_left/illness.png';
  const dead4_left = './gen2_layer/deads_left/invertedsolana.png';
  const dead5_left = './gen2_layer/deads_left/invisiblerich.png';
  const dead6_left = './gen2_layer/deads_left/multipleillness.png';
  const dead7_left = './gen2_layer/deads_left/solana.png';
  const dead8_left = './gen2_layer/deads_left/white.png';
  const dead9_left = './gen2_layer/deads_left/bro.png';
  const deads_left = [dead1_left, dead2_left, dead3_left, dead4_left, dead5_left, dead6_left, dead7_left, dead8_left, dead9_left]
  const [selectedGen2Dead_left, setselectedGen2Dead_left] = useState(deads_left[0])
  const handleDeadLeftChange = (e: any) => {
    setselectedGen2Dead_left(deads_left[e.target.value])
  };

  const dead1_right = './gen2_layer/deads_right/none.png';
  const dead2_right = './gen2_layer/deads_right/ese.png';
  const dead3_right = './gen2_layer/deads_right/illness.png';
  const dead4_right = './gen2_layer/deads_right/invertedsolana.png';
  const dead5_right = './gen2_layer/deads_right/invisiblerich.png';
  const dead6_right = './gen2_layer/deads_right/multipleillness.png';
  const dead7_right = './gen2_layer/deads_right/solana.png';
  const dead8_right = './gen2_layer/deads_right/white.png';
  const dead9_right = './gen2_layer/deads_right/bro.png';
  const deads_right = [dead1_right, dead2_right, dead3_right, dead4_right, dead5_right, dead6_right, dead7_right, dead8_right, dead9_right]
  const [selectedGen2Dead_right, setselectedGen2Dead_right] = useState(deads_right[0])
  const handleDeadRightChange = (e: any) => {
    setselectedGen2Dead_right(deads_right[e.target.value])
  };

  const overdose_prob_left1 = './gen2_layer/overdose_prob_left/none.png';
  const overdose_prob_left2 = './gen2_layer/overdose_prob_left/blood.png';
  const overdose_prob_left3 = './gen2_layer/overdose_prob_left/bomb.png';
  const overdose_prob_left4 = './gen2_layer/overdose_prob_left/burned.png';
  const overdose_prob_left5 = './gen2_layer/overdose_prob_left/piss.png';
  const overdose_prob_left6 = './gen2_layer/overdose_prob_left/puke.png';
  const overdose_prob_left7 = './gen2_layer/overdose_prob_left/sword.png';
  const overdose_prob_left8 = './gen2_layer/overdose_prob_left/trash.png';
  const overdose_prob_left9 = './gen2_layer/overdose_prob_left/truks.png';
  const overdose_probs_left = [overdose_prob_left1, overdose_prob_left2, overdose_prob_left3, overdose_prob_left4,
    overdose_prob_left5, overdose_prob_left6, overdose_prob_left7, overdose_prob_left8, overdose_prob_left9]
  const [selectedGen2Overdose_prob_left, setselectedGen2Overdose_prob_left] = useState(overdose_probs_left[0])
  const handleOverdoseProbLeftChange = (e: any) => {
    setselectedGen2Overdose_prob_left(overdose_probs_left[e.target.value])
  };

  const overdose_prob_right1 = './gen2_layer/overdose_prob_right/none.png';
  const overdose_prob_right2 = './gen2_layer/overdose_prob_right/blood.png';
  const overdose_prob_right3 = './gen2_layer/overdose_prob_right/bomb.png';
  const overdose_prob_right4 = './gen2_layer/overdose_prob_right/burned.png';
  const overdose_prob_right5 = './gen2_layer/overdose_prob_right/piss.png';
  const overdose_prob_right6 = './gen2_layer/overdose_prob_right/puke.png';
  const overdose_prob_right7 = './gen2_layer/overdose_prob_right/sword.png';
  const overdose_prob_right8 = './gen2_layer/overdose_prob_right/trash.png';
  const overdose_prob_right9 = './gen2_layer/overdose_prob_right/truks.png';
  const overdose_probs_right = [overdose_prob_right1, overdose_prob_right2, overdose_prob_right3, overdose_prob_right4,
    overdose_prob_right5, overdose_prob_right6, overdose_prob_right7, overdose_prob_right8, overdose_prob_right9]
  const [selectedGen2Overdose_prob_right, setselectedGen2Overdose_prob_right] = useState(overdose_probs_right[0])
  const handleOverdoseProbRightChange = (e: any) => {
    setselectedGen2Overdose_prob_right(overdose_probs_right[e.target.value])
  };

  const lettering1 = './gen2_layer/overdose_lettering/none.png';
  const lettering2 = './gen2_layer/overdose_lettering/botted.png';
  const lettering3 = './gen2_layer/overdose_lettering/burned.png';
  const lettering4 = './gen2_layer/overdose_lettering/done.png';
  const lettering5 = './gen2_layer/overdose_lettering/drained.png';
  const lettering6 = './gen2_layer/overdose_lettering/dumped.png';
  const lettering7 = './gen2_layer/overdose_lettering/fckwl.png';
  const lettering8 = './gen2_layer/overdose_lettering/ngmi.png';
  const lettering9 = './gen2_layer/overdose_lettering/pnsqrt.png';
  const lettering10 = './gen2_layer/overdose_lettering/rekt.png';
  const lettering11 = './gen2_layer/overdose_lettering/rugged.png';
  const lettering12 = './gen2_layer/overdose_lettering/tarded.png';
  const lettering13 = './gen2_layer/overdose_lettering/wasted.png';
  const letterings = [lettering1, lettering2, lettering3, lettering4, lettering5, lettering6,
    lettering7, lettering8, lettering9, lettering10, lettering11, lettering12, lettering13]
  const [selectedGen2lettering, setselectedGen2lettering] = useState(letterings[0])
  const handleLetteringChange = (e: any) => {
    setselectedGen2lettering(letterings[e.target.value])
  };

  //RUDECANS
  const rcbg1 = './rudecans_layer/bg/blue.png';
  const rcbg2 = './rudecans_layer/bg/grey.png';
  const rcbg3 = './rudecans_layer/bg/invertedsolana.png';
  const rcbg4 = './rudecans_layer/bg/pink.png';
  const rcbg5 = './rudecans_layer/bg/red.png';
  const rcbg6 = './rudecans_layer/bg/solana.png';
  const rcbg7 = './rudecans_layer/bg/turqoise.png';
  const rcbg8 = './rudecans_layer/bg/violet.png';
  const rcbg9 = './rudecans_layer/bg/yellow.png';
  const rcbg10 = './rudecans_layer/bg/alpine.png';
  const rcbg11 = './rudecans_layer/bg/bars.png';
  const rcbg12 = './rudecans_layer/bg/beach.png';
  const rcbg13 = './rudecans_layer/bg/case.png';
  const rcbg14 = './rudecans_layer/bg/club.png';
  const rcbg15 = './rudecans_layer/bg/desert.png';
  const rcbg16 = './rudecans_layer/bg/detroit.png';
  const rcbg17 = './rudecans_layer/bg/dump1.png';
  const rcbg18 = './rudecans_layer/bg/fallen.png';
  const rcbg19 = './rudecans_layer/bg/ghosttown.png';
  const rcbg20 = './rudecans_layer/bg/harbour.png';
  const rcbg21 = './rudecans_layer/bg/hollywood.png';
  const rcbg22 = './rudecans_layer/bg/home.png';
  const rcbg23 = './rudecans_layer/bg/hood.png';
  const rcbg24 = './rudecans_layer/bg/house.png';
  const rcbg25 = './rudecans_layer/bg/kakaberg.png';
  const rcbg26 = './rudecans_layer/bg/moon.png';
  const rcbg27 = './rudecans_layer/bg/nsfw.png';
  const rcbg28 = './rudecans_layer/bg/oilpng';
  const rcbg29 = './rudecans_layer/bg/palace.png';
  const rcbg30 = './rudecans_layer/bg/plane.png';
  const rcbg31 = './rudecans_layer/bg/radioactive.png';
  const rcbg32 = './rudecans_layer/bg/redplanet.png';
  const rcbg33 = './rudecans_layer/bg/red.png';
  const rcbg34 = './rudecans_layer/bg/solana.png';
  const rcbg35 = './rudecans_layer/bg/somewhere.png';
  const rcbg36 = './rudecans_layer/bg/southcentral.png';
  const rcbg37 = './rudecans_layer/bg/square.png';
  const rcbg38 = './rudecans_layer/bg/thorne.png';
  const rcbg39 = './rudecans_layer/bg/trains.png';
  const rcbg40 = './rudecans_layer/bg/grey.png';
  const rcbg41 = './rudecans_layer/bg/invertedsolana.png';
  const rcbgs = [rcbg1, rcbg2, rcbg3, rcbg4, rcbg5, rcbg6, rcbg7, rcbg8, rcbg9, rcbg10, rcbg11, rcbg12, rcbg13, rcbg14, rcbg15, rcbg16, rcbg17, rcbg18, rcbg19, rcbg20, rcbg21, rcbg22, rcbg23, rcbg24, rcbg25, rcbg26, rcbg27, rcbg28, rcbg29, rcbg30, rcbg31, rcbg32, rcbg33, rcbg34, rcbg35, rcbg36, rcbg37, rcbg38, rcbg39, rcbg40, rcbg41]
  const [selectedRudeCansBG, setselectedRudeCansBG] = useState(rcbgs[9])
  const nextRudeCansBG = async () => {
    const currentIndex = rcbgs.indexOf(selectedRudeCansBG);
    const nextRudeCansIndex = (currentIndex + 1) % rcbgs.length;
    setselectedRudeCansBG(rcbgs[nextRudeCansIndex])
  }
  const prevRudeCansBG = async () => {
    const currentIndex = rcbgs.indexOf(selectedRudeCansBG);
    const nextRudeCansIndex = (currentIndex - 1) % rcbgs.length;
    if (nextRudeCansIndex < 0)
      setselectedRudeCansBG(rcbgs[rcbgs.length - 1])
    else
      setselectedRudeCansBG(rcbgs[nextRudeCansIndex])
  }

  const rcbody1 = './rudecans_layer/body/blue.png';
  const rcbody2 = './rudecans_layer/body/curved.png';
  const rcbody3 = './rudecans_layer/body/green.png';
  const rcbody4 = './rudecans_layer/body/invertedsol.png';
  const rcbody5 = './rudecans_layer/body/purple.png';
  const rcbody6 = './rudecans_layer/body/red.png';
  const rcbody7 = './rudecans_layer/body/silver.png';
  const rcbody8 = './rudecans_layer/body/sol.png';
  const rcbody9 = './rudecans_layer/body/yellow.png';
  const rcbodies = [rcbody1, rcbody2, rcbody3, rcbody4, rcbody5, rcbody6, rcbody7, rcbody8, rcbody9]
  const [selectedRudeCansBody, setselectedRudeCansBody] = useState(rcbodies[8])
  const nextRudeCansBody = async () => {
    const currentIndex = rcbodies.indexOf(selectedRudeCansBody);
    const nextRudeCansIndex = (currentIndex + 1) % rcbodies.length;
    setselectedRudeCansBody(rcbodies[nextRudeCansIndex])
  }
  const prevRudeCansBody = async () => {
    const currentIndex = rcbodies.indexOf(selectedRudeCansBody);
    const nextRudeCansIndex = (currentIndex - 1) % rcbodies.length;
    if (nextRudeCansIndex < 0)
      setselectedRudeCansBody(rcbodies[rcbodies.length - 1])
    else
      setselectedRudeCansBG(rcbodies[nextRudeCansIndex])
  }

  const rcmouth1 = './rudecans_layer/mouth/fake.png';
  const rcmouth2 = './rudecans_layer/mouth/greendot.png';
  const rcmouth3 = './rudecans_layer/mouth/nevertalk.png';
  const rcmouth4 = './rudecans_layer/mouth/notalking.png';
  const rcmouth5 = './rudecans_layer/mouth/opentetris.png';
  const rcmouth6 = './rudecans_layer/mouth/opened.png';
  const rcmouth7 = './rudecans_layer/mouth/recycle.png';
  const rcmouth8 = './rudecans_layer/mouth/tetris.png';
  const rcmouth9 = './rudecans_layer/mouth/toomuch.png';
  const rcmouths = [rcmouth1, rcmouth2, rcmouth3, rcmouth4, rcmouth5, rcmouth6, rcmouth7, rcmouth8, rcmouth9]
  const [selectedRudeCansMouth, setselectedRudeCansMouth] = useState(rcmouths[8])
  const nextRudeCansMouth = async () => {
    const currentIndex = rcmouths.indexOf(selectedRudeCansMouth);
    const nextRudeCansIndex = (currentIndex + 1) % rcmouths.length;
    setselectedRudeCansMouth(rcmouths[nextRudeCansIndex])
  }
  const prevRudeCansMouth = async () => {
    const currentIndex = rcmouths.indexOf(selectedRudeCansMouth);
    const nextRudeCansIndex = (currentIndex - 1) % rcmouths.length;
    if (nextRudeCansIndex < 0)
      setselectedRudeCansMouth(rcmouths[rcmouths.length - 1])
    else
      setselectedRudeCansMouth(rcmouths[nextRudeCansIndex])
  }

  const fist1 = './rudecans_layer/fists/blood.png';
  const fist2 = './rudecans_layer/fists/fackfinga.png';
  const fist3 = './rudecans_layer/fists/fight.png';
  const fist4 = './rudecans_layer/fists/fist.png';
  const fist5 = './rudecans_layer/fists/fuckfinga.png';
  const fist6 = './rudecans_layer/fists/fuckfingadouble.png';
  const fist7 = './rudecans_layer/fists/none.png';
  const fist8 = './rudecans_layer/fists/rolin.png';
  const fist9 = './rudecans_layer/fists/spliff.png';
  const fist10 = './rudecans_layer/fists/thugfinga.png';
  const fists = [fist1, fist2, fist3, fist4, fist5, fist6, fist7, fist8, fist9, fist10]
  const [selectedRudeCansFists, setselectedRudeCansFists] = useState(fists[0])
  const nextRudeCansFists = async () => {
    const currentIndex = fists.indexOf(selectedRudeCansFists);
    const nextRudeCansIndex = (currentIndex + 1) % fists.length;
    setselectedRudeCansFists(fists[nextRudeCansIndex])
  }
  const prevRudeCansFists = async () => {
    const currentIndex = fists.indexOf(selectedRudeCansFists);
    const nextRudeCansIndex = (currentIndex - 1) % fists.length;
    if (nextRudeCansIndex < 0)
      setselectedRudeCansFists(fists[fists.length - 1])
    else
      setselectedRudeCansFists(fists[nextRudeCansIndex])
  }

  const rceye1 = './rudecans_layer/eyes/baked.png';
  const rceye2 = './rudecans_layer/eyes/bored.png';
  const rceye3 = './rudecans_layer/eyes/cry.png';
  const rceye4 = './rudecans_layer/eyes/frightend.png';
  const rceye5 = './rudecans_layer/eyes/green.png';
  const rceye6 = './rudecans_layer/eyes/laser.png';
  const rceye7 = './rudecans_layer/eyes/morebored.png';
  const rceye8 = './rudecans_layer/eyes/normal.png';
  const rceye9 = './rudecans_layer/eyes/straight.png';
  const rceye10 = './rudecans_layer/eyes/tee.png';
  const rceyes = [rceye1, rceye2, rceye3, rceye4, rceye5, rceye6, rceye7, rceye8, rceye9, rceye10]
  const [selectedRudeCansEye, setselectedRudeCansEye] = useState(rceyes[8])
  const nextRudeCansEyes = async () => {
    const currentIndex = rceyes.indexOf(selectedRudeCansEye);
    const nextRudeCansIndex = (currentIndex + 1) % rceyes.length;
    setselectedRudeCansEye(rceyes[nextRudeCansIndex])
  }
  const prevRudeCansEyes = async () => {
    const currentIndex = rceyes.indexOf(selectedRudeCansEye);
    const nextRudeCansIndex = (currentIndex - 1) % rceyes.length;
    if (nextRudeCansIndex < 0)
      setselectedRudeCansEye(rceyes[rceyes.length - 1])
    else
      setselectedRudeCansEye(rceyes[nextRudeCansIndex])
  }

  const daylight1 = './rudecans_layer/daylight/day.png';
  const daylight2 = './rudecans_layer/daylight/night.png';
  const daylights = [daylight1, daylight2]
  const [selectedRudeCansDaylight, setselectedRudeCansDaylight] = useState(daylights[0])
  const nextRudeCansDaylight = async () => {
    const currentIndex = daylights.indexOf(selectedRudeCansDaylight);
    const nextRudeCansIndex = (currentIndex + 1) % daylights.length;
    setselectedRudeCansDaylight(daylights[nextRudeCansIndex])
  }
  const prevRudeCansDaylight = async () => {
    const currentIndex = daylights.indexOf(selectedRudeCansDaylight);
    const nextRudeCansIndex = (currentIndex - 1) % daylights.length;
    if (nextRudeCansIndex < 0)
      setselectedRudeCansDaylight(daylights[daylights.length - 1])
    else
      setselectedRudeCansDaylight(daylights[nextRudeCansIndex])
  }

  const proberty1 = './rudecans_layer/prob/agenda.png';
  const proberty2 = './rudecans_layer/prob/apec.png';
  const proberty3 = './rudecans_layer/prob/apple.png';
  const proberty4 = './rudecans_layer/prob/balenciaga.png';
  const proberty5 = './rudecans_layer/prob/bearmarket.png';
  const proberty6 = './rudecans_layer/prob/bodybag.png';
  const proberty7 = './rudecans_layer/prob/burn.png';
  const proberty8 = './rudecans_layer/prob/burningearth.png';
  const proberty9 = './rudecans_layer/prob/clown.png';
  const proberty10 = './rudecans_layer/prob/coke.png';
  const proberty11 = './rudecans_layer/prob/disney.png';
  const proberty12 = './rudecans_layer/prob/earth.png';
  const proberty13 = './rudecans_layer/prob/facebook.png';
  const proberty14 = './rudecans_layer/prob/fifa.png';
  const proberty15 = './rudecans_layer/prob/franke.png';
  const proberty16 = './rudecans_layer/prob/frankeCopy.png';
  const proberty17 = './rudecans_layer/prob/granddaddySchwab.png';
  const proberty18 = './rudecans_layer/prob/instagram.png';
  const proberty19 = './rudecans_layer/prob/lidnotfinished.png';
  const proberty20 = './rudecans_layer/prob/magicalparadise.png';
  const proberty21 = './rudecans_layer/prob/moneyman.png';
  const proberty22 = './rudecans_layer/prob/none.png';
  const proberty23 = './rudecans_layer/prob/pfizer.png';
  const proberty24 = './rudecans_layer/prob/rainbow.png';
  const proberty25 = './rudecans_layer/prob/sam.png';
  const proberty26 = './rudecans_layer/prob/silverlidclosed.png';
  const probertys = [proberty1, proberty2, proberty3, proberty4, proberty5, proberty6, proberty7, proberty8, proberty9, proberty10, proberty11, proberty12, proberty13, proberty14, proberty15, proberty16, proberty17, proberty18, proberty19, proberty20, proberty21, proberty22, proberty23, proberty24, proberty25, proberty26]
  const [selectedRudeCansProberty, setselectedRudeCansProberty] = useState(probertys[9])
  const nextRudeCansProberty = async () => {
    const currentIndex = probertys.indexOf(selectedRudeCansProberty);
    const nextRudeCansIndex = (currentIndex + 1) % probertys.length;
    setselectedRudeCansProberty(probertys[nextRudeCansIndex])
  }
  const prevRudeCansProberty = async () => {
    const currentIndex = probertys.indexOf(selectedRudeCansProberty);
    const nextRudeCansIndex = (currentIndex - 1) % probertys.length;
    if (nextRudeCansIndex < 0)
      setselectedRudeCansProberty(probertys[probertys.length - 1])
    else
      setselectedRudeCansProberty(probertys[nextRudeCansIndex])
  }

  //TEXT RELATED
  const [upperMsg, setUpperMsg] = useState('')
  const [lowerMsg, setLowerMsg] = useState('')

  const [upperTextSize, setUpperTextSize] = useState(3)
  const [lowerTextSize, setLowerTextSize] = useState(3)

  const saveImgDesktop = async () => {
    const canvas = await html2canvas(document.getElementById('canvasDesktop')!);
    const img = canvas.toDataURL('image/png');

    downloadjs(img, 'download.png', 'image/png');
  };

  const saveImgMobile = async () => {
    const canvas = await html2canvas(document.getElementById('canvasMobile')!);
    const img = canvas.toDataURL('image/png');

    downloadjs(img, 'download.png', 'image/png');
  };

  const HandleUpperMsgChange = async (e: any) => {
    setUpperMsg(e.target.value);
  };

  const HandleLowerMsgChange = async (e: any) => {
    setLowerMsg(e.target.value);
  };  

  return (
    <div className="font-trash">

      {/*HEADER------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

      <div className="navbar sticky top-0 z-50 text-neutral-content flex justify-between bg-base-200">
        <div>
          <img src="./logo_1.png" alt="logo" className="w-5/6" />
        </div>
        {/*<ConnectWallet />*/}
        <button className="btn btn-ghost bg-white font-trash uppercase text-black text-xl"
          onClick={saveImgMobile}>Download Image
        </button>
      </div>

      {/*MOBILE VIEW-------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="lg:hidden text-center">
        <div className="">
          {/* MEME CANVAS - START */}
          <div className="flex justify-center mt-4">
            <div className="w-[350px] h-[350px] container" id="canvasMobile">
              <div className="relative">
                <div>
                  {/* BG */}
                  <img src={selectedRudeCansBG} alt='' />
                  {/* Layer 1 */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedRudeCansBody} alt='' />
                  </span>
                  {/* Layer 2 */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedRudeCansMouth} alt='' />
                  </span>
                  {/* Layer 3 */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedRudeCansFists} alt='' />
                  </span>
                  {/* Layer 4 */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedRudeCansEye} alt='' />
                  </span>
                  {/* Layer 5 */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedRudeCansProberty} alt='' />
                  </span>
                  {/* Layer 6 */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedRudeCansDaylight} alt='' />
                  </span>
                </div>
                {/*UPPER MSG */}
                {upperTextSize == 1 &&
                  <h2 className="font-impact absolute text-3xl text-white top-4 left-1/2 -translate-x-1/2 break-words w-[90%] font-outline-1 uppercase">{upperMsg}</h2>
                }
                {upperTextSize == 2 &&
                  <h2 className="font-impact absolute text-4xl lg:text-6xl text-white top-4 left-1/2 -translate-x-1/2 break-words w-[90%] font-outline-1 lg:font-outline-2 uppercase">{upperMsg}</h2>
                }
                {upperTextSize == 3 &&
                  <h2 className="font-impact absolute text-6xl lg:text-9xl text-white top-4 left-1/2 -translate-x-1/2 break-words w-[90%] font-outline-1 lg:font-outline-4 uppercase">{upperMsg}</h2>
                }

                {/*LOWER MSG */}
                {lowerTextSize == 1 &&
                  <h2 className="font-impact absolute text-3xl text-white bottom-4 left-1/2 -translate-x-1/2 break-words w-[90%] font-outline-1 lg:font-outline-1 uppercase">{lowerMsg}</h2>
                }
                {lowerTextSize == 2 &&
                  <h2 className="font-impact absolute text-4xl lg:text-6xl text-white bottom-4 left-1/2 -translate-x-1/2 break-words w-[90%] font-outline-1 lg:font-outline-2 uppercase">{lowerMsg}</h2>
                }
                {lowerTextSize == 3 &&
                  <h2 className="font-impact absolute text-6xl lg:text-9xl text-white bottom-4 left-1/2 -translate-x-1/2 break-words w-[90%] font-outline-1 lg:font-outline-4 uppercase">{lowerMsg}</h2>
                }
              </div>
            </div>
          </div>
          {/* MEME CANVAS - END */}
        </div>
        <div className='flex justify-center mt-4 bg-base-200'>
          <div className=" grid grid-cols-5 p-3">
            <button className="text-lg btn btn-ghost bg-white text-black mr-5 col-span-1" onClick={() => prevRudeCansPage()}>⏪</button>
            {rcpage == 1 &&
              <button className="btn btn-ghost bg-white text-black rounded w-auto col-span-3" onClick={() => nextRudeCansBG()}>
                <h1 className="font-pixel">Change Background</h1>
              </button>
            }
            {rcpage == 2 &&
              <button className="btn btn-ghost bg-white text-black rounded w-auto col-span-3" onClick={() => nextRudeCansBody()}>
                <h1 className="col-span-1">Change Body</h1>
              </button>
            }
            {rcpage == 3 &&
              <button className="btn btn-ghost bg-white text-black rounded w-auto col-span-3" onClick={() => nextRudeCansMouth()}>
                <h1 className="col-span-1">Change Mouth</h1>
              </button>
            }
            {rcpage == 4 &&
              <button className="btn btn-ghost bg-white text-black rounded w-auto col-span-3" onClick={() => nextRudeCansFists()}>
                <h1 className="col-span-1">Change Fists</h1>
              </button>
            }
            {rcpage == 5 &&
              <button className="btn btn-ghost bg-white text-black rounded w-auto col-span-3" onClick={() => nextRudeCansEyes()}>
                <h1 className="col-span-1">Change Eyes</h1>
              </button>
            }
            {rcpage == 6 &&
              <button className="btn btn-ghost bg-white text-black rounded w-auto col-span-3" onClick={() => nextRudeCansProberty()}>
                <h1 className="col-span-1">Change Proberty</h1>
              </button>
            }
            {rcpage == 7 &&
              <button className="btn btn-ghost bg-white text-black rounded w-auto col-span-3" onClick={() => nextRudeCansDaylight()}>
                <h1 className="col-span-1">Change Daylight</h1>
              </button>
            }
            <button className="text-lg btn btn-ghost bg-white text-black h-full ml-5 col-span-1" onClick={() => nextRudeCansPage()}>⏩</button>
          </div>
        </div>
        <div className="flex justify-between p-2 gap-1 bg-base-200">
          <div className="w-full">
            <input className="text-black pl-1 border-1 border-black w-[100%] text-center h-10 rounded mr-5"
              type="text"
              required
              placeholder="Upper Text"
              maxLength={15}
              onChange={HandleUpperMsgChange}
            />
            <div className="flex justify-center gap-2 mt-1">
              <button className={` ${upperTextSize === 2 ? "bg-white text-black" : "bg-gray-700"} btn btn-sm btn-ghost`} onClick={() => setUpperTextSize(2)}>small</button>
              <button className={` ${upperTextSize === 3 ? "bg-white text-black" : "bg-gray-700"} btn btn-sm btn-ghost`} onClick={() => setUpperTextSize(3)}>BIG</button>
            </div>
          </div>
          <div className="w-full">
            <input className="text-black pl-1 border-1 border-black w-[100%] text-center h-10 rounded"
              type="text"
              required
              placeholder="Lower Text"
              maxLength={30}
              onChange={HandleLowerMsgChange}
            />
            <div className="flex justify-center gap-2 mt-1">
              <button className={` ${upperTextSize === 2 ? "bg-white text-black" : "bg-gray-700"} btn btn-sm btn-ghost`} onClick={() => setLowerTextSize(2)}>small</button>
              <button className={` ${upperTextSize === 3 ? "bg-white text-black" : "bg-gray-700"} btn btn-sm btn-ghost`} onClick={() => setLowerTextSize(3)}>BIG</button>
            </div>
          </div>
        </div>
        <div className="mt-1 flex justify-center p-2">
          {/*{sending == false &&
            <button className="btn btn-primary"
              onClick={CreateAndSendNFT}>Mint as NFT
            </button>}

          {sending == true &&
            <button className="btn btn-primary">
              <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>Minting</button>}

          {errorMsg != '' &&
            <div className="mt-[1%]">❌ Ohoh.. An error occurs: {errorMsg}
            </div>
          }

          {isSent &&
            <div className="text-xl mt-[5%]">
              ✅ Successfully minted!
            </div>}
          */}
        </div>
      </div>

      {/*DESKTOP VIEW------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="hidden lg:block">
        <div className='grid grid-cols-6'>
          {/*TOOLBAR MEMEMAKER*/}
          <div className="grid grid-rows-7 gap-4 bg-base-200 col-span-1 upopercase">
            <div className="p-2">
              <div className="flex justify-between items-center">
                <div className="text-center hidden lg:block">DAY</div>
                {selectedGen2Daylight == "./gen2_layer/daylight/day.png" &&
                  <button className="grid items-center" onClick={() => handleGen2DaylightChange(1)} >
                    <img src="./button/toggle_2.png" alt="tmp" />
                  </button>
                }
                {selectedGen2Daylight == "./gen2_layer/daylight/night.png" &&
                  <button className="grid items-center" onClick={() => handleGen2DaylightChange(0)} >
                    <img src="./button/toggle_1.png" alt="tmp" />
                  </button>
                }
                <div className="text-center hidden lg:block">NIGHT</div>
              </div>
              <div className="flex justify-between items-center"><div>BG:</div>
                <div>
                  <select onChange={handleBGChange} className="select select-xs bg-white text-black uppercase w-48">
                    <option value="0">BLUE</option>
                    <option value="1">GREY</option>
                    <option value="2">INVERTED SOLANA</option>
                    <option value="3">PINK</option>
                    <option value="4">RED</option>
                    <option value="5">SOLANA</option>
                    <option value="6">TURQOISE</option>
                    <option value="7">VIOLET</option>
                    <option value="8">YELLOW</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center"><div>PROP:</div>
                <div>
                  <select onChange={handleProbChange} className="select select-xs bg-white text-black uppercase w-48">
                    <option value="0">none</option>
                    <option value="1">0xSOL1D</option>
                    <option value="2">0xSOLD1ER</option>
                    <option value="3">CAN</option>
                    <option value="4">cet</option>
                    <option value="5">cet junk</option>
                    <option value="6">cets</option>
                    <option value="7">customer</option>
                    <option value="8">dead trash</option>
                    <option value="9">invisible bandana boi</option>
                    <option value="10">king</option>
                    <option value="11">lean</option>
                    <option value="12">rug</option>
                    <option value="13">tarde</option>
                    <option value="14">temporary g</option>
                    <option value="15">truk</option>
                    <option value="16">truktruk junk</option>
                    <option value="17">zombie customer</option>
                    <option value="18">420</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>LETTERING:</div>
                <div>
                  <select onChange={handleLetteringChange} className="select select-xs bg-white text-black uppercase w-48">
                    <option value="0">none</option>
                    <option value="1">botted</option>
                    <option value="2">burned</option>
                    <option value="3">done</option>
                    <option value="4">drained</option>
                    <option value="5">dumped</option>
                    <option value="6">fckwl</option>
                    <option value="7">ngmi</option>
                    <option value="8">pnsqrt</option>
                    <option value="9">rekt</option>
                    <option value="10">rugged</option>
                    <option value="11">tarded</option>
                    <option value="12">wasted</option>
                  </select>
                </div>
              </div>
              <div className="text-center mt-10">LEFT</div>

              <div className="flex justify-between items-center mb-4">
                <div className="text-center hidden lg:block">STANDING</div>
                {dead_left == false &&
                  <button className="grid items-center" onClick={() => setDead_left(true)} >
                    <img src="./button/toggle_2.png" alt="tmp" />
                  </button>
                }
                {dead_left == true &&
                  <button className="grid items-center" onClick={() => setDead_left(false)} >
                    <img src="./button/toggle_1.png" alt="tmp" />
                  </button>
                }
                <div className="text-center hidden lg:block">DEAD</div>
              </div>

              {!dead_left &&
                <div className="h-40">
                  <div className="flex justify-between items-center">
                    <div>BODY:</div>
                    <div>
                      <select onChange={handleBodyLeftChange} className="select select-xs bg-white text-black uppercase w-48">
                        <option value="0">NONE</option>
                        <option value="1">ESE</option>
                        <option value="2">ILLNESS</option>
                        <option value="3">INVERTED SOLANA</option>
                        <option value="4">INVISIBLE RICH</option>
                        <option value="5">MULTIPLE ILLNESS</option>
                        <option value="6">SOLANA</option>
                        <option value="7">WHITE</option>
                        <option value="8">BRO</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>DNA:</div>
                    <div>
                      <select onChange={handleDNALeftChange} className="select select-xs bg-white text-black uppercase w-48">
                        <option value="0">naked truth</option>
                        <option value="1">420 boi</option>
                        <option value="2">agent 47</option>
                        <option value="3">blood</option>
                        <option value="4">burner</option>
                        <option value="5">chapo</option>
                        <option value="6">crip</option>
                        <option value="7">escobar</option>
                        <option value="8">ese</option>
                        <option value="9">fisherman</option>
                        <option value="10">gamer</option>
                        <option value="11">heisenberg</option>
                        <option value="12">king</option>
                        <option value="13">meta boi</option>
                        <option value="14">$SOL warrior</option>
                        <option value="15">pissed pants</option>
                        <option value="16">pnsqrt boi</option>
                        <option value="17">scarface</option>
                        <option value="18">soljunk boi</option>
                        <option value="19">soljunk girl</option>
                        <option value="20">soljunk girl blonde</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>MOUTH:</div>
                    <div>
                      <select onChange={handleMouthLeftChange} className="select select-xs bg-white text-black uppercase w-48">
                        <option value="0">none</option>
                        <option value="1">blunt</option>
                        <option value="2">cigarette</option>
                        <option value="3">golden grillz</option>
                        <option value="4">meta spliff</option>
                        <option value="5">opened</option>
                        <option value="6">sad</option>
                        <option value="7">shiney white teeth</option>
                        <option value="8">vapo ballon</option>
                        <option value="9">zomblunt</option>
                        <option value="10">alien spliff</option>
                        <option value="11">normal</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>EYES:</div>
                    <div>
                      <select onChange={handleEyesLeftChange} className="select select-xs bg-white text-black uppercase w-48">
                        <option value="0">none</option>
                        <option value="1">bullish</option>
                        <option value="2">heisenberg</option>
                        <option value="3">heisenstoned</option>
                        <option value="4">left</option>
                        <option value="5">metaglasses</option>
                        <option value="6">normal</option>
                        <option value="7">red</option>
                        <option value="8">right</option>
                        <option value="9">sol tear</option>
                        <option value="10">stonalien</option>
                        <option value="11">stoner</option>
                        <option value="12">stoner green</option>
                        <option value="13">tee</option>
                        <option value="14">zombeyes</option>
                        <option value="15">alien</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>CHAIN:</div>
                    <div>
                      <select onChange={handleChainLeftChange} className="select select-xs bg-white text-black uppercase w-48">
                        <option value="0">none</option>
                        <option value="1">2 chainz</option>
                        <option value="2">alien</option>
                        <option value="3">gamer</option>
                        <option value="4">gold</option>
                        <option value="5">in for the tech</option>
                        <option value="6">silver</option>
                        <option value="7">silver gold cross</option>
                        <option value="8">sol chain</option>
                        <option value="9">$SOL cross</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>OBJECT:</div>
                    <div>
                      <select onChange={handleGen2ObjectLeftChange} className="select select-xs bg-white text-black uppercase w-48">
                        <option value="0">none</option>
                        <option value="1">axe</option>
                        <option value="2">bat</option>
                        <option value="3">bloody bat</option>
                        <option value="4">bloody knife</option>
                        <option value="5">bloody marill</option>
                        <option value="6">bottle</option>
                        <option value="7">burner</option>
                        <option value="8">butcher</option>
                        <option value="9">granade</option>
                        <option value="10">gun</option>
                        <option value="11">hammer</option>
                        <option value="12">knife</option>
                        <option value="13">lean</option>
                        <option value="14">lid</option>
                        <option value="15">lucille</option>
                        <option value="16">machine gun</option>
                        <option value="17">molotov</option>
                        <option value="18">plunger</option>
                        <option value="19">scepter</option>
                        <option value="20">sol warrior</option>
                        <option value="21">sword</option>
                        <option value="22">taser</option>
                        <option value="23">ak</option>
                      </select>
                    </div>
                  </div>
                </div>
              }

              {dead_left &&
                <div className="h-40">
                  <div className="flex justify-between items-center">
                    <div>BODY:</div>
                    <div>
                      <select onChange={handleDeadLeftChange} className="select select-xs bg-white text-black uppercase w-48">
                        <option value="0">NONE</option>
                        <option value="1">ESE</option>
                        <option value="2">ILLNESS</option>
                        <option value="3">INVERTED SOLANA</option>
                        <option value="4">INVISIBLE RICH</option>
                        <option value="5">MULTIPLE ILLNESS</option>
                        <option value="6">SOLANA</option>
                        <option value="7">WHITE</option>
                        <option value="8">BRO</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>PROB:</div>
                    <div>
                      <select onChange={handleOverdoseProbLeftChange} className="select select-xs bg-white text-black uppercase w-48">
                        <option value="0">none</option>
                        <option value="1">blood</option>
                        <option value="2">bomb</option>
                        <option value="3">burned</option>
                        <option value="4">piss</option>
                        <option value="5">puke</option>
                        <option value="6">sword</option>
                        <option value="7">trash</option>
                        <option value="8">truks</option>
                      </select>
                    </div>
                  </div>
                </div>
              }
            </div>

            <div className="grid grid-rows-7 gap-4 bg-base-200 col-span-1">
              <div className="p-2">
                <div className="text-center mt-4">RIGHT</div>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-center hidden lg:block">STANDING</div>
                  {dead_right == false &&
                    <button className="grid items-center" onClick={() => setDead_right(true)} >
                      <img src="./button/toggle_2.png" alt="tmp" />
                    </button>
                  }
                  {dead_right == true &&
                    <button className="grid items-center" onClick={() => setDead_right(false)} >
                      <img src="./button/toggle_1.png" alt="tmp" />
                    </button>
                  }
                  <div className="text-center hidden lg:block">DEAD</div>
                </div>

                {!dead_right &&
                  <div className="h-40">
                    <div className="flex justify-between items-center">
                      <div>BODY:</div>
                      <div>
                        <select onChange={handleBodyRightChange} className="select select-xs bg-white text-black uppercase w-48">
                          <option value="0">NONE</option>
                          <option value="1">ESE</option>
                          <option value="2">ILLNESS</option>
                          <option value="3">INVERTED SOLANA</option>
                          <option value="4">INVISIBLE RICH</option>
                          <option value="5">MULTIPLE ILLNESS</option>
                          <option value="6">SOLANA</option>
                          <option value="7">WHITE</option>
                          <option value="8">BRO</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>DNA:</div>
                      <div>
                        <select onChange={handleDNARightChange} className="select select-xs bg-white text-black uppercase w-48">
                          <option value="0">naked truth</option>
                          <option value="1">420 boi</option>
                          <option value="2">agent 47</option>
                          <option value="3">blood</option>
                          <option value="4">burner</option>
                          <option value="5">chapo</option>
                          <option value="6">crip</option>
                          <option value="7">escobar</option>
                          <option value="8">ese</option>
                          <option value="9">fisherman</option>
                          <option value="10">gamer</option>
                          <option value="11">heisenberg</option>
                          <option value="12">king</option>
                          <option value="13">meta boi</option>
                          <option value="14">$SOL warrior</option>
                          <option value="15">pissed pants</option>
                          <option value="16">pnsqrt boi</option>
                          <option value="17">scarface</option>
                          <option value="18">soljunk boi</option>
                          <option value="19">soljunk girl</option>
                          <option value="20">soljunk girl blonde</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>MOUTH:</div>
                      <div>
                        <select onChange={handleMouthRightChange} className="select select-xs bg-white text-black uppercase w-48">
                          <option value="0">none</option>
                          <option value="1">blunt</option>
                          <option value="2">cigarette</option>
                          <option value="3">golden grillz</option>
                          <option value="4">meta spliff</option>
                          <option value="5">opened</option>
                          <option value="6">sad</option>
                          <option value="7">shiney white teeth</option>
                          <option value="8">vapo ballon</option>
                          <option value="9">zomblunt</option>
                          <option value="10">alien spliff</option>
                          <option value="11">normal</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>EYES:</div>
                      <div>
                        <select onChange={handleEyesRightChange} className="select select-xs bg-white text-black uppercase w-48">
                          <option value="0">none</option>
                          <option value="1">bullish</option>
                          <option value="2">heisenberg</option>
                          <option value="3">heisenstoned</option>
                          <option value="4">left</option>
                          <option value="5">metaglasses</option>
                          <option value="6">normal</option>
                          <option value="7">red</option>
                          <option value="8">right</option>
                          <option value="9">sol tear</option>
                          <option value="10">stonalien</option>
                          <option value="11">stoner</option>
                          <option value="12">stoner green</option>
                          <option value="13">tee</option>
                          <option value="14">zombeyes</option>
                          <option value="15">alien</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>CHAIN:</div>
                      <div>
                        <select onChange={handleChainRightChange} className="select select-xs bg-white text-black uppercase w-48">
                          <option value="0">none</option>
                          <option value="1">2 chainz</option>
                          <option value="2">alien</option>
                          <option value="3">gamer</option>
                          <option value="4">gold</option>
                          <option value="5">in for the tech</option>
                          <option value="6">silver</option>
                          <option value="7">silver gold cross</option>
                          <option value="8">sol chain</option>
                          <option value="9">$SOL cross</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>OBJECT:</div>
                      <div>
                        <select onChange={handleGen2ObjectRightChange} className="select select-xs bg-white text-black uppercase w-48">
                          <option value="0">none</option>
                          <option value="1">axe</option>
                          <option value="2">bat</option>
                          <option value="3">bloody bat</option>
                          <option value="4">bloody knife</option>
                          <option value="5">bloody marill</option>
                          <option value="6">bottle</option>
                          <option value="7">burner</option>
                          <option value="8">butcher</option>
                          <option value="9">granade</option>
                          <option value="10">gun</option>
                          <option value="11">hammer</option>
                          <option value="12">knife</option>
                          <option value="13">lean</option>
                          <option value="14">lid</option>
                          <option value="15">lucille</option>
                          <option value="16">machine gun</option>
                          <option value="17">molotov</option>
                          <option value="18">plunger</option>
                          <option value="19">scepter</option>
                          <option value="20">sol warrior</option>
                          <option value="21">sword</option>
                          <option value="22">taser</option>
                          <option value="23">ak</option>
                        </select>
                      </div>
                    </div>
                  </div>
                }
                {dead_right &&
                  <div className="h-40">
                    <div className="flex justify-between items-center">
                      <div>BODY:</div>
                      <div>
                        <select onChange={handleDeadRightChange} className="select select-xs bg-white text-black uppercase w-48">
                          <option value="0">NONE</option>
                          <option value="1">ESE</option>
                          <option value="2">ILLNESS</option>
                          <option value="3">INVERTED SOLANA</option>
                          <option value="4">INVISIBLE RICH</option>
                          <option value="5">MULTIPLE ILLNESS</option>
                          <option value="6">SOLANA</option>
                          <option value="7">WHITE</option>
                          <option value="8">BRO</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>PROB:</div>
                      <div>
                        <select onChange={handleOverdoseProbRightChange} className="select select-xs bg-white text-black uppercase w-48">
                          <option value="0">none</option>
                          <option value="1">blood</option>
                          <option value="2">bomb</option>
                          <option value="3">burned</option>
                          <option value="4">piss</option>
                          <option value="5">puke</option>
                          <option value="6">sword</option>
                          <option value="7">trash</option>
                          <option value="8">truks</option>
                        </select>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
            {/*<div className="p-2">
              <div className="mt-4 text-center">
                
                {sending == false &&
                  <button className="btn btn-primary btn-lg text-3xl w-full mb-2"
                    onClick={CreateAndSendNFT}>Mint as NFT
                  </button>}

                {sending == true &&
                  <button className="btn btn-primary w-full">
                    <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>Minting</button>}

                {errorMsg != '' &&
                  <div className="mt-[1%] w-full">❌ Ohoh.. An error occurs: {errorMsg}
                  </div>
                }

                {isSent &&
                  <div className="text-xl mt-[5%] w-full">
                    ✅ Successfully minted!
                  </div>}
                
                <button className="btn btn-primary btn-sm mt-8"
                  onClick={saveImgDesktop}>Download Image
                </button>
              </div>
            </div>*/}
          </div>
          {/* MEME CANVAS - START */}
          <div className="flex flex-col justify-center items-center col-span-4 w-auto">
            <div className={`w-[1240px] h-[640px] container text-center border-1 border-black`} id="canvasDesktop">
              <div className="relative">
                <div>
                  <img src={selectedGen2BG} alt='' />
                  {/* Layer 1 */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedGen2lettering} alt='' />
                  </span>                  

                  {dead_left &&
                    <div>
                      <span className="absolute top-0 left-0">
                        <img src={selectedGen2Dead_left} alt='' />
                      </span>
                      <span className="absolute top-0 left-0">
                        <img src={selectedGen2Overdose_prob_left} alt='' />
                      </span>
                    </div>
                  }
                  {dead_right &&
                    <div>
                      <span className="absolute top-0 left-0">
                        <img src={selectedGen2Dead_right} alt='' />
                      </span>
                      <span className="absolute top-0 left-0">
                        <img src={selectedGen2Overdose_prob_right} alt='' />
                      </span>
                    </div>
                  }

                  <span className="absolute top-0 left-0">
                    <img src={selectedGen2Prob} alt='' />
                  </span>

                  {/* Layer 2 */}
                  {!dead_left &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Body_left} alt='' />
                    </span>
                  }
                  {!dead_right &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Body_right} alt='' />
                    </span>
                  }
                  {/* Layer 3 */}
                  {!dead_left &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2DNA_left} alt='' />
                    </span>
                  }
                  {!dead_right &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2DNA_right} alt='' />
                    </span>
                  }
                  {/* Layer 4 */}
                  {!dead_left &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Mouth_left} alt='' />
                    </span>
                  }
                  {!dead_right &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Mouth_right} alt='' />
                    </span>
                  }
                  {/* Layer 5 */}
                  {!dead_left &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Eye_left} alt='' />
                    </span>
                  }
                  {!dead_right &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Eye_right} alt='' />
                    </span>
                  }
                  {/* Layer 6 */}
                  {!dead_left &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Chain_left} alt='' />
                    </span>
                  }
                  {!dead_right &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Chain_right} alt='' />
                    </span>
                  }
                  {/* Layer 7 */}
                  {!dead_left &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Object_left} alt='' />
                    </span>
                  }
                  {!dead_right &&
                    <span className="absolute top-0 left-0">
                      <img src={selectedGen2Object_right} alt='' />
                    </span>
                  }

                  {/* Layer 7 */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedGen2Speechbubble_left} alt='' />
                  </span>
                  <span className="absolute top-0 left-0">
                    <img src={selectedGen2Speechbubble_right} alt='' />
                  </span>
                  {/* DAYLIGHT */}
                  <span className="absolute top-0 left-0">
                    <img src={selectedGen2Daylight} alt='' />
                  </span>
                </div>
                {/*LEFT MSG */}
                {selectedGen2Speechbubble_left == "./gen2_layer/speechbubbles_left/1.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[5.5rem] left-1/3 -translate-x-1/2 break-words w-72 uppercase">{upperMsg}</h2>
                }
                {selectedGen2Speechbubble_left == "./gen2_layer/speechbubbles_left/2.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[2.3rem] left-1/3 -translate-x-1/2 break-words w-64 uppercase">{upperMsg}</h2>
                }
                {selectedGen2Speechbubble_left == "./gen2_layer/speechbubbles_left/3.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[0.6rem] left-[27.3rem] -translate-x-1/2 break-words w-40 uppercase">{upperMsg}</h2>
                }
                {selectedGen2Speechbubble_left == "./gen2_layer/speechbubbles_left/4.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[3rem] left-[24rem] -translate-x-1/2 break-words w-56 uppercase">{upperMsg}</h2>
                }
                {selectedGen2Speechbubble_left == "./gen2_layer/speechbubbles_left/5.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[3.5rem] left-[25.7rem] -translate-x-1/2 break-words w-56 uppercase">{upperMsg}</h2>
                }

                {/*RIGHT MSG */}
                {selectedGen2Speechbubble_right == "./gen2_layer/speechbubbles_right/1.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[3.7rem] right-32 -translate-x-1/2 break-words w-64 uppercase">{lowerMsg}</h2>
                }
                {selectedGen2Speechbubble_right == "./gen2_layer/speechbubbles_right/2.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[3.7rem] right-32 -translate-x-1/2 break-words w-64 uppercase">{lowerMsg}</h2>
                }
                {selectedGen2Speechbubble_right == "./gen2_layer/speechbubbles_right/3.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[1.2rem] right-64 -translate-x-1/2 break-words w-40 uppercase">{lowerMsg}</h2>
                }
                {selectedGen2Speechbubble_right == "./gen2_layer/speechbubbles_right/4.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[1.6rem] right-[7.35rem] -translate-x-1/2 break-words w-64 uppercase">{lowerMsg}</h2>
                }
                {selectedGen2Speechbubble_right == "./gen2_layer/speechbubbles_right/5.png" &&
                  <h2 className="font-trash absolute text-2xl text-black top-[3.6rem] right-[9rem] -translate-x-1/2 break-words w-56 uppercase">{lowerMsg}</h2>
                }
              </div>
            </div>
          </div>
          {/* MEME CANVAS - END */}
        </div>
        <div className="p-2 flex justify-center bg-base-200 gap-12">
          <div className="flex">
            <div>
              <input className="text-black pl-1 border-1 border-black w-[35rem] text-center h-10 rounded"
                type="text"
                required
                placeholder="Upper Text"
                onChange={HandleUpperMsgChange}
              />
              <div className="flex justify-between mt-1">
                <div className="mr-1">LEFT SPEECH BUBBLE:</div>
                <div>
                  <select onChange={handleSpeechbubbleLeftChange} className="select select-xs bg-white text-black uppercase w-24">
                    <option value="5">NONE</option>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <input className="text-black pl-1 border-1 border-black w-[35rem] text-center h-10 rounded"
                type="text"
                required
                placeholder="Lower Text"
                onChange={HandleLowerMsgChange}
              />
              <div className="flex justify-between mt-1">
                <div className="mr-1">RIGHT SPEECH BUBBLE:</div>
                <div>
                  <select onChange={handleSpeechbubbleRightChange} className="select select-xs bg-white text-black uppercase w-24">
                    <option value="5">NONE</option>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};