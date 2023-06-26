  /*
  --primary-color: #EEEDE7;
  --secondary-color: rgb(255, 240, 211);
  --accent: #A9B7C2;
  --text-color: black;
  --secondary-background: #4A6F89;
  --secondary-text: white;
  */
  /*
  --primary-color: #0C0E18;        
  --secondary-color: #19202E;     
  --accent: #bdbdbd;               
  --text-color: #FFFFFF;           
  --secondary-background: #070B13; 
  --secondary-text: #BEBEBE;
  */
const root = document.documentElement;
const switcher = document.getElementById("theme-switcher");
const logoPic = document.getElementById("logo-pic");
const navTheme = document.getElementById("nav-theme");
let theme = "default";

navTheme.addEventListener('click',switchTheme);
switcher.addEventListener('click',switchTheme);
function switchTheme() {
  console.log(theme);
  theme = theme === "default" ? "dark" : "default";

  if(theme==="default"){
    root.style.setProperty('--primary-color', 'rgb(223, 201, 175)');
    root.style.setProperty('--secondary-color', 'rgb(255, 240, 211)');
    root.style.setProperty('--accent', '#A9B7C2')
    root.style.setProperty('--text-color' ,'black')
    root.style.setProperty('--secondary-background', '#4A6F89');
    root.style.setProperty('--secondary-text', 'white');
    switcher.src = "./images/dlsu-pic.png";
    logoPic.src = "./images/logo-pic.png";
  }
  else{
    root.style.setProperty('--primary-color', '#0C0E18');
    root.style.setProperty('--secondary-color', '#19202E');
    root.style.setProperty('--accent', '#bdbdbd')
    root.style.setProperty('--text-color' ,'#FFFFFF')
    root.style.setProperty('--secondary-background', '#070B13');
    root.style.setProperty('--secondary-text', '#BEBEBE');
    switcher.src = "./images/logo-pic.png";
    logoPic.src = "./images/dlsu-pic.png";
  }
}