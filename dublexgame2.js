
var Lex_gt = new Object();

var LasValSeed_gi = 0;

function Random(Max_zi){

   // return a random integer from 1 to Max
   // arbitrary numbers and basic algorithm taken from _Visual Basic Algorithms_ by Rod Stephens
   
   var MODULUS = 714025;
   var MULTIPLIER = 1366;
   var INCREMENT = 150889;

   var X;

   if (LasValSeed_gi == 0) {
      // initialize to as close to a random number as you can get: the number of seconds that have elapsed since midnight (which produces 86400 seeds)
      // get today's date, so you can determine current second
      var now_gt = new Date();
      LasValSeed_gi = now_gt.getHours()*60*60 + now_gt.getMinutes()*60 + now_gt.getSeconds();
      // NOTE: tried Timer * Day(Now) * Month(Now) / 24 / 31 but results weren't random
   }

   // calculate the last value seed
   LasValSeed_gi = (MULTIPLIER * LasValSeed_gi + INCREMENT) % MODULUS;
   
   // map this value to the specified 1..Max_zi range
   return (LasValSeed_gi % Max_zi + 1);
}


function Shuffle(Array_at, BgnIdx_zi, MaxIdx_zi) {

  var NewIdx_zi;
  var Old_zt;
  
  // shuffle the order of the array
  for (var X = BgnIdx_zi; X < MaxIdx_zi; X++) {
     // get new index
     NewIdx_zi = BgnIdx_zi + Random(MaxIdx_zi-BgnIdx_zi);
     // swap places
     Old_zt = Array_at[NewIdx_zi];
     Array_at[NewIdx_zi] = Array_at[X];
     Array_at[X] = Old_zt;
  }
  
}


function LexItm(Root_zs, Gloss_zs, Animal_zi) {
   this.root     = Root_zs;
   this.gloss    = Gloss_zs;
   this.animal   = (Animal_zi==1);
}

function LexAnimality(X) {
   if (Lex_gt[X].animal==true) {
      return "<I>[animal]</I>";
   }else{
      return "";
   }
}

function L(Root_zs, Gloss_zs, Animal_zi) {
   var X = Lex_gt.length;
   if (X+" " == "undefined ") {
      X = 0;
   }
   Lex_gt.length = X+1;
   Lex_gt[X] = new LexItm(Root_zs, Gloss_zs, Animal_zi);
   // if (X < 7) alert(X + " " + Lex_gt[X].root);
}


function P(Text_zs) {
   document.write(Text_zs);
}


