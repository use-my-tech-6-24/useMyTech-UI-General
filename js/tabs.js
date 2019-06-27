
class TabLink {
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabData = tabElement.dataset.tab;
        
        if(this.tabData === 'all'){
            this.profiles = document.querySelectorAll('.profile')
        } else {
            this.profiles = document.querySelectorAll(`.profile[data-tab='${this.tabElement.dataset.tab}']`);
        }

        this.profiles = Array.from(this.profiles).map(function(profile){
            return new TabProfile(profile);
        });

        this.tabElement.addEventListener('click', () => this.selectTab());
    };

    selectTab(){
        const tabs = document.querySelectorAll('.tab');

        Array.from(tabs).forEach(tab => tab.classList.remove ('active-tab'));

        const profiles = document.querySelectorAll('.profile');

        profiles.forEach(profile => profile.style.opacity = '0.5');

        this.tabElement.classList.add('active-tab');

        this.profiles.forEach(profile => profile.selectProfile());
    }
}

class TabProfile {
    constructor(profileElement){
        this.profileElement = profileElement; 
    }

    selectProfile(){
        this.profileElement.style.opacity = "1.0";
    }
}

//Assigns tabs to variables below

const tabs = document.querySelectorAll('.tab');
console.log(tabs);

tabs.forEach(function(tab){
    return new TabLink(tab);
});
