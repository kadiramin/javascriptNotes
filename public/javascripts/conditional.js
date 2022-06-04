const answer = window.confirm('Click OK, get true. Click cancel, get false'); 

if (answer === true){
  window.confirm(`You clicked OK !`)
}else {
  window.confirm(`You clicked Cancel!`)
}