// initialize the root list
L('bac', 'alphabet', 0);
// L('bacar', 'bovine', 1);
// L('bad', 'body part', 1);
L('bah', 'outside', 0);
L('bamub', 'bamboo', 0);
L('banc', 'reserve', 0);
L('baner', 'flag', 0);
L('bar', 'bar', 0);
L('barc', 'lightning', 0);
L('bazar', 'market', 0);
L('bez', 'absence', 0);
L('bin', 'building', 0);
L('bir', 'barley', 0);
L('bomb', 'bomb', 0);
L('bud', 'future', 0);
L('bur', 'brown', 0);
L('cact', 'action', 0);
L('caf', 'coffee', 0);
L('cafaz', 'jump', 0);
L('cah', 'abstraction', 0);
L('cal', 'feces', 0);
L('calc', 'peripheral', 0);
// L('calot', 'dog', 1);
L('cals', 'class', 0);
L('cam', 'garment', 0);
// L('camel', 'camel', 1);
L('camer', 'room', 0);
L('camis', 'shirt', 0);
L('camp', 'field', 0);
L('canc', 'shell', 0);
L('cand', 'hole', 0);
L('canon', 'cannon', 0);
L('cant', 'fastener', 0);
L('canun', 'law', 0);
// L('cap', 'head', 1);
// L('capt', 'leader', 1);
L('caras', 'love', 0);
L('carb', 'carbon', 0);
L('carc', 'sharp object', 0);
// L('card', 'heart', 1);
// L('carn', 'flesh', 1);
L('cars', 'cross', 0);
L('cart', 'card', 0);
L('cat', 'cut', 0);
// L('catoh', 'cat', 1);
L('caz', 'cause', 0);
L('celeb', 'play', 0);
L('ciber', 'cyberspace', 0);
L('cirv', 'curve', 0);
L('cis', 'story', 0);
L('cisid', 'acid', 0);
L('citab', 'book', 0);
L('cog', 'knowledge', 0);
L('cohol', 'alcohol', 0);
L('col', 'wheel', 0);
L('coleb', 'oscillation', 0);
L('color', 'color', 0);
L('comanj', 'eating', 0);
L('comar', 'comparison', 0);
L('comb', 'fight', 0);
L('comp', 'computer', 0);
L('comun', 'communication', 0);
L('con', 'opposite extreme', 0);
L('cond', 'condition', 0);
L('cont', 'control', 0);
L('conus', 'cone', 0);
L('cop', 'copy', 0);
L('corb', 'edge', 0);
L('cord', 'string', 0);
L('corect', 'correct', 0);
L('cos', 'food preparation', 0);
// L('cost', 'bone', 1);
L('cov', 'cover', 0);
L('cozom', 'outer space', 0);
L('cub', 'cup', 0);
L('cumah', 'cloth', 0);
L('curl', 'violence', 0);
L('curs', 'running movement', 0);
L('dab', 'pressing', 0);
L('dal', 'diagonal', 0);
L('dar', 'stripe', 0);
L('darg', 'road', 0);
L('dart', 'dirt', 0);
L('datun', 'same things', 0);
L('delc', 'claim', 0);
L('dend', 'debt', 0);
L('dens', 'dense something', 0);
// L('dent', 'tooth', 1);
L('des', 'ten to the power of', 0);
L('desir', 'desire', 0);
// L('dev', 'god', 1);
L('dif', 'difficult task', 0);
L('din', 'day', 0);
L('dinar', 'money', 0);
L('direct', 'direction', 0);
L('dis', 'separation', 0);
// L('dit', 'digit', 1);
L('doj', 'precipitation', 0);
L('don', 'gift', 0);
L('dun', 'east', 0);
L('dur', 'long event', 0);
L('duv', 'two', 0);
L('fab', 'creation', 0);
L('fac', 'obscenity', 0);
// L('fam', 'family', 1);
L('fan', 'art', 0);
L('farc', 'difference', 0);
L('farh', 'fraction', 0);
L('fas', 'decay', 0);
L('fer', 'iron', 0);
L('ferc', 'frequent event', 0);
L('fest', 'celebration', 0);
// L('fib', 'amphibian', 1);
L('fil', 'file', 0);
L('fin', 'ending', 0);
L('foc', 'fire', 0);
L('fon', 'sound', 0);
L('font', 'front', 0);
L('forl', 'flower', 0);
L('form', 'form', 0);
L('fort', 'strong object', 0);
L('furt', 'fruit', 0);
// L('galc', 'throat', 1);
// L('gan', 'agent', 1);
L('gard', 'scale', 0);
L('garm', 'communication unit', 0);
L('gars', 'grass', 0);
L('gas', 'gas', 0);
L('ger', 'all sides', 0);
// L('germ', 'sibling', 1);
L('gid', 'food', 0);
L('gitar', 'guitar', 0);
L('gov', 'government', 0);
L('gulb', 'deep object', 0);
L('gurn', 'grains', 0);
L('gurp', 'group', 0);
L('habil', 'ability', 0);
L('hacar', 'form', 0);
L('hafer', 'blade', 0);
L('halt', 'high object', 0);
// L('hand', 'hand', 1);
L('har', 'four', 0);
L('harl', 'square', 0);
L('hasal', 'event', 0);
L('haz', 'fun', 0);
L('hazar', 'tree', 0);
L('hazil', 'comedy', 0);
L('herc', 'sphere', 0);
L('hical', 'frame', 0);
L('hild', 'shield', 0);
L('him', 'tool', 0);
// L('hir', 'bird', 1);
// L('hisan', 'horse', 1);
L('hocolat', 'chocolate', 0);
L('hor', 'hour', 0);
L('horc', 'wide object', 0);
L('horz', 'horizontal', 0);
L('hubac', 'opening', 0);
L('hucar', 'thanks', 0);
// L('human', 'human', 1);
L('hun', 'choice', 0);
L('jam', 'tuber', 0);
L('jamad', 'freeze', 0);
L('jamil', 'beauty', 0);
// L('jant', 'animal', 1);
L('jeb', 'pocket', 0);
L('jel', 'yellow', 0);
L('jib', 'task', 0);
L('jor', 'connection', 0);
L('lam', 'intensity', 0);
L('lamp', 'lamp', 0);
// L('lan', 'face', 1);
L('lang', 'long object', 0);
L('lans', 'spear', 0);
L('lant', 'fall', 0);
L('lav', 'washing', 0);
L('lern', 'learning', 0);
L('let', 'little', 0);
L('lev', 'left', 0);
L('lib', 'freedom', 0);
L('lic', 'liquid', 0);
L('lin', 'line', 0);
L('loc', 'location', 0);
L('luc', 'allium', 0);
L('luft', 'air', 0);
L('lum', 'light', 0);
L('lun', 'moon', 0);
L('mahin', 'machine', 0);
L('mal', 'disparagement', 0);
L('malact', 'milk', 0);
L('malc', 'possession', 0);
// L('mam', 'mammal', 1);
L('mand', 'command', 0);
L('mans', 'meat', 0);
// L('map', 'parent', 1);
L('mar', 'ocean', 0);
L('marc', 'mark', 0);
// L('mas', 'male', 1);
// L('mat', 'adult', 1);
L('mater', 'matter', 0);
L('med', 'middle', 0);
// L('meh', 'sheep', 1);
L('memb', 'item', 0);
// L('ment', 'mind', 1);
L('mer', 'measure', 0);
L('mest', 'site', 0);
L('metal', 'metal', 0);
L('metod', 'way', 0);
L('micor', 'tiny object/event', 0);
L('milit', 'military', 0);
// L('min', 'fish', 1);
L('mir', 'world', 0);
// L('mirg', 'deer', 1);
L('miz', 'corn', 0);
L('mob', 'furniture', 0);
L('molot', 'hammer', 0);
L('mont', 'mountain', 0);
L('mort', 'death', 0);
L('mosam', 'weather', 0);
// L('mot', 'fat', 1);
L('motiv', 'target', 0);
L('motor', 'motor', 0);
L('mov', 'movement', 0);
// L('muc', 'mouth', 1);
// L('muh', 'rodent', 1);
L('mulp', 'performance', 0);
L('mult', 'multiplication', 0);
L('mum', 'whatchamacallit', 0);
L('murl', 'wall', 0);
L('music', 'music', 0);
L('nahar', 'source', 0);
L('nam', 'name', 0);
L('narm', 'soft object', 0);
// L('nas', 'nose', 1);
L('nasc', 'birth', 0);
L('nat', 'nature', 0);
// L('natin', 'nation', 0);
L('nen', 'nine', 0);
L('ner', 'black', 0);
L('nest', 'nest', 0);
L('net', 'net', 0);
// L('nic', 'worker', 1);
L('nil', 'blue', 0);
L('nobil', 'noble', 0);
L('nod', 'base', 0);
// L('nog', 'limb', 1);
L('nomer', 'number', 0);
L('nomin', 'noun', 0);
L('nont', 'negation', 0);
L('nort', 'north', 0);
L('nun', 'present', 0);
L('nupt', 'marriage', 0);
L('pacar', 'hold', 0);
// L('pant', 'plant', 1);
L('pap', 'paper', 0);
L('part', 'part', 0);
L('parv', 'truth', 0);
L('pas', 'past', 0);
L('patuln', 'pants', 0);
// L('ped', 'foot', 1);
L('pel', 'interval', 0);
L('pelm', 'pome', 0);
L('pen', 'five', 0);
L('pens', 'stylus', 0);
// L('per', 'person', 1);
L('perm', 'permanent object', 0);
L('pict', 'picture', 0);
L('pig', 'buttock', 0);
L('pin', 'plane', 0);
// L('pir', 'feather', 1);
L('pird', 'object', 0);
L('politic', 'politics', 0);
L('poln', 'full container', 0);
L('polv', 'dust', 0);
L('pors', 'question', 0);
L('porv', 'provision', 0);
L('pos', 'position', 0);
L('post', 'mail', 0);
// L('pub', 'people group', 1);
L('pubilc', 'public good', 0);
L('pus', 'use', 0);
L('rad', 'radio', 0);
L('ran', 'injury', 0);
L('rast', 'increase', 0);
L('raz', 'time', 0);
L('reg', 'rule', 0);
L('rep', 'repetition', 0);
// L('rept', 'reptile', 1);
L('resp', 'responsibility', 0);
L('rest', 'remainder', 0);
L('rezon', 'reason', 0);
L('ris', 'rice', 0);
L('risp', 'reciprocity', 0);
L('rival', 'competition', 0);
L('roc', 'rock', 0);
L('ruch', 'rough object', 0);
L('run', 'red', 0);
L('sac', 'sack', 0);
L('sadits', 'sitting position', 0);
L('safar', 'journey', 0);
L('safid', 'copulation', 0);
L('sah', 'favorableness', 0);
L('sahab', 'companion', 0);
L('sal', 'salt', 0);
L('sald', 'vegetable', 0);
L('salf', 'old object', 0);
L('sanj', 'bread', 0);
L('sart', 'side', 0);
L('sat', 'satisfaction', 0);
L('seb', 'self', 0);
L('secop', 'watcher', 0);
L('sem', 'seven', 0);
L('senor', 'Mr.', 0);
L('sens', 'sense', 0);
L('sent', 'emotion', 0);
L('ser', 'series', 0);
L('serc', 'secret', 0);
// L('ses', 'female', 1);
L('set', 'set', 0);
L('sezon', 'season', 0);
L('sic', 'search', 0);
L('sih', 'health', 0);
L('silc', 'silk', 0);
L('sint', 'science', 0);
L('sir', 'zero', 0);
L('sirc', 'circle', 0);
L('sis', 'six', 0);
// L('sisp', 'insect', 1);
L('sist', 'system', 0);
L('sol', 'Sun', 0);
L('som', 'sleep', 0);
L('subect', 'subject', 0);
L('suc', 'happiness', 0);
L('sucar', 'sugar', 0);
L('sud', 'suddenness', 0);
L('suh', 'meaning', 0);
// L('sulal', 'offspring', 1);
L('sum', 'total', 0);
L('sup', 'readiness', 0);
L('super', 'superlative', 0);
L('supt', 'step', 0);
L('sur', 'something above', 0);
L('surc', 'safety', 0);
L('sust', 'substitute', 0);
L('sut', 'thread', 0);
// L('suvin', 'pig', 1);
L('tabac', 'tobacco', 0);
L('tabul', 'board', 0);
L('tact', 'touch', 0);
L('tajar', 'exchange', 0);
L('tam', 'expensive object', 0);
L('tamat', 'tomato', 0);
L('tar', 'star', 0);
L('tard', 'something late/tardy', 0);
L('tarn', 'change', 0);
L('tat', 'taut', 0);
L('tel', 'far object', 0);
L('temp', 'time', 0);
L('tend', 'tendency', 0);
L('ter', 'three', 0);
L('term', 'hot object', 0);
L('teror', 'fear', 0);
// L('tiger', 'tiger', 1);
L('tigun', 'offer', 0);
L('tint', 'ink', 0);
L('tol', 'heavy object', 0);
L('tols', 'thick object', 0);
L('tom', 'atom', 0);
L('ton', 'much', 0);
L('top', 'top', 0);
L('tub', 'tube', 0);
L('tufan', 'storm', 0);
L('val', 'worthiness', 0);
// L('vam', 'plant organ', 1);
L('vas', 'container', 0);
L('vat', 'water', 0);
L('vav', 'removal', 0);
L('veb', 'World Wide Web', 0);
L('vel', 'fast object', 0);
L('vend', 'sale', 0);
L('vent', 'wind', 0);
L('verb', 'verb', 0);
L('vert', 'vertical', 0);
L('vic', 'vehicle', 0);
L('vid', 'glass', 0);
L('vih', 'excess', 0);
L('vis', 'sight', 0);
L('voc', 'word', 0);
L('voct', 'eight', 0);
L('vod', 'body of water', 0);
L('volm', 'loud object', 0);
// L('vols', 'hair', 1);
L('volt', 'electricity', 0);
// L('vosp', 'arachnid', 1);
// L('vov', 'egg', 1);
L('vuh', 'weapon', 0);
L('van', 'one', 0);
L('zad', 'deficit', 0);
L('zard', 'risk', 0);
L('zup', 'off', 0);


