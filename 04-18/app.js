console.log('hi');

const left = function(){

};

const right = function(){

};

const top = function(){

};

const down = function(){

};

const greeting = function(){
  console.log('hi');
};
greeting();

const brown = function(){
  let currentTag = document.getElementsByTagName('h1')[0]
  if (currentTag.style.color !=='brown'){
  currentTag.style.color = 'brown';
  }
}

const orange = function(){
  let currentTag = document.getElementsByTagName('p')[0]
  if (currentTag.style.color !=='orange'){
  currentTag.style.color = 'orange';
  }
}

const background = function(){
  let currentTag = document.getElementsByTagName('body')[0];
  if (currentTag.style.backgroundColor !== 'yellow'){
    currentTag.style.backgroundColor = 'yellow';
  }
  else {
    currentTag.style.backgroundColor = 'transparent';
  }

}
