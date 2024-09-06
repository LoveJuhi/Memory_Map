// Create a new map
var map = L.map("map", {
  zoom: 3,
  center: [-10, 0],
})
map.setMinZoom(2)
map.setMaxZoom(4)
// Define the map boundaries
var bounds = [
  [-100, -100],
  [100, 100],
]

// Create a custom map layer
var layer = L.layerGroup().addTo(map)

// Create a heart-shaped path
/*
// Parameters for the cardioid
var heartPath = []
var steps = 100 // Number of steps to create smoothness

// Generate points along the cardioid
for (var i = 0; i <= steps; i++) {
  var t = (Math.PI * 2 * i) / steps // From 0 to 2π
  var x = 16 * Math.pow(Math.sin(t), 3)
  var y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  var xRotated = y
  var yRotated = -x

  heartPath.push([xRotated, yRotated])
}*/

var imageBounds = [
  [-70, -85],
  [50, 85],
] // adjust these bounds to match your image size
var imageOverlay = L.imageOverlay("bg.jpg", imageBounds).addTo(map)

heartPath = [
  [5, 0],
  [5.080616300409131, -0.003960976008861991],
  [5.31871565962469, -0.03150059203293912],
  [5.703227351606254, -0.10526859511270904],
  [6.216283644631066, -0.24609022226350277],
  [6.834062241002363, -0.4721359549995793],
  [7.527902076780752, -0.7981864223520572],
  [8.26563327357082, -1.2350188542663474],
  [9.01305111818169, -1.7889371755074976],
  [9.73545703057813, -2.4614627344900484],
  [10.399186938124421, -3.249196962329063],
  [10.973049417248317, -4.14386115680882],
  [11.42960223964364, -5.132512300041106],
  [11.746206161585574, -6.1979275700621805],
  [11.905808285637567, -7.31914421690261],
  [11.897423278642142, -8.472135954999576],
  [11.716298184929965, -9.630602171766963],
  [11.363764486638898, -10.766842238643621],
  [10.84679837593238, -11.852684178251655],
  [10.177325907410598, -12.860434996919306],
  [9.371322893124, -13.763819204711734],
  [8.44776935024081, -14.538872443229218],
  [7.427524481592261, -15.164758710752322],
  [6.332190267304607, -15.624482359326736],
  [5.183029728496285, -15.905469744054013],
  [4.000000000000001, -16],
  [2.800950962391234, -15.905469744054013],
  [1.6010279838939834, -15.624482359326741],
  [0.41230312244743206, -15.164758710752327],
  [-0.7563561397601696, -14.538872443229218],
  [-1.8991869381244155, -13.763819204711739],
  [-3.013220672255105, -12.86043499691931],
  [-4.097795849274036, -11.85268417825165],
  [-5.153937953718788, -10.766842238643612],
  [-6.1836572897818645, -9.63060217176696],
  [-7.189219346142772, -8.47213595499958],
  [-8.172442168003819, -7.31914421690261],
  [-9.134071563663488, -6.197927570062177],
  [-10.073278032307813, -5.13251230004111],
  [-10.98730959132906, -4.143861156808825],
  [-11.871322893123999, -3.2491969623290653],
  [-12.718401966731474, -2.4614627344900533],
  [-13.51976048484151, -1.7889371755074963],
  [-14.265110541886262, -1.2350188542663494],
  [-14.943169390053493, -0.7981864223520586],
  [-15.542266173501734, -0.4721359549995798],
  [-16.05100403502769, -0.2460902222635041],
  [-16.458929465331593, -0.105268595112709],
  [-16.75716063099873, -0.031500592032939326],
  [-16.93892963581117, -0.00396097600886203],
  [-17, -2.9386816277228384e-47],
  [-16.938929635811174, 0.003960976008861985],
  [-16.75716063099873, 0.03150059203293914],
  [-16.458929465331586, 0.10526859511270932],
  [-16.0510040350277, 0.24609022226350213],
  [-15.542266173501735, 0.4721359549995788],
  [-14.943169390053496, 0.7981864223520572],
  [-14.265110541886273, 1.235018854266344],
  [-13.519760484841509, 1.788937175507498],
  [-12.718401966731482, 2.4614627344900457],
  [-11.87132289312401, 3.249196962329056],
  [-10.987309591329064, 4.14386115680882],
  [-10.073278032307826, 5.132512300041101],
  [-9.134071563663484, 6.1979275700621805],
  [-8.172442168003816, 7.319144216902614],
  [-7.189219346142775, 8.472135954999576],
  [-6.183657289781853, 9.630602171766972],
  [-5.153937953718786, 10.766842238643616],
  [-4.097795849274024, 11.852684178251664],
  [-3.013220672255105, 12.86043499691931],
  [-1.8991869381244244, 13.763819204711734],
  [-0.7563561397601599, 14.538872443229222],
  [0.41230312244743383, 15.164758710752327],
  [1.6010279838939754, 15.624482359326736],
  [2.800950962391238, 15.905469744054013],
  [3.9999999999999964, 16],
  [5.183029728496271, 15.905469744054013],
  [6.3321902673046, 15.624482359326741],
  [7.4275244815922505, 15.164758710752327],
  [8.447769350240813, 14.538872443229218],
  [9.371322893123999, 13.763819204711739],
  [10.17732590741059, 12.860434996919315],
  [10.846798375932371, 11.852684178251668],
  [11.363764486638901, 10.766842238643608],
  [11.716298184929965, 9.63060217176696],
  [11.897423278642144, 8.472135954999583],
  [11.905808285637569, 7.31914421690262],
  [11.746206161585583, 6.197927570062195],
  [11.429602239643641, 5.132512300041114],
  [10.973049417248319, 4.14386115680882],
  [10.399186938124426, 3.249196962329067],
  [9.735457030578136, 2.4614627344900546],
  [9.0130511181817, 1.7889371755075063],
  [8.265633273570824, 1.2350188542663503],
  [7.527902076780754, 0.7981864223520567],
  [6.834062241002366, 0.47213595499958055],
  [6.2162836446310745, 0.24609022226350444],
  [5.703227351606257, 0.10526859511270918],
  [5.318715659624693, 0.03150059203293941],
  [5.080616300409131, 0.003960976008861969],
  [5, 2.3509453021782707e-46],
]