// randomize the root list
Shuffle(Lex_gt, 0, Lex_gt.length-1);
//// for this week only produce "nation" compounds
//Lex_gt[1].root = 'natin';
//Lex_gt[1].gloss = 'nation';

// print out brief instructions
P("To play, simply suggest what this Dublex word might mean. Click the Refresh button on your browser to see a different word.");
// print out initial form information
P('<form action="https://www.surveysolutions.com/cgi-bin/survsole40.pl" method="POST" name="Survey">');
P('<input name="PDCPDCProjectID" type="hidden" value="New Dublex Definition: ' + Lex_gt[0].root + Lex_gt[1].root + '">');
P('<input name="PDCPDCAppVer" type="hidden" value="1.01.L">');
P('<input name="PDCPDCAdminEmlAdr" type="hidden" value="jeffrey@henning.com">');
P('<input name="PDCPDCEmailAddress" type="hidden" value="dbsubmission@langmaker.com">');
P('<input name="Qtitle" type="hidden" value="' + Lex_gt[0].root + Lex_gt[1].root + '">');
P('<input name="Qsubtitle" type="hidden" value="n.">');
P('<input name="Qetymology" type="hidden" value="' + Lex_gt[0].gloss + "+" + Lex_gt[1].gloss + '">');

P('<p><b>' + Lex_gt[0].root + Lex_gt[1].root + '</b> (noun) [From <a href="https://x.htm#' + Lex_gt[0].root + '">' + Lex_gt[0].root + '</a>, "' + Lex_gt[0].gloss + '", and <a href="https://x.htm#' + Lex_gt[1].root + '">' + Lex_gt[1].root + '</a>, "' + Lex_gt[1].gloss + '".]');
P('<br><input name="Qdefinition" type="text" size="50"></p>');

// request contact information
P('<P>Please enter the following contact information so that you may be credited with these terms in the <a href="/db/rsc_dublexcompounds.htm">official dictionary</a> (if you were the first to submit them).</P>');
// ask for e-mail address
P('<input type="text" name="Qemailaddress"> E-mail Address <i>(Optional)</i><BR>');
// ask for initials
P('<input type="text" name="Qsubmitted"> Your First, Middle & Last Initials <i>(Optional)</i><BR>');
// print out submit button
P("<P><INPUT type=submit value='Submit'>"); //&nbsp;<INPUT type=reset value='I Decline'></P>");
// print out close of form
P("<INPUT type=hidden name=PDCPDCThkYouPag value='{HTML}{HEAD}{TITLE}Thanks for Playing!{/TITLE}{/HEAD}{BODY}{H1}The Dublex Game{/H1}{P}Thanks for playing! Why not {a href=https://addnewdublex.htm}play again{/a}?{/P}{SCRIPT src=https://dublexgame2.js}{/SCRIPT}{/P}{/BODY}'");
P("</FORM>");

