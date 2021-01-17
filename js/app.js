//parseInt = converting non-integer number to an integer
//parseFloat = converting non-float (without decimal) to float (with decimal)

var app = new Vue({
	el: "#app",
	data: {
		CSU_GPA: 0, // --Mapped To--> (v-model="CSU_GPA")
		SAT_EBRW: 0, // --Mapped To--> (v-model="SAT_EBRW")
		SAT_MATH: 0, // --Mapped To--> (v-model="SAT_MATH")
		SERVICE_AREA: 0, // --Mapped To--> (v-model="SERVICE_AREA")
		EI_STANDARD: 2950, // Minimum standard for CSU eligibility index
		DECISION: null, // Either evaluates to Met, Exceeded, Transcended, or Haven't Met Requirements
		EI: null, // --Mapped To--> {{ EI }}
		COE_EI: null, // --Mapped To--> {{ COE_EI }}
	},
	methods: {
		calculate: function() {
			var AREA_BOOST = 200; //created AREA_BOOST variable that gives 200 points if user is local

			EI = 0; //changes from "null" to 0 when "calculate" button is pressed
			EI += Math.min(4.2, parseFloat(this.CSU_GPA)) * 800; //value must be less than or equal to 4.2
			EI += (Math.min(800, parseInt(this.SAT_EBRW)) + Math.min(800, parseInt(this.SAT_MATH))); //values must be less than or equal to 800
			if (Math.max(0, parseFloat(this.SERVICE_AREA)) > 0 && Math.max(0, parseFloat(this.SERVICE_AREA) <= 20)) {
				EI += AREA_BOOST; //will add 200 points to EI if greater than 0 and less than or equal to 20
			} else {
				EI += 0; //will remain the same if greater than 20
			}
			this.EI = EI; // sets up output in {{ EI }}
			
			COE_EI = 0; //changes from "null" to 0 when "calculate" button is pressed
			COE_EI += Math.min(4.2, parseFloat(this.CSU_GPA)) * 800; //value must be less than or equal to 4.2
			COE_EI += (Math.min(800, parseInt(this.SAT_EBRW)) + Math.min(800, parseInt(this.SAT_MATH))*3)/2; //values must be less than or equal to 800
			if (Math.max(0, parseFloat(this.SERVICE_AREA)) > 0 && Math.max(0, parseFloat(this.SERVICE_AREA) <= 20)) {
				COE_EI += AREA_BOOST; //will add 200 points to COE_EI if greater than 0 and less than or equal to 20
			} else {
				COE_EI += 0; //will remain the same if greater than 20
			}
			this.COE_EI = COE_EI; // sets up output in {{ COE_EI }}		
			
		        DECISION = "";

			if (this.EI >= Math.min(2950, parseInt(this.EI_STANDARD)) && this.EI <= Math.max(3750, parseInt(this.EI_STANDARD))) { // EI ≥ 2950 and EI ≤ 3750 == met requirements
				DECISION = "You've met minimum requirements for undergraduate admission.";
				this.DECISION = DECISION;
			} else if (this.EI >= Math.min(3750, parseInt(this.EI_STANDARD)) && (this.EI <= Math.max(4825, parseInt(this.EI_STANDARD)))) { // EI ≥ 3750 and EI ≤ 4825 == exceeded requirements
				DECISION = "You've exceeded minimum requirements for undergraduate admission.";
				this.DECISION = DECISION;
			} else if (this.EI > Math.min(4825, parseInt(this.EI_STANDARD))) { // EI ≥ 4825 == transcended requirements
				DECISION = "You've transcended minimum requirements for undergraduate admission.";
				this.DECISION = DECISION;
			} else { // EI < 2950 == haven't met requirements
				DECISION = "You've not met minimum requirements for undergraduate admission";
				this.DECISION = DECISION;	
			}
		}
	},
});


function limitKeypress(event, value, maxLength) {
    if (value !== undefined && value.toString().length >== maxLength) {
        event.preventDefault();
    }
};

document.onkeydown = function (e) {
	if ((e.keyCode === 189) || (e.keyCode === 16 || e.keyCode === 187)) {
		event.preventDefault();
	}
};

/* 
|SJSU Normal EI Algorithm:|
1) Add SAT MATH to SAT ENGLISH
2) Multiply CSU GPA to 800
3) Add CSU GPA to SAT 
4) Voila! Your SJSU normal eligibility index score!

|SJSU CSU COE EI Algorithm:|
1) Multiply SAT MATH by 3 
2) Add SAT MATH with SAT-ENGLISH
3) Divide SAT by 2
4) Multiply CSU GPA by 800
4) Add SAT with CSU GPA
5) Voila! Your SJSU eligibility index score!
*/
