const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".loc-display");
const geodisplay = document.querySelector(".geo-display");
const loader = document.querySelector(".loadc");
const details = document.querySelector(".details");


lookupBtn.addEventListener("click", () => {
    loader.style.display = "flex";
    details.style.display = "none"
    axios.get("https://ipapi.co/json/?__cf_chl_jschl_tk__=70e0aee85cbe93b311224bcadcc01b4fc01de0b5-1612280206-0-AXbv2WXo2DVxD7QG9pv72DO0trbcpTpLn1MFE8_wH259kyKdKdFILGQU92EHkyO0emV-A0tuUpi30cehNAmt9N2dhCqZQqxei3MN6GwJMlVp-4KxVJfg5eWHE93Lvt03rAJWVaoNjeMVkIveD0vcSbFwJu0Tq5VPoBoSts6NDKGVbDpN8M0F6xtzeuFXj9OfbPqtCgbvaW-Ta5PicpJLwHHzZSL1pwvqTJAhZteVBqlirBjyn894A93StCBa-V6E1mp-p0KHPGuyQ8KySRjf2mdQMy6ShyANBSbshItxrmM8gdZWj_pFV60MSTQouU25bXzBlJQZuisV9N1WrqDDAEIFutEigb7WuZ5EPllTYJy8S-i49gfKoAmwUq3-qZ5D8A").then((Response) => {
        loader.style.display = "none";
        details.style.display = "block";
        ipDisplay.textContent = `IP: ${Response.data.ip}`;
        locationDisplay.textContent = `Location: ${Response.data.city},${Response.data.region},${Response.data.country_name}`;
        geodisplay.textContent = `Geolocation: ${Response.data.latitude}, ${Response.data.longitude}`;
    });

});