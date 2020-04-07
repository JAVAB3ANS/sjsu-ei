//parseInt = converting non-integer number to an integer
//parseFloat = converting non-float (without decimal) to float (with decimal)

var app = new Vue({
	el: '#app',
	data: {
		CSU_GPA: 0, // --Mapped To--> (v-model="CSU_GPA")
		SAT_EBRW: 0, // --Mapped To--> (v-model="SAT_EBRW")
		SAT_MATH: 0, // --Mapped To--> (v-model="SAT_MATH")
		SAT: 0,
		// SERVICE_AREA: false, --Mapped To--> (v-model="SERVICE_AREA")
		EI: null // --Mapped To--> {{ EI }}
	},
	methods: {
		calculate: function() {
			var EI = 0;
			var SAT = 0;
			CSU_GPA = parseFloat(this.CSU_GPA) * parseInt(800);
			SAT_MATH = parseInt(this.SAT_MATH) * parseInt(3);
			SAT = parseInt(this.SAT_MATH) + parseInt(this.SAT_EBRW);
			SAT = parseInt(SAT)/parseInt(2);
			EI = parseInt(this.SAT) + parseFloat(this.CSU_GPA);
			this.EI = parseInt(Math.floor(EI));
		},
	},
})

/* |Algorithm:|
1) Weighted GPA is multiplied by 800 
2) Multiply SAT-MATH by 3 
3) Add SAT-MATH with SAT-ENGLISH
4) Divide SAT total score by 2
5) Add SAT total score with CSU-weighted-GPA
6) Voila! Your SJSU eligibility index score!
*/
