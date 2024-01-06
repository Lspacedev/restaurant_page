const home = () => {

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.innerText = 'Welcome To Mint Factory!';
    
    const paraOne = document.createElement('div');
    paraOne.classList.add('paragraph');
    paraOne.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum saepe eos quibusdam laboriosam exercitationem quae, ullam rem et accusantium?';
    
    
    const paraTwo = document.createElement('div');
    paraTwo.classList.add('paragraph');
    paraTwo.innerText = 'Non alias, ab qui officiis reprehenderit dolorem culpa nemo sed?';
    
    const homeTab = document.createElement('div');
    homeTab.classList.add('home');
    homeTab.append(heading);
    homeTab.append(paraOne);
    homeTab.append(paraTwo);
    
    
    
    
    return homeTab
    };
    
    export default home;