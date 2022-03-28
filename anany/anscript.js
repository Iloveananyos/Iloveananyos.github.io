function drawoncanv(){
    const circs = [];

    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");






    for (let i = 0; i/(screen.width*screen.height) < 0.00015; i++){
        var cordx = Math.round(Math.random() * screen.width);
        var cordy = Math.round(Math.random() * screen.height);
        canvas.width = screen.width;
        canvas.height = screen.height;

        ctx.fillStyle = "rgb(255,255,255)";
        const cords = [cordx,cordy];
        circs.push(cords);
    };
    for (const cir of circs){
        ctx.beginPath();
        ctx.arc(cir[0], (cir[1]), 1, 0, 2 * Math.PI);

        ctx.stroke();
        ctx.fill();
    };

    //ctx.fillRect(0, 0, 250, topheight);
};
var arr = ["You are always there for me when I need you",
"You know everything about me",
"I get to see you all the time at school",
"Even when you get angry, I know that you still love me",
"You talk to me almost every night",
"We sleep call all the time",
"You are friends with all of my friends",
"You had the idea to have car sleepover (Best Night Ever)",
"You are the funniest girl that I know",
"You are the most beautiful girl that I know",
"You give the best hugs",
"You arent afraid to speak your mind",
"You gave me the most amazing Birthday gift",
"You give me a reason to be happy everyday",
"You are perfect in every way",
"You like the cutisy stuff in life",
"You made up your own words to use",
"You give me butterflies everytime I see you",
"You stuck by me even when I messed up",
"You like being little spoon",
"You understand me on a deeper level then anybody else",
"We played Fireboy and Watergirl together",
"You get excited when I tell you I made it into a uni, and console me when I don't",
"You are the perfect height to hug with no obstacles",
"You are 'different' in the perfect ways :)",
"You call me out on my flaws, to help me fix them",
"You Hopefully like my gifts",
"You met my parentos and they liked you",
"You appreciate my random facts and stories",
"You are an amazing soccer player",
"Even in our early  days, you gave me your headband to help me in Vball",
"You came to Vball when I first asked you",
"We can hang out for hours and hours and still talk nonstop",
"You invited me to the surprise party, where I first started to actually really like you",
"You always tell me tea time",
"You are gonna finally be legal!",
"You like to video call on Whatsapp ew",
"Your room is decorated soo beautifully",
"You forced me to watch Mamma Mia together, and we had an amazing night",
"Ur parentos are pretty cool",
"Even when im sad, you make me feel better",
"You listen to my bedtime stories about random space stuff",
"You got me cake that one time, and made my day",
"You love to drive, and I love driving with you ",
"You eat some funky stuff... you really like hotdogs for some reason :)",
"You fit perfectly in my arms",
"You driveby before practice very often",
"You come with me to my classes to drop me off",
"You let me visit your car every morning",
"You drop me home some days when you can",
"You are always covered in sparkles",
"I like to bite your lip",
"You have super cute ears",
"Your hair is beautiful and different every day",
"Your cheeks are very kissabble",
"Your lips are very kissabble",
"You look very pretty in your glasses",
"You have a great music taste even though you hide it",
"You text me back super fast all the time",
"We have lots of long conversations",
"You make amazing juice",
"You showed me how you dress up and do makeup",
"You always want to do makeup on me",
"You try to convince me that you know where Dundas is (Even though you don't)",
"You eat the weirdest things in the morning",
"You drive super sketchy sometimes :) keeps me on edge",
"You know what I am about to say when I say 'Guess What'",
"You came to support me during the Wrestling tournament",
"You text me Good morning every morning",
"You text me Goodnight every night",
"You took me to the best IKEA visit I've ever had",
"We do Life360 so I get to see where you are",
"Whenever you snap me, you snap me the cutsyiest pictures",
"You always go the wrong way around when leaving my neighborhood ",
"You let me cradle you sometimes :)",
"You come to my physics class when I accidentally summoned you with hangman",
"You tolerate my Android phone",
"You let me take photos of us (Sometimes :) )",
"You went to the Haloween Party with me, came like 30 minutes late, and still looked more beautiful than everyone there as an angel",
"You are the perfect mix of normal and crazy",
"You stay in the lobby during your spares so that I can visit",
"You wear my necklace every day.... Simp :)",
"You wear the rainbow loom bracelet still",
"You make me laugh and cry more then anybody",
"Your phone screen doesn't survive more then a few months",
"You love to take showers :o",
"You like to hang with Ace Bae",
"You have lunch with me at least once a week",
"You are going to come biking with me one day",
"You came to the golf course with me, and we took back a log",
"You aren't afraid to tell me what is wrong, and we work together to solve the problem",
"You are fun sized",
"You came over to my house and cuddled with me before I was brave enough to go in for a kiss",
"You love me... That itself makes me love you soo much",
"You come to my side of the car whenever we meet",
"You drove me to Husseins house during the sleepover scare, even though you were super sleepy",
"You tried sooo hard to skip rocks at the beach",
"We sat together on the swings talking and drinking slushies",
"Your stunning fashion sense",
"You think everybody is a murderer, its cute ",
"Idk.. HOW COULD ANYBODY NOT LOVE YOU <3",
];




function butpres(){


    var prev = document.getElementById("hidnum");



    var txt = document.getElementById("ltext");




    var rnum = Math.floor(Math.random() * arr.length);
    //var ran = "Reason "+rnum+": "+arr[Math.floor(Math.random() * arr.length)];

    while (parseInt(prev.innerHTML) == rnum){
        var rnum = Math.floor(Math.random() * arr.length);
    };
    prev.innerHTML = rnum


    txt.innerHTML =  "Reason #"+rnum+": "+arr[rnum];




};