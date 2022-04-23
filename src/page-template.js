// creates team
const generateTeam = team => {

    //creates html for managers 
    const generateManagers = manager => {
        return `
<div class="card employee card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card"><i class="fas fa-mug-hot mr-2"
    </div>
</div>
    `;
    }

}
