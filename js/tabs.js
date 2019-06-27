
//Assigns element to its DOM reference and adds relevant data
class TabLink {
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabData = tabElement.dataset.tab;

//Creates conditional statement for All versus other tabs        
        
        if(this.tabData === 'all'){
            this.profiles = document.querySelectorAll('.profile')
        } else {
            this.profiles = document.querySelectorAll(`.profile[data-tab='${this.tabElement.dataset.tab}']`);
        }

//Converts each profile class element into a new TabProfile      

        this.profiles = Array.from(this.profiles).map(function(profile){
            return new TabProfile(profile);
        });

//Adds event listener        

        this.tabElement.addEventListener('click', () => this.selectTab());
    };

//Creates event response function    

    selectTab(){
        const tabs = document.querySelectorAll('.tab');

        Array.from(tabs).forEach(tab => tab.classList.remove ('active-tab'));

        const profiles = document.querySelectorAll('.profile');

        profiles.forEach(profile => profile.style.opacity = '0.4');

        profiles.forEach(profile => profile.classList.remove('animated', 'pulse', 'slower'));

        this.tabElement.classList.add('active-tab');

        this.profiles.forEach(profile => profile.highlightProfile(this.tabData));
    }
}

//Assigns profile element to its DOM reference and creates event response

class TabProfile {
    constructor(profileElement){
        this.profileElement = profileElement;
    }

    highlightProfile(tabLabel){
        this.profileElement.style.opacity = "1.0";
        this.profileElement.classList.add('animated', 'pulse', 'slower');

        if (tabLabel !== 'all') {
            this.profileElement.scrollIntoView({behavior: "smooth", block: "end"});
        } 
    }
}

//Assigns tabs to tabs variables

const tabs = document.querySelectorAll('.tab');
//console.log(tabs);

//Returns new instance of TabLink

tabs.forEach(function(tab){
    return new TabLink(tab);
});
