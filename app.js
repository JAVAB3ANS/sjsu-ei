//parseInt = converting non-integer number to an integer
//parseFloat = converting non-float (without decimal) to float (with decimal)

var app = new Vue({
	el: '#app',
	data: {
		CSU_GPA: 0, // --Mapped To--> (v-model="CSU_GPA")
		SAT_EBRW: 0, // --Mapped To--> (v-model="SAT_EBRW")
		SAT_MATH: 0, // --Mapped To--> (v-model="SAT_MATH")
		SERVICE_AREA: false, // --Mapped To--> (v-model="SERVICE_AREA")
		EI: null // --Mapped To--> {{ EI }}
	},
	methods: {
		calculate: function() {
			var EI = 0;
			EI += ((parseInt(this.SAT_EBRW) + parseInt(this.SAT_MATH * 3))/2);
			EI += parseFloat(this.CSU_GPA) * 800;
			this.EI = EI;
		},
	},
})

/* |Algorithm:|
1) Multiply SAT-MATH by 3 
2) Add SAT-MATH with SAT-ENGLISH
3) Divide SAT by 2
4) Multiply CSU_GPA by 800
4) Add SAT with CSU_GPA
5) Voila! Your SJSU eligibility index score!
*/
