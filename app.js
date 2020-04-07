//parseInt = converting non-integer number to an integer
//parseFloat = converting non-float (without decimal) to float (with decimal)
var app = new Vue({
	el: '#app',
	data: {
		W_CSU_GPA: 0, // --Mapped To--> (v-model="W_CSU_GPA")
		SAT_EBRW: 0, // --Mapped To--> (v-model="SAT_EBRW")
		SAT_MATH: 0, // --Mapped To--> (v-model="SAT_MATH")
		SAT: 0, 
		EI: null // --Mapped To--> {{ EI }}
		//Service_Area: false, --Mapped To--> (v-model="Service_Area")
	},
	methods: {
		calculate: function() {
			var EI = 0;
			W_CSU_GPA = parseInt(this.W_CSU_GPA * 800);
			SAT_MATH = parseInt(this.SAT_MATH * 3);
			SAT = parseInt(this.SAT_MATH + this.SAT_EBRW)/2;
			EI += parseInt(this.SAT + this.W_CSU_GPA);
			this.EI = Math.floor(EI);
		},
	},
})
/* |Theoretical equation as expressed in Python|.

GPA = float(input("Enter Weighted GPA: ")); --Mapped To--> (v-model="W_CSU_GPA")
Location = input("Do you live near SJSU? (yes/no): "); --Mapped To--> (v-model="Service_Area")
SAT_Math = int(input("Enter SAT Math score: ")); --Mapped To--> (v-model="SAT_MATH")
SAT_EBRW = int(input("Enter SAT English score: ")); --Mapped To--> (v-model="SAT_EBRW")
COE_TotalScore = int(((SAT_Math * 3) + (SAT_EBRW))/2);

if (Location == "yes"):
  GPA = float(GPA + 0.25);
elif (Location == "no"):
  GPA = GPA;
else:
  GPA = GPA;

COE_ImpactionIndex = int(COE_TotalScore + (float(GPA) * 800));
print("Eligbility Index: " + str(COE_ImpactionIndex));

*/

/* |Algorithm:|
1) Weighted GPA is multiplied by 800 
2) Multiply SAT-MATH by 3 and add it with SAT-ENGLISH
3) Add SAT score with (GPA x 800)
4) Voila! Your SJSU eligibility index score!
*/
