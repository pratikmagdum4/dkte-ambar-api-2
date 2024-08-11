import SponsorListSchema from "../../models/SponsoresList/SponsoresListModel.js";

const ClerkCSE = async (req, res) => {
    try {
        let sponsers = 0;
console.log("inidat",sponsers)
        let result = await SponsorListSchema.find({ dept: "CSE" });
        result.forEach(item => {
            // sponsers += parseInt(item.sponsors);
            sponsers++;
        });
console.log("after", sponsers);

        res.status(200).json({ totalSponsors: sponsers });
        console.log("The total is ", sponsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error fetching sponsors: ", error);
    }
}

export {
    ClerkCSE
}
