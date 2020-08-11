function rune(name, description, image){
  this.name = name;
  this.description = description;
  this.image = image;
}

var box = [
new rune('Fehu - "Cattle"','Fehu is a rune of abundance. It represents property and assets that are owned and traded. This could be a sign for you to save your money so that your money can save you. Don’t be frustrated about having to finance things. If you are being ripped off, improve your ability to make better deals. Invest wisely and respect the game.','cattle'),
new rune('Uruz - "Ox"','Uruz signifies a wild animal. It represents natural power that you can’t buy or inherit. It’s time to embrace your wild side and get in touch with your natural self. This could be a sign to hit the gym or go for a hike. Just pump some blood into your muscules and do something to make yourself feel alive and free.','ox'),
new rune('Thurisaz - "Thorn"','Don’t let your guard down. Thurisaz represents protection and defence, often in a physical way. However, it could also be a suggestion to improve your internet passwords. If this is the rune you tossed, don’t forget to wear your helmet or seatbelt. There’s lots of sharp and pointy things out there - it might be a good idea for you to carry one with you too.','thorn'),
new rune('Ansuz - "Odin"','Whether you believe in this god or that god, Ansuz can be understood as a symbol of divine inspiration. If this is the rune that revealed itself to you, it’s time to listen to your higher-self. Do not underestimate your own supernatural capabilities. Nature is whispering to you. Just listen.','odin'),
new rune('Raidho - "Ride"','Time to roll. Raidho represents vehicles and journeys. If you’ve been wondering about traveling or buying something like a bike, this is a sign to do it. Don’t just sit there - get moving. Life’s an adventure. Just choose a direction and go.','ride'),
new rune('Kenaz - "Torch"','Torches represent skill and knowledge, because it’s fire in our control that illuminates the world around us. This is a sign that you should be enaged in teaching and learning. Furthermore, you should be doing it passionately. Enlightment is maintaining a state of inspiration.','torch'),
new rune('Gebo - "Gift"','This is a symbol for giving. It appropriately looks like two knowledge runes ( < )  meeting and having an exchange. Gebo is much more meaningful than a business transaction. It represents a gift that only you are capable of sharing. Maybe you should give someone else the opportunity to give you something. Apparently, it’s time to pay it forward.','gift'),
new rune('Wunjo - "Joy"','Joy is meant to be shared. Wunjo is a very positive and social rune that represents friends and good times. This could be a sign that you should meet up with your buds for a beer, unless that sounds boring to you. The suggestion is to engage in something fun with other people. It’s party time!','Joy'),
new rune('Hagalaz - "Hail"','Things break and sometimes difficult conflicts beyond our control happen. This could be a sign of a destructive storm or some kind of less dramatic loss of power. If you find yourself stuck between a rock and a hard place, think of it as an opportunity to be a hero. Hard times make strong men.','hail'),
new rune('Nauthiz - "Need"','Nauthiz represents set-backs and life lessons. You need to be okay with failing and being rejected, if you ever want to succeed and be accepted. Just make sure that you learn from your mistakes. Put simply, focus on what’s necessary.','need'),
new rune('Isa - "Ice"','Isa represents something that used to be fluid that is being controlled and taking shape. For this reason, it’s often associated with egos, identities, and individualization. You should be yourself and you should be okay with being yourself. Just chill.','ice'),
new rune('Jera - "Year"','Jera represents natural cycles, patience, peace, and harmony. Everything changes and all things have their time. You can’t force creativity. Being fruitful in the future requires being present right now.','year'),
new rune('Ihwaz - "Yew"','The yew tree connects the earth with the sky. It’s a symbol of endurance, longevity, and immortality. If this is the rune you tossed, it could be a suggestion to think about the bigger picture or your impact on the environment. Maybe you need to think deeper about something. The world is a magical place - let’s keep it that way.','yew'),
new rune('Perthro - "Luck"','Perthro is a rune of luck, mystery, and destiny. Do you think this rune was selected "randomly"? You’re lucky and you should think of yourself as lucky in order to be even more lucky. However, if you really think you’re doomed you’re probably right. Character is fate.','luck'),
new rune('Algiz - "Elk"','Algiz is associated with protection, blessings, and optimistimism. It represents the antlers of an Elk but many see a tree with branches growing upwards and a child reaching up for a hug. Benevolent forces are on your side. This could be a sign that a loved one you miss is helping guide you. Keep your spirits up.','elk'),
new rune('Sowilo - "Sun"','Sowilo is a victorious symbol that represents cosmic power. It’s our light-source and life-force. If this is the rune that revealed itself to you, it’s an affirmative answer. Take action. Success is on the horizon.','sun'),
new rune('Tiwaz - "Order"','Tiwas is a rune of order, justice, and authority. If this is the rune you tossed, you might have to sacrifice something. Maybe you need to boss up and take on a leadership opportunity. Just do the right thing.','order'),
new rune('Berkano - "Birch"','Berkano is a fertile symbol of rebirth and renewal. This is a time to tend to wounds and gardens. Maybe you should go to the clinic and get that thing checked. Whether you’re thinking of yourself or something else, the suggestion is to nurture and to heal.','birch'),
new rune('Ehwaz - "Horse"','Howdy partner! Ehwas symbolizes trust, teamwork, and transportation. This might be a suggestion to choose a well trodden way to go about something, like a popular vehicle, so that other people can help you on your journey. It’s time to work with others. Animals are your friends too.','horse'),
new rune('Mannaz - "Man"','Mannaz represents humankind and what it means to be human, including our creative powers of manifestation. It’s a symbol of innocence and our shared humanity. Consider what you have in common with other people as well as your unique place in the larger whole.','man'),
new rune('Laguz - "Lake"','Calm bodies of water, like lakes, are the original mirrors. This is a time for reflection. Pay close attention to your dreams. Psychic powers are at play. Might as well use your imagination.','lake'),
new rune('Inguz - "Seed"','Inguz is associated with separation for the purpose of transformation, like an egg. Perhaps something, like seeds, should be stored for safe keeping. Consider saving your energy. Life is precious - don’t waste it.','seed'),
new rune('Dagaz - "Dawn"','Opposites stabalize each other and need each other. The valleys define the mountains and vice versa. Sometimes you have to forget what you already know, in order to figure things out. The nature of the universe is paradoxical - embrace  this.','dawn'),
new rune('Othala - "Home"','Home is where the heart is. If you hear someone say "your people", who comes to mind? It’s time to think about your friends, family, and community. Reflect on where you came from. If you’re young and traveling, maybe this is a sign to call your mom.','home')
];

function getRandom(num){
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("toss").onclick = function(){
  var index = getRandom(24);
  var currentCard = box[index];

  document.getElementById("display").innerHTML = '<img src="images/' + currentCard.image + '.png"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
};
