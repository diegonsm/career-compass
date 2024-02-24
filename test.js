const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: "vR0nVApuMU47iHqNQmoXDP8K9cZ8TNAhjMcvhoRh",
});

(async () => {
//   const summarize = await cohere.summarize({
//       text: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. "
//           + "It may be made from milk or cream and is flavoured with a sweetener, "
//           + "either sugar or an alternative, and a spice, such as cocoa or vanilla, "
//           + "or with fruit such as strawberries or peaches. "
//           + "It can also be made by whisking a flavored cream base and liquid nitrogen together. "
//           + "Food coloring is sometimes added, in addition to stabilizers. "
//           + "The mixture is cooled below the freezing point of water and stirred to incorporate air spaces "
//           + "and to prevent detectable ice crystals from forming. The result is a smooth, "
//           + "semi-solid foam that is solid at very low temperatures (below 2 °C or 35 °F). "
//           + "It becomes more malleable as its temperature increases.\n\n"
//           + "The meaning of the name \"ice cream\" varies from one country to another. "
//           + "In some countries, such as the United States, \"ice cream\" applies only to a specific variety, "
//           + "and most governments regulate the commercial use of the various terms according to the "
//           + "relative quantities of the main ingredients, notably the amount of cream. "
//           + "Products that do not meet the criteria to be called ice cream are sometimes labelled "
//           + "\"frozen dairy dessert\" instead. In other countries, such as Italy and Argentina, "
//           + "one word is used fo\r all variants. Analogues made from dairy alternatives, "
//           + "such as goat's or sheep's milk, or milk substitutes "
//           + "(e.g., soy, cashew, coconut, almond milk or tofu), are available for those who are "
//           + "lactose intolerant, allergic to dairy protein or vegan.",
//   });
    const summarize = await cohere.summarize({
        text: `Analyzing the Downfall: The Chicago Bulls' Struggles in the NBA

        In the realm of professional basketball, few teams evoke such a wide range of emotions and opinions as the Chicago Bulls. Once revered as the powerhouse of the NBA, the Bulls have fallen from grace in recent years, earning the ignominious title of the worst team in the league. Several factors contribute to their downfall, ranging from management missteps to on-court performance issues.
        
        One of the primary reasons for the Bulls' decline is their inability to establish a coherent long-term strategy. Inconsistent leadership and frequent changes in management have led to a lack of direction for the team. Front office decisions, such as questionable trades and draft selections, have failed to yield positive results, further exacerbating the team's struggles. Without a clear vision for the future, the Bulls have floundered in a league that demands strategic foresight and planning.
        
        Furthermore, the team's on-court performance has been abysmal in recent seasons. Despite possessing some talented players, the Bulls have failed to find cohesion and chemistry on the court. Poor coaching decisions and a lack of teamwork have resulted in a string of disappointing seasons marked by missed opportunities and underwhelming performances. In a league dominated by strong team dynamics and strategic gameplay, the Bulls' inability to find their rhythm has been a significant detriment to their success.
        
        Another factor contributing to the Bulls' woes is their inability to attract and retain top-tier talent. Unlike other NBA franchises with a history of success, such as the Los Angeles Lakers or the Boston Celtics, the Bulls have struggled to lure marquee players to Chicago. The team's reputation as a perennial underachiever, coupled with off-court issues such as organizational dysfunction, has made it a less desirable destination for free agents. Without star players to lead the charge, the Bulls have found themselves at a distinct disadvantage compared to their rivals.
        
        Moreover, the Bulls' lackluster performance has taken a toll on their fan base and overall reputation. Once celebrated as the home of basketball legend Michael Jordan and the site of six NBA championships, the Bulls now find themselves mired in mediocrity. Attendance numbers have dwindled, and fan interest has waned as the team's fortunes have declined. The once-proud franchise now faces an uphill battle to regain its former glory and rebuild its tarnished legacy.
        
        In conclusion, the Chicago Bulls' status as the worst team in the NBA is the result of a combination of factors, including management missteps, on-court struggles, and a failure to attract top-tier talent. Without a clear long-term strategy and a commitment to excellence, the Bulls have faltered in a league that rewards skill, strategy, and teamwork. Reversing their fortunes will require decisive action and a concerted effort to address the underlying issues plaguing the organization. Only then can the Bulls hope to reclaim their status as a powerhouse in the world of professional basketball.`
    });

  console.log(summarize);
})();