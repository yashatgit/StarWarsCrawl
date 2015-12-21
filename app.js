window.onload = function (e) {

    var cachedElements = {},

        CRAWL = '<p>A long time ago</p>' +
            '<p>in a galaxy far, far away....</p>' +
            '<br><br>' +

            '<p><b>Episode IV: A New Hope</b></p>' +
            '<p>"It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. </p>' +
            '<p>During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. </p>' +
            '<p>Pursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...."</p>' +
            '' +

            '<p><b>Episode I: The Phantom Menace</b></p>' +
            '<p>"Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.</p>' +
            '<p>Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. </p>' +
            '<p>While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict...."</p>' +
            '' +
            '<p><b>Episode II: Attack of the Clones</b></p>' +
            '<p>"There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic. </p>' +
            '<p>This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy. </p>' +
            '<p>Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi...."</p>' +
            '' +
            '<p><b>Episode III: Revenge of the Sith</b></p>' +
            '<p>"War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.</p>' +
            '<p>In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.</p>' +
            '<p>As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor...."</p>' +
            '' +
            '',

        _getElementById = function (id) {
            var elementFromCache = cachedElements[id];

            if (!elementFromCache) {
                elementFromCache = document.getElementById(id);
                cachedElements[id] = elementFromCache;
            }

            return elementFromCache;
        },

        _getElementByClass = function (className) {
            return document.getElementsByClassName(className);
        },

        addTextInScrollContainer = function (text) {
            _getElementById('scrollContent').innerHTML = '';
            _getElementById('scrollContent').setAttribute('class', '');
            _getElementById('scrollContent').setAttribute('class', 'scrollAnimate scrollContent');
            _getElementById('scrollContent').innerHTML = text;
        },

        init = function () {

            _getElementById('generateScroll').addEventListener("click", function () {
                addTextInScrollContainer(_getElementById('scrollTxt').value);
            });

            _getElementById('generateRandomScroll').addEventListener("click", function () {
                addTextInScrollContainer(CRAWL);
            });

            addTextInScrollContainer(CRAWL);

        };

    init();
};