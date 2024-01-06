const contact = () => {

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.innerText = 'Get in touch';

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum saepe eos quibusdam laboriosam exercitationem quae, ullam rem et accusantium?';


    const address = document.createElement('div');
    address.classList.add('address');
    address.innerText = 'Non alias, ab qui officiis reprehenderit dolorem culpa nemo sed?';

    const contactTab = document.createElement('div');
    contactTab.classList.add('contact');
    contactTab.append(heading);
    contactTab.append(info);
    contactTab.append(address);

    return contactTab
 }

export default contact;