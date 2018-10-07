let menuOpen = false;

const toggleMenu = () => {
  const element = $("nav .menu-button .fas");
  if(menuOpen){
    element.removeClass('fa-times');
    element.addClass('fa-bars'); 
  }	else {
    element.removeClass('fa-bars');
    element.addClass('fa-times'); 
  }
  menuOpen = !menuOpen;
}