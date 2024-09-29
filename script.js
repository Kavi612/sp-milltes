const translateBtn = document.getElementById("translate-btn");
let isEnglish = true;  // Tracks whether the content is in English or Tamil

translateBtn.addEventListener("click", () => {
    if (isEnglish) {
        // Translate to Tamil
        document.getElementById("menu1").innerText = "திங்கள்";
        document.getElementById("item1").innerText = "பணியாரம்";
        document.getElementById("item2").innerText = "சாமை கார பணியாரம்";
        document.getElementById("item3").innerText = "சாமை தோசை";
        document.getElementById("item4").innerText = "பூரி பாயசம்";
        document.getElementById("item5").innerText = "வேர்க்கடலை வெண்ணெய்";
        document.getElementById("item6").innerText = "வாழைப்பூ வடை";
        document.getElementById("item7").innerText = "பால் ஷர்பத்";
        document.getElementById("item8").innerText = "சீவன பொங்கல்";
        
        document.getElementById("menu2").innerText = "செவ்வாய்";
        document.getElementById("item9").innerText = "சாமை இனிப்பு பணியாரம்";
        document.getElementById("item10").innerText = "சோளம் பனிக்கட்டி";
        document.getElementById("item11").innerText = "சோளம் தோசை";
        document.getElementById("item12").innerText = "ராய் பாயசம்";
        document.getElementById("item13").innerText = "பச்சை பட்டாணி சுண்டல்";
        document.getElementById("item14").innerText = "கீரை வடை";
        document.getElementById("item15").innerText = "பால் ஷர்பத்";
        document.getElementById("item16").innerText = "வரகு பொங்கல்";

        document.getElementById("menu3").innerText = "புதன்கிழமை";
        document.getElementById("item17").innerText = "மிலெட் இனிப்பு பணியாரம்";
        document.getElementById("item18").innerText = "ஆல்கலின் நீர்";
        document.getElementById("item19").innerText = "வரகு தோசை";
        document.getElementById("item20").innerText = "சோளம் பாயசம்";
        document.getElementById("item21").innerText = "வேர்க்கடலை வெண்ணெய்";
        document.getElementById("item22").innerText = "கீரை வடை";
        document.getElementById("item23").innerText = "பால் ஷர்பத்";
        document.getElementById("item24").innerText = "கவுணி அரிசி பொங்கல்";

        document.getElementById("menu4").innerText = "வியாழன்";
        document.getElementById("item25").innerText = "ராய் இனிப்பு பணியாரம்";
        document.getElementById("item26").innerText = "சோளம் பனிக்கட்டி";
        document.getElementById("item27").innerText = "சோளம் தோசை";
        document.getElementById("item28").innerText = "அரிசி பாயசம்";
        document.getElementById("item29").innerText = "சண் காண்டு சுண்டல்";
        document.getElementById("item30").innerText = "பால் ஷர்பத்";
        document.getElementById("item31").innerText = "சாமை பொங்கல்";

        document.getElementById("menu5").innerText = "வெள்ளி";
        document.getElementById("item32").innerText = "இனிப்பு பணியாரம்";
        document.getElementById("item33").innerText = "சாமை கார பணியாரம்";
        document.getElementById("item34").innerText = "பணியாரம்";
        document.getElementById("item35").innerText = "சாமை தோசை";
        document.getElementById("item36").innerText = "சோளம் பனிக்கட்டி";
        document.getElementById("item37").innerText = "ராய் பாயசம்";
        document.getElementById("item38").innerText = "பச்சை பருப்பு தோசை";
        document.getElementById("item39").innerText = "பச்சை பட்டாணி சுண்டல்";

        document.getElementById("menu6").innerText = "சனி";
        document.getElementById("item40").innerText = "பணியாரம்";
        document.getElementById("item41").innerText = "சாமை தோசை";
        document.getElementById("item42").innerText = "சோளம் பனிக்கட்டி";
        document.getElementById("item43").innerText = "ராய் பாயசம்";
        document.getElementById("item44").innerText = "பச்சை பருப்பு தோசை";
        document.getElementById("item45").innerText = "பச்சை பட்டாணி சுண்டல்";
        document.getElementById("item46").innerText = "பூரி பாயசம்";
        document.getElementById("item47").innerText = "பால் ஷர்பத்";

        // Change button text to Translate to English
        translateBtn.innerText = "Translate to English";
        isEnglish = false;
    } else {
        // Translate back to English
        document.getElementById("menu1").innerText = "Monday";
        document.getElementById("item1").innerText = "Paniyaram";
        document.getElementById("item2").innerText = "Samai Kara Paniyaram";
        document.getElementById("item3").innerText = "Samai Dosa";
        document.getElementById("item4").innerText = "Poor Pudding";
        document.getElementById("item5").innerText = "Peanut Butter";
        document.getElementById("item6").innerText = "Banana Flower Vada";
        document.getElementById("item7").innerText = "Milk Sherbet";
        document.getElementById("item8").innerText = "Horsetail Pongal";
        
        document.getElementById("menu2").innerText = "Tuesday";
        document.getElementById("item9").innerText = "Samai Sweet Paniyaram";
        document.getElementById("item10").innerText = "Corn Frost";
        document.getElementById("item11").innerText = "Corn Dosa";
        document.getElementById("item12").innerText = "Rye Pudding";
        document.getElementById("item13").innerText = "Green Pea Sundal";
        document.getElementById("item14").innerText = "Spinach Vada";
        document.getElementById("item15").innerText = "Milk Sherbet";
        document.getElementById("item16").innerText = "Varaku Pongal";

        document.getElementById("menu3").innerText = "Wednesday";
        document.getElementById("item17").innerText = "Millet Sweet Paniyaram";
        document.getElementById("item18").innerText = "Alkaline Snow";
        document.getElementById("item19").innerText = "Varaku Dosa";
        document.getElementById("item20").innerText = "Corn Pudding";
        document.getElementById("item21").innerText = "Peanut Butter";
        document.getElementById("item22").innerText = "Spinach Vada";
        document.getElementById("item23").innerText = "Milk Sherbet";
        document.getElementById("item24").innerText = "Gauni Rice Pongal";

        document.getElementById("menu4").innerText = "Thursday";
        document.getElementById("item25").innerText = "Rye Sweet Paniyaram";
        document.getElementById("item26").innerText = "Corn Frost";
        document.getElementById("item27").innerText = "Corn Dosa";
        document.getElementById("item28").innerText = "Rice Pudding";
        document.getElementById("item29").innerText = "Chickpea Sundal";
        document.getElementById("item30").innerText = "Milk Sherbet";
        document.getElementById("item31").innerText = "Samai Pongal";

        document.getElementById("menu5").innerText = "Friday";
        document.getElementById("item32").innerText = "Sweetcorn Paniyaram";
        document.getElementById("item33").innerText = "Samai Kara Paniyaram";
        document.getElementById("item34").innerText = "Paniyaram";
        document.getElementById("item35").innerText = "Samai Dosa";
        document.getElementById("item36").innerText = "Corn Frost";
        document.getElementById("item37").innerText = "Rye Pudding";
        document.getElementById("item38").innerText = "Green Lentil Dosa";
        document.getElementById("item39").innerText = "Green Pea Sundal";

        document.getElementById("menu6").innerText = "Saturday";
        document.getElementById("item40").innerText = "Paniyaram";
        document.getElementById("item41").innerText = "Samai Dosa";
        document.getElementById("item42").innerText = "Corn Frost";
        document.getElementById("item43").innerText = "Rye Pudding";
        document.getElementById("item44").innerText = "Green Lentil Dosa";
        document.getElementById("item45").innerText = "Green Pea Sundal";
        document.getElementById("item46").innerText = "Poor Pudding";
        document.getElementById("item47").innerText = "Milk Sherbet";

        // Change button text to Translate to Tamil
        translateBtn.innerText = "Translate to Tamil";
        isEnglish = true;
    }
});
