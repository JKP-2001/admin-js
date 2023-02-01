const tech_club = process.env.TECHNICAL_CLUB.split(",");
const sport_club = process.env.SPORTS_CLUB.split(",");
const cultural_club = process.env.CULTURAL_CLUB.split(",")
const welfare_club = process.env.WELFARE.split(",");


// console.log({sport_club})

module.exports.getClubType = (clubName)=>{
    let club_type = "";
    if(tech_club.includes(clubName)){
        club_type = "technical"
    }
    if(sport_club.includes(clubName)){
        club_type = "sports"
    }
    if(cultural_club.includes(clubName)){
        club_type = "cultural"
    }
    if(welfare_club.includes(clubName)){
        club_type = "welfare"
    }
    
    return club_type;
}