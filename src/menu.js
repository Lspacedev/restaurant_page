const menu = () => {
    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.innerText = 'Menu';

    const menuOne = document.createElement('div');
    menuOne.classList.add('recipe');
    menuOne.innerText = 'Non alias, ab qui officiis reprehenderit dolorem culpa nemo sed?';


    const menuTwo = document.createElement('div');
    menuTwo.classList.add('recipe');
    menuTwo.innerText = 'Non alias, ab qui officiis reprehenderit dolorem culpa nemo sed?';

    const menuThree = document.createElement('div');
    menuThree.classList.add('recipe');
    menuThree.innerText = 'Non alias, ab qui officiis reprehenderit dolorem culpa nemo sed?';

    const menuFour = document.createElement('div');
    menuFour.classList.add('recipe');
    menuFour.innerText = 'Non alias, ab qui officiis reprehenderit dolorem culpa nemo sed?';

    const menuFive = document.createElement('div');
    menuFive.classList.add('recipe');
    menuFive.innerText = 'Non alias, ab qui officiis reprehenderit dolorem culpa nemo sed?';

    const menuTab = document.createElement('div');
    menuTab.classList.add('menu');
    menuTab.append(heading);
    menuTab.append(menuOne);
    menuTab.append(menuTwo);
    menuTab.append(menuThree);
    menuTab.append(menuFour);
    menuTab.append(menuFive);




return menuTab
};


export default menu;