let points = [
  [8.26563327357082, -1.2350188542663474],
  [11.905808285637567, -7.31914421690261],
  [8.44776935024081, -14.538872443229218],
  [-0.7563561397601696, -14.538872443229218],
  [-8.172442168003819, -7.31914421690261],
  [-14.265110541886262, -1.2350188542663494],
  [-17.0, -2.9386816277228384e-47],
  [-14.265110541886273, 1.235018854266344],
  [-8.172442168003816, 7.319144216902614],
  [-0.7563561397601599, 14.538872443229222],
  [8.447769350240813, 14.538872443229218],
  [11.905808285637569, 7.31914421690262],
  [8.265633273570824, 1.2350188542663503],
]

var strings = [
  `<h1>Our first Kiss</h1>
  <img src="firstKiss.jpg" alt="Photo">
  <p>The magical event which led to such Amazing things. My heart still loves this memory and cherishes it with every drop of my blood</p>`,
  `<h1>MES college : The place that made me meet such a cutie</h1>
<img src="mes.jpg" alt="Photo">
<p>This college that you joined, that i joined . The place which allowed our souls to meet
If not I wouldnt have met the loml, you. My memories of you wishing me on my birthday ,you asking me where the biology lab is, you sitting outside the lab in you own world whereas me going home thinking I missed my chance from all this to the ending being my last stargazing there with my love</p>`,
  `<h1>Rajajinagar</h1>
<img src="rajaji.jpg" alt="Photo">
<p>We've had so many memories in this area. I still remember wadnering the raods . You sitting on my lap on that place. Eating Gobi in that hotel. 
Sitting in the park nea my sister's college, you sitting on my lap again... I love all of these and ths bus stop Shenanigans </p>
`,
  `<h1>Sankey tank</h1>
<img src="sankey.jpg" alt="Photo">
<p>Our dates to Sankey have been absolutely magical. Everytime we went there I get to yap about random stuff while i stare at my soulmate. from the cute turtles and ducks to the cutest kitten (You hehe)</p>`,
  `<h1>Maldives Inn</h1>
<img src="maldives.jpg" alt="Photo">
<p>We went to this hotel 3 times. Every one of those times was the best day of my life. Cuddling with you ,spending time in privacy with you feels heavnly i wanna do that forever.</p>
`,
  `<h1>New hotel(i forgor name the one where we bathed)</h1>
<img src="hotel.jpg" alt="Photo">
<p>Can you even believe that day? It was the most perfect day ever, Everything about it was amazing. It gives me happiness every time I remember it. Most magical day ever.</p>
`,
  `<h1>Calls everyday</h1>
<img src="call.jpg" alt="Photo">
<p>The best part of my days since the last few years has been the evening calls with you baby. I love hearing ur voice, i love thta i have someone to talk to whenever i want you. I will cherish us for life. Its such a beautiful thing that even if we live so far away we still manage to give each other so much love and im just very grateful to you.</p>
`,
  `<h1>Magic Trick that worked</h1>
<img src="magictrick.jpg" alt="Photo">
<p>Who knew the trick I learned online could help me meet my soulmate</p>
`,
  `<h1>The first I love you(You said it hehe :3)</h1>
<img src="firstily.jpg" alt="Photo">
<p>There are no accidents. <i>-- Master Oogway</i>
But Seriously an Amazing accident. Dint know i'd be saying i love you to the same person forever.
But sriously tho no matter who said it, how it's said it'll always be special to us cause now we say it everyday and we mean it as much if not more than every time its told</p>
`,
  `<h1>First Kiss to the hand :)</h1>
<img src="handkiss.jpg" alt="Photo">
<p> I remember going back home so happy. I had actually kissed a girl not only just a girl it was the girl of my dreams.
(ik there's no photo of the hand kiss so i put the photo of the hand hehe)</p>
`,
  `<h1>Classes with my hot crush</h1>
<img src="gmeet.jpg" alt="Photo">
<p>Covid maybe bad for others but maybe it helped us meet and helped our relationship a lot. I'm thankful to all the Don Gonzalo Classes
and every other online class where i could Pin you instead of the teacher and chat with you. The love of my life.</p>
`,
  `<h1>6969 hehe</h1>
<img src="6969.jpg" alt="6969">
<p>Cubbon park holds such a important spot in my hearts because of our dates. My eyes were always on you.
I can't take my arms off of you when I'm with you. You're very Precious to me. My arms belong on you</p>

`,
  `<h1>Watching movies with the hottest star sitting on my lap</h1>
<img src="movie.jpg" alt="Photo">
<p>Spending time with you gives me happiness. Our movie dates mean a lot to me. The fact that i can be the silly aah myself and see you show all kinds of emotions to the movie while i irritate you hehe. I love you so damn much. </p>`,
]

for (let i in points) {
  points[i] = [points[i][0] * 3, points[i][1] * 3]
  L.marker(points[i]).addTo(map).bindPopup(`${strings[i]}`)
}
for (let i in heartPath) {
  heartPath[i] = [heartPath[i][0] * 3, heartPath[i][1] * 3]
}
L.polygon(heartPath, {
  color: "red",
  weight: 2,
  fillOpacity: 0.8,
}).addTo(layer)
