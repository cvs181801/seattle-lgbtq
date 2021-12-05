const daysInMonth = document.querySelectorAll('.days');
const resourcesList = document.querySelector('.resourcesList');
const wheelchairBtn = document.querySelector('.button__wheelchair');
const viewAllBtn = document.querySelector('.button__all');

console.log(daysInMonth);

const todaysDate = new Date();

todaysDate.toString();

console.log(todaysDate);

//console.log (`the string 6 ${todaysDate.includes('6') ? 'is' : 'is not'} included in the string`)

console.log(Object.values(todaysDate));



// BIG O' ARRAY :D
const resources = [
    {
        "company": "Bang Hair",
        "address": "500 Yale AVE N, Southlake Seattle",
        "address2": "723 East Pike Street, Capitol Hill, Seattle",
        "address3": "2505 2nd Ave, Belltown Seattle",
        "address4": "1207 East Pine Street, Capitol Hill Seattle",
        "type": "Hair Salon",
        "lgbtqFriendly": true,
        "wheelchairAccess": true,
        "description": "A gender-affirming salon with locations around the city and stylists who get that you want a turquoise mullet, not an aqua shag."
    },
    {
        "company": "Cupcake Royale",
        "address": "1424 11th Ave, Seattle",
        "address2": "106 Pine St, Seattle",
        "address3": "1101 34th Ave, Seattle",
        "address4": "4556 California Ave SW, Seattle",
        "type": "Bakery",
        "lgbtqFriendly": true,
        "wheelchairAccess": true,
        "description": "Seattle’s LGBTQ-owned cupcakery serves The Gay (a cute confetti cupcake) each year in June—because an aversion to Pride Month displays in big box stores shouldn’t preclude anyone from tasting the rainbow."
    },
    {
        "company": "Doll Parts Collective",
        "address": "4448 California Ave SW, Seattle",
        "type": "Clothing Store",
        "lgbtqFriendly": false,
        "wheelchairAccess": true,
        "description": "Cofounder Alyssa Kaliszewski’s passion for sourcing gender- and size-inclusive vintage clothing colors the selection at this West Seattle shop: “I’m plus-size, and also bisexual, and wanted to find a way to offer vintage clothing for folks that are like me,” Kaliszewski says. “Folks who don’t necessarily follow the normal gender prescription of what people should wear.”"
    },
    {
        "company": "Repair Revolution",
        "address": "2437 6th Ave S, Seattle",
        "type": "Auto Shop",
        "lgbtqFriendly": true,
        "wheelchairAccess": true,
        "description": "This isn’t your typical auto shop. With a mostly queer, trans, or female staff, Repair Revolution and founder Eli Allison are combatting the boys club of auto repair. The car maintenance shop offers diagnosis, service, and repair on all makes and models, and holds workshops on car-owning basics. Repair Revolution is dedicated to empowering customers and revolutionizing the automotive industry through radical transparency. Our mission is to build strong, long-lasting relationships with our customers. They believe the most important aspect of our business is trust."
    },
    {
        "company": "Dough Joy",
        "address": "5401 17TH AVE NW, Seattle",
        "type": "Vegan doughnut shop",
        "lgbtqFriendly": true,
        "wheelchairAccess": true,
        "description": "Seattle vegans have lost their collective mind for this new food truck, which parks outside the Ballard outpost of Cycle Dogs to sling photogenic doughnuts in flavors like french toast and rose petal. Owners Christopher Ballard and Sean Willis, also the couple behind plant-based magazine Outbound Herbivore, are equally sweet."
    },
    {
        "company": "Rudy's Barbershop",
        "address": "4903 Rainier Ave S, Seattle",
        "address2": "4480 Fauntleroy Way SW, Seattle",
        "address3": "614 E Pine St, Seattle",
        "type": "Barbershop/Salon",
        "lgbtqFriendly": false,
        "wheelchairAccess": false,
        "description": "Seattle’s legendary queer-owned barbershop, founded in 1993 by David Petersen and Wade Weigel, now boasts 19 locations—including one in Manhattan!—where you can get a beer with your buzz cut (in normal times, anyway)."
    },
    {
        "company": "Sugarpill",
        "address": "900 E Pine St, Seattle",
        "type": "Market/Store",
        "lgbtqFriendly": true,
        "wheelchairAccess": false,
        "description": "Owner Karyn Schwartz told Capitol Hill Seattle Blog in 2013 that the AIDS crisis, and the death of a friend, sparked her interest in holistic healing. A trip to Sugarpill, with its selection of natural remedies and organic treats, feels restorative. This has Apothecary offering culinary & medicinal herbs, spices & artisanal foods, plus body & home products"
    },
    {
        "company": "TomboyX",
        "address": "online",
        "type": "Clothing Store",
        "lgbtqFriendly": true,
        "wheelchairAccess": false,
        "description": "Founded by married couple Fran Dunaway and Naomi Gonzalez to address a lack of gender-neutral underthings, TomboyX has since morphed into a worldwide outfit with cute, comfortable cuts for everybody."
    },
    {
        "company": "Saltstone Ceramics",
        "address": "2206 N 45th St, Seattle",
        "type": "Ceramics and Pottery Store",
        "lgbtqFriendly": true,
        "wheelchairAccess": false,
        "description": "A ceramics studio works double duty as a shop of striking-but-useful planters, mugs, and glassware from artists in Seattle and beyond."
    },
    {
        "company": "Far Out Seattle",
        "address": "",
        "type": "LGBTQ based travel agency.",
        "lgbtqFriendly": true,
        "wheelchairAccess": false,
        "description": "Travel agency LGBTQ based in Seattle. Helps you find places to visit in Seattle such as restaurants, landmarks, entertainment, etc."
    }
]

viewAllBtn.addEventListener("click", function(event) {
    event.preventDefault();
    resourcesList.innerText = '';
    resources.forEach(object => {
        let newResource = document.createElement('div');
        resourcesList.append(newResource);
        newResource.style.border = "1px solid rgb(17, 63, 82)";
        newResource.style.padding = "1em";
        let newCompanyName = document.createElement('p');
        let newAddress = document.createElement('p');
        let newType = document.createElement('p');
        let newDescription = document.createElement('p');
        newCompanyName.innerText = `${object.company}`
        newAddress.innerText = `${object.address}`
        newType.innerText = `${object.type}`
        newDescription.innerText = `${object.description}`
        newResource.append(newCompanyName);
        newResource.append(newAddress);
        newResource.append(newType);
        newResource.append(newDescription);
    })
})

const newArray = resources.filter((object) => {
    return object.wheelchairAccess == true;
 })

wheelchairBtn.addEventListener("click", function(event) {
    event.preventDefault();
    resourcesList.innerText = '';
    // resourceTitle.innerText = '';
    // let resourceTitle = document.createElement('h1');
    // resourceTitle.innerText = `Wheelchair Accessible Resources`;
    // resourcesList.append(resourceTitle);
    newArray.forEach(object => {
        let newResource = document.createElement('div');
        resourcesList.append(newResource);
        newResource.style.border = "1px solid rgb(17, 63, 82)";
        newResource.style.padding = "1em";
        let newCompanyName = document.createElement('p');
        let newAddress = document.createElement('p');
        let newType = document.createElement('p');
        let newDescription = document.createElement('p');
        newCompanyName.innerText = `${object.company}`
        newAddress.innerText = `${object.address}`
        newType.innerText = `${object.type}`
        newDescription.innerText = `${object.description}`
        newResource.append(newCompanyName);
        newResource.append(newAddress);
        newResource.append(newType);
        newResource.append(newDescription);
    })

})