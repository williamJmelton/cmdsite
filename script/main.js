// grab elements from the DOM to be manipulated
site = document.getElementById('content');
titleBG = document.getElementById('code-title-container');
titleText = document.getElementById('logo');
nav = document.getElementById('nav');

// set inital variables
screenWidth = window.innerWidth;

// type it for the header
new TypeIt('.type-it-title', {
  strings: [

  ],
  lifeLike: false,
  speed: 300,
  html: false,
  afterComplete: function (instance) {
    titleText.classList.add('center-anim');
  }
}).type('[Div/').pause(1000).type('Nectar]').pause(1500).destroy();

// type it for the site content.
new TypeIt('.type-it', {
  strings: [
    'Welcome to DivNectar.',
    'I hope you enjoy the site.',
    '<pre><code id="code" class="javascript">header.init()</code></pre>'
  ],
  lifeLike: true,
  speed: 50,
  html: true,
  afterString: function (step, queue, instance) {
    //-- Execute your code here.

  },
  afterComplete: function (instance) {
    console.log('gonna highlight this code...');
    $(document).ready(function () {
      $('code#code.javascript').each(function (i, block) {
        hljs.highlightBlock(block);
      });

      // move everything to the middle
      site.classList.add('flexbox-center');
      titleBG.classList.add('light-switch');
      // nav.classList.remove('nav-hidden');
      nav.classList.add('nav-show');
    });
  }
}).destroy();


function afterInit() {
  new TypeIt('.after-init', {
    lifeLike: true,
    speed: 100
  }).options({speed: 3}).type('<span class="prompt">josh@divnectar: </span>').options({speed: 150}).pause(1000)
    .type('WOW').pause(300).type('. ').pause(1500)
    .type('That was pretty cool, huh?')
    .type('Lorizzle ipsum dolizzle sit amizzle, sheezy adipiscing elit. Nullam daahng dawg velizzle, shit volutpizzle, suscipizzle phat, boom shackalack vizzle, pizzle. Pellentesque eget shizzle my nizzle crocodizzle. Sizzle erizzle. Stuff funky fresh dolizzle dapibizzle turpizzle tempizzle tempor. Maurizzle i\'m in the shizzle nibh izzle turpizzle. Brizzle izzle that\'s the shizzle. Pellentesque fo shizzle rhoncizzle nisi. In crazy check it out platea dictumst. Pizzle dapibizzle. Curabitizzle fo shizzle fo shizzle my nizzle, pretizzle crunk, dizzle pimpin\', eleifend vitae, nunc. Gizzle suscipizzle. You son of a bizzle semper velit sizzle cool.');
}

setTimeout(afterInit, 8000);