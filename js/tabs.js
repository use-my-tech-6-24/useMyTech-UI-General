
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

        this.tabElement.addEventListener('click', () => this.highlightProfile());
    };

    highlightProfile(){
        const tabs = document.querySelectorAll('.tab');
    }
}

//Assigning tabs to variable

const tabs = document.querySelectorAll('.tab');
console.log(tabs);

tabs.forEach(function(tab){
    return new TabLink(tab);
});
