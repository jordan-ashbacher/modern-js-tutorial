document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('Clicked');

  let val;
  val = e;

  val = e.target;
  val = e.target.id;
  val = e.target.className;


  console.log(val);
}
