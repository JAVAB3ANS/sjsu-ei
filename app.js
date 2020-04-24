//parseInt = converting non-integer number to an integer
//parseFloat = converting non-float (without decimal) to float (with decimal)

var app = new Vue({
	el: '#app',
	data: {
		CSU_GPA: 0, // --Mapped To--> (v-model="CSU_GPA")
		SAT_EBRW: 0, // --Mapped To--> (v-model="SAT_EBRW")
		SAT_MATH: 0, // --Mapped To--> (v-model="SAT_MATH")
		SERVICE_AREA: 0, // --Mapped To--> (v-model="SERVICE_AREA")
		STANDARD: 2950, // Minimum standard for CSU eligibility index
		DECISION: true, //either evaluates to Met, Exceeded, Transcended, or Haven't Met Requirements
		EI: null // --Mapped To--> {{ EI }}
	},
	methods: {
		calculate: function() {
			var EI = 0; //changes from "null" to 0 when "calculate" button is pressed
			console.log("EI at initialization: " + EI); //console log at init
			EI += Math.min(4.2, parseFloat(this.CSU_GPA)) * 800; //value must be less than or equal to 4.2
			EI += (Math.min(800, parseInt(this.SAT_EBRW)) + Math.min(800, parseInt(this.SAT_MATH)) * 3)/2; //values must be less than or equal to 800
			if (Math.max(0, parseFloat(this.SERVICE_AREA)) > 0 && Math.max(0, parseFloat(this.SERVICE_AREA) <= 20)) {
				EI += 200; //will add 200 points to EI if greater than 0 and less than or equal to 20
			} else {
				EI = EI; //will remain the same if greater than 20
			}
			this.EI = EI; // renders output in {{ EI }}
			var DECISION = true; 
			while (DECISION == true) {
				if (this.EI >= Math.min(2950, parseInt(this.STANDARD)) && this.EI <= Math.max(3750, parseInt(this.STANDARD))) {
					DECISION = "You've met minimum requirements for undergraduate admission.";
					this.DECISION = DECISION;
					console.log(DECISION);
				} else if (this.EI >= Math.min(3750, parseInt(this.STANDARD)) && (this.EI <= Math.max(4825, parseInt(this.STANDARD)))) {
					DECISION = "You've exceeded minimum requirements for undergraduate admission.";
					this.DECISION = DECISION;
					console.log(DECISION);
				} else if (this.EI > Math.min(4825, parseInt(this.STANDARD))) {
					DECISION = "You've transcended minimum requirements for undergraduate admission.";
					this.DECISION = DECISION;
					console.log(DECISION);
				} else {
					DECISION = "You've not met minimum requirements for undergraduate admission";
					this.DECISION = DECISION;
					console.log(DECISION);			
				}
			}
			console.log("Your SJSU EI is: " + EI); //console log at finish
		},
	},
})

/* |SJSU CSU Algorithm:|
1) Multiply SAT-MATH by 3 
2) Add SAT-MATH with SAT-ENGLISH
3) Divide SAT by 2
4) Multiply CSU_GPA by 800
4) Add SAT with CSU_GPA
5) Voila! Your SJSU eligibility index score!
